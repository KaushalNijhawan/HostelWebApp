import React from "react";
import './booking.css'
import axios from 'axios'
import moment from 'moment'
import NavDisplay from "../NavBar/navbar";
import { Redirect , Link} from "react-router-dom";
import LoggedInNabar from "../NavBar/LoggedInNavbar";


class Booking extends React.Component
{

    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
        arrival: new moment(),
        departure: new moment(),
        userName:"",
        stayDays:0,
        persons:1,
        hostelName : this.props.match.params.id,
        status : 0,
        hname:this.props.location.state?.hostelName,
        logged:this.props.location.state?.login,
        name:this.props.location.state?.username,
        customer:this.props.location.state?.customerLogged,
        owner:this.props.location.state?.OwnerLogged,
        customerLocations:this.props.location.state?.customerLogged,
        ownerLocations:this.props.location.state?.ownerLogged,
        hostelLocationsName:this.props.location.state?.name,
        usernameLocations:this.props.location.state?.username,
        coming:this.props.location.state?.coming,
        loggedLocations:this.props.location.state?.logged

        
        }
    }

    handleNameChange = (event) => {
        this.setState({ userName: event.target.value });
    }
    handleArrivalDateChange = (event) => {
        this.setState({ arrival: event.target.value });
    }
    handleDepartureDateChange = (event) => {
        this.setState({ departure: event.target.value });
    }
    handleStayDaysChange = (event) => {
        this.setState({ stayDays: event.target.value });
    }
    handlePersonsChange = (event) => {
        this.setState({ persons: event.target.value });
    }
    SubmitForm=(event) =>{
        const user = {
            bedsBooked:this.state.persons,
            rent:5000,
            hostelName: this.state.hostelName,
            totalDays: moment(this.state.departure).diff(moment(this.state.arrival),'days'),
            userName: this.state.userName,
            fromDate: this.state.arrival,
            toDate: this.state.departure,

          }
          event.preventDefault();
          console.log(user)
          axios.post('http://localhost:8080/bookingConfirmation',  user )
            .then(res=>{
                this.setState({status : res.data});
              console.log(res.data);
              
            })
            
          
        }
      RedirectionOfPage=()=>{
          if(this.state.status === "success" && this.state.coming === "Home"){
            return (<Redirect to={{
                pathname:"/success/" + this.state.hostelLocationsName+ "/" + this.state.usernameLocations,
                state:{
                  logging:this.state.logged,
                  username:this.state.usernameLocations,
                  customerLogged:this.state.customerLocations,
                  ownerLogged:this.state.ownerLocations
                }
              }}></Redirect>)
          }
          else if(this.state.status=== "success" && this.state.coming=== "Location"){
            return (<Redirect to={{
                pathname:"/success/" + this.state.hostelName+ "/" + this.state.userName,
                state:{
                  logging:this.state.loggedLocations,
                  username:this.state.usernameLocations,
                  customerLogged:this.state.customerLocations,
                  ownerLogged:this.state.ownerLocations
                }
              }}></Redirect>)
          }
        
      }
     
    render() {
        if(this.state.coming === "Home"){
            return(<div className = "imagee">
            {this.state.logged===true ? <LoggedInNabar name={this.state.name} customer ={this.state.customer} owner ={this.state.owner}></LoggedInNabar> : <NavDisplay logging ={this.state.logged}/>}
         <div className="container">
             <header></header>
         <section>				
             <div id="container_demo" >
                 <a className="hiddenanchor" id="toregister"></a>
                 <div id="wrapper" style={{width:"80%"}}>
                     <div id="booking" className="animate form">
                         <form onSubmit={this.SubmitForm}> 
                             <h1> {"Book " + this.state.hname} </h1> 
                             <p> 
                                 <label htmlFor="cname" className="cname" > UserName </label>
                                 <input id="name" name="name" required="required" type="text" placeholder = "eg. Rahul1234" onChange={this.handleNameChange}/>
                             </p>
                             <p> 
                                 <label htmlFor="arrivaldate" className="adate" > Arrival Date </label>
                                 <input id="arrivaldate" name="arrivaldate" required="required" type="date" onChange={this.handleArrivalDateChange}/>
                             </p>
                             <p> 
                                 <label htmlFor="departuredate" className="ddate" > Departure Date </label>
                                 <input id="departuredate" name="departuredate" required="required" type="date" onChange={this.handleDepartureDateChange}/>
                             </p>
                            
                             <p> 
                                 <label htmlFor="persons" className="youpasswd"> No. of Persons </label>
                                 <input id="pax" name="persons" required="required" type="text" placeholder="eg. 1-2" onChange={this.handlePersonsChange}/> 
                             </p>
                             
                             <p className="login button"> 
                                 {/* <Link onClick={this.SubmitForm}  className="btn btn-primary" style={{color:"white"}}>Book Now</Link>
                                   */}
                                   <input type="submit" value="Book Now" className="btn btn-primary" style={{color:"white"}}></input>
                                 
                             </p>
                             
                         </form>
                     </div>
 
                     
                     
                 </div>
             </div>  
         </section>
     </div>
 {this.RedirectionOfPage()}
     </div>
         )
        }
        else if(this.state.coming==="Location"){
            return(<div className = "imagee">
           {this.state.loggedLocations===true ? <LoggedInNabar name={this.state.usernameLocations} customer ={this.state.customerLocations} owner ={this.state.ownerLocations}></LoggedInNabar> : <NavDisplay logging ={this.state.logged}/>}
        <div className="container">
            <header></header>
        <section>				
            <div id="container_demo" >
                <a className="hiddenanchor" id="toregister"></a>
                <div id="wrapper" style={{width:"80%"}}>
                    <div id="booking" className="animate form">
                        <form onSubmit={this.SubmitForm}> 
                            <h1> {"Book " + this.state.hostelLocationsName} </h1> 
                            <p> 
                                <label htmlFor="cname" className="cname" > UserName </label>
                                <input id="name" name="name" required="required" type="text" placeholder = "eg. Rahul1234" onChange={this.handleNameChange}/>
                            </p>
                            <p> 
                                <label htmlFor="arrivaldate" className="adate" > Arrival Date </label>
                                <input id="arrivaldate" name="arrivaldate" required="required" type="date" onChange={this.handleArrivalDateChange}/>
                            </p>
                            <p> 
                                <label htmlFor="departuredate" className="ddate" > Departure Date </label>
                                <input id="departuredate" name="departuredate" required="required" type="date" onChange={this.handleDepartureDateChange}/>
                            </p>
                           
                            <p> 
                                <label htmlFor="persons" className="youpasswd"> No. of Persons </label>
                                <input id="pax" name="persons" required="required" type="text" placeholder="eg. 1-2" onChange={this.handlePersonsChange}/> 
                            </p>
                            
                            <p className="login button"> 
                                {/* <Link onClick={this.SubmitForm}  className="btn btn-primary" style={{color:"white"}}>Book Now</Link>
                                  */}
                                  <input type="submit" value="Book Now" className="btn btn-primary" style={{color:"white"}}></input>
                                
                            </p>
                            
                        </form>
                    </div>

                    
                    
                </div>
            </div>  
        </section>
    </div>
{this.RedirectionOfPage()}
    </div>
        )
        }
        
    }
}
export default Booking