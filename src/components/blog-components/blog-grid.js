import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogSlider from './blog-slider-v1';
class BlogGrid extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
		<div className="ltn__blog-area ltn__blog-item-3-normal mb-100 go-top">
			<BlogSlider />

		</div>
	  
    )
  }
}

export default BlogGrid;
