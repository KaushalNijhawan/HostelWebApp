import React from "react";
import NavDisplay from "../NavBar/navbar";
import "./profiles.css";

class ProfileShow extends React.Component{
  constructor(props){
    super(props);
    this.state={
      logged:this.props
    }
  }
  componentDidMount(){
    console.log(this.state.logged);
  }
   render(){
       return(<div>
   <NavDisplay />
        <br></br>
        <div class="container">
  <div class="row">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card">
        <img class="card-img-top" src={require("./only3.jpg")}/>
        <div class="card-body text-center">
          
          <h4 class="card-title">Pranav Mahajan</h4>
          <h6 class="card-subtitle mb-2 text-muted">Project Lead</h6>
          <p class="card-text">Pranav Mahajan has been an important assest for our project in designing the tasks to frame the startup.</p>
          <a href="#" ><i class="fab fa-instagram fa-2x" ></i></a>
          <a href="#" ><i class="fab fa-github fa-2x"></i></a>
          <a href="#" ><i class="fab fa-linkedin fa-2x"></i></a>
        </div>
      </div>
    </div>
  </div>
  <br></br>
  <div class="row">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card">
        <img class="card-img-top" src={require("./anup.JPG")}/>
        <div class="card-body text-center">
          <h4 class="card-title">Anup Patel</h4>
          <h6 class="card-subtitle mb-2 text-muted">UI Developer</h6>
          <p class="card-text">Anup from very start is being very cooperative, the look and feel for the website is only made possible beacause of him.</p>
          <a href="#" ><i class="fab fa-instagram fa-2x" ></i></a>
          <a href="#" ><i class="fab fa-github fa-2x"></i></a>
          <a href="#" ><i class="fab fa-linkedin fa-2x"></i></a>
        </div>
      </div>
    </div>
  </div>
  <br></br>
  <div class="row">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card">
        <img class="card-img-top" src={require("./aniket.JPG")}/>
        <div class="card-body text-center">
          <h4 class="card-title">Aniket Gupta</h4>
          <h6 class="card-subtitle mb-2 text-muted">FrontEnd Developer</h6>
          <p class="card-text">I am sexy and I know it.</p>
          <a href="#" ><i class="fab fa-instagram fa-2x" ></i></a>
          <a href="#" ><i class="fab fa-github fa-2x"></i></a>
          <a href="#" ><i class="fab fa-linkedin fa-2x"></i></a>
        </div>
      </div>
    </div>
  </div>
  <br></br>
  <div class="row">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card">
        <img class="card-img-top" src={require("./jeyaram.jpg")}/>
        <div class="card-body text-center">
          <h4 class="card-title">JeyaRam</h4>
          <h6 class="card-subtitle mb-2 text-muted">Backend Developer</h6>
          <p class="card-text">Jeyaram , he made our website made look like this with his database and microservices code using SpringBoot.</p>
          <a href="#" ><i class="fab fa-instagram fa-2x" ></i></a>
          <a href="#" ><i class="fab fa-github fa-2x"></i></a>
          <a href="#" ><i class="fab fa-linkedin fa-2x"></i></a>
        </div>
      </div>
    </div>
  </div>
<br></br>
  <div class="row">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
      <div class="card">
        <img class="card-img-top" src={require("./kaushal.jpg")}/>
        <div class="card-body text-center">
          <h4 class="card-title">Kaushal Nijhawan</h4>
          <h6 class="card-subtitle mb-2 text-muted">FullStack Developer</h6>
          <p class="card-text">A great leader who takes all responsibily. Speaks whatever is on his Mind. Jeeta ga bhai Jeetaga Hamara Nata Jeetaga.</p>
          <a href="#" ><i class="fab fa-instagram fa-2x" ></i></a>
          <a href="#" ><i class="fab fa-github fa-2x"></i></a>
          <a href="#" ><i class="fab fa-linkedin fa-2x"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
       );
   }
}

export default ProfileShow; 