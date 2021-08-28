import React from 'react'
import { Link } from 'react-router-dom';

function HeaderUrlLInks() {
    return (
        <div className="collapse navbar-collapse h-auto" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto menu">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About Me</Link ></li>
                <li><a href="#" className="dropdown-toggle">Services</a>
                    <ul className="sub-menu">
                        <li><a href="#" className="dropdown-toggle-inner">Website Design</a>
                            <ul className="sub-menu">
                                <li><Link to={'/website_design'}>Website Design</Link></li>
                                <li><Link to={'/responsive_website_design'}>Responsive Website Design</Link></li>
                            </ul>
                        </li>
                        <li><a href="#" className="dropdown-toggle-inner">Website development</a>
                            <ul className="sub-menu">
                                <li><Link to={'/website_development'}>website development</Link></li>
                                <li><Link to={'/ecommerce_website_development'}>E-Commerce website</Link></li>
                                <li><Link to={'/cms_website_development'}>CMS Development</Link></li>
                            </ul>
                        </li>
                        <li><a href="#" className="dropdown-toggle-inner">Domain Web Hosting</a>
                            <ul className="sub-menu">
                                <li><Link to={'/web_hosting'}>Web hosting</Link></li>
                                <li><Link to={'/domain_registration'}>Domain Registration</Link></li>
                            </ul>
                        </li>

                        {/* <li><a href="#" className="dropdown-toggle-inner">Digital Marketing</a>
                            <ul className="sub-menu">
                                <li><a href="basic-login.html">Login Page 1</a></li>
                                <li><a href="login.html">Login Page 2</a></li>
                                <li><a href="basic-sign-up.html">Signup Page 1</a></li>
                            </ul>
                        </li>*/}
                        

                    </ul>
                </li>
                <li><Link to={'/technology'}>Technology</Link></li>
                <li><Link to={'/resume'}>Resume</Link></li>
                <li><Link to={'/projects'}>Projects</Link></li>
                {/* <li><a href="services.html">Team</a></li> */}
                <li><a href="services.html">Contact us</a></li>
            </ul>
        </div>
    )
}

export default HeaderUrlLInks
