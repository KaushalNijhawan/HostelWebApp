import React from 'react';
import NavDisplay from '../NavBar/navbar';
import AdminCardsDisplay from './admincardsDisplay';
import LoggedInNabar from '../NavBar/LoggedInNavbar';

class AdminDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user : this.props.location.state.userType,
      logged:false
    }
  }
  componentDidMount=()=>{
    console.log(this.state.user);
    if(this.state.user === "Syam"){
      this.setState({logged:true});
    }
    console.log(this.props);
  }
render(){ 
  console.log(this.state.logged);
    return(<div>
      {this.state.logged===true ? <LoggedInNabar name ={this.state.user}/> : <NavDisplay/>}
        
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">{"HOLA " + this.state.user.toUpperCase() + "!"}</h1>
    <p class="lead">List of the Details going on the WebApp.</p>
  </div>
  
</div>
<AdminCardsDisplay name ={this.state.user}/>
        </div>
    );
}
}

export default AdminDisplay;