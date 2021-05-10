import React from 'react';
import HeaderUrlLInks from './HeaderUrlLInks';
import { Link } from 'react-router-dom';
function OtherPageHeader() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        <img src="assets/img/logo-white.png" alt="logo" className="img-fluid" />
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

export default OtherPageHeader;
