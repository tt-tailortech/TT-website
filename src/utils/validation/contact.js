/**
 * Validates contact form input data
 * @param {Object} data - The form data to validate
 * @returns {Object} - Validation result with isValid and errors properties
 */
export const validateContactForm = (data) => {
  const errors = {};
  
  // Validate name
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Name is required';
  } else if (data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  // Validate email
  if (!data.email || data.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Validate inquiry type
  if (!data.inquiryType || data.inquiryType.trim() === '') {
    errors.inquiryType = 'Please select an inquiry type';
  }
  
  // Validate message
  if (!data.message || data.message.trim() === '') {
    errors.message = 'Message is required';
  } else if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Validates an email address
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
