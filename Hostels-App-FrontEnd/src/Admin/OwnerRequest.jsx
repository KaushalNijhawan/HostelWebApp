import React from 'react';
import Axios from 'axios';
import NavDisplay from '../NavBar/navbar';
import { Redirect } from 'react-router-dom';

class OwnerRequest extends React.Component{
   constructor(){
       super();
       this.state={
           requests:[],
           message:""
       }
   }
   HandleClickReject=(event)=>{
    let host = this.state.requests[event];
    const hostel ={
        hostelName:host.hostelName,
        description:host.description,
        address : host.address,
        city:host.city,
        contactName:host.contactName,
        contactNo:host.contactNo,
        bedsAvailable:host.bedsAvailable,
        imgUrl:host.imgUrl,
        pricePerBed:host.pricePerBed
       
    }
     Axios.post("http://localhost:8080/RejectRequest" , hostel)
     .then(res=>{
        this.setState({ message: res.data});
      })
        console.log(this.state.message);
   }
   handleRedirect=()=>{
       if(this.state.message!=""){
           return <Redirect to="/admin"></Redirect>
       }
   }
   HandleClickAccept=(event)=>{
       let host = this.state.requests[event];
        const hostel ={
            hostelName:host.hostelName,
            description:host.description,
            address : host.address,
            city:host.city,
            contactName:host.contactName,
            contactNo:host.contactNo,
            bedsAvailable:host.bedsAvailable,
            imgUrl:host.imgUrl,
            pricePerBed:host.pricePerBed,
            
        }
        Axios.post("http://localhost:8080/AcceptRequest" , hostel)
     .then(res=>{
        this.setState({ message: res.data});
      })
      console.log(this.state.message);
    }
    
   
   componentDidMount(){
       
       Axios.get("http://localhost:8080/getAllRequests")
       .then(res=>{
        this.setState({ requests: res.data});
      })
   }
    render(){
        const data = this.state.requests.map((host , i)=>(
            <tr>
            <th scope="row">{i+1}</th>
          <td>{host.hostelName}</td>
          <td>{host.city}</td>
          <td>{host.bedsAvailable}</td>
          <td>{host.pricePerBed}</td>
          <td>{host.contactName}</td>
          <td>{host.contactNo}</td>
          <td><button type="button" class="btn btn-success" style={{height:"30px" , width:"100px" , padding:"0px"}} onClick={() => this.HandleClickAccept(i)}>Accept</button></td>
          <td><button type="button" class="btn btn-danger" style={{height:"30px" , width:"100px" , padding:"0px"}} onClick={() => this.HandleClickReject(i)}>Reject</button></td>
          </tr>
        ));
       return(
<div>
        <NavDisplay/>
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">HOLA ADMIN!</h1>
    <p class="lead">List of the Owners Request!</p>
  </div>
  
</div>
        <table class="table" style={{marginLeft:"50px" , width:"90%"}}>
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">HostelName</th>
            <th scope="col">Hostel City</th>
            <th scope="col">Beds Available</th>
            <th scope="col">Price(Per Bed)</th>
            <th scope="col">Owner</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Accept!</th>
            <th scope="col">Reject!</th>
          </tr>
        </thead>
        <tbody>
         {data}
        </tbody>
      </table>
      {this.handleRedirect()}
      </div>
       );
   }
}
export default OwnerRequest;