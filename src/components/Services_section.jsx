import React from 'react';
import { Link } from 'react-router-dom';

function Services_section() {
    return (
        <section className="services-section ptb-100 gray-light-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="section-heading text-center mb-5">
                            <strong className="color-secondary">Our Services</strong>
                            <h2>What Can I Do For You</h2>
                            <span className="animate-border mr-auto ml-auto mb-4" />
                            <p className="lead">
                                I Design and develop your dream product & develop a strong, enviable online presence for your brand & make the best of the latest web technologies.!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                            <span className="ti-announcement icon-lg color-secondary d-block mb-4" />
                            <h5>Web Designing</h5>
                            <p className="mb-0 text-justify">I never forget that this is your website and so we strive to build it just the way you want it, listening carefully to your ideas and requirements to deliver a highly professional website. Every step of the way you are supported by a dedicated project manager.</p>
                            <Link to={'/website_design'} className="detail-link mt-4">Read more <span className="ti-arrow-right" /></Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                            <span className="ti-light-bulb icon-lg color-secondary d-block mb-4" />
                            <h5>E-commerce Development</h5>
                            <p className="mb-0 text-justify">We are provide you an easy setup for your online shop/store, which is entirely user-friendly, reliable and secure for credit card payments and processing through any chosen merchant accounts.</p>    
                            <Link to={'/ecommerce_website_development'} className="detail-link mt-4">Read more <span className="ti-arrow-right" /></Link>
                        </div>
                    </div>  


                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                            <span className="ti-headphone-alt icon-lg color-secondary d-block mb-4" />
                            <h5>Web Application</h5>
                            <p className="mb-0 text-justify">I am committed to helping our clients by using the latest web technology with an objective to help you gain income, improve performance, reduce maintenance costs, enhance productivity and boost end user satisfaction.</p>
                            <Link to={'/website_development'} className="detail-link mt-4">Read more <span className="ti-arrow-right" /></Link>
                        </div>
                    </div>

                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                            <span className="ti-bell icon-lg color-secondary d-block mb-4" />
                            <h5>SEO Services</h5>
                            <p className="mb-0">Progressively empower business "outside the box" thinking with resource-leveling partnerships.</p>
                            <a href="services-details.html" target="_blank" className="detail-link mt-4">Read more <span className="ti-arrow-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                            <span className="ti-briefcase icon-lg color-secondary d-block mb-4" />
                            <h5>Email Marketing</h5>
                            <p className="mb-0">Progressively empower business "outside the box" thinking with resource-leveling partnerships.</p>
                            <a href="services-details.html" target="_blank" className="detail-link mt-4">Read more <span className="ti-arrow-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                            <span className="ti-vector icon-lg color-secondary d-block mb-4" />
                            <h5>Creative Consultancy</h5>
                            <p className="mb-0">Progressively empower business "outside the box" thinking with resource-leveling  partnerships.</p>
                            <a href="services-details.html" target="_blank" className="detail-link mt-4">Read more <span className="ti-arrow-right" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services_section
