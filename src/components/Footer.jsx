import React from 'react'

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
                                        <img src="assets/img/logo-white.png" alt="logo" className="mb-2" />
                                        <p>Continually myocardinate inexpensive catalysts for change with seamlessinitiatives.</p>
                                        <div className="social-nav mt-4">
                                            <ul className="list-unstyled social-list mb-0">
                                                <li className="list-inline-item tooltip-hover">
                                                    <a href="#" className="rounded"><span className="ti-facebook" /></a>
                                                    <div className="tooltip-item">Facebook</div>
                                                </li>
                                                <li className="list-inline-item tooltip-hover"><a href="#" className="rounded"><span className="ti-twitter" /></a>
                                                    <div className="tooltip-item">Twitter</div>
                                                </li>
                                                <li className="list-inline-item tooltip-hover"><a href="#" className="rounded"><span className="ti-linkedin" /></a>
                                                    <div className="tooltip-item">Linkedin</div>
                                                </li>
                                                <li className="list-inline-item tooltip-hover"><a href="#" className="rounded"><span className="ti-dribbble" /></a>
                                                    <div className="tooltip-item">Dribbble</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="footer-nav-wrap text-white">
                                        <h4 className="text-white">COMPANY</h4>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">About Our Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Our Affiliates Program</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">View Our Blog</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Check Our Careers</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="footer-nav-wrap text-white">
                                        <h4 className="text-white">LEGAL</h4>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Legal Information</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Privacy Policy</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Report Abuse</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Terms of Service</a>
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
                                            <li className="d-flex align-items-center py-2"><span className="fas fa-map-marker-alt mr-2" /> 1234 Street Name, City Name, USA
                                            </li>
                                            <li className="d-flex align-items-center py-2"><span className="fas fa-envelope mr-2" /> you@domain.com
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
            <div className="footer-bottom gray-light-bg py-2">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-5 col-lg-5">
                            <p className="copyright-text pb-0 mb-0">Copyrights © 2020. All
                            rights reserved by
                            <a href="">ThemeTags</a></p>
                        </div>
                        <div className="col-md-7 col-lg-6 d-none d-md-block d-lg-block">
                            <ul className="list-inline policy-nav text-right social-list">
                                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                                <li className="list-inline-item"><a href="#">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
