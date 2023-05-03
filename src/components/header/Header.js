import logo from "./../../assests/images/logo.png";
import toggleIcon from './../../assests/images/toggle-icon.png';
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import app from "../../App";
import { Link } from "react-router-dom";

function Header() {
    const [opennav, setOpenNav] = useState("sidenav close")
    const [opendropd, setOpenDropDown] = useState("dropdown")
    const [carousel, carouselItem] = useState("carousel-item")
    const [openM, setOpenM] = useState("dropdown-menu")

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const carousels = () => {
        carouselItem(carousel == "carousel-item" ? "carousel-item active" : "carousel-item");
    }
    const openNav = () => {
        setOpenNav(opennav == "sidenav close" ? "sidenav open" : "sidenav close");
    }
    const openDropd = () => {
        setOpenDropDown(opendropd == "dropdown" ? "dropdown show" : "dropdown");
        setOpenM(openM == "dropdown-menu" ? "dropdown-menu show" : "dropdown-menu");
    }
    
   
    return (
        <>

            <div className="banner_bg_main">

                <div className="container">
                    <div className="header_section_top">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="custom_menu">
                                    <ul>
                                        <li><a href="#">Best Sellers</a></li>
                                        <li><a href="#">Gift Ideas</a></li>
                                        <li><a href="#">New Releases</a></li>
                                        <li><a href="#">Today's Deals</a></li>
                                        <li><a href="#">Customer Service</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="logo_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="logo"><a href="index.html"><img src={logo} /></a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header_section">
                    <div className="container">
                        <div className="containt_main">
                            <div id="mySidenav" className={opennav} style={{ width: "250px;" }}>
                                <a href="javascript:void(0)" className="closebtn" onClick={openNav}>&times;</a>
                                <a href=""><Link to="/">Home</Link></a>
                                <a href=""><Link to="/Product">Product</Link></a>
                                <a href=""><Link to="/Order">Order</Link></a>
                                <a href=""><Link to="/About">About</Link></a>
                                <a href=""><Link to="/Contact">Contact</Link></a>

                               
                            </div>
                            <span className="toggle_icon" onClick={openNav}><img src={toggleIcon} /></span>
                            <span className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" onClick={openDropd} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category
                                </button>
                                <div class="dropdown-menu" className={openM} aria-labelledby="dropdownMenuButton">
                                    <Link to="/Women">  <a className="dropdown-item" >Women</a> </Link>
                                    <Link to="/Men">    <a className="dropdown-item" >Men</a> </Link>
                                    <Link to="/Electronic"><a className="dropdown-item" >Electronic</a></Link>
                                    <Link to="/Jewellary"><a className="dropdown-item" >Jewellary</a></Link>
                                </div>

                            </span>
                            <div className="main">

                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search this blog" />
                                    <div className="input-group-append">
                                        <button className="btn btn-secondary" type="button" style={{ backgroundColor: "#f26522", borderColor: "#f26522" }}>
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <span className="header_box">

                                <div className="login_menu">
                                    <ul>
                                        <li><a href="#">
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <Link to="/Cart"><span className="padding_10">Cart</span></Link></a>
                                        </li>
                                        <li><a href="#">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            <span className="padding_10" onClick={() => loginWithRedirect({ app })}>Log In</span>
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            <span className="padding_10" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</span>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="banner_section layout_padding">
                    <div className="container">
                        <div id="my_slider" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div classNameName={carousels}>
                                        <div className="col-sm-12">
                                            <h1 className="banner_taital">Get Start <br />Your favriot shoping</h1>
                                            <div className="buynow_bt"><a href="#">Buy Now</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h1 className="banner_taital">Get Start <br />Your favriot shoping</h1>
                                            <div className="buynow_bt"><a href="#">Buy Now</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h1 className="banner_taital">Get Start <br />Your favriot shoping</h1>
                                            <div className="buynow_bt"><a href="#">Buy Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                                <i className="fa fa-angle-left"></i>
                            </a>
                            <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Header;