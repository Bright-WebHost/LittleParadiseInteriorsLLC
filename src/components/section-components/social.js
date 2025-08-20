import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Social extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__social-media">
			<ul>
				{/* <li><a href="https://www.facebook.com/" title="Facebook"><i className="fab fa-facebook-f" /></a></li> */}


				<li><a href="https://wa.me/+971525238899" title="WhatsApp"><i className="fab fa-whatsapp"></i> </a></li>
				{/* <li><a href="https://www.youtube.com/@TheArchitectureCorporation/videos" title="youtube"><i className="fab fa-youtube" /></a></li> */}
				<li><a href="https://www.instagram.com/littleparadiseinteriors/" title="Instagram"><i className="fab fa-instagram" /></a></li>
				<li><a href="https://www.linkedin.com/company/little-paradise-interiors-llc/" title="linkedin" ><i className="fab fa-linkedin" /></a></li>
			</ul>
		</div>
        }
}

export default Social