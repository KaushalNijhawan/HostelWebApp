import React from 'react';
import NavDisplay from '../NavBar/navbar';
import Axios from 'axios';
import LoggedInNabar from '../NavBar/LoggedInNavbar';

class BookingShow extends React.Component{
  constructor(props){
      super(props);
      console.log(this.props);
      this.state={
      bookings :[],
      logged:this.props.location.state.logged,
      name:this.props.location.state.name
      }
  }
  componentDidMount= () =>{
    Axios.get('http://localhost:8080/hostels/getAllBookings')
    .then(res=>{
        this.setState({
            bookings : res.data
        
        })
    }) 
   
   
     
}    
    render(){
      const data = this.state.bookings.map((host , i) => (
        <tr>
        <th scope="row">{i+1}</th>
      <td>{host.userName}</td>
      <td>{host.totalDays}</td>
      <td>{host.rent}</td>
      <td>{host.bedsBooked}</td>
      </tr>

      ));
      
      
      return(<div>
        {this.state.logged===true ? <LoggedInNabar name ={this.state.name}/> : <NavDisplay/>}
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">HOLA!</h1>
    <p class="lead">List of the Details going on the WebApp.</p>
  </div>
  
</div>
        <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">username</th>
            <th scope="col">Total Booking Days</th>
            <th scope="col">Rent</th>
            <th scope="col">Beds Booked</th>
          </tr>
        </thead>
        <tbody>
         {data}
        </tbody>
      </table>
      </div>
      );
  }
}

export default BookingShow;