import React from 'react'

const Promotion = props => {
    return (
        <section className="promo-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-4">
                        <a href="#">
                            <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                                <div className="circle-icon">
                                    <span className="ti-music-alt text-white" />
                                </div>
                                <h5>Web Development</h5>
                                <p>Increase sales by showing true dynamics of your website.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <a href="#">
                            <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                                <div className="circle-icon">
                                    <span className="ti-dashboard text-white" />
                                </div>
                                <h5>Application Development</h5>
                                <p>App Development is the way to reach billions of people.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <a href="#">
                            <div className="single-promo-2 single-promo-hover rounded text-center white-bg p-5 h-100">
                                <div className="circle-icon">
                                    <span className="ti-headphone-alt text-white" />
                                </div>
                                <h5>Digital Marketing</h5>
                                <p>Realize importance of social proof in customer’s purchase decision.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Promotion
