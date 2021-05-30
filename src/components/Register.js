import React from 'react'
import Donor from "./Donor";
import {Nav} from "./Nav";
import Recipient from './Recipient';
import "./Register.css";



function Register() {
    return (
        <>
            <Nav />
        <div className="register">
            <div className="container">
      <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-success">Donor</button>
  <button type="button" class="btn btn-success"  >Receipent</button>
</div>
  <Donor />
  <Recipient />


        </div>
        </div>
        </>
    )
}


export default Register
