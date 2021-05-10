import React from 'react';
import { Link } from 'react-router-dom';

const OtherPageBanner = props => {
    return (
        <section className="hero-section ptb-100 gradient-overlay" style={{ background: 'url("assets/img/header-bg-5.jpg")no-repeat center center / cover' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-7">
                        <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                            <h1 className="text-white mb-0">{props.pagename}</h1>
                            <div className="custom-breadcrumb">
                                <ol className="breadcrumb d-inline-block bg-transparent list-inline py-0">
                                    <li className="list-inline-item breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                    <li className="list-inline-item breadcrumb-item active">{props.pagename}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OtherPageBanner
