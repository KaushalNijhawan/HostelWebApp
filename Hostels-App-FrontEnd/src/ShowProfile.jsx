import React from "react";
import ProfileShow from "./About/Profiles";
import NavDisplay from "./NavBar/navbar";

export class ShowProfiles extends React.Component{
   render(){
       return(
           <ProfileShow>
               <NavDisplay/>
           </ProfileShow>
           
       )
   }
}
