import React from 'react'
import { Link } from 'react-router-dom';
import FooterDisplay from './HostelDisplay/footer';
import NavDisplay from './NavBar/navbar';
import axios from "axios";
import LoggedInNabar from './NavBar/LoggedInNavbar';
import AlertMessage from './Alert/Alert';

class HostelCity extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
          hostels: [],
          hcity : this.props.match.params.city,
          logged : this.props.location.state?.logging,
          name:this.props.location.state?.name,
          customerLogged : this.props.location.state?.customerLogged,
          ownerLogged:this.props.location.state?.ownerLogged
        }
      }
    
      componentDidMount= () =>{
        axios.get('http://localhost:8080/hostels')
        .then(res=>{
            this.setState({
                hostels : res.data
            
            })
        }) 
       console.log(this.state.logged);
         
    }    
  
    render() {
        let data = this.state.hostels.filter((host)=> host.city === this.state.hcity);
        console.log(typeof data);
        console.log(data);
        let hostel = data.map((host , i)=>(
           
            
                <div class="card hostel-card">
                    <div class="container card-deck contain">
                        
                            <img className="card-img-top" src={host?.imgUrl} alt="Card image cap" height="300px" width="250px" />
                            <div class="card-body">
                                <h5 class="card-title">{host?.hostelName}</h5>
                                <p class="card-text">{host?.description}</p>
                                <Link to={{
                                  pathname:"/hosteldetails/" + host.hostelName,
                                  state:{
                                    logging :this.state.logged,
                                    customerLogged : this.props.location.state?.customerLogged,
                                    ownerLogged:this.props.location.state?.ownerLogged,
                                    name:this.state.name
                                  }
                                }}  class="btn btn-primary">Explore</Link>
                            </div>
                        
                    </div>
                </div>
        ));
        return (
        <div>
          {this.state.logged===true ? <LoggedInNabar name={this.state.name} customer ={this.state.customerLogged} owner ={this.state.ownerLogged}></LoggedInNabar> : <NavDisplay logging ={this.state.logged}/>}
          
            <div class="jumbotron">
                <h1 class="display-4">Hostels</h1>
                <p class="lead">Gar Firdaus Bar-Rue Zamin Ast, Hami Asto, Hami Asto, Hami Ast !!!</p>
                <hr class="my-4" />
                <p>Please Select Your Hostel</p>
            </div>
              {data.length===0 ?<AlertMessage message={"Sorry , Till Now No Cities Are Available!"}/>: hostel}
            <div class = "container">
  </div>
      <br></br>
        <br></br>
        <br></br>
        <FooterDisplay></FooterDisplay>
        </div>
        );
    }
}

export default HostelCity;