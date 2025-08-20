import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import HomeV4 from './components/home-v4';
import HomeV5 from './components/home-v5';
import HomeV6 from './components/home-v6';
import HomeV7 from './components/home-v7';
import HomeV8 from './components/home-v8';
import HomeV9 from './components/home-v9';
import HomeV10 from './components/home-v11';

import About from './components/about';
import Service from './components/service';
import ServiceDetails from './components/service-details';
import Portfolio from './components/portfolio';
import PortfolioV2 from './components/portfolio-v2';
import PortfolioDetails from './components/portfolio-details';
import Team from './components/team';
import TeamDetails from './components/team-details';
import Faq from './components/faq';
import ComingSoon from './components/coming-soon';
import Error  from './components/404';
import Location  from './components/location';

import Shop from './components/shop';
import ShopGrid from './components/shop-grid';
import ProdductDetails from './components/product-details';
import ShopLeftSidebar from './components/shop-left-sidebar';
import ShopRightSidebar from './components/shop-right-sidebar';

import BlogGrid from './components/blog-grid';
import BlogLeftSidebar from './components/blog-left-sidebar';
import BlogRightSidebar from './components/blog-right-sidebar';
import Blog from './components/blog';

import BlogDetails from './components/blog-details';
import Contact from './components/contact';
import Cart from './components/cart';
import Checkout from './components/checkout';
import MyAccount from './components/my-account';
import Login from './components/login';
import Register from './components/register';
import AddListing from './components/add-listing';
import Wishlist from './components/wishlist';
import OrderTracking from './components/order-tracking';
import History from './components/history';


// import ProdductDetails1 from './components/product-details1';
import Product_Details1 from './components/product-details1';
import Product_Details4 from './components/product-details4';
import Product_Details5 from './components/product-details5';
import Product_Details6 from './components/product-details6';
import Product_Details7 from './components/product-details7';
import Product_Details8 from './components/product-details8';
import Product_Details9 from './components/product-details9';
import Product_Details10 from './components/product-details10';
import Product_Details11 from './components/product-details11';
import Product_Details12 from './components/product-details12';
import Product_Details13 from './components/product-details13';
import OurProjects from './components/blog-components/our-projects';
import Product_Details14 from './components/product-details14';
import HomePage from './components/HomePage';
import Product_Details15 from './components/product-details15';
import Product_Details16 from './components/product-details16';
import Product_Details18 from './components/product-details18';
import Product_Details17 from './components/product-details17';
import Product_Details19 from './components/product-details19';
import Product_Details20 from './components/product-details20';
import Product_Details21 from './components/product-details21';
import Product_Details22 from './components/product-details22';
import Product_Details23 from './components/product-details23';
import Product_Details24 from './components/product-details24';
import Product_Details25 from './components/product-details25';
import Product_Details26 from './components/product-details26';
import Product_Details30 from './components/product-details30';
import Product_Details31 from './components/product-details31';
import Product_Details32 from './components/product-details32';
import Product_Details33 from './components/product-details33';
import Whatsapp from './components/global-components/Whatsapp';
import Rolls from './components/Rolls';
import Mbz from './components/Mbz';
import Lounge from './components/Lounge';
import Bay from './components/Bay';
import Reva from './components/Reva';
import Merano from './components/Merano';
import Studio from './components/Studio';
import Jamal from './components/Jamal';
import MonrevePage from './components/shop-components/MonrevePage';
import Monreve from './components/Monreve';
import GetTouchPage from './components/GetTouchPage';
import Download from './components/Download';

class Root extends Component {
    render() {
        return(
                <Router  basename="/">
                    <Whatsapp/>
                    <Download/>
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV2} />
                        <Route path="/home" component={HomeV2} />
                        <Route path="/home-v3" component={HomeV3} />
                        <Route path="/home-v4" component={HomeV4} />
                        <Route path="/home-v5" component={HomeV5} />
                        <Route path="/home-v6" component={HomeV6} />
                        <Route path="/home-v7" component={HomeV7} />
                        <Route path="/home-v8" component={HomeV8} />
                        <Route path="/home-v9" component={HomeV9} />
                        <Route path="/home-v10" component={HomeV10} />

                        <Route path="/about" component={About} />
                        <Route path="/service" component={Service} />
                        <Route path="/service-details" component={ ServiceDetails } />
                        <Route path="/portfolio" component={ Portfolio } />
                        <Route path="/portfolio-v2" component={ PortfolioV2 } />
                        <Route path="/portfolio-details" component={ PortfolioDetails } />
                        <Route path="/team" component={ Team } />
                        <Route path="/team-details" component={ TeamDetails } />
                        <Route path="/faq" component={ Faq } />
                        <Route path="/coming-soon" component={ ComingSoon } />
                        <Route path="/404" component={ Error } />
                        <Route path="/location" component={ Location } />
                        <Route path="/shop" component={ Shop } />
                        <Route path="/shop-grid" component={ ShopGrid } />
                        <Route path="/shop-left-sidebar" component={ ShopLeftSidebar } />
                        <Route path="/shop-right-sidebar" component={ ShopRightSidebar } />

                        <Route path="/product-details" component={ ProdductDetails } />
                        {/* blog */}
                        <Route path="/blog-grid" component={ BlogGrid } />
                        <Route path="/blog-left-sidebar" component={ BlogLeftSidebar } />
                        <Route path="/blog-right-sidebar" component={ BlogRightSidebar } />
                        <Route path="/blog" component={ Blog } />


                        <Route path="/blog-details" component={ BlogDetails } />
                        <Route path="/contact" component={ Contact } />
                        <Route path="/cart" component={ Cart } />
                        <Route path="/checkout" component={ Checkout } />
                        <Route path="/my-account" component={ MyAccount } />
                        <Route path="/login" component={ Login } />
                        <Route path="/register" component={ Register } />
                        <Route path="/add-listing" component={ AddListing } />
                        <Route path="/wishlist" component={ Wishlist } />
                        <Route path="/order-tracking" component={ OrderTracking } />
                        <Route path="/history" component={ History } />
                        <Route path="/product-details1" component={ Product_Details1} />
                        <Route path="/product-details1" component={ Product_Details1} />
                        <Route path="/Lshaped" component={ Product_Details4} />
                        <Route path="/OpulentLiv-In" component={ Product_Details5} />
                        <Route path="/TheEstate" component={ Product_Details6} />
                        <Route path="/TheDual" component={ Product_Details7} />
                        <Route path="/Nova" component={ Product_Details8} />
                        <Route path="/Mannarkkad-Residence" component={ Product_Details9} />
                        <Route path="/HospitalitySuite" component={ Product_Details10} />
                        <Route path="/Mall" component={ Product_Details11} />
                        <Route path="/University" component={ Product_Details12} />
                        <Route path="/LayoutDesign" component={ Product_Details13} />
                        <Route path="/our-projects" component={Product_Details31} />
                        <Route path="/SpecksDesk" component={ Product_Details15} />
                        <Route path="/GamingRoom" component={ Product_Details16} />
                        <Route path="/Earthessence" component={ Product_Details17} />
                        <Route path="/Sky" component={ Product_Details18} />
                        <Route path="/Terra" component={ Product_Details19} />
                        <Route path="/Dreamy" component={ Product_Details20} />
                        <Route path="/Raw" component={ Product_Details21} />
                        <Route path="/InGreen" component={ Product_Details22} />
                        <Route path="/TWL" component={ Product_Details23} />
                        <Route path="/PERLIYAS" component={ Product_Details24} />
                        <Route path="/LEGACY" component={ Product_Details25} />
                        <Route path="/BACKtoBALANCE" component={ Product_Details26} />
                        <Route path="/Architecture" component={ Product_Details30} />
                        <Route path="/allprojects" component={ Product_Details31} />
                        <Route path="/Interior" component={ Product_Details33} />
                        <Route path="/homepage" component={ HomePage} />
                        {/* <Route path="/homepage" component={ HomePage} /> */}


                        {/* new lpi */}
                        <Route path="/rolls" component={ Rolls} />
                        <Route path="/mbz-villa" component={ Mbz} />
                        <Route path="/Lounge" component={ Lounge} />
                        <Route path="/Bay-Bites" component={ Bay} />
                        <Route path="/Reva" component={ Reva} />
                        <Route path="/Merano" component={ Merano} />
                        <Route path="/Studio-Merano" component={ Studio} />
                        <Route path="/Jamal" component={ Jamal} />
                        <Route path="/Monreve" component={ Monreve} />
                        <Route path="/Getin" component={GetTouchPage} />
                       
                        
                        {/* new lpi */}
	                </Switch>
	                </div>
                </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
