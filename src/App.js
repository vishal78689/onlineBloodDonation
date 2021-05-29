import React from "react";
import './App.css';
import {Nav} from "./components/Nav";
import Slider from './components/Slider';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import Register from "./components/Register";
import { Slide } from "./components/Slide";
import Signup from "./components/Signup";
import Search from "./components/Search";
import Fact from "./components/Fact";


function App() {
  return (
    <div className="App">

     <Router>
     
     <Switch>
     <Route  exact path="/">
       <Nav />
      <Slider slides={Slide} />
      <Search/>
      <Fact/>
    
      
     </Route>
     <Route path="/register">
       <Register/>
     
     </Route>
    
     <Route path="/signup">
       <Signup/>
     
     </Route>
  
  

     </Switch>

   </Router>
    

    </div>
  );
}

export default App;
