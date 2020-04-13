import React from 'react';
import axios from 'axios'
import './loginandsignup.css';
import { Redirect } from 'react-router-dom';
import NavDisplay from '../../NavBar/navbar';
import Axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            userName: "",
            password: "",
            isLogin: false,
            error : "",
            type:"",
            AdminLoged:false,
            customerLogged:false,
            OwnerLogged:false,
            name:this.props.location.state?.name
        }
    }
    handleUsername = (e) => {
        this.setState({ userName: e.target.value });
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    }
    SubmitForm = (event) => {
        const user = {
            userName: this.state.userName,
            password: this.state.password
        }
        event.preventDefault();
        Axios.post('http://localhost:8080/login', user)
            .then(res => {
                this.setState({type:res.data})
                if (res.data === "Customer") {
                    
                    this.setState({ error : res.data})
                    this.setState({ isLogin: true })
                    this.setState({customerLogged:true})
                }else if(res.data === "Admin" ){
                    this.setState({ error : res.data})
                    this.setState({ isLogin: true })
                    this.setState({AdminLoged:true})
                }else if(res.data === "Hostel Owner"){
                    this.setState({ error : res.data})
                    this.setState({ isLogin: true })
                    this.setState({OwnerLogged:true}) 
                }
            })
         
            
    }
    RedirectionOfPage = () => {
        // console.log(this.state.AdminLoged);
        // console.log(this.state.customerLogged);
        // console.log(this.state.isLogin);
        if (this.state.isLogin === true && this.state.AdminLoged === true) {
            return (<Redirect to={{
                pathname: '/admin',
                state: { 
                    userType: this.state.userName,
                    logged:true
                }       
            }} />)
        }else if(this.state.isLogin === true && this.state.customerLogged ===true && typeof this.state.name!=="undefined"){
            return (<Redirect to={{
                pathname: '/booknow/'+this.state.name,
                state: { 
                    
                    hostelName:this.state.name,
                    login:this.state.isLogin,
                    username:this.state.userName,
                    customerLogged:this.state.customerLogged,
                    ownerLogged:this.state.OwnerLogged,
                    coming:"Home"
                }
                     
            }} />)
        }
        else if(this.state.isLogin === true && this.state.customerLogged ===  true && typeof this.state.name === "undefined"){
            return (<Redirect to={{
                pathname: '/',
                state: { 
                    customerLogged :this.state.customerLogged,
                   
                    username:this.state.userName,
                    type:this.state.type,
                    logged:true
                }
                     
            }} />)
        }
        else if(this.state.isLogin === true && this.state.OwnerLogged === true){
            return (<Redirect to={{
                pathname: '/',
                state: { 
                    ownerLogged :this.state.OwnerLogged,
                   
                    username:this.state.userName,
                    type:this.state.type,
                    logged:true
                }
                     
            }} />)
        }

    }
    componentDidMount=()=>{
        console.log(typeof this.state.name)
    }
    render() {


        return (<div className="imagee">
           
            <div className="container">
                <header></header>
                <section>
                    <div id="container_demo" >
                        <a className="hiddenanchor" id="toregister"></a>
                        <div id="wrapper">
                            <div id="login" className="animate form">
                                <form  onSubmit={this.SubmitForm}>
                                    <h1>Log in</h1>
                                    <div class="alert alert-danger" role="alert" style ={{display : this.state.error === "failed" ? "" : "none"}}>
                                        {this.state.error}
                                    </div>
                                    <p>
                                        <label htmlFor="username" className="uname" > Your email or username </label>
                                        <input id="username" name="userName" required="required" type="text" onChange={this.handleUsername} placeholder="myusername" />
                                    </p>
                                    <p>
                                        <label htmlFor="password" className="youpasswd"> Your password </label>
                                        <input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" onChange={this.handlePassword} />
                                    </p>
                                    <p className="keeplogin">
                                        <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" />
                                        <label htmlFor="loginkeeping">Keep me logged in</label>
                                    </p>
                                    <p className="login button">
                                        <input type="submit" className="btn btn-primary" value="Login" />
                                    </p>
                                    <p className="change_link">
                                        Not a member yet ?
									<a href="/signup" className="to_register">Join us</a>
                                    </p>
                                </form>
                            </div>



                        </div>
                    </div>
                </section>
            </div>
            {this.RedirectionOfPage()}
        </div>
        )
    }
}

export default Login;
