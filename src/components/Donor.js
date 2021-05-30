import React from 'react'
import "./Donor.css";

export default function Donor() {
    return (
        <div className=".don-w">
         <div className="form">
             <img className="img"
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
  
        <div className="container">
        <form class="row g-3">
  <div class="col-md-4">
    <label for="validationServer01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationServer01" value=" " required />
    {/* <div class="valid-feedback">
      Looks good!
    </div> */}
  </div>
  <div class="col-md-4">
    <label for="validationServer02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationServer02" value=" " required />
    {/* <div class="valid-feedback">
      Looks good!
    </div> */}
  </div>
  <div class="col-md-4">
    <label for="validationServer04" class="form-label">Blood Group</label>
    <select class="form-select" id="validationServer04" aria-describedby="validationServer04Feedback" required>
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



  <div class="col-md-4">
    <label for="validationServer04" class="form-label">State</label>
    <select class="form-select" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled value="">Select State</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="validationServer04" class="form-label">Dist</label>
    <select class="form-select" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled value="">Select Dist</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="validationServer04" class="form-label">Tehasil</label>
    <select class="form-select" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled value="">Select Teh</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
      <option>..</option>
    </select>
  </div>
  
  <div class="col-md-6">
  <label for="exampleFormControlInput1" class="form-label">Mobile no</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="" />
</div>
<div class="col-md-6">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
 <div class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Upload your ID</label>
    <input type="file" class="form-control" aria-label="file example" required />
  </div>
  <div class="input-group">
  <span class="input-group-text">Other Message</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>

  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>

        </div>
        <div class="col-12 alert alert-success" role="alert">
    Thankyou : )
</div>
        </div>
    )
}



