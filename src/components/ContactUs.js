import React from 'react'
import "./contactus.css";
import {Nav} from "./Nav";
import Footer from './Footer';

function ContactUs() {
    return (
        <>
        <Nav />
        <div className="cont">
    <div class="contact-section">
      <div class="contact-info">
        <div><i class="fas fa-map-marker-alt" />Address, Bangalore, India</div>
        <div><i class="fas fa-envelope" />contact@email.com</div>
        <div><i class="fas fa-phone" />+00 0000 000 000</div>
        <div><i class="fas fa-clock" />Mon - Fri 8:00 AM to 5:00 PM</div>
      </div>
      <div class="contact-form">
        <h2>Contact Us</h2>
        <form class="contact" action="" method="post">
          <input type="text" name="name" class="text-box" placeholder="Your Name" required />
          <input type="email" name="email" class="text-box" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <input type="submit" name="submit" class="send-btn" value="Send" />
        </form>
      </div>
    </div>
        </div>
        <Footer />
        </>
    )
}

export default ContactUs
