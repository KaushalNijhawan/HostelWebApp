import React from "react";
import FooterDisplay from './HostelDisplay/footer';
import NavDisplay from './NavBar/navbar';
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { Message, Form } from "semantic-ui-react";

class HostelAdd extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {
      hname:"",
      hdesc:"",
      hadd:"",
      hcity:"",
      hmanager:"",
      hcontact:"",
      hbeds: 0,
      hprice: 0,
      hImgUrl:"",
      message : "failure",
      error: true


    }
  }
  TriggerAlert=(event)=>{
  alert("Your Request is Send to Admin!");

  }
  ChangeInAddress = (event)=>{
    this.setState({hadd: event.target.value});
  }
  ChangeInBed=(event)=>{
    this.setState({hbeds : event.target.value});
  }
  ChangeInCity=(event)=>{
    this.setState({hcity : event.target.value});

  }
  ChangeInContact=(event)=>{
    this.setState({hcontact : event.target.value})
  }
  ChangeInDescription=(event)=>{
    this.setState({
      hdesc : event.target.value
    })
  }
  ChangeInPrice=(e)=>{
    this.setState({hprice : e.target.value})
  }
  ChangeInName=(e)=>{
    this.setState({hname : e.target.value})
  }
  ChangeInManager=(e)=>{
    this.setState({hmanager : e.target.value})
  }
  ChangeInImg=(e)=>{
    this.setState({hImgUrl : e.target.value})
  }
  
  SubmitForm=(event)=>{
    const hostel={
      hostelName: this.state.hname,
      city: this.state.hcity,
      address : this.state.hadd,
      pricePerBed : this.state.hprice,
      contactName : this.state.hmanager,
      contactNo : this.state.hcontact,
      imgUrl : this.state.hImgUrl,
     bedsAvailable  : this.state.hbeds,
     description : this.state.hdesc
    }
    event.preventDefault();
            console.log(hostel)
            Axios.post('http://localhost:8080/requestHostel',  hostel )
              .then(res=>{
                  this.setState({ message : res.data});
                if(res.data === "success"){
                  this.setState({error:false});
                }
                  console.log(res.data);
                
              })
            
  }

  RedirectionPage =()=>{
    if(this.state.message === "success"){
      return <Redirect to="/"></Redirect>
           
    }
  }
    render(){
        return(<div>
        <NavDisplay/>
            <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hostel Addition</h1>
    <p class="lead">Add Your Hostel's Here.</p>
  </div>
</div>
<br></br>
<br></br>
{!this.state.error ? (
            <Message
              positive
              header="Your user registration was successful"
              content="You may now log-in with the username you have chosen"
            />
          ) : (
            <Message
              negative
              header=""
             
            />
          )}
<div class = "container">
    <form onSubmit ={this.SubmitForm}>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label ">Hostel Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control form-control-sm" id="hname" placeholder="Hostel Name" onChange = {this.ChangeInName} required />
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Description</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="hdescription" placeholder="Description" onChange={this.ChangeInDescription} required />
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label ">Address</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="haddress" placeholder="Address" onChange ={this.ChangeInAddress} required/> 
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">City</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" id="hcity" placeholder="City" onChange={this.ChangeInCity} required />
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Manager</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="hmanager" placeholder="Manager" onChange={this.ChangeInManager} required />
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Contact Number</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="hcontact" placeholder="Contact Number" onChange ={this.ChangeInContact} required />
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Bed's Availiable</label>
    <div class="col-sm-10">
      <input type="Number" class="form-control" id="hbed" placeholder="Bed's Avilable" onChange={this.ChangeInBed} required />
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Price[Per Bed]</label>
    <div class="col-sm-10">
      <input type="Number" class="form-control" id="hprice" placeholder="Price" onChange={this.ChangeInPrice} required />
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Image Url</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="hurl" placeholder="https://example.com" onChange={this.ChangeInImg} required />
    </div>
  </div>
  <button type = "submit" value = "Requesting Hostel" class = "btn btn-info" onClick={this.TriggerAlert}>Requesting Hostel</button>
</form>
</div>
<br></br>
<FooterDisplay></FooterDisplay>
{this.RedirectionPage()}
</div>

        );
    }

}
export default HostelAdd;