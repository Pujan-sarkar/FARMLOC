import React, { useState, useRef } from 'react';
import '../index.css';
import contactImage from '../assets/images/contactimage.png';
import { contactFormSchema } from '../schemas/contactform';
import  { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';


const Contact = () => {
  const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const onSubmit = (data) => {
    console.log(data);
    try{
      setLoading(true);
      axios.post(`${BACKEND_URI}/api/send-email` , data)
      .then((res)=>{ 
        setLoading(false);
        toast.success("Message sent successfully!")
        form.current.reset();
      })
      .catch((err)=>{
        setLoading(false);
        toast.error("Failed to send message. Please try again later.")
      })

    }catch(err){
      toast.error("Failed to send message. Please try again later.")
    }
  };

  const {register, handleSubmit , formState : {errors}} = useForm({
    resolver : zodResolver(contactFormSchema),
    mode : "onChange",
    defaultValues : {
      email : "",
      name : "",
      message : ""
    }
  });

  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <div className="contact-image">
          <img src={contactImage} alt="contact illustration" />
        </div>

        <div className="contact-form">
          <h2>Get in touch</h2>
          <p>
            Have any questions, feedback, or suggestions? We'd love to hear from
            you! <br /> Fill out the form below and our team will get back to
            you as soon as possible.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} ref={form}>
            <input
              placeholder="Enter a Valid Email address"
              required
              {...register("email")}
            />
            {
              errors.email && <span className='error-message'>{errors.email.message}</span>
            }
            <input type="text" placeholder="Enter your Name" required {...register("name")} />
            {
              errors.name && <span className='error-message'>{errors.name.message}</span>
            }

            <textarea
              placeholder="Write your message here..."
              required
              {...register("message")}
            ></textarea>
            {
              errors.message && <span className='error-message'>{errors.message.message}</span>
            }

            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="contact-info"></div>
      </div>
    </section>
  );
};

export default Contact;
