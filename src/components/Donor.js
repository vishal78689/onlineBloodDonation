import React, { useState } from "react";
import "./Donor.css";
import {db} from '../firebase'
import { STATES } from "../States";


export default function Donor() {
  const values1 = {
    fname: "",
    lname: "",
    bgroup: "",
    state: "",
    dist: "",
    mob: "",
    email: "",
    proof: "",
    message: "",
  };
  const [values, Setvalues] = useState(values1);

  const handleInput = (e) => {
    var { name, value } = e.target;
    Setvalues({
      ...values,
      [name]: value,
    });
  };
  const handleFormSubmit = (event) => {
    
    event.preventDefault();

    db.collection("Donor").add(values)
    
    .then(()=>{
      alert("submitted");
    })
  };

  return (
    <div className=".don-w " >
      <div className="form ">
        <img
          className="img"
          src="https://cdn.dribbble.com/users/2620348/screenshots/10495041/shot-cropped-1582915032757.png"
          alt=""
        />
        <h2 className="reg">Register to become a Donor</h2>
      </div>
      <figure class="text-center">
        <blockquote class="blockquote">
          <h1>Donor Details</h1>
        </blockquote>
      </figure>

      <div className="container ">
        <form class="row g-3" onSubmit={handleFormSubmit}>
          <div class="col-md-4">
            <label for="validationServer01" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationServer01"
              name="fname"
              value={values.fname}
              onChange={handleInput}
              required
            />
            {/* <div class="valid-feedback">
      Looks good!
    </div> */}
          </div>
          <div class="col-md-4">
            <label for="validationServer02" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationServer02"
              name="lname"
              onChange={handleInput}
              value={values.lname}
              required
            />
            {/* <div class="valid-feedback">
      Looks good!
    </div> */}
          </div>
          <div class="col-md-4">
            <label for="validationServer04" class="form-label">
              Blood Group
            </label>
            <select
              class="form-select"
              id="validationServer04"
              aria-describedby="validationServer04Feedback"
              name="bgroup"
              onChange={handleInput}
              value={values.bgroup}
              required
            >
              <option selected disabled>
                --Blood Group--
              </option>
              <option>A-</option>
              <option>A+</option>
              <option>AB-</option>
              <option>AB+</option>
              <option>B-</option>
              <option>B+</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>

          <div class="col-md-6">
            <label for="validationServer04" class="form-label">
              State
            </label>
            <select
              class="form-select"
              id="validationServer04"
              aria-describedby="validationServer04Feedback"
              onChange={handleInput}
              name="state"
              value={values.state}
              required
            >
              <option selected disabled>
                Select State
              </option>
              {Object.keys(STATES).map((state) => {
        return <option key={state}>{state}</option>;
      })}
            
            </select>
          </div>
          <div class="col-md-6">
            <label for="validationServer04" class="form-label">
                City
            </label>
            <select
              class="form-select"
              id="validationServer04"
              aria-describedby="validationServer04Feedback"
              name="dist"
              // value={values.dist}

              onChange={handleInput}
              required
            >
              <option selected disabled name="dist" >
                Select City
              </option>
              { values.state && STATES[values.state].map((city) => {
            return <option key={city}>{city}</option>;
      })}
            </select>
          </div>
       

          <div class="col-md-6">
            <label for="exampleFormControlInput1" class="form-label">
              Mobile no
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              onChange={handleInput}
              placeholder=""
              name="mob"
              value={values.mob}
            />
          </div>
          <div class="col-md-6">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              onChange={handleInput}
              placeholder="name@example.com"
              name="email"
              value={values.email}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Upload your ID
            </label>
            {/* <input
              type="file"
              class="form-control"
              aria-label="file example"
              accept="image/png, image/jpeg"
              name="proof"
               onChange={(e)=>{ Setvalues({
                ...values,
                ["proof"]: e.target.files[0]})}}
              // onChange={handleInput}
              value={values.proof}
              required
            /> */}
            <input
          type="file"
          class="form-control"
       
          onChange={(e)=>{ Setvalues({
            ...values,
            ["proof"]: e.target.files[0]})}}
            required
          
        />
          </div>
          <div class="input-group">
            <span class="input-group-text">Other Message</span>
            <textarea
              class="form-control"
              aria-label="With textarea"
              name="message"
              onChange={handleInput}
              value={values.message}
            ></textarea>
          </div>

          <div class="col-12">
            <button class="btn btn-primary" type="submit" onClick={() => console.log(values)}
>
              Submit form
            </button>
          </div>
        </form>
        
      </div>
      <div class="col-12 alert alert-success" role="alert">
        Thankyou : )
      </div>
    </div>
  );
}

