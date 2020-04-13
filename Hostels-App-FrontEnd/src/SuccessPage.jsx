import React, { Component } from "react"
import NavDisplay from "./NavBar/navbar"
import FooterDisplay from "./HostelDisplay/footer"
import Axios from "axios";
import {Redirect, Link} from "react-router-dom";
import LoggedInNabar from "./NavBar/LoggedInNavbar";

class SuccessPage extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            hostels1: [],
            hostels2: [],
            hname: this.props.match.params.hname,
            user: this.props.match.params.username,
            decision:"",
            logged:this.props.location.state?.logging,
            name:this.props.location.state?.username,
            customerLogged:this.props.location.state?.customerLogged,
            ownerLogged:this.props.location.state?.ownerLogged
        }
    }
    handleConfirm=()=>{
        Axios.get('http://localhost:8080/AcceptConfirm/'+this.state.user)
        .then(res => {
            this.setState({
                decision: res.data

            })
        })
        console.log("confirm!!")
    }
    handleCancel=()=>{
        Axios.get('http://localhost:8080/RejectConfirm/'+this.state.user)
        .then(res => {
            this.setState({
                decision: res.data

            })
        })
        console.log("cancel!!")
    }
    componentDidMount = () => {
        Axios.get('http://localhost:8080/hostels')
            .then(res => {
                this.setState({
                    hostels1: res.data

                })
            })
        Axios.get('http://localhost:8080/' + this.state.user + '/mybookings')
            .then(res => {
                this.setState({
                    hostels2: res.data

                })
            })
      console.log(this.state.logged)
      console.log(this.state.name)
    }
   

    render() {
        let data = this.state.hostels1.filter((host) => host.hostelName === this.state.hname);
        const host = this.state.hostels2.filter((hos) => hos.hostelName === this.state.hname);
        console.log(data[0]?.hostelName);

        return (<div>
            {this.state.logged===true ? <LoggedInNabar name={this.state.name} customer ={this.state.customerLogged} owner ={this.state.ownerLogged}></LoggedInNabar> : <NavDisplay logging ={this.state.logged}/>}
            <div>
                <div class="jumbotron">
                    <h1 class="display-4">Booking Succesful</h1>
                    <hr class="my-4" />
                    <p>Thanks For Booking , Happy Stay!</p>
                </div>

                <div class="card" style={{ width: "24rem", height: "30rem", marginLeft: "500px" }}>
                    <img class="card-img-top" src={data[0]?.imgUrl} alt="Card image cap" />
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted">{host[0]?.userName}</h6>
                        <h5 class="card-title">{data[0]?.hostelName}</h5>
                        <p class="card-text">{data[0]?.contactName}</p>
                        <p class="card-text">{host[0]?.rent}</p>
                        <Link to={{
                            pathname:"/confirmed",
                            state:{
                                logging:this.state.logged,
                                username:this.state.name,
                                customerLogged:this.state.customerLogged,
                                ownerLogged:this.state.ownerLogged
                            }
                        }}  class="card-link" onClick={this.handleConfirm}>Confirm</Link>
                        <Link to={{
                            pathname:"/canceled/" + this.state.user,
                            state:{
                                logging:this.state.logged,
                                username:this.state.name,
                                customerLogged:this.state.customerLogged,
                                ownerLogged:this.state.ownerLogged
                            }
                        }} class="card-link" onClick={this.handleCancel}>Cancel</Link>
                    
                    </div>
                </div>
                <br></br>
                <br></br>

                
            </div>
            
            <FooterDisplay />
        </div>
        )




    }
}

export default SuccessPage; 