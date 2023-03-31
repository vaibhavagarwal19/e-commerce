import React from 'react';
import './contact.css'
import Navbar from './Navbar';

function ContactUs() {
  return (
    <div>
        <Navbar/>
      <h1>Contact Us</h1>
      <p>Have a question or comment? Fill out the form below and we'll get back to you as soon as possible!</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
