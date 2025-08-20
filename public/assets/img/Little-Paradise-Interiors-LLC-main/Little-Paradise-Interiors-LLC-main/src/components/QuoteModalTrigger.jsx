import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GetTouch from './section-components/GetTouch';

export default function QuoteModalTrigger({ className }) {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault(); // Prevent route change
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Link to="/about" className={className} onClick={handleOpen}>
        Get a Quote
      </Link>

      {open && <GetTouch onClose={handleClose} />}
    </>
  );
}
