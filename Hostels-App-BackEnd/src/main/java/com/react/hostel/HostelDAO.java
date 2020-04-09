package com.react.hostel;

import java.util.List;

import org.bson.Document;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;

@SuppressWarnings("deprecation")
public class HostelDAO {

	//Login and SignUp
	
	public String insertUser(User user) {

		MongoTemplate mt = getConnection();

		Query nameQuery = new Query();
		nameQuery.addCriteria(Criteria.where("userName").is(user.userName));

		if (mt.exists(nameQuery, User.class, "users"))
			return "UserName Already Taken";

		Query emailQuery = new Query();
		emailQuery.addCriteria(Criteria.where("email").is(user.email));

		if (mt.exists(emailQuery, User.class, "users"))
			return "A person can have only one account";

		mt.insert(user, "users");
		return "success";
	}
	
	public String loginUser(String name, String password) {

		MongoTemplate mt = getConnection();

		Query query = new Query();
		query.addCriteria(Criteria.where("userName").is(name).and("password").is(password));

		boolean userExists = mt.exists(query, User.class, "users");
		User user = mt.findOne(query, User.class, "users");

		if (userExists) {
			return user.type;
		} else {
			return "failed";
		}
	}

	//Admin Portal

	public long userCount() {

		MongoTemplate mt = getConnection();

		MongoCollection<Document> users = mt.getCollection("users");
		return users.countDocuments();
	}
	
	public int ownerCount() {

		MongoTemplate mt = getConnection();
		
		Query query = new Query();
		query.addCriteria(Criteria.where("type").is("Hostel Owner"));
		
		List<User> owners = mt.find(query, User.class,"users");
		int count = owners.size();

		return count;
	}
	
	public int customerCount() {

		MongoTemplate mt = getConnection();
		
		Query query = new Query();
		query.addCriteria(Criteria.where("type").is("Customer"));
		
		List<User> customers = mt.find(query, User.class,"users");
		int count = customers.size();

		return count;
	}

	
	//Reviews 
	
	public List<Review> fetchReview(String hName) {

		MongoTemplate mt = getConnection();

		Query query = new Query();
		query.addCriteria(Criteria.where("hostelName").is(hName));
		
		List<Review> reviews = mt.find(query, Review.class, "reviews");

		return reviews;
	}

	public List<Review> fetchAllReviews() {

		MongoTemplate mt = getConnection();

		List<Review> reviews = mt.findAll(Review.class, "reviews");
		return reviews;
	}

	public void insertReview(Review review) {

		MongoTemplate mt = getConnection();
		mt.insert(review, "reviews");
	}

	//Bookings
	
	public List<Booking> getBookedHostels(String uName) {
		
		MongoTemplate mt = getConnection();

		Query query = new Query();
		query.addCriteria(Criteria.where("userName").is(uName));
		
		List<Booking> bookings = mt.find(query, Booking.class, "bookings");

		return bookings;
	}

	public List<Booking> getBookedCustomers(String hName) {

		MongoTemplate mt = getConnection();

		Query query = new Query();
		query.addCriteria(Criteria.where("hostelName").is(hName));
		
		List<Booking> bookings = mt.find(query, Booking.class, "bookings");
		return bookings;
	}
	

	public String bookHostel(Booking booking) {

		MongoTemplate mt = getConnection();
		
		Query query = new Query();
		query.addCriteria(Criteria.where("hostelName").is(booking.hostelName));

		Hostel hostel = mt.findOne(query, Hostel.class, "hostels");
		
		if (hostel.bedsAvailable < booking.bedsBooked)
			return "Shortage of Beds, Sorry for the inconvenience";
		else {
	
			Update update = new Update();
			update.set("bedsAvailable", hostel.bedsAvailable - booking.bedsBooked);
			
			mt.updateFirst(query, update, Hostel.class,"hostels");
			mt.insert(booking,"bookings");
			
			return "Booking Successful, Happy Stay";
		}
	}

	
	//Cities
	
	public List<City> fetchAllCities() {

		MongoTemplate mt = getConnection();

		List<City> cities = mt.findAll(City.class, "cities");
		
		return cities;
	}

	//Hostels
	
	public List<Hostel> getHostels(String cName) {
		
		MongoTemplate mt = getConnection();

		Query query = new Query();
		query.addCriteria(Criteria.where("cityName").is(cName));
		
		List<Hostel> hostels = mt.find(query, Hostel.class, "hostels");
		
		return hostels;
	}

	public List<Hostel> fetchAllHostels() {

		MongoTemplate mt = getConnection();

		List<Hostel> hostels = mt.findAll(Hostel.class, "hostels");
		
		return hostels;
	}
	
	//MongoDb Connection
	
	private MongoTemplate getConnection() {

		MongoDbFactory df = new SimpleMongoDbFactory(new MongoClient("localhost"), "hostelapp");
		MongoTemplate mt = new MongoTemplate(df);

		return mt;
	}
public String addingHostel(Hostel hostel) {
		
		MongoTemplate mt = getConnection();
		
		mt.insert(hostel,"requestHostel");
		
		return "success";
	}

public List<Booking> getallBookings() {
	
	MongoTemplate mt = getConnection();

	List<Booking> bookings = mt.findAll(Booking.class, "bookings");
	
	return bookings;
}

public List<User> getallUsers() {
	MongoTemplate mt = getConnection();

	List<User> users = mt.findAll(User.class, "users");
	
	return users;
}

public String addCity(City obj) {
	MongoTemplate mt = getConnection();
	mt.insert(obj,"city");
	return "success";
}

public List<City> getAllcity() {
	MongoTemplate mt = getConnection();
	List<City> cities = mt.findAll(City.class , "city");
	return cities;
}

public List<Hostel> getallRequests() {
	MongoTemplate mt = getConnection();
	List<Hostel> requests = mt.findAll(Hostel.class , "requestHostel"); 
	return requests;
}

public String rejectingRequest(Hostel obj) {
	MongoTemplate mt = getConnection();
	Query query = new Query();
	query.addCriteria(Criteria.where("hostelName").is(obj.getHostelName()));
	mt.remove(query, Hostel.class,"requestHostel");
	return "rejected";
}

public String acceptingRequest(Hostel obj) {
	MongoTemplate mt = getConnection();
	Query query = new Query();
	query.addCriteria(Criteria.where("hostelName").is(obj.getHostelName()));
	mt.remove(query, Hostel.class,"requestHostel");
	mt.insert(obj,"hostels");
	return "accepted";
}

	
	
}
