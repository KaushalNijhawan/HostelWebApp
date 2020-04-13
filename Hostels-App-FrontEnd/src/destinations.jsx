import React from 'react';

import FooterDisplay from './HostelDisplay/footer';
import NavDisplay from './NavBar/navbar';
import Axios from 'axios';
import {Link} from "react-router-dom";
import LoggedInNabar from './NavBar/LoggedInNavbar';

class DisplayDestination extends React.Component {

  constructor(props){
    super(props)
    console.log(this.props);
    this.state={
      logged:this.props.location.state?.logging,
      city:[],
      name:this.props.location.state?.name,
      customerLogged : this.props.location.state?.customerLogged,
      ownerLogged:this.props.location.state?.ownerLogged
       
    }
  }
   componentDidMount(){
    Axios.get('http://localhost:8080/getAllCities')
    .then(res=>{
        this.setState({ city : res.data});
      })
      console.log(this.state.logged);
   }
    render(props) {
     
      let idata = this.state.city.map((host)=>(
        <div class="card">
          <img src={host.imgUrl} class="card-img-top" alt="..." />
          <div class="card-body">
      <h5 class="card-title">{host.cityName}</h5>
      <p class="card-text">{host.cityDescription}</p>
          </div>
          <Link to={{
            pathname: "/city/" + host.cityName,
            state:{
              logging:this.state.logged,
              name:this.state.name,
              customerLogged:this.state.customerLogged,
              ownerLogged:this.state.ownerLogged
            }
          }} class="btn btn-info">Explore</Link>
          
        </div>

      ));
      let data = this.state;
        return (
        <div>
            {this.state.logged===true ? <LoggedInNabar name={this.state.name} customer ={this.state.customerLogged} owner ={this.state.ownerLogged}></LoggedInNabar> : <NavDisplay logging ={this.state.logged}/>}
            <div class="jumbotron">
                <h1 class="display-4">HOLA!</h1>
                <p class="lead">Hostel Destinations</p>
                <hr class="my-4" />
                <p>We Are Gonna Show The Hostel Destinations Choose One!</p>
            </div>
        
        <div class = "container">
        <div class="card-deck">
        
        {idata}
      </div>
      </div>
      <br></br>
          <br></br>
          <FooterDisplay/>
     </div> 
        );
    }
}
export default DisplayDestination;