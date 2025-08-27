import React from 'react'
import '../index.css';
import contactImage from '../assets/images/contactimage.png' ;
import { useState,useRef } from "react"

const contact = () => {

  const [loading, setLoading] = useState(false);
  const form = useRef()
  const [success ,setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  return (
    <section id='contact' className="contact-section">
      <div className="contact-card">
      <div className='contact-image'>
      <img src={contactImage} alt='contact illustration'/>
      </div>
        <div className="contact-form">
            <h2>Get in touch</h2>
            <p>Have any questions, feedback, or suggestions? We'd love to hear from you! <br/> Fill out the form below and our team will get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Enter a Valid Email adress' required></input>
                <input type='text' placeholder='Enter your Name' required></input>
                <button
                type="submit"
                disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                </button>
                {success && <p>Message sent Successfully!</p>}
            </form>
        </div>

        <div className='contact-info'>

        </div>
        </div>
    </section>
  )
}

export default contact