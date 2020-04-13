import React from "react";
import NavDisplay from "./navbar";
import LoggedInNabar from "./LoggedInNavbar";
import Axios from "axios";

import AlertMessage from "../Alert/Alert";

class GetBookings extends React.Component{
    constructor(props){
        super(props);
       
        this.state={
            logged:this.props.location.state?.logged,
            name:this.props.location.state?.name,
            booking:[],
            empty:false,
            customerLogged : this.props.location.state?.customerLogged,
            ownerLogged:this.props.location.state?.ownerLogged
        }
    }
    componentDidMount=()=>{
        Axios.get("http://localhost:8080/getBooking/"+this.state.name )
        .then(res=>{
           this.setState({ booking: res.data});
         })
         if(this.state.booking.length === 0){
             this.setState({empty:true});
         }
        
    }
    render(){
        
        const data = this.state.booking.map((host) => (
            <div class="card" style={{width: "18rem" , marginLeft :"20px"}}>
  <div class="card-header">
    {host.hostelName}
  </div>
  <ul class="list-group list-group-flush">
        <li class="list-group-item"><span class ="col-sm-10">Rent :</span><span class="col-sm-2">{host.rent}</span></li>
        <li class="list-group-item"><span class ="col-sm-10">StartDate :</span><span class="col-sm-2">{host.fromDate}</span></li>
        <li class="list-group-item"><span class ="col-sm-10">EndDate :</span><span class="col-sm-2">{host.toDate}</span></li>
        <li class="list-group-item"><span class ="col-sm-10">TotalBeds :</span><span class="col-sm-2">{host.bedsBooked}</span></li>
  </ul>
</div>
        ));
        return(<div>
            {this.state.logged===true ? <LoggedInNabar name={this.state.name} customer ={this.state.customerLogged} owner ={this.state.ownerLogged}></LoggedInNabar> : <NavDisplay logging ={this.state.logged}/>}
            <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">{"HOLA "  + this.state.name.toUpperCase() + "!"}</h1>
    <p class="lead">Below are the Bookings Made.</p>
  </div>
</div>
            
            {this.state.booking.length === 0 ? <AlertMessage message ={"No Bookings Have Been Made By You!"}/> : data}
 
            </div>
        )
    }
}
export default GetBookings;