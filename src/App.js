import React from "react";
import './App.css';
import {Nav} from "./components/Nav";
import Slider from './components/Slider';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import Register from "./components/Register";
import AboutUs from "./components/Aboutus";
import { Slide } from "./components/Slide";
import ContactUs from "./components/ContactUs";
import Search from "./components/Search";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Facts from "./components/Facts";





function App() {
  return (
    <div className="App">

     <Router>
     
     <Switch>
     <Route  exact path="/">
       <Nav/>
      <Slider slides={Slide} />
      <Search/>
      <Cards />
      <Facts />
      <Footer />
     </Route>



     <Route path="/register">
       <Register/>
     </Route>

     <Route path="/about-section">
       <AboutUs/>
     </Route>

     <Route path="/cont">
       <ContactUs/>
     </Route>

    
     
     
    
  
  

     </Switch>

   </Router>
    

    </div>
  );
}

export default App;
