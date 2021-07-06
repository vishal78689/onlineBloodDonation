import React from 'react';
import "./Facts.css";
import { Link } from "react-router-dom";

export default function Facts() {
    return (
        <div>
             <div class="pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="section-head col-sm-12">
          <h4><span>Why Choose</span> Me?</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown book.</p>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_one"><i class="fa fa-globe"></i></span>
            <h6>Bloood Donation</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-anchor"></i></span>
            <h6>Bloood Donation</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_three"><i class="fa fa-hourglass-half"></i></span>
            <h6>Bloood Donation</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_four"><i class="fa fa-database"></i></span>
            <h6>Bloood Donation</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_five"><i class="fa fa-upload"></i></span>
            <h6>Bloood Donation</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_six"><i class="fa fa-camera"></i></span>
            <h6>Bloood Donation</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
          </div>
        </div>
      </div>
      <Link to="/cont" class="nav-link active"><button type="button" class="btn btn-success btn-search btnc">More</button></Link>
    </div>
</div>








        </div>
    )
}
