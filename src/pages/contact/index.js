import Head from 'next/head';
import { useState, useEffect } from 'react';
import { validateContactForm } from '../../utils/validation/contact';

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'general',
    message: ''
  });
  
  // Form status state
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false
  });
  
  // Validation state
  const [errors, setErrors] = useState({});
  
  // Touch tracking (which fields have been interacted with)
  const [touched, setTouched] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Mark field as touched
    if (!touched[name]) {
      setTouched(prev => ({ ...prev, [name]: true }));
    }
  };
  
  // Handle field blur - validate on blur
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };
  
  // Validate form on touched fields changing
  useEffect(() => {
    // Only validate fields that have been touched
    const touchedFields = Object.keys(touched).filter(key => touched[key]);
    
    if (touchedFields.length > 0) {
      const validation = validateContactForm(formData);
      
      // Only keep errors for touched fields
      const touchedErrors = {};
      touchedFields.forEach(field => {
        if (validation.errors[field]) {
          touchedErrors[field] = validation.errors[field];
        }
      });
      
      setErrors(touchedErrors);
    }
  }, [formData, touched]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach(key => { allTouched[key] = true; });
    setTouched(allTouched);
    
    // Validate all fields
    const validation = validateContactForm(formData);
    setErrors(validation.errors);
    
    // If validation passes, submit the form
    if (validation.isValid) {
      try {
        // Set loading state
        setFormStatus(prev => ({ ...prev, loading: true }));
        
        // Submit form data to API endpoint
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
          // Success
          setFormStatus({
            submitted: true,
            error: false,
            loading: false,
            message: result.message || 'Thank you! Your message has been received. We\'ll be in touch soon.'
          });
          
          // Reset form after submission
          setFormData({
            name: '',
            email: '',
            company: '',
            inquiryType: 'general',
            message: ''
          });
          setTouched({});
          setErrors({});
        } else {
          // API returned an error
          setFormStatus({
            submitted: false,
            error: true,
            loading: false,
            message: result.message || 'Something went wrong. Please try again.'
          });
          
          // If there are field-specific errors from the API, show them
          if (result.errors) {
            setErrors(result.errors);
          }
        }
      } catch (error) {
        // Network or other error
        console.error('Form submission error:', error);
        setFormStatus({
          submitted: false,
          error: true,
          loading: false,
          message: 'A network error occurred. Please try again.'
        });
      }
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Tailored Tech Solutions</title>
        <meta 
          name="description" 
          content="Get in touch with the Tailored Tech team to discuss your technology needs and explore custom solutions."
        />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Reach out to discuss how we can create a tailored solution for your needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Information */}
              <div className="md:w-2/5">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                
                <div className="bg-lightgray p-6 rounded-lg shadow-sm mb-8">
                  <div className="mb-6">
                    <h3 className="font-bold text-primary mb-2">Email</h3>
                    <p className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 mr-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      info@tailoredtech.com
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-bold text-primary mb-2">Phone</h3>
                    <p className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 mr-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +1 (555) 123-4567
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-bold text-primary mb-2">Office Location</h3>
                    <p className="flex items-start text-gray-700">
                      <svg className="h-5 w-5 mr-3 mt-0.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>
                        123 Tech Avenue<br />
                        San Francisco, CA 94107<br />
                        United States
                      </span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-primary mb-2">Hours</h3>
                    <p className="flex items-start text-gray-700">
                      <svg className="h-5 w-5 mr-3 mt-0.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>
                        Monday - Friday<br />
                        9:00 AM - 5:00 PM PST
                      </span>
                    </p>
                  </div>
                </div>
                
                {/* Response Time */}
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">Response Time</h3>
                  <p className="text-gray-700">
                    We respond to all inquiries within 1-2 business days. For urgent matters, please indicate this in your message.
                  </p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:w-3/5">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                
                {formStatus.submitted ? (
                  <div className="bg-green-100 text-green-700 p-6 rounded-lg mb-6">
                    <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
                    <p>{formStatus.message}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-lightgray p-6 rounded-lg shadow-sm">
                    {/* Form Status Messages */}
                    {formStatus.error && (
                      <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                        <p className="font-medium">Error</p>
                        <p>{formStatus.message}</p>
                      </div>
                    )}
                    {/* Name */}
                    <div className="mb-4">
                      <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-primary'}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    {/* Email */}
                    <div className="mb-4">
                      <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-primary'}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                    
                    {/* Company */}
                    <div className="mb-4">
                      <label htmlFor="company" className="block font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    {/* Inquiry Type */}
                    <div className="mb-4">
                      <label htmlFor="inquiryType" className="block font-medium text-gray-700 mb-1">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-2 rounded-md border ${errors.inquiryType ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.inquiryType ? 'focus:ring-red-500' : 'focus:ring-primary'}`}
                      >
                        <option value="general">General Inquiry</option>
                        <option value="solution">Solution Information</option>
                        <option value="consultation">Request Consultation</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                      </select>
                    </div>
                    
                    {/* Message */}
                    <div className="mb-6">
                      <label htmlFor="message" className="block font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        rows="5"
                        className={`w-full px-4 py-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-500' : 'focus:ring-primary'}`}
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-opacity-90 transition-colors duration-300 relative"
                      disabled={formStatus.loading}
                    >
                      {formStatus.loading ? (
                        <>
                          <span className="opacity-0">Send Message</span>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </div>
                        </>
                      ) : 'Send Message'}
                    </button>
                    
                    <p className="text-sm text-gray-600 mt-4">
                      By submitting this form, you agree to our <a href="/privacy-policy" className="text-primary hover:text-secondary">Privacy Policy</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Location</h2>
            
            {/* This would be replaced with an actual map integration */}
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 font-medium">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
