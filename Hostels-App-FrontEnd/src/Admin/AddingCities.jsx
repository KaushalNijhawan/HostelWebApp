import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class AddingCities extends React.Component{
    constructor(){
        super();
        this.state={
            cityName:"",
            cityImage:"",
            cityDescription:"",
            message:""
        }
    }
    ChangeInCityDescription=(event)=>{
      this.setState({cityDescription : event.target.value});
    }
    ChangeInCityName=(event)=>{
        this.setState({cityName:event.target.value});
    }
    ChangeInCityUrl=(event)=>{
        this.setState({cityImage:event.target.value});
    }
    HandleCitySubmit=(event)=>{
       const city ={
           cityName:this.state.cityName,
           imgUrl:this.state.cityImage,
           cityDescription : this.state.cityDescription
       }
       event.preventDefault();
       Axios.post('http://localhost:8080/addingCities',city)
              .then(res=>{
                 this.setState({message:res.data});
                console.log(res.data);
                
              })
    }
    RedirectionPage=()=>{
        if(this.state.message === "success"){
          return <Redirect to="/admin"></Redirect>
        }
      }
   render(){
       return(<div>
       <div class="jumbotron">
  <h1 class="display-4">HOLA ADMIN!</h1>
  <p class="lead">This is the City Adding Page.</p>
  <hr class="my-4"/>
  <p>Cities will be reflected on Main Site.</p>
 
</div>
      <br></br>
           <div class ="container">       
            <form  style={{width:"50%" , padding:"2px" , margin:"0px 10px 40px 50px"}} onSubmit={this.HandleCitySubmit}>
       <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"><i class="fas fa-city fa-2x"  ></i></label>
    <div class="col-sm-10">
      <input type="text" class="form-control form-control-lg" id="colFormLabelLg" placeholder="City Name" onChange={this.ChangeInCityName}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"><i class="fas fa-image fa-2x"></i></label>
    <div class="col-sm-10">
      <input type="text" class="form-control form-control-lg" id="colFormLabelLg" placeholder="https://example.com" onChange={this.ChangeInCityUrl}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"><i class="fas fa-info fa-2x"></i></label>
    <div class="col-sm-10">
      <input type="text" class="form-control form-control-lg" id="colFormLabelLg" placeholder="Description" onChange={this.ChangeInCityDescription}/>
    </div>
  </div>
        <button type="submit" class="btn btn-info" style={{marginLeft:"412px" , marginTop:"2px"}}>Submit</button>
      </form>
      </div>
      {this.RedirectionPage()}
      </div>
       );
   }
}
export default AddingCities;