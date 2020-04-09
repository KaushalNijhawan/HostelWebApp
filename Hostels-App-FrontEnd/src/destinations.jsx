import React from 'react';

import FooterDisplay from './HostelDisplay/footer';
import NavDisplay from './NavBar/navbar';
import Axios from 'axios';

class DisplayDestination extends React.Component {

  constructor(props){
    super(props);
   
    this.state={
      logged : this.props.logging,
      city:[]
       
    }
  }
   componentDidMount(){
    Axios.get('http://localhost:8080/getAllCities')
    .then(res=>{
        this.setState({ city : res.data});
      })
      console.log(this.state.logged);
   }
    render() {
      let idata = this.state.city.map((host)=>(
        <div class="card">
          <img src={host.imgUrl} class="card-img-top" alt="..." />
          <div class="card-body">
      <h5 class="card-title">{host.cityName}</h5>
      <p class="card-text">{host.cityDescription}</p>
          </div>
          <a href={"/city/" + host.cityName}  class="btn btn-info">Explore</a>
          
        </div>

      ));
      let data = this.state;
        return (
        <div>
          
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