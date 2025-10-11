/**
 * Contact.jsx - Simple Side-by-Side Contact Component
 * 
 * This component provides visitors with two clean containers side by side:
 * - Contact Information Container: Personal details and professional links
 * - Contact Form Container: Interactive messaging form
 * 
 * Features simple layout similar to services grid with responsive design.
 * 
 * @author Sanya Bansal
 * @version 2.0.0
 * @since 2025-10-11
 */

// Import React hooks and routing utilities
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

/**
 * Contact Component
 * 
 * Renders a contact section with two side-by-side containers:
 * 1. Contact Information Container - Personal details and professional links
 * 2. Contact Form Container - Interactive messaging form
 * 
 * Features clean layout similar to services grid with responsive design.
 * 
 * @returns {JSX.Element} Complete contact section with side-by-side containers
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
   * Processes form submission with multiple email sending methods:
   * 1. EmailJS service (primary method)
   * 2. Mailto fallback (if EmailJS fails)
   * 
   * @param {Event} e - The form submission event
   */
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (formSubmissionEvent) => {
    // Prevent default form submission behavior
    formSubmissionEvent.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Method 1: Try EmailJS first (requires setup)
      const emailJSServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_your_id';
      const emailJSTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_your_id';
      const emailJSPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';
      
      // EmailJS template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'sanya.bansal.115@gmail.com'
      };
      
      try {
        // Attempt to send via EmailJS
        const response = await emailjs.send(
          emailJSServiceId,
          emailJSTemplateId,
          templateParams,
          emailJSPublicKey
        );
        
        if (response.status === 200) {
          alert(
            `Thank you, ${formData.firstName}!\n\nYour message has been sent successfully to sanya.bansal.115@gmail.com.\n\nI'll get back to you within 4-6 hours!`
          );
          
          // Reset form
          setFormData({ 
            firstName: '', 
            lastName: '', 
            email: '', 
            phone: '', 
            message: '' 
          });
          
          return; // Success, exit function
        }
      } catch (emailJSError) {
        console.log('EmailJS failed, trying fallback method:', emailJSError);
      }
      
      // Method 2: Fallback to mailto method
      const subject = `Portfolio Contact: ${formData.firstName} ${formData.lastName}`;
      const body = `
Hi Sanya,

You have received a new message from your portfolio website:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

---
Sent from your portfolio contact form
      `;
      
      // Create mailto link
      const mailtoLink = `mailto:sanya.bansal.115@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open user's default email client
      window.location.href = mailtoLink;
      
      // Show success message
      alert(
        `Thank you, ${formData.firstName}!\n\nYour email client will open with a pre-filled message to sanya.bansal.115@gmail.com.\n\nPlease send the email from your email client to complete your message.`
      );
      
      // Reset form to initial empty state
      setFormData({ 
        firstName: '', 
        lastName: '', 
        email: '', 
        phone: '', 
        message: '' 
      });
      
    } catch (error) {
      console.error('Error sending message:', error);
      alert(
        `Sorry, there was an error sending your message.\n\nPlease email me directly at:\nsanya.bansal.115@gmail.com\n\nOr try again in a few moments.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Let's Connect</h2>
      <p className="section-subtitle">
        Ready to bring your data science vision to life? Let's discuss your project!
      </p>
      
      {/* Centered Contact Grid - Two Hover Cards */}
      <div className="contact-grid">
        
        {/* Contact Information Card */}
        <div className="contact-card contact-info-card">
          <div className="card-header">
            <span className="card-icon">🤝</span>
            <h3>Get In Touch</h3>
          </div>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">👨‍💻</span>
              <div className="contact-content">
                <strong>Sanya Bansal</strong>
                <p>AI & Data Science Specialist</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-content">
                <strong>Email</strong>
                <p>
                  <a href="mailto:sanya.bansal.115@gmail.com">
                    sanya.bansal.115@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div className="contact-content">
                <strong>Phone</strong>
                <p>
                  <a href="tel:+14377331773">
                    +1 (437) 733-1773
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-content">
                <strong>Location</strong>
                <p>Toronto, Ontario, Canada</p>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-buttons">
                <a 
                  href="https://www.linkedin.com/in/sanya-bansal-824830302/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn linkedin"
                >
                  <span>💼</span>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/Sanyabansal115" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn github"
                >
                  <span>💻</span>
                  GitHub
                </a>
              </div>
            </div>
            
            <div className="availability">
              <span className="status-dot">🟢</span>
              <p>Available for freelance projects and full-time opportunities</p>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="contact-card contact-form-card">
          <div className="card-header">
            <span className="card-icon">📝</span>
            <h3>Send Me a Message</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  required 
                  placeholder="John" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                  required 
                  placeholder="Doe" 
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="john@example.com" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Contact Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="+1 (123) 456-7890" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Project Details / Message *</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder="Tell me about your project, goals, and how I can help..."
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message to Sanya'}
            </button>
          </form>
          
          <div className="form-footer">
            <p>
              <span>⏱️</span>
              Typical response time: 4-6 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}