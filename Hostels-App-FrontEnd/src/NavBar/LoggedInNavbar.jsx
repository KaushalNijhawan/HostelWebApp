import React from 'react';
import { Redirect , Link} from 'react-router-dom';

class LoggedInNabar extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      name:this.props?.name,
      ownerLogged : this.props?.owner,
      customerLogged:this.props?.customer,
      logged:true
    }
  }
  HandleRefresh=()=>{
    if(window.location.pathname === "/"){
      window.location.reload(true)
    }
    console.log(this.props.location?.pathname)
  }
  
   render(){
     if(this.state.ownerLogged === true){
       return(
        <nav className="navbar navbar-expand-lg navbar-light" style={{background:"#e3f2fd"}}>
      <i class="fas fa-hotel fa-2x navbar-brand"></i>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to ={{
                pathname:"/profiles",
                state:{
                  logged:true,
                  name:this.state.name,
                  customerLogged: false,
                  ownerLogged:true
                }
              }}className="nav-link" >About Us <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to={{
                pathname:"/displayDest",
                state:{
                  name:this.state.name,
                  logging: true,
                  customerLogged: false,
                  ownerLogged:true
                }
              }}  className="nav-link" >Locations</Link>
            </li>
            <li className="nav-item">
              <Link to={{
                pathname:"/hosteladd",
                state:{
                  name:this.state.name,
                  logged: true,
                  customerLogged: false,
                  ownerLogged:true
                }
              }}  className="nav-link" >Add Hostel</Link>
            </li>
            <li classname="nav-item">
              <Link to={{
                pathname:"/review",
                state:{
                  logged:true,
                  name:this.state.name,
                  customerLogged: false,
                  ownerLogged:true
                }
              }}  className="nav-link">Reviews</Link>
            </li> 
         
            
          </ul>
        </div>
        <form className="form-inline">
        <ul className="navbar-nav">
          <li className="nav-item">
       <a className="nav-link mr-sm-2" href="/login" style={{align:"right" , paddingTop:"14px" ,paddingRight:"80px"}}>{"Hello " +this.state.name + "!"}</a>
            </li>
            <li className="nav-item">
              <Link to={{
                pathname:"/",
                state:{
                  customerLogged: false,
                  ownerLogged:true

                }
              }}onClick ={this.HandleRefresh} className="nav-link my-2 my-sm-0"  tabIndex="-1" ><i class="fas fa-sign-out-alt fa-2x"></i></Link>
            </li>
            
           </ul> 
        </form>
      </nav>
       )
     }else if(this.state.customerLogged === true || this.state.logged === true){
       return(
<nav className="navbar navbar-expand-lg navbar-light" style={{background:"#e3f2fd"}}>
<i class="fas fa-hotel fa-2x"></i>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to ={{
                pathname:"/profiles",
                state:{
                  logged:true,
                  name:this.state.name ,
                  customerLogged: true,
                  ownerLogged:false
                }
              }}className="nav-link" >About Us <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to={{
                pathname:"/displayDest",
                state:{
                  name:this.state.name,
                  logging: true,
                  customerLogged: true,
                  ownerLogged:false
                }
              }}  className="nav-link" >Locations</Link>
            </li>
            <li className="nav-item">
              <Link to={{
                pathname:"/getBookings",
                  state:{
                    logged:true,
                    name:this.state.name,
                    customerLogged: true,
                  ownerLogged:false
                  }
              }} className="nav-link" >Bookings</Link>
            </li>
            <li classname="nav-item">
              <Link to={{
                pathname:"/review",
                state:{
                  logged:true,
                  name:this.state.name,
                  customerLogged: true,
                  ownerLogged:false
                }
              }}  className="nav-link">Reviews</Link>
            </li> 
          
            
          </ul>
        </div>
        <form className="form-inline">
        <ul className="navbar-nav">
          <li className="nav-item">
       <a className="nav-link mr-sm-2" href="/login" style={{align:"right" , paddingTop:"14px" ,paddingRight:"80px"}}>{"Hello " +this.state.name + "!"}</a>
            </li>
            <li className="nav-item">
              <Link to={{
                pathname:"/",
                state:{
                  customerLogged: false,
                  customerLogged: true,
                  ownerLogged:false
                }
              }}onClick ={this.HandleRefresh} className="nav-link my-2 my-sm-0"  tabIndex="-1" ><i class="fas fa-sign-out-alt fa-2x"></i></Link>
            </li>
            
           </ul> 
        </form>
      </nav>
       )
     }
      
   }
}

export default LoggedInNabar;