import { useState } from "react";

import styles from "./ContactForm.module.css";


export default function ContactsForm () {

    const [formData, setFormData] = useState({ email: '', phone: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleChange = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        // Send form data to server (e.g., using fetch API)
        const response = await fetch('/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
  
        alert('Form submitted successfully!');
        setIsSubmitting(false);
      } catch (error) {
        console.error('Error submitting form:', error);
        setIsSubmitting(false);
      }
    };


    return (
      
        <form onSubmit={handleSubmit}>
          <p>Изпрати запитване</p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
    
    
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          
    
    
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          
    
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      );
}