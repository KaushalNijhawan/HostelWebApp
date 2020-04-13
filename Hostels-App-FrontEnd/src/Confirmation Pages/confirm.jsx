import React from 'react';
import FooterDisplay from '../HostelDisplay/footer';
import NavDisplay from '../NavBar/navbar';
import Axios from 'axios';
import './oop-image.css';
import LoggedInNabar from '../NavBar/LoggedInNavbar';

class CancelledBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      logged:this.props.location.state.logging,
    name:this.props.location.state.username,
    customerLogged : this.props.location.state?.customerLogged,
    ownerLogged:this.props.location.state?.ownerLogged
    }
    
  }

  
  render() {
    return (<div>

{this.state.logged===true ? <LoggedInNabar name={this.state.name} customer ={this.state.customerLogged} owner ={this.state.ownerLogged}></LoggedInNabar> : <NavDisplay logging ={this.state.logged}/>} 
      <div class="jumbotron">
        <h1 class="display-4">Booking Sucessfully Cancelled</h1>
        <hr class="my-4" />
        <p>Sorry for inconvenience, please visit us again !!</p>
      </div>

      <div>
        <img class="card-img-top contain2" src="https://i.dlpng.com/static/png/5402123-oops-sticker-transparent-png-svg-vector-oops-png-512_512_preview.png" alt="Card image cap" height="700px" width="200px" />
        <h2>Your Booking Got Cancelled !!</h2>
      </div>

      <FooterDisplay />
    </div>
    );
  }
}
export default CancelledBooking;