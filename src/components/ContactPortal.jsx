import React, { useState } from "react";
import { User, Building, Phone, Package, MapPin, Send, Loader, CheckCircle, AlertCircle } from "lucide-react";

function ContactPortal() {
  const [formData, setFormData] = useState({
    Name: "",
    company: "",
    ContactNumber: "",
    Description: "",
    officeAddress: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "Description") {
      const words = value.trim().split(/\s+/).filter(Boolean);
      if (words.length <= 50) {
        setFormData((prev) => ({ ...prev, [id]: value }));
        setWordCount(words.length);
      }
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.Name.trim()) newErrors.Name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.Description.trim())
      newErrors.Description = "Description description is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
        // Create FormData object to send as form data
        const formDataToSend = new FormData();
        formDataToSend.append("Name", formData.Name);
        formDataToSend.append("Company", formData.company);
        formDataToSend.append("ContactNumber", formData.ContactNumber);
        formDataToSend.append("Description", formData.Description);
        formDataToSend.append("OfficeAddress", formData.officeAddress);
        
        // Send data to Google Sheets
        // Replace with your Google Apps Script URL
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbx6OZlw4Y4pqZIcJg3gget9gBMKn-tEUj7fwtfjceSzytDFcWKn5wqgwWOYTuj7esTURA/exec",
          {
            method: "POST",
            body: formDataToSend
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          if (data.result === "success") {
            setSubmitStatus("success");
            // Reset form
            setFormData({
              Name: "",
              company: "",
              ContactNumber: "",
              Description: "",
              officeAddress: "",
            });
            setWordCount(0);
          } else {
            throw new Error(data.message || "Failed to submit form");
          }
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.error("Error:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        {/* <h1 style={styles.title}>Contact Portal</h1> */}
        {/* <p style={styles.subtitle}>Get in touch with us - We'd love to hear from you!</p> */}
      </div>
      
      {/* <div style={styles.instructions}>
        <h2 style={styles.instructionsTitle}>How to Set Up Google Sheets Integration</h2>
        <ol style={styles.instructionsList}>
          <li>Create a Google Sheet with columns: Name, Company, ContactNumber, Description, OfficeAddress, Timestamp</li>
          <li>Go to Extensions &gt; Apps Script and paste the provided Google Apps Script code</li>
          <li>Deploy as a web app with execute permissions set to "Anyone"</li>
          <li>Copy the web app URL and replace the placeholder in the JavaScript code</li>
          <li>Test the form to ensure data is being sent to your Google Sheet</li>
        </ol>
      </div> */}
      
      <div style={styles.contactContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Row with Name + Company + Contact Number */}
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label htmlFor="Name" style={styles.formLabel}>
                <User size={18} /> Name <span style={styles.required}>*</span>
              </label>
              <input
                id="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Enter your full name"
                style={{...styles.input, ...(errors.Name ? styles.error : {})}}
              />
              {errors.Name && <p style={styles.errorText}>{errors.Name}</p>}
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="company" style={styles.formLabel}>
                <Building size={18} /> Company <span style={styles.required}>*</span>
              </label>
              <input
                id="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
                style={{...styles.input, ...(errors.company ? styles.error : {})}}
              />
              {errors.company && <p style={styles.errorText}>{errors.company}</p>}
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="ContactNumber" style={styles.formLabel}>
                <Phone size={18} /> Contact Number
              </label>
              <input
                id="ContactNumber"
                value={formData.ContactNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                type="tel"
                style={styles.input}
              />
            </div>
          </div>

          {/* Description Description */}
          <div style={styles.formGroup}>
            <label htmlFor="Description" style={styles.formLabel}>
              <Package size={18} />  Description
              <span style={styles.wordCount}>{wordCount}/50 words</span>
            </label>
            <textarea
              id="Description"
              value={formData.Description}
              onChange={handleChange}
              placeholder="Brief description of the Description you're interested in"
              rows={3}
              style={{...styles.textarea, ...(errors.Description ? styles.error : {})}}
            />
            {errors.Description && <p style={styles.errorText}>{errors.Description}</p>}
          </div>

          {/* OfficeAddress */}
          <div style={styles.formGroup}>
            <label htmlFor="officeAddress" style={styles.formLabel}>
              <MapPin size={18} /> Office Address
            </label>
            <textarea
              id="officeAddress"
              value={formData.officeAddress}
              onChange={handleChange}
              placeholder="Enter your OfficeAddress"
              rows={1}
              style={{...styles.textarea, ...styles.textareaSmall}}
            />
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div style={styles.successMessage}>
              <CheckCircle size={18} />
              Form submitted successfully! We'll contact you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div style={styles.errorMessage}>
              <AlertCircle size={18} />
              There was an error submitting the form. Please try again later.
            </div>
          )}

          <button 
            type="submit" 
            style={styles.submitBtn} 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader size={18} style={{ animation: 'spin 1s linear infinite' }} />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>

     

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    background: 'black',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
    width: '100%',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#CB4D29',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#c4bfbf',
    maxWidth: '600px',
    margin: '0 auto',
  },
  instructions: {
    backgroundColor: '#2D3748',
    borderRadius: '10px',
    padding: '1.5rem',
    marginBottom: '2rem',
    width: '100%',
    maxWidth: '800px',
  },
  instructionsTitle: {
    color: '#CB4D29',
    marginBottom: '1rem',
  },
  instructionsList: {
    paddingLeft: '1.5rem',
    lineHeight: '1.6',
  },
  contactContainer: {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: '#19191b',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  formLabel: {
    fontWeight: '500',
    fontSize: '16px',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    color: 'white',
  },
  required: {
    color: 'red',
    marginLeft: '4px',
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #2e2c2c',
    backgroundColor: '#0f0f0f',
    borderRadius: '8px',
    fontSize: '1rem',
    width: '100%',
    lineHeight: '1.6rem',
    color: 'white',
    transition: 'border-color 0.3s',
  },
  textarea: {
    padding: '0.75rem',
    border: '1px solid #2e2c2c',
    backgroundColor: '#0f0f0f',
    borderRadius: '8px',
    fontSize: '1rem',
    width: '100%',
    lineHeight: '1.6rem',
    color: 'white',
    transition: 'border-color 0.3s',
    fontFamily: 'inherit',
  },
  textareaSmall: {
    minHeight: '40px',
    resize: 'vertical',
  },
  error: {
    borderColor: 'red',
  },
  errorText: {
    fontSize: '0.9rem',
    color: 'red',
    marginTop: '0.25rem',
  },
  wordCount: {
    fontSize: '0.8rem',
    marginLeft: 'auto',
    color: '#c4bfbf',
  },
  successMessage: {
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '4px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  errorMessage: {
    padding: '12px',
    backgroundColor: '#f44336',
    color: 'white',
    borderRadius: '4px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  submitBtn: {
    padding: '1rem',
    background: '#CB4D29',
    color: '#fff',
    alignItems: 'center',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.2s ease-in-out',
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.5rem',
  },
  footer: {
    marginTop: '2rem',
    textAlign: 'center',
    color: '#c4bfbf',
    fontSize: '0.9rem',
  },
};

// Media query for responsive design
const mediaQuery = `@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .contact-container {
    padding: 1.5rem;
  }
  
  body {
    padding: 1rem;
  }
}`;

export default ContactPortal;