import React from "react";
import './App.css';
import {Nav} from "./components/Nav";
import Slider from './components/Slider';
import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import Register from "./components/Register";
import { Slide } from "./components/Slide";


function App() {
  return (
    <div className="App">

     <Router>
     
     <Switch>
     <Route  exact path="/">
       <Nav />
      <Slider slides={Slide} />
    
      
     </Route>
     <Route path="/register">
       <Register/>
     
     </Route>
  

     </Switch>

   </Router>
    

    </div>
  );
}

export default App;
