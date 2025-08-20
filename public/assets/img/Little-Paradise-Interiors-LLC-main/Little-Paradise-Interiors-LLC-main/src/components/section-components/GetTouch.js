import React, { useState } from 'react';

const categories = [
  'Furniture', 'Lighting', 'Floor Finishes', 'Wall Finishes', 'Paints',
  'Sanitary-ware', 'Hardware', 'Ceiling Finishes', 'Fabrics', 'Timber',
  'Veneer', 'Leather', 'Metal', 'Glass', 'Curtains', 'Accessories',
  'Kitchen', 'Technology', 'Special Finishes', 'Doors, Windows & Facades',
  'Indoor Plants & Vertical Gardens', 'Other Miscellaneous Products',
  'Acoustic Panels', 'Signage', 'HVAC',
  'Electrical, Data Networking, ELV, CCTV', 'Fit-out Contractors', 'Others',
];

const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzX9EP5U78nk7Yiz05kVHSBee6GGlKhJkaZuqvSuFq6KQkbeUeEVJb3ky5f2V5o86eC/exec';

const GetTouch = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [form, setForm] = useState({
    firstName: '', lastName: '', location: '', residency: '', dwelling: '', bhk: '',
    phone: '', email: '', budget: '', website: '', catalogues: '', fileBase64: '',
  });
  const [sending, setSending] = useState(false);

  const handleCategoryClick = (cat) => setSelectedCategory(cat);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setForm((prev) => ({ ...prev, fileBase64: reader.result }));
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    try {
      await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          category: selectedCategory || '',
          timestamp: new Date().toISOString(),
        }),
      });
      alert('Thank you! Your details were sent 🚀');
      setForm({
        firstName: '', lastName: '', location: '', residency: '', dwelling: '', bhk: '',
        phone: '', email: '', budget: '', website: '', catalogues: '', fileBase64: '',
      });
      setSelectedCategory(null);
    } catch (err) {
      console.error(err);
      alert('Oops – something went wrong.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <style>{`
        .get-touch-section {
          width: 100%;
          padding: 80px 20px;
          background: linear-gradient(135deg, #fbe4d8, #f6f7f8);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin-top:-150px
        }
        .get-touch-title {
          text-align: center;
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 40px;
          color: #CB4D29;
        }
        .category-wrapper { margin-bottom: 32px; }
        .category-subtitle {
          margin: 0 0 16px 0;
          font-size: 14px;
          color: #555;
        }
        .category-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .category-chip {
          padding: 8px 14px;
          border: 1px solid #000;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          transition: all .25s ease;
          background: #fff;
          color: #000;
          user-select: none;
        }
        .category-chip:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 6px rgba(0,0,0,.12);
        }
        .category-chip.selected {
          background: #CB4D29;
          color: #fff;
          border: none;
        }
        .form-row {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .form-row input {
          flex: 1 1 calc(33.333% - 13.33px);
          padding: 12px 16px;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          background: #fff;
        }
        .form-row input:focus {
          border-color: #CB4D29;
          outline: none;
          box-shadow: 0 0 5px rgba(203,77,41,.3);
        }
        @media (max-width: 992px) {
          .form-row input { flex: 1 1 48%; }
        }
        @media (max-width: 576px) {
          .form-row input { flex: 1 1 100%; }
        }
        .btn-wrapper {
          margin-top: 40px;
          text-align: center;
        }
        .theme-btn-1 {
          padding: 12px 30px;
          background: linear-gradient(90deg, #CB4D29, #E85C3B);
          color: #fff;
          border: none;
          border-radius: 30px;
          font-size: 18px;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(203,77,41,.3);
        }
        .theme-btn-1:hover {
          background: linear-gradient(90deg, #a83f21, #d64e2d);
          transform: translateY(-2px);
        }
        form {
          background: #fff;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 15px 40px rgba(0,0,0,.1);
        }
      `}</style>

      <div className="get-touch-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="get-touch-title">Get a Quote</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Full Name" required className='first'/>
                  <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Company Name" required  className='first'/>
                  <input name="location" value={form.location} onChange={handleChange} placeholder="Location"  className='first'/>
                  <div className="category-wrapper" style={{ flex: '1 1 100%' }}>
                    <p className="category-subtitle">Choose your best-fitting category</p>
                    <div className="category-list">
                      {categories.map((cat) => (
                        <div
                          key={cat}
                          className={'category-chip' + (selectedCategory === cat ? ' selected' : '')}
                          onClick={() => handleCategoryClick(cat)}
                        >
                          {cat}
                        </div>
                      ))}
                    </div>
                  </div>
                  <input name="phone" type="text" value={form.phone} onChange={handleChange} placeholder="Phone Number" required />
                  <input name="email"  type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
                  <input name="budget" type="text" value={form.budget} onChange={handleChange} placeholder="Budget" />
                  <input name="residency" value={form.residency} onChange={handleChange} placeholder="Residential or Commercial" className='first'/>
                  <input name="dwelling" value={form.dwelling} onChange={handleChange} placeholder="House or Apartment" className='first'/>
                  <input name="bhk" value={form.bhk} onChange={handleChange} placeholder="How many BHK" className='first'/>
                  <input name="website" value={form.website} onChange={handleChange} placeholder="Website" className='first'/>
                  <input name="catalogues" value={form.catalogues} onChange={handleChange} placeholder="Link to Catalogues" className='first'/>
                  <input type="file" accept=".jpg,.png,.pdf,.docx" onChange={handleFileChange} className='first'/>
                </div>
                <div className="btn-wrapper">
                  <button type="submit" className="theme-btn-1" disabled={sending}  style={{borderRadius:'3px'}}>
                    {sending ? 'Sending…' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetTouch;
