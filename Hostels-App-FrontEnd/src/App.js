import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Home';
import RoutingHostels from './hostels-routing';
import HostelDetails from './HostelDisplay/HostelDetails';
import ProfileShow from './About/Profiles';
import AdminDisplay from './Admin/adminDisplay';
import LoggedInNabar from './NavBar/LoggedInNavbar';
import CustomerNavbar from './NavBar/CustomerNavbar';
import { ShowProfiles } from './ShowProfile';


function App() {
  return (
     <RoutingHostels/>
    //<CustomerNavbar/>
    //<ShowProfiles/>
  );
}

export default App;
