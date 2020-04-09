import React from "react";
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom';
class CardDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hostels: [],
            logged: this.props.logging
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/hostels')
            .then(res => {
                this.setState({
                    hostels: res.data
                })
            })
            console.log(this.state.logged);

    }
    render() {
        const i = -1;
        const idata = this.state.hostels.map((host) => (
            
            <div class="card hostel-card ">
                <div class="card-deck">
                    <img className="card-img-top" src={host.imgUrl} alt="Card image cap" height="300px"/>
                    <div class="card-body">
                        <h5 class="card-title"><b>{host.hostelName}</b></h5>
                        <p class="card-text">{host.description}</p>
                        <Link to ={{
                            pathname: "/hosteldetails/"+host.hostelName  ,
                            state:{logged: this.state.logged}
                        }}  class="btn btn-primary"
                         >Explore</Link>
                    </div>
                </div>
            </div>
            
        ));
        return (<div>
            {idata}

        </div>
        );

    }
}

export default CardDisplay;