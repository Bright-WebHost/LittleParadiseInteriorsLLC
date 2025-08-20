import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="google-map">
			
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.2095509175197!2d74.8518778!3d12.873519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b4d1b97b779%3A0xee73c030d955ee83!2sThe%20Architecture%20Corporation!5e1!3m2!1sen!2sin!4v1734068013496!5m2!1sen!2sin" width="100%" height="500px" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.2095509175197!2d74.8518778!3d12.873519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b4d1b97b779%3A0xee73c030d955ee83!2sThe%20Architecture%20Corporation!5e1!3m2!1sen!2sin!4v1734068013496!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
        }
}

export default Map