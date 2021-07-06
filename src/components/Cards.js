import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className='cards'>
      <h1 className="texttop">Why Should Donate Blood ?? </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image7.jpg'
              text='The number one reason donors say they give blood is because they "want to help others.'
              label=''
              path='/services'
            />
            <CardItem
              src='images/image8.jpg'
              text='Two most common reasons cited by people who dont give blood are Never thought about it and I dont like needles.'
              label=''
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image6.jpg'
              text='If you began donating blood at age 18 and donated every 90 days until you reached 60, you would have donated 30 gallons of blood, potentially helping save more than 500 lives!'
              label=''
              path='/services'
            />
            <CardItem
              src='images/image7.jpg'
              text='Type O-negative blood is needed in emergencies before the patients blood type is known and with newborns who need blood.'
              label=''
              path='/products'
            />
            <CardItem
              src='images/image8.jpg'
              text='0.4 percent of people have AB-blood type. AB-type blood donors are universal donors of plasma, which is often used in emergencies, for newborns and for patients requiring massive transfusions.'
              label=''
              path='/sign-up'
            />
          </ul>
        </div>
        <Link to="/about-section" class="nav-link active"><button type="button" class="btn btn-success btn-search btnc">More</button></Link>
      
      </div>
    </div>
  );
}

export default Cards;
