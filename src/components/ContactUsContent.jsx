import React from 'react'
import { Link } from 'react-router-dom';

const ContactUsContent = () => {
    return (
        <React.Fragment>
            <section className="contact-us-promo pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="card single-promo-card single-promo-hover text-center shadow-sm">
                                <div className="card-body py-5">
                                    <div className="pb-2">
                                        <span className="ti-mobile icon-sm color-secondary" />
                                    </div>
                                    <div><h5 className="mb-0">Call Us</h5>
                                        <p className="text-muted mb-0">+91 9967313968</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="card single-promo-card single-promo-hover text-center shadow-sm">
                                <div className="card-body py-5">
                                    <div className="pb-2">
                                        <span className="ti-location-pin icon-sm color-secondary" />
                                    </div>
                                    <div><h5 className="mb-0">Visit Us</h5>
                                        <p className="text-muted mb-0">Mumbai, Maharastra</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="card single-promo-card single-promo-hover text-center shadow-sm">
                                <div className="card-body py-5">
                                    <div className="pb-2">
                                        <span className="ti-email icon-sm color-secondary" />
                                    </div>
                                    <div><h5 className="mb-0">Mail Us</h5>
                                        <p className="text-muted mb-0">dhyeyrathod111@gmail.com</p></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="contact-us-section ptb-100">
                <div className="container contact">
                    <div className="col-12 pb-3 message-box d-none">
                        <div className="alert alert-danger" />
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-md-6">
                            <div className="contact-us-form gray-light-bg rounded p-5">
                                <h4>Ready to get started?</h4>
                                <form action="#" method="POST" id="contactForm" className="contact-us-form" noValidate="true">
                                    <div className="form-row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" placeholder="Enter name" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" placeholder="Enter email" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea name="message" id="message" className="form-control" rows={7} cols={25} placeholder="Message" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 mt-3">
                                            <button type="submit" className="btn secondary-solid-btn disabled" id="btnContactUs" style={{ pointerEvents: 'all', cursor: 'pointer' }}>
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="contact-us-content">
                                <h2>Looking for a excellent Business idea?</h2>
                                <p className="lead">Seamlessly deliver pandemic e-services and next-generation initiatives.</p>
                                <Link to={'/about'} className="btn outline-btn align-items-center">Get Directions <span className="ti-arrow-right pl-2" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>


    )
}

export default ContactUsContent;
