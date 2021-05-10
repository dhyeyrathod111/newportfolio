import React from 'react';
import { Link } from 'react-router-dom';
import HeaderUrlLInks from './HeaderUrlLInks';
const Header = props => {
    return (
        <header className="header">
            <div id="header-top-bar" className="primary-bg py-2">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-7 col-lg-7 d-none d-md-block d-lg-block">
                            <div className="topbar-text text-white">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><span className="fas fa-headphones-alt mr-1" /> 24x7 Technical Support</li>
                                    <li className="list-inline-item"><span className="fas fa-phone-alt mr-1" /> 9967313968</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="topbar-text text-white">
                                <ul className="list-inline text-md-right text-lg-right text-left  mb-0">
                                    <li className="list-inline-item">
                                        <a href="#" className="rounded"><span className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#" className="rounded"><span className="fab fa-twitter" /></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#" className="rounded"><span className="fab fa-linkedin-in" /></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#" className="rounded"><span className="fab fa-dribbble" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg fixed-top white-bg">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        <img src="/assets/img/logo-color.png" alt="logo" className="img-fluid" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="ti-menu" />
                    </button>
                    <HeaderUrlLInks />
                    
                </div>
            </nav>
        </header>
    )
}
export default Header;
