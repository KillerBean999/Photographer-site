import React, { useState } from 'react';
import ContactForm from '../Components/ContactForm';
import BirthdayImg from '../images/eventImg/brithdays/birthday2.jpg'
import ConsertImg from '../images/eventImg/conserts/consert5.jpg'
import WeddingsImg from '../images/eventImg/weddings/wedding1.jpg'

export default function Home() {
  
  return (
  <>
    <div className="home">
      <div className="img-container">
        <img src={BirthdayImg} alt="Bday" />
        <img src={ConsertImg} alt="Consert" />
        <img src={WeddingsImg} alt="Wedding" />
      </div>
      <h1>Expirienced Photographer for Every Lifestyles</h1>
      <ContactForm />
    </div>
  </>
  );
}
