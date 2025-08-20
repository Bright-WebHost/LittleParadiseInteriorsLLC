import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Btn() {
  return (
    <div id='responsive-text-project-title'>
        
        <div className="btn-wrapper animated "  style={{marginTop:'-40px', backgroundColor:'red'}}>
						<Link to="/our-projects" className="buttons">Our Projects </Link> &#160; &#160;
						<Link to="/about" className="buttons">About</Link>
						</div>
    </div>
  )
}
