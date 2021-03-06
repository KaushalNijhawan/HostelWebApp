
import React from "react";
import "./hostel.css";
import "./all.css";
import FooterDisplay from "./footer";
import NavDisplay from "../NavBar/navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import LoggedInNabar from "../NavBar/LoggedInNavbar";
class AllHostelDetails extends React.Component {
  
  constructor(props){
    super(props);
    console.log(this.props);
    this.state={
      
      hostels: [],
      hostel:{
          hostelName:"",
        description:"",
        imgUrl:""
      },
      name : this.props.match.params.id,
      loggLocations:this.props.location.state.logging,
      loggHome:this.props.location.state.logged,
      logged:false,
      customerLogged:this.props.location.state?.customerLogged,
      ownerLogged:this.props.location.state?.ownerLogged,
      username:this.props.location.state?.name

    }
  }
  handleClick=()=>{
    console.log("clicked")
  }
  componentDidMount= () =>{
    axios.get('http://localhost:8080/hostels')
    .then(res=>{
        this.setState({
            hostels : res.data
        
        })
    }) 
    
   
   
     
}    
RedirectionOfPage=()=>{
  if(this.state.loggHome===false || this.state.loggLocations===false){
    return (<Redirect to={{pathname:"/login",
       state:{
          name: this.state.name,
          customerLogged:this.state.customerLogged,
          ownerLogged:this.state.ownerLogged,
          username:this.state.username,
          coming:"Home"

       }
  }}/>)
  }
}
       
    render() {
         let data = this.state.hostels.filter((host) => host.hostelName===this.state.name);  // this ? is null check for us 
         
   return (
    <div>
           {this.state.loggHome ||this.state.loggLocations ? <LoggedInNabar name={this.state.username} customer ={this.state.customerLogged} owner ={this.state.ownerLogged}></LoggedInNabar> : <NavDisplay logging ={this.state.logged}/>}
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
    <h1 class="display-4">{data[0]?.hostelName}</h1>
    <p class="lead">{data[0]?.description}</p>
                </div>
            </div>
            <div class="container-fluid">
    <div class="row">
        <div class="col-12 mt-3">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="" src={data[0]?.imgUrl} alt="Card image cap" height = "440px" widht="330px"/>
                    </div>
                    <div class="card-body">
    <h4 class="card-title">{data[0]?.hostelName}</h4>
                        <p class="card-text">
                        <dl class="row">
  <dt class="col-sm-3">Price</dt>
   <dd class="col-sm-9">{data[0]?.pricePerBed + " INR"}</dd>

  <dt class="col-sm-3">Max Capacity</dt>
  <dd class="col-sm-9">
    <p>{data[0]?.bedsAvailable +" Persons Accomodation"}</p>
    <p>This is a Mix Dorm.</p>
  </dd>

  <dt class="col-sm-12">Unit Animities</dt>


  <dt class="col-sm-3 text-truncate"><h1><i class="fas fa-water fa-2x"></i></h1></dt>
  <dd class="col-sm-9">Hot Water Avilable.</dd>

  <dt class="col-sm-3"><i class="fas fa-wifi fa-2x"></i>

</dt>
  <dd class="col-sm-9">Free Wifi
   </dd>
   <dt class="col-sm-3"><i class="fas fa-shower fa-2x"></i>

</dt>
  <dd class="col-sm-9">Shower
   </dd>
   <dt class="col-sm-3"><i class="fas fa-egg fa-2x"></i>

</dt>
  <dd class="col-sm-9">Free Breakfast
   </dd>
   <dt class="col-sm-3"><i class="fas fa-temperature-low fa-2x"></i>

</dt>
  <dd class="col-sm-9">Air Conditioning
   </dd>
   <dt class="col-sm-3"><i class="fas fa-cocktail fa-2x"></i>

</dt>
  <dd class="col-sm-9">Common Hangout Area
   </dd>

   <dt class="col-sm-3"><i class="fas fa-concierge-bell fa-2x"></i>

</dt>
  <dd class="col-sm-9">24/7 Reception
   </dd>

   <dt class="col-sm-3"><i class="fas fa-coffee fa-2x"></i>

</dt>
  <dd class="col-sm-9">Cafe
   </dd>
    
   <dt class="col-sm-3"><i class="fas fa-luggage-cart fa-2x"></i>

</dt>
  <dd class="col-sm-9">Storage Facility
   </dd>

   <dt class="col-sm-3"><i class="far fa-credit-card fa-2x"></i>

</dt>
  <dd class="col-sm-9">Card Payment Accepted
   </dd>
</dl>
                          
    </p>
                    </div>
                </div>
                 <div class="wrap"> 
                                   {/* <Link to="/booknow">  */} 
                             {this.RedirectionOfPage()}   
                 <Link to={{
                   pathname:"/booknow/" + data[0]?.hostelName,
                   state:{
                     customerLogged:this.state.customerLogged,
                     ownerLogged:this.state.ownerLogged,
                     name:this.state.name,
                     username:this.state.username,
                     coming:"Location",
                     logged:true
                   }
                 }}  type="button" class="btn btn-info" style ={{margin : "80px"}} >Book Now</Link>
                
              
                  </div>  
             </div> 
 </div>
     </div>
 </div>
 <br></br>

 <FooterDisplay/>  

</div>
        );
    }
}

export default AllHostelDetails;