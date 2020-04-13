package com.react.hostel;

import java.util.List;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*")
@SpringBootApplication
@RestController
public class HostelAppReactApplication {

	private HostelDAO hd = new HostelDAO();

	public static void main(String[] args) {
		SpringApplication.run(HostelAppReactApplication.class, args);
	}

	@RequestMapping("/")
	String homepage() {
		return "Spring Boot with Mongodb";
	}

	// Login and SignUp

	@PostMapping("/adduser")
	String userCreation(@RequestBody User user) {

		System.out.println(user);
		return hd.insertUser(user);
	}

	@PostMapping("/login")
	String userLogin(@RequestBody Login loginData) {

		return hd.loginUser(loginData.userName, loginData.password);
	}

	// Reviews

	@PostMapping("/givereview")
	String addingReview(@RequestBody Review review) {
		hd.insertReview(review);
		return "Thanks for your valuable Response";
	}

	@RequestMapping("/reviews/{hostelname}")
	@ResponseBody
	List<Review> getHotelReview(@PathVariable("hostelname") String hName) {

		return hd.fetchReview(hName);

	}

	@RequestMapping("/allreviews")
	List<Review> getReviews() {
		return hd.fetchAllReviews();
	}

	//Admin Portal

	@RequestMapping("/displayusercount")
	long userCount() {
		return (hd.userCount()-1);
	}
	
	@RequestMapping("/displayownercount")
	int ownerCount() {
		return hd.ownerCount();
	}
	
	@RequestMapping("/displaycustomercount")
	int customerCount() {
		return hd.customerCount();
	}

	// Bookings

	@RequestMapping("/{userName}/mybookings")
	@ResponseBody
	List<Booking> getBookings(@PathVariable("userName") String uName) {

		return hd.getBookedHostels(uName);
	}

	@RequestMapping("/{hostelName}/bookings")
	@ResponseBody
	List<Booking> getCustomers(@PathVariable("hostelName") String hName) {

		return hd.getBookedCustomers(hName);
	}
	
	@PostMapping("/booking")
	String hostelBooking(@RequestBody Booking booking) {

		return hd.bookHostel(booking);
		//return "commented";
	}

	// Cities

	@RequestMapping("/cities")
	List<City> getCities() {
		return hd.fetchAllCities();
	}

	

	@RequestMapping("/{cityName}/hostels")
	@ResponseBody
	List<Hostel> getHostels(@PathVariable("cityName") String cName) {

		return hd.getHostels(cName);

	}

	@RequestMapping("/hostels")
	List<Hostel> getAllHostels() {
		return hd.fetchAllHostels();
	}
	@PostMapping("/requestHostel")
	String addHostel(@RequestBody Hostel hostel) {

		return hd.addingHostel(hostel);
	}
	@RequestMapping("/hostels/getAllBookings")
	public List<Booking> getAllBookings(){
		return hd.getallBookings();
	}
	@RequestMapping("/hostels/getAllUsers")
	public List<User> getAllUsers(){
		return hd.getallUsers();
	}
    @PostMapping("/addingCities")
    public String addCity(@RequestBody City obj) {
    	return hd.addCity(obj);
    }
    @RequestMapping("/getAllCities")
    public List<City> getAllCity(){
    	return hd.getAllcity();
    }
    @RequestMapping("/getAllRequests")
    public List<Hostel> getAllRequests(){
    	return hd.getallRequests();
    }
    @PostMapping("/RejectRequest")
    public String rejectingRequest(@RequestBody Hostel obj) {
    	return hd.rejectingRequest(obj);
    }
    @PostMapping("/AcceptRequest")
    public String acceptingRequest(@RequestBody Hostel obj) {
    	return hd.acceptingRequest(obj);
    }
    @PostMapping("/bookingConfirmation")
    public String BookingConfirmation(@RequestBody Booking booking) {
    	return hd.confirmBooking(booking);
    } 
    @RequestMapping("/AcceptConfirm/{username}")
    public String BookingConfirmation(@PathVariable("username") String username) {
          return hd.acceptConfirm(username);    	
    }
    @RequestMapping("/RejectConfirm/{username}")
    public String BookingRejectConfirmation(@PathVariable("username") String username) {
          return hd.rejectConfirm(username);    	
    }
    @RequestMapping("/displayBookingsCount")
    public long displaybookings() {
    	return hd.displayBookingsCount();
    }
    @RequestMapping("/displayHostelsCount")
    public long displayHostels() {
    	return hd.displayHostelsCount();
    }
    @RequestMapping("/displayCitiesCount")
    public long displayCities() {
    	return hd.displayCityCount();
    }
    @RequestMapping("/getBooking/{username}")
    public List<Booking> getbook(@PathVariable("username") String username){
    	return hd.getBooking(username);
    }
}
