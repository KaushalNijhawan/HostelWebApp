import React from 'react';
import './admin.css';
class AdminCardsDisplay extends React.Component{
   render(){
       return(
<div class="container">
    <div class="row">
    <div class="col-md-3">
    <a style={{color:"white"}} href ="/admin/showUsers">
      <div class="card-counter primary">
      
      <i class="fa fa-user" ></i>
        <span class="count-numbers">12</span>
        <span class="count-name">Users Registered</span>
      </div>
      </a>
    </div>

    <div class="col-md-3">
    <a style={{color:"white"}} href ="/admin/showbooking">
      <div class="card-counter danger">
      
      <i class="fa fa-h-square" ></i>
        <span class="count-numbers">599</span>
        <span class="count-name">Bookings Made</span>
        </div>
        </a>
    </div>

    <div class="col-md-3">
    <a style={{color:"white"}} href ="/">
      <div class="card-counter success">
      
        <i class="fa fa-database"></i>
        <span class="count-numbers">6875</span>
        <span class="count-name">Hostels Count</span>
      
      </div>
      </a>
    </div>

    <div class="col-md-3">
    <a style={{color:"white"}} href ="/displayDest">
      <div class="card-counter info">
        

        <i class="fa fa-users"></i>
        <span class="count-numbers">3</span>
        <span class="count-name">Cities</span>
        
      </div>
      </a>
    </div>
    <div class="col-md-4">
    <a style={{color:"white"}} href ="/admin/addCities">
      <div class="card-counter bg-dark">
        

        <i class="fa fa-users"></i>
        <span class="count-numbers">3</span>
        <span class="count-name">ADD Cities</span>
        
      </div>
      </a>
    </div>
    
    <div class="col-md-4"></div>
    
    <div class="col-md-4">
    <a style={{color:"white"}} href ="/admin/showingRequests">
      <div class="card-counter bg-warning">
        

        <i class="fa fa-users"></i>
        <span class="count-numbers">3</span>
        <span class="count-name">Hostels Owner Request</span>
        
      </div>
      </a>
    </div>


  </div>
</div>

       );
   }
}
export default AdminCardsDisplay;