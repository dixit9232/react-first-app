import { Form } from 'react-router';
import '../css/Contact.css';

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions? We&apos;d love to hear from you!</p>
      <Form method='POST' action='/contact' className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />

        <button type="submit">Send Message</button>
      </Form>
    </div>
  );
};
