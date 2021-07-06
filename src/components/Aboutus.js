import React from 'react';
import "./aboutus.css";
import {Nav} from "./Nav";
import Footer from './Footer';

function Aboutus() {
    return (
        <div className="ttabt">
       <Nav/>
       <div className="abt">
         
       <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       About Us
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
         
       
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 img-fluid" src="/images/image7.jpg" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img-fluid" src="/images/slider2.jpg" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img-fluid" src="/images/image8.jpg" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<p>
Strategic Approach
We create trusted and innovative solutions to help our customers achieve their goals.
Core Operating Values
RESPECT
We value each other.
INTEGRITY
We keep our commitments.
SYNERGY
We pursue open communication and practice teamwork to achieve our goals.
EXCELLENCE
We pursue superior performance because someone’s life depends on it.
SERVICE
We partner with our customers in pursuit of our life-saving mission.
</p>



       
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
       Mission
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      <img class="d-block w-100 img-fluid imgvm" src="/images/image8.jpg" alt="Third slide" />
       <p>Saving lives by providing blood and biomedical solutions.
  <br/>
What this means to you:<br/>
Through effective outreach to donors, continual development of biomedical expertise, and brand-building partnerships with blood drive sponsors, health care facilities, and global medical providers, Memorial Blood Centers connects those who need blood with those generous volunteers who give, and delivers the highest level of technical expertise and laboratory testing services to customers around the world.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
       Vision
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      <img class="d-block w-100 img-fluid imgvm" src="/images/sliderpic1.jpg" alt="Third slide" />
      <p>To be the best blood center.
<br/>
What this means to you:<br/>
Dedicated to quality, integrity, service, and excellence in everything we do, Memorial Blood Centers works to ensure reliable and streamlined access to an adequate supply of thoroughly tested and safe blood and related products wherever they are needed, and to become the industry’s standard-bearer in providing the highest level of service to all the various stakeholders we serve—from financial contributors and corporate blood drive sponsors to in vitro fertilization clinics, hospital partners, and biotechnology companies.</p>
      </div>
    </div>
  </div>
</div>

         
</div>
<Footer />
        </div>
    )
}

export default Aboutus;
