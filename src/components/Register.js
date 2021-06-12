import React,{useState} from 'react'
import Donor from "./Donor";
import {Nav} from "./Nav";
import Recipient from './Recipient';
import "./Register.css";



function Register() {
    const [showd,setShowd]=useState(true);
    const [showp,setShowp]=useState(false);
    return (
        <>
            <Nav />
        <div className="register">
            <div className="container">
      <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-success" onClick={()=>{setShowp(false);
  setShowd(true);}}
  >Donor</button>
  <button type="button" class="btn btn-success" 
  onClick={()=>{setShowd(false); setShowp(true);}} >Receipent</button>
</div>
  {showd ?<Donor />:null}
  {showp?<Recipient/>:null}


        </div>
        </div>
        </>
    )
}


export default Register
