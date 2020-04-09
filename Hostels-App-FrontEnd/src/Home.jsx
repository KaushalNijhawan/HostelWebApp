import React from "react";
import NavDisplay from "./NavBar/navbar";
import CardDisplay from "./Card";
import FooterDisplay from "./HostelDisplay/footer";
import LoggedInNabar from "./NavBar/LoggedInNavbar";
import DisplayDestination from "./destinations";

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            logged : false,
            display:this.props

          
        }
        
    }
    componentDidMount(){
        console.log(this.state.display)
    }

    render() {
        return (<div >
            <div className="navdisplay" >
               {this.state.logged===true ? <LoggedInNabar></LoggedInNabar> : <NavDisplay logging ={this.state.logged}/>} 
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
