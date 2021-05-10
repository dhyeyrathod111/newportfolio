import React from 'react'

function Promosection() {
    return (
        <section className="promo-section ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="promo-single-wrap p-5 text-center border rounded">
                            <div className="promo-icon mb-4">
                                <img src="assets/img/search-engine.svg" alt="promo" width={65} />
                                <span className="number-bg">01</span>
                            </div>
                            <div className="promo-info">
                                <h4><strong className="color-secondary">Innovative solutions</strong></h4>
                                <p>What is business contents insurance? Business contents insurance is a type of business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="promo-single-wrap p-5 text-center border rounded">
                            <div className="promo-icon mb-4">
                                <img src="assets/img/increase.svg" alt="promo" width={65} />
                                <span className="number-bg">02</span>
                            </div>
                            <div className="promo-info">
                                <h4><strong className="color-secondary">Market research</strong></h4>
                                <p>What is business contents insurance? Business contents insurance is a type of business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="promo-single-wrap p-5 text-center border rounded">
                            <div className="promo-icon mb-4">
                                <img src="assets/img/bullhorn.svg" alt="promo" width={65} />
                                <span className="number-bg">03</span>
                            </div>
                            <div className="promo-info">
                                <h4><strong className="color-secondary">Experienced team</strong></h4>
                                <p>What is business contents insurance? Business contents insurance is a type of business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promosection
