import React from 'react';
import './Contect.css';

export default function Contect() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    e.target.reset();
  };

  return (
    <div className='container' id='contect'>
      <div className='Title'>
        <h6 className=' text-center'>Get in touch</h6>
        <h1>Contact Me</h1>
      </div>
      <div className='content-maindiv'>
        <iframe
          className="map-box"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842920963!2d72.41492881144384!3d23.020474101422135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1743576414213!5m2!1sen!2sin"
        ></iframe>
        <form className="Con-Main" onSubmit={handleSubmit}>
          <h3 className='c-haeding'>Contact Form</h3>
          <div className="C-Form">
            <input type="text" id="name" placeholder="Name" required />
            <input type="email" id="email" placeholder="Email Address" required />
          </div>
          <textarea id="message" placeholder="Your Message" required></textarea>
          <div className="button">
            <button className='c-btn' type="submit">
              <i className="bi bi-send-fill"></i> Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}