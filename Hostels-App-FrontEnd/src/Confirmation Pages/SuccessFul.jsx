import React from 'react'
import { Component } from 'react';
import NavDisplay from '../NavBar/navbar';
import LoggedInNabar from '../NavBar/LoggedInNavbar';

class BookingConfirmation extends Component{
    constructor(props) {
        super(props);
        this.state={
        logged:this.props.location.state.logging,
        name:this.props.location.state.username,
        customerLogged:this.props.location.state?.customerLogged,
        ownerLogged:this.props.location.state?.ownerLogged
        }
        
      }
    render(){
        return(
           
        <div>
          {this.state.logged===true ? <LoggedInNabar name={this.state.name} customer ={this.state.customerLogged} owner ={this.state.ownerLogged}></LoggedInNabar> : <NavDisplay logging ={this.state.logged}/>}
             <div class="jumbotron">
                <h1 class="display-4">Booking Confirmation</h1>
                <p class="lead">Your Booking Has Been Confirmed</p>
                <hr class="my-4" />
                <p>Happy Stay !!</p>
            </div>

            <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Well done!</h4>
            <p>You have Successfully taken time out of your busy schedule to take a vacation. Enjoy Your Stay</p>
            <hr/>
            <p class="mb-0"></p>
            </div>
            
        </div>
        )
    }
}
export default BookingConfirmation;