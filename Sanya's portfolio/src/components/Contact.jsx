/**
 * Contact.jsx - Contact Information and Form Component
 * 
 * This component provides visitors with multiple ways to contact Sanya Bansal.
 * It includes a contact form for direct messaging and displays contact information
 * including email, phone, location, and social media links.
 * 
 * Features:
 * - Interactive contact form with validation
 * - Form state management with React hooks
 * - Contact information display with clickable links
 * - Form submission handling with user feedback
 * - Responsive design for all device sizes
 * - Navigation integration after form submission
 * 
 * @author Sanya Bansal
 * @version 1.0.0
 * @since 2025-09-30
 */

// Import React hooks and routing utilities
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Contact Component
 * 
 * Renders a contact section with form and contact information.
 * Manages form state and handles form submission with navigation.
 * 
 * @returns {JSX.Element} Complete contact section with form and info
 */
export default function Contact() {
  // Navigation hook for programmatic routing
  const navigate = useNavigate();
  
  /**
   * Form Data State Management
   * 
   * Uses React useState hook to manage form input values.
   * Initial state contains empty strings for all form fields.
   * 
   * @type {Object} formData - Current form input values
   * @property {string} firstName - User's first name
   * @property {string} lastName - User's last name  
   * @property {string} email - User's email address
   * @property {string} phone - User's phone number (optional)
   * @property {string} message - User's message content
   */
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  /**
   * Form Input Change Handler
   * 
   * Updates the form state when user types in any input field.
   * Uses the spread operator to maintain other field values while
   * updating the specific field that changed.
   * 
   * @param {Event} e - The input change event
   * @param {string} e.target.name - The name attribute of the input field
   * @param {string} e.target.value - The current value of the input field
   */
  const handleChange = (inputChangeEvent) => {
    setFormData({ 
      ...formData, 
      [inputChangeEvent.target.name]: inputChangeEvent.target.value 
    });
  };

  /**
   * Form Submission Handler
   * 
   * Processes form submission by preventing default browser behavior,
   * displaying a confirmation message with the submitted data, clearing
   * the form, and redirecting to the home page.
   * 
   * Note: In a production environment, this would send data to a backend
   * service or email API instead of just showing an alert.
   * 
   * @param {Event} e - The form submission event
   */
  const handleSubmit = (formSubmissionEvent) => {
    // Prevent default form submission behavior
    formSubmissionEvent.preventDefault();
    
    // Display confirmation message with submitted data
    alert(
      `Thank you, ${formData.firstName}!\n\nYour message has been received:\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Message: ${formData.message}\n\nRedirecting to home...`
    );
    
    // Reset form to initial empty state
    setFormData({ 
      firstName: '', 
      lastName: '', 
      email: '', 
      phone: '', 
      message: '' 
    });
    
    // Navigate to home page after brief delay
    setTimeout(() => navigate('/'), 500);
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        I'd love to hear from you! Let's discuss your project or just connect.
      </p>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div>
              <strong>Email</strong>
              <p>sanya.bansal.115@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <div>
              <strong>Phone</strong>
              <p>+1 (437) 733-1773</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <strong>Location</strong>
              <p>Toronto, Ontario, Canada</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🌐</span>
            <div>
              <strong>Connect</strong>
              <p>
                <a href="https://www.linkedin.com/in/sanya-bansal-824830302/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
                <a href="https://github.com/Sanyabansal115" target="_blank" rel="noopener noreferrer"> GitHub</a>
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (123) 456-7890" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Your message..." rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}