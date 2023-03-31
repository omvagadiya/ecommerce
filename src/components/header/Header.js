import logo from "./../../assests/images/logo.png";
import toggleIcon from './../../assests/images/toggle-icon.png';
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import  app from "../../App";

function Header() {
    const [opennav, setOpenNav] = useState("sidenav close")
    const [opendropd, setOpenDropDown] = useState("dropdown")
    const [openM, setOpenM] = useState("dropdown-menu")
    const [carousel, carouselItem] = useState("carousel-item")
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const openNav = () => {
        setOpenNav(opennav == "sidenav close" ? "sidenav open" : "sidenav close");
    }
    const openDropd = () => {
        setOpenDropDown(opendropd == "dropdown" ? "dropdown show" : "dropdown")
        setOpenM(openM == "dropdown-menu" ? "dropdown-menu show" : "dropdown-menu")
    }
    const carousels = () => {
        carouselItem(carousel == "carousel-item" ? "carousel-item active" : "carousel-item");
    }


    return (
        <>

            <div className="banner_bg_main">

                <div className="container">
                    <div className="header_section_top">

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
                            <div id="mySidenav" className={opennav} >
                                <a href="javascript:void(0)" className="closebtn" onClick={openNav}>&times;</a>
                                <a href="index.html">Home</a>
                                <a href="fashion.html">Fashion</a>
                                <a href="electronic.html">Electronic</a>
                                <a href="jewellery.html">Jewellery</a>
                            </div>
                            <span className="toggle_icon" onClick={openNav}><img src={toggleIcon} /></span>
                            <div className={opendropd}>
                                <button className="btn btn-secondary dropdown-toggle" onClick={openDropd} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category
                                </button>
                                <div className={openM} aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Man & Woman Fashion</a>
                                    <a className="dropdown-item" href="#">Electronic</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <div className="main">

                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search this blog" />
                                    <div className="input-group-append">
                                        <button className="btn btn-secondary" type="button" style={{ backgroundColor: "#f26522", borderColor: "#f26522 " }}>
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            
                              <div className="header_box">
                            <div className="login_menu">
                                    <ul>
                                        <li><a href="#">
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <span className="padding_10">Cart</span></a>
                                        </li>
                                        <li></li>
                                        
                                        <li><a href="#">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            <span className="padding_10" onClick={() => loginWithRedirect({app})}>Log In</span>
                                        </a>
                                        </li>
                                         
                                        <li></li>
                                    
                                        <li><a href="#">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            <span className="padding_10" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</span>
                                        </a>
                                        </li>
                                                  
                                        
                                    </ul>
                                </div>
                            </div> 
                             
                            
                           



                        </div>
                    </div>
                </div>

                <div className="banner_section layout_padding">
                    <div className="container">
                        <div id="my_slider" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className={carousels}>
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