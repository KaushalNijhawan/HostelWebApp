import React from 'react';
import Axios from 'axios';
import NavDisplay from '../NavBar/navbar';

class UsersShowAdmin extends React.Component{
   constructor(){
       super();
       this.state={
        usersArray:[]
       }
   }
   
   
    componentDidMount= () =>{
        Axios.get('http://localhost:8080/hostels/getAllUsers')
        .then(res=>{
            this.setState({
                usersArray : res.data
            
            })
        }) 
    }
    render(){
        let idata = this.state.usersArray.filter((host) => host.type!="Admin");
        
        const data = idata.map((host , i) => (
            <tr>
            <th scope="row">{i+1}</th>
          <td>{host.userName}</td>
          <td>{host.email}</td>
          <td>{host.type}</td>
          </tr>
    
          ));
     return(<div>
        <NavDisplay/>
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">HOLA!</h1>
    <p class="lead">List of the Users Registered!</p>
  </div>
  
</div>
        <table class="table" style={{marginLeft:"50px" , width:"90%"}}>
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">User Type</th>
          </tr>
        </thead>
        <tbody>
         {data}
        </tbody>
      </table>
      </div>
     );
 }
}
export default UsersShowAdmin;