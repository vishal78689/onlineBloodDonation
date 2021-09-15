import React,{useState} from 'react';
import "./Recipient.css";
import {db} from '../firebase'
import { STATES } from "../States";

export default function Recipient() {
  const values1 = {
    fname: "",
    lname: "",
    bgroup: "",
    state: "",
    dist: "",
    mob: "",
    email: "",
    auth:"",
    proof: "",
    hospital:"",
     Rfname:"",
    Rlname:"",
    date:"",
    Rmob:"",
    Remail:"",
    Rproof:"",
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

    db.collection("Patient").add(values)
    
    .then(()=>{
      alert("submitted");
    })
  };


    return (
        <div className="rec-r">
        <div className="form">
            <img className="img"
        src="https://cdn.dribbble.com/users/2620348/screenshots/10495041/shot-cropped-1582915032757.png"
       alt=""
     />
     <h2 className="reg">Request For Blood</h2>
     </div>
     <figure class="text-center">
 <blockquote class="blockquote">
   <h1>Patient Details</h1>
 </blockquote>
</figure>
 


 {/*  -----------------------          patient details ------------------------------------------             */}


       <div className="container">
       <form class="row g-3" onSubmit={handleFormSubmit}>
 <div class="col-md-4">
   <label for="validationServer01" class="form-label">First name</label>
   <input type="text" class="form-control" id="validationServer01"   name="fname"
              value={values.fname}
              onChange={handleInput} required />
 </div>
 <div class="col-md-4">
   <label for="validationServer02" class="form-label">Last name</label>
   <input type="text" class="form-control" id="validationServer02"   name="lname"
              value={values.lname}
              onChange={handleInput} required />
  
 </div>
 <div class="col-md-4">
   <label for="validationServer04" class="form-label">Blood Group</label>
   <select class="form-select" id="validationServer04" aria-describedby="validationServer04Feedback"
     name="bgroup"
     value={values.bgroup}
     onChange={handleInput} required>
     <option selected disabled value="">--Blood Group--</option>
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
   <label for="validationServer04" class="form-label">State</label>
   <select class="form-select" id="validationServer04" aria-describedby="validationServer04Feedback" 
     name="state"
     value={values.state}
     onChange={handleInput}required>
     <option selected disabled>
                Select State
              </option>
              {Object.keys(STATES).map((state) => {
        return <option key={state}>{state}</option>;
      })}
   </select>
 </div>
 <div class="col-md-6">
   <label for="validationServer04" class="form-label">City</label>
   <select class="form-select" id="validationServer04" aria-describedby="validationServer04Feedback"
     name="dist"
     value={values.dist}
     onChange={handleInput} required>
   <option selected disabled name="dist" >
                Select City
              </option>
              { values.state && STATES[values.state].map((city) => {
            return <option key={city}>{city}</option>;
      })}
   </select>
 </div>
 
 <div class="col-md-6">
 <label for="exampleFormControlInput1" class="form-label">Mobile no</label>
 <input type="number" class="form-control" id="exampleFormControlInput1" placeholder=""
   name="mob"
   value={values.mob}
   onChange={handleInput} />
</div>
<div class="col-md-6">
 <label for="exampleFormControlInput1" class="form-label">Email address</label>
 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
   name="email"
   value={values.email}
   onChange={handleInput}/>
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Upload Doctor Prescription</label>
   <input type="file" class="form-control" aria-label="file example"
     name="auth"
     value={values.auth}
     onChange={handleInput} required />
 </div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Upload Patient ID</label>
   <input type="file" class="form-control" aria-label="file example"
     name="proof"
     value={values.proof}
     onChange={handleInput} required />
 </div>

 <div class="input-group">
  <span class="input-group-text">Hospital Name And Address</span>
  <textarea class="form-control" aria-label="With textarea"   name="hospital"
              value={values.hospital}
              onChange={handleInput}></textarea>
</div>


 {/*  -----------------------          contact details ------------------------------------------             */}
  
 <figure class="text-center">
 <blockquote class="blockquote">
   <h1>Contact Details</h1>
 </blockquote>
</figure>
 
       <div className="container">
       <form class="row g-3">
 <div class="col-md-4">
   <label for="validationServer01" class="form-label">First name</label>
   <input type="text" class="form-control" id="validationServer01" 
     name="Rfname"
     value={values.Rfname}
     onChange={handleInput} required />
   {/* <div class="valid-feedback">
     Looks good!
   </div> */}
 </div>
 <div class="col-md-4">
   <label for="validationServer02" class="form-label">Last name</label>
   <input type="text" class="form-control" id="validationServer02" 
     name="Rlname"
     value={values.Rlname}
     onChange={handleInput} required />
   {/* <div class="valid-feedback">
     Looks good!
   </div> */}
 </div>
  <div class="col-md-4">
  <label for="example-datetime-local-input" class="form-label">Date and time</label>
    <input class="form-control" type="datetime-local"    name="date"
              value={values.date}
              onChange={handleInput} id="example-datetime-local-input" />
  </div>

 
 <div class="col-md-6">
 <label for="exampleFormControlInput1" class="form-label">Mobile no</label>
 <input type="number" class="form-control" id="exampleFormControlInput1" placeholder=""   name="Rmob"
              value={values.Rmob}
              onChange={handleInput} />
</div>
<div class="col-md-6">
 <label for="exampleFormControlInput1" class="form-label">Email address</label>
 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
   name="Remail"
   value={values.Remail}
   onChange={handleInput} />
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Contact ID</label>
   <input type="file" class="form-control" aria-label="file example"   name="Rproof"
              value={values.Rproof}
              onChange={handleInput} required />
 </div>
 <div class="input-group">
  <span class="input-group-text">Other Message</span>
  <textarea class="form-control" aria-label="With textarea"   name="message"
              value={values.message}
              onChange={handleInput}></textarea>
</div>


 
</form>
</div>
<div class="col-12">
   <button class="btn btn-primary" type="submit">Submit form</button>
 </div>
 </form>
       </div>
       <div class="col-12 alert alert-success" role="alert">
    We will Update you soon
</div>
       </div>
       
    )
}
