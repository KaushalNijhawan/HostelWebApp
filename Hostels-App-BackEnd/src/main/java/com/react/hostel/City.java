package com.react.hostel;

public class City {

	String cityName;
	String imgUrl;
    String cityDescription;
	public City(String cityName, String imgUrl, String cityDescription) {
		super();
		this.cityName = cityName;
		this.imgUrl = imgUrl;
		this.cityDescription = cityDescription;
	}

	public String getCityDescription() {
		return cityDescription;
	}

	public void setCityDescription(String cityDescription) {
		this.cityDescription = cityDescription;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	

	

	public City() {
		super();
	}

}
