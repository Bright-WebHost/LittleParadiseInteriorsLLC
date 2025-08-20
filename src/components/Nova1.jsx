import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import NavbarV2 from './global-components/navbar-v2';
import Page_header from './global-components/page-header';
import Footer from './global-components/footer';
class Nova1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div>
        <NavbarV2 />
        <Page_header headertitle="Nova"  customclass="mb-0" />
    <div className="ltn__shop-details-area pb-10">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                     <label id='responsive-text-project-title'><span className="ltn__secondary-color"><img src={publicUrl+"assets/img/Allimgs/pin.png"}/></span>Mangalore, karnataka</label> 
                      <p   id='responsive-text-project-title'>A luxurious 4 bedroom apartment in Mangalore, designed with warm wooden finishes, elegant marble accents, and soft ambient lighting. The interiors blend modern sophistication with functional comfort, featuring bespoke furniture, spacious layouts, and refined detailing for a timeless living experience.</p>
    </div>
    </div>                

<div className="ltn__property-details-gallery mb-30" id='responsive-text-project-title'>
                        <div className="row">
                            <div className="col-md-11">
<div class="parent">
    <div class="div1"><img src="assets/img/allimgLP/Nova/n1.webp" alt="Image 1"/></div>
    <div class="div2"><img src="assets/img/allimgLP/Nova/n2.webp" alt="Image 2"/></div>
    <div class="div3"><img src="assets/img/allimgLP/Nova/n3.webp" alt="Image 3"/></div>
    <div class="div4"><img src="assets/img/allimgLP/Nova/n6.webp" alt="Image 4"/></div>
    <div class="div5"><img src="assets/img/allimgLP/Nova/n7.webp" alt="Image 5"/></div>
    <div class="div6"><img src="assets/img/allimgLP/Nova/n8.webp" alt="Image 6"/></div>
    <div class="div7"><img src="assets/img/allimgLP/Nova/n4.webp" alt="Image 7"/></div>
    <div class="div8"><img src="assets/img/allimgLP/Nova/n5.webp" alt="Image 8"/></div>
    <div class="div9"><img src="assets/img/allimgLP/Nova/n10.webp" alt="Image 9"/></div>
    <div class="div10"><img src="assets/img/allimgLP/Nova/n11.webp" alt="Image 10"/></div>
    <div class="div11"><img src="assets/img/allimgLP/Nova/n18.webp" alt="Image 11"/></div>
    <div class="div12"><img src="assets/img/allimgLP/Nova/n20.webp" alt="Image 12"/></div>
    <div class="div13"><img src="assets/img/allimgLP/Nova/n13.webp" alt="Image 13"/></div>
    <div class="div14"><img src="assets/img/allimgLP/Nova/n14.webp" alt="Image 14"/></div>
    <div class="div15"><img src="assets/img/allimgLP/Nova/n15.webp" alt="Image 15"/></div>
    <div class="div16"><img src="assets/img/allimgLP/Nova/n16.webp" alt="Image 16"/></div>
    <div class="div17"><img src="assets/img/allimgLP/Nova/n17.webp" alt="Image 17"/></div>
    <div class="div18"><img src="assets/img/allimgLP/Nova/n21.webp" alt="Image 18"/></div>
    <div class="div19"><img src="assets/img/allimgLP/Nova/n22.webp" alt="Image 19"/></div>
    <div class="div20"><img src="assets/img/allimgLP/Nova/n23.webp" alt="Image 20"/></div>
    <div class="div21"><img src="assets/img/allimgLP/Nova/n25.webp" alt="Image 21"/></div>
    <div class="div22"><img src="assets/img/allimgLP/Nova/n26.webp" alt="Image 22"/></div>
    <div class="div23"><img src="assets/img/allimgLP/Nova/n27.webp" alt="Image 23"/></div>
    <div class="div24"><img src="assets/img/allimgLP/Nova/n28.webp" alt="Image 24"/></div>
    <div class="div25"><img src="assets/img/allimgLP/Nova/n29.webp" alt="Image 25"/></div>
    <div class="div26"><img src="assets/img/allimgLP/Nova/n30.webp" alt="Image 26"/></div>
    <div class="div27"><img src="assets/img/allimgLP/Nova/n24.webp" alt="Image 27"/></div>
    <div class="div28"><img src="assets/img/allimgLP/Nova/n12.webp" alt="Image 28"/></div>
    <div class="div29"><img src="assets/img/allimgLP/Nova/n9.webp" alt="Image 29"/></div>
    {/* <div class="div30"><img src="assets/img/allimgLP/Nova/n16.webp" alt="Image 30"/></div> */}
</div>


                        
                            </div>
                            </div>
                            </div>
                            
                    <div className="col-lg-4">
                    <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                        
                    </aside>
                    </div>
                </div>
                </div>
            </div>
            <style>{`
            
.parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(51, 1fr);
    gap: 10px;
}
    
.div1 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
}

.div2 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 3;
}

.div3 {
    grid-row: span 5 / span 5;
    grid-row-start: 5;
}

.div4 {
    grid-row: span 5 / span 5;
    grid-row-start: 5;
}

.div5 {
    grid-row: span 5 / span 5;
    grid-row-start: 5;
}

.div6 {
    grid-row: span 5 / span 5;
    grid-row-start: 5;
}
.div7 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-row-start: 10;
}

.div8 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 3;
 
}

.div9 {
    grid-row: span 5 / span 5;
    grid-row-start: 14;
}

.div10 {
    grid-row: span 5 / span 5;
    grid-row-start: 14;
}

.div11 {
    grid-row: span 5 / span 5;
    grid-row-start: 14;
}

.div12 {
    grid-row: span 5 / span 5;
    grid-row-start: 14;
}
.div13 {
   grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-row-start: 19;
}
.div14 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 3;
}
.div15 {
   grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-row-start: 23;
}
.div16 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 3;
}
.div17 {
   grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-row-start: 27;
}
.div18 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 3;
}
.div19 {
   grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-row-start: 31;
}
.div20 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 3;
}
.div21 {
   grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-row-start: 35;
}
.div22 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 3;
}
.div23 {
   grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-row-start: 39;
}
.div24 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 3;
}
.div25 {
   grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-row-start: 43;
}
.div26 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 3;
}
.div27 {
//    grid-column: span 2 / span 2;
    grid-row: span 5 / span 5;
    grid-row-start: 47;
}
.div28 {
    grid-column: span 2 / span 2;
    grid-row: span 4 / span 4;
    grid-column-start: 2;
}
.div29 {
//    grid-column: span 2 / span 2;
    grid-row: span 5 / span 5;
    // grid-row-start: 51;
}
// .div30 {
//     grid-column: span 2 / span 2;
//     grid-row: span 4 / span 4;
//     grid-column-start: 3;
// }
        `}</style>
          <Footer/>
            </div>
        }
}

export default Nova1