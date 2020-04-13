import React from "react";
import NavDisplay from "./NavBar/navbar";
import CardDisplay from "./Card";
import FooterDisplay from "./HostelDisplay/footer";
import LoggedInNabar from "./NavBar/LoggedInNavbar";
import DisplayDestination from "./destinations";

class HomePage extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            logged : false,
            display:this.props,
            customerLogged:false,
            ownerLogged:false,
            name:"",
            type:this.props.location.state?.type

          
        }
        
    }
    
    componentDidMount(){
        if(typeof this.props.location.state?.logged!== "undefined"){
            this.setState({logged: true})
        }
       
           
        if(typeof this.props.location.state?.username !== "undefined"){
            this.setState({name : this.props.location.state?.username})
        }
        if(this.state.type==="Hostel Owner"){
            this.setState({ownerLogged:true})

        }else if(this.state.type==="Customer"){
            this.setState({customerLogged:true})
        }
        console.log(this.state.display)
    }

    render() {
        return (<div >
            <div className="navdisplay" >
               {this.state.logged===true ? <LoggedInNabar name={this.state.name} customer ={this.state.customerLogged} owner ={this.state.ownerLogged}></LoggedInNabar> : <NavDisplay logging ={this.state.logged}/>} 
            </div>
            <div className="carddisplay" >
                <CardDisplay logging ={this.state.logged} />
        
            </div>
            <div className= "footerdiaply">
                <FooterDisplay/>
            </div>
            
        </div>
        );
    }
}

export default HomePage;
