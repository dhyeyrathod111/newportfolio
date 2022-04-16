import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-top gradient-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-9">
                            <div className="row footer-top-wrap">
                                <div className="col-md-4 col-sm-6">
                                    <div className="footer-nav-wrap text-white">
                                        <img src={'/assets/img/logo-white.png'} alt="logo" className="mb-2" />
                                        <p>It's good to get some help from friends. Let's make your processes and reports awesome together.</p>
                                        <div className="social-nav mt-4">
                                            <ul className="list-unstyled social-list mb-0">
                                                <li className="list-inline-item tooltip-hover">
                                                    <Link href="#" className="rounded"><span className="ti-facebook" /></Link>
                                                    <div className="tooltip-item">Facebook</div>
                                                </li>
                                                <li className="list-inline-item tooltip-hover"><Link href="#" className="rounded"><span className="ti-twitter" /></Link>
                                                    <div className="tooltip-item">Twitter</div>
                                                </li>
                                                <li className="list-inline-item tooltip-hover"><Link href="#" className="rounded"><span className="ti-linkedin" /></Link>
                                                    <div className="tooltip-item">Linkedin</div>
                                                </li>
                                                <li className="list-inline-item tooltip-hover"><Link href="#" className="rounded"><span className="ti-dribbble" /></Link>
                                                    <div className="tooltip-item">Dribbble</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="footer-nav-wrap text-white">
                                        <h4 className="text-white">Links</h4>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link className="nav-link" to={'/technology'}>About My Technology</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={'/projects'}>My Projects</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={'/about'}>About Me</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={'/contact'}>Check Our Careers</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="footer-nav-wrap text-white">
                                        <h4 className="text-white">Services</h4>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <Link className="nav-link" to={'/website_development'}>Website Development</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={'/ecommerce_website_development'}>E-Commerce Website Development</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={'/web_hosting'}>Web Hosting</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={'/cms_website_development'}>Content Management System (CMS)</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="row footer-top-wrap mt-md-4 mt-sm-0 mt-lg-0">
                                <div className="col-12">
                                    <div className="footer-nav-wrap text-white">
                                        <h4 className="text-white">GET IN TOUCH</h4>
                                        <ul className="get-in-touch-list">
                                            <li className="d-flex align-items-center py-2"><span className="fas fa-map-marker-alt mr-2" /> Mumbai , Maharastra
                                            </li>
                                            <li className="d-flex align-items-center py-2"><span className="fas fa-envelope mr-2" /> dhyeyrathod111@gmail.com
                                            </li>
                                        </ul>
                                        <form className="newsletter-form mt-3">
                                            <input type="text" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required autoComplete="off" />
                                            <button type="submit" className="disabled" style={{ pointerEvents: 'all', cursor: 'pointer' }}><i className="fas fa-paper-plane" /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
