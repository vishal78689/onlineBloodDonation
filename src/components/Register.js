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
            <div className="container reg">
            {/* <div className="btnmob414">
   <button type="button" class="btn414" onClick={()=>{setShowp(false);
  setShowd(true);}}
  >D</button>
  <button type="button" class="btn414" 
  onClick={()=>{setShowd(false); setShowp(true);}} >R</button>
   </div> */}

      <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-success btnrd" onClick={()=>{setShowp(false);
  setShowd(true);}}
  >Donor</button>
  <button type="button" class="btn btn-success btnrd" 
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
