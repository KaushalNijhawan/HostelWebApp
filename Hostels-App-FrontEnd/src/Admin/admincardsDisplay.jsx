import React from 'react';
import './admin.css';
import Axios from 'axios';
import {Link} from "react-router-dom";
class AdminCardsDisplay extends React.Component{
  constructor(props){
    super(props);
   
    this.state={
      userCount:0,
      bookingsCount:0,
      hostelsCount:0,
      citiesCount:0,
      name:this.props.name,
      logged:this.props.logging
    }
  }
  componentDidMount(){
    Axios.get('http://localhost:8080/displayusercount')
    .then(res => {
        this.setState({
            userCount: res.data

        })
    })
    Axios.get('http://localhost:8080/displayBookingsCount')
    .then(res => {
        this.setState({
              bookingsCount: res.data

        })
    })
    Axios.get('http://localhost:8080/displayHostelsCount')
    .then(res => {
        this.setState({
              hostelsCount: res.data

        })
    })
    Axios.get('http://localhost:8080/displayCitiesCount')
    .then(res => {
        this.setState({
              citiesCount: res.data

        })
    })
console.log(this.state.name);
console.log(this.state.logged);

  }
   render(){
       return(
<div class="container">
    <div class="row">
    <div class="col-md-3">
    <Link to ={{
      pathname:"/admin/showUsers",
      state:{
        name:this.state.name,
        logged:this.state.logged
      }
    }}style={{color:"white"}} >
      <div class="card-counter primary">
      
      <i class="fa fa-user" ></i>
       <span class="count-numbers">{this.state.userCount}</span>
        <span class="count-name">Users Registered</span>
      </div>
      </Link>
    </div>

    <div class="col-md-3">
    <Link to={{
      pathname:"/admin/showbooking",
      state:{
        name:this.state.name,
        logged:this.state.logged 
      }
    }} style={{color:"white"}} >
      <div class="card-counter danger">
      
      <i class="fa fa-h-square" ></i>
       <span class="count-numbers">{this.state.bookingsCount}</span>
        <span class="count-name">Bookings Made</span>
        </div>
        </Link>
    </div>

    <div class="col-md-3">
    <a style={{color:"white"}} href ="/">
      <div class="card-counter success">
      
        <i class="fa fa-database"></i>
       <span class="count-numbers">{this.state.hostelsCount}</span>
        <span class="count-name">Hostels Count</span>
      
      </div>
      </a>
    </div>

    <div class="col-md-3">
    <a style={{color:"white"}} href ="/displayDest">
      <div class="card-counter info">
        

        <i class="fa fa-users"></i>
       <span class="count-numbers">{this.state.citiesCount}</span>
        <span class="count-name">Cities</span>
        
      </div>
      </a>
    </div>
    <div class="col-md-4">
    <a style={{color:"white"}} href ="/admin/addCities">
      <div class="card-counter bg-dark">
        

        <i class="fa fa-users"></i>
        <span class="count-name">ADD Cities</span>
        
      </div>
      </a>
    </div>
    
    <div class="col-md-4"></div>
    
    <div class="col-md-4">
    <Link to={{
      pathname:"/admin/showingRequests",
      state:{
        name:this.state.name,
        logged:this.state.logged
      }
    }}style={{color:"white"}} >
      <div class="card-counter bg-warning">
        

        <i class="fa fa-users"></i>
        <span class="count-name" style={{color:"#fafafa"}}>Hostels Owner Request</span>
        
      </div>
      </Link>
    </div>


  </div>
</div>

       );
   }
}
export default AdminCardsDisplay;