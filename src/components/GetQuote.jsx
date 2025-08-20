import React, { useState } from "react";
import { Plus, Minus, Upload, ChevronDown } from "lucide-react";
import EmiratesDropdown from "./EmiratesDropdown";
import './GetQuote.css';

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbzpo_hNgT_DZJAou3ye5msB60dOOMqwjf-FcUvp_FwHbjpnn8lEwifUi6-Um2H2MMIP/exec";

export default function GetQuote() {
  const [area, setArea] = useState(0);
  const [unit, setUnit] = useState("ft²");
  const [bathrooms, setBathrooms] = useState(0);
  const [bed, setBed] = useState(0);

  const handleAreaChange = (e) => setArea(Number(e.target.value));
  const handleUnitChange = (e) => setUnit(e.target.value);
  const incrementBathrooms = () => setBathrooms((prev) => prev + 1);
  const decrementBathrooms = () =>
    setBathrooms((prev) => (prev > 0 ? prev - 1 : 0));
  const incrementBed = () => setBed((prev) => prev + 1);
  const decrementBed = () => setBed((prev) => (prev > 0 ? prev - 1 : 0));

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  const [select, setSelect] = useState("Light");
  const descriptions = {
    Light: ["Furnishing", "Styling", "Paint", "Electrical"],
    Standard: ["Demolishing", "Renovation", "Bathrooms", "Fit-out"],
    Advanced: ["Replanning", "Extension", "Furniture"],
  };

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    comments: "",
    emirate: "",
    fileBase64: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () =>
      setForm((prev) => ({ ...prev, fileBase64: reader.result }));
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          area,
          unit,
          bathrooms,
          bed,
          selectedService: selected,
          selectedType: select,
          timestamp: new Date().toISOString(),
        }),
      });
      alert("Enquiry submitted successfully, Thank you for being a part of team LPI");
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        comments: "",
        emirate: "",
        fileBase64: "",
      });
      setSelected("");
      setArea(0);
      setBathrooms(0);
      setBed(0);
      setSelect("Light");
    } catch (err) {
      console.error(err);
      alert("Oops – something went wrong.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="gradient-bg" id='get'>
      <div className="container">
        <div className="quote-card">
          {/* Header */}
          <div className="header-gradient">
            <h1
              style={{ 
                fontSize: "2.2rem", 
                fontWeight: "500", 
                textAlign: "start",
                marginTop: "-20px",
                marginBottom: "-20px",
                cursor: "pointer"
              }}
              onClick={() => window.location.href = "/"}
            >
              Get a Quote
            </h1>
          </div>

          {/* Form Content */}
          <div className="form-content">
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">Full Name</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Company Name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">Phone Number</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-field" >
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-field-full">
                <label className="form-label">Location</label>
                <EmiratesDropdown
                  value={form.emirate}
                  onChange={(emirate) => setForm({ ...form, emirate })}
                />
              </div>

              {/* Property Details */}
              <div className="property-section">
                <h3 className="section-title">Property Details</h3>
                <div className="property-grid">
                  {/* Area Selection */}
                  <div className="property-card">
                    <label className="form-label">
                      Area: {area} {unit}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      step="10"
                      value={area}
                      onChange={handleAreaChange}
                      className="range-slider"
                    />
                    <select
                      value={unit}
                      onChange={handleUnitChange}
                      className="form-select"
                    >
                      <option value="ft²">ft²</option>
                      <option value="m²">m²</option>
                    </select>
                  </div>

                  {/* Bedrooms Counter */}
                  <div className="property-card">
                    <label className="form-label">Number of Beds.</label>
                    <div className="counter-container">
                      <button
                        type="button"
                        onClick={decrementBed}
                        className="counter-btn"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="counter-value">{bed}</span>
                      <button
                        type="button"
                        onClick={incrementBed}
                        className="counter-btn"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Bathrooms Counter */}
                  <div className="property-card">
                    <label className="form-label">Number of Bath.</label>
                    <div className="counter-container">
                      <button
                        type="button"
                        onClick={decrementBathrooms}
                        className="counter-btn"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="counter-value">{bathrooms}</span>
                      <button
                        type="button"
                        onClick={incrementBathrooms}
                        className="counter-btn"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="form-field-full">
                <label className="form-label">Services</label>
                <div className="dropdown-custom">
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="dropdown-btn"
                  >
                    <span className={selected ? "text-dark" : "text-muted"}>
                      {selected || "Select Service"}
                    </span>
                    <ChevronDown className={`chevron-rotate ${isOpen ? "open" : ""}`} size={20} />
                  </button>
                  {isOpen && (
                    <div className="dropdown-menu-custom">
                      <div
                        onClick={() => handleSelect("Design + Consultation")}
                        className="dropdown-item-custom"
                      >
                        Design + Consultation
                      </div>
                      <div
                        onClick={() => handleSelect("Design + Execution")}
                        className="dropdown-item-custom"
                      >
                        Design + Execution
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Service Types */}
              <div className="property-section">
                <h3 className="section-title">Service Type</h3>
                <div className="service-type-grid">
                  {Object.keys(descriptions).map((type) => (
                    <label key={type} className={`service-type-card ${select === type ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="serviceType"
                        value={type}
                        checked={select === type}
                        onChange={() => setSelect(type)}
                        className="service-radio"
                      />
                      <div className="service-content">
                        <span className="service-type-title">
                          {type}
                        </span>
                        <ul className="service-list">
                          {descriptions[type].map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">Comments</label>
                  <textarea
                    name="comments"
                    value={form.comments}
                    onChange={handleChange}
                    rows={4}
                    className="form-control"
                    placeholder="Tell us more about your project requirements..."
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Upload File</label>
                  <div className="upload-area">
                    <Upload className="upload-icon" size={24} />
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="file-input"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="upload-label"
                    >
                      Click to upload
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={sending}
                className="submit-btn"
              >
                {sending ? (
                  <div className="loading-container">
                    <div className="spinner" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}