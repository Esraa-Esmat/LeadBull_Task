import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name</label>
        <input type="text" name="name" />

        <label>Email</label>
        <input type="email" name="email" />

        <label>Message</label>
        <textarea name="message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
