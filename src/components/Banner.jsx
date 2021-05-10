import React from 'react';
import { Link } from 'react-router-dom';

const Banner = props => {
    return (
        <section className="ptb-70 gradient-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-5">
                        <div className="hero-slider-content text-white pt-5">
                            <strong>I am</strong>
                            <h1 className="text-white">Dhyey Rathod</h1>
                            <p className="font-weight-bold lead font-italic">Website , Web appliation , Android and IOS application Designer and developer in Mumbai.<br />My Excellent Services That Will Help To Grow Your Bussiness.</p>
                            <div className="action-btns mt-3">
                                <Link to={'/about'} className="btn secondary-solid-btn">Start Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7">
                        <div className="image-wrap pt-5">
                            <img src="/assets/img/t1-hero-img.svg" className="img-fluid custom-width" alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
