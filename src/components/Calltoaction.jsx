import React from 'react'

const Calltoaction = props => {
    return (
        <section className="call-to-action ptb-70" style={{ background: 'url("assets/img/cta-bg.jpg")no-repeat center center / cover' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-9">
                        <div className="section-heading text-center text-white mb-5">
                            <h2 className="text-white">Check Your Site Performance</h2>
                            <p className="lead">Globally reinvent cross-unit human capital whereas virtual catalysts for change. Assertively network accurate methods of empowerment rather than client-centered improvements.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="analysis-form-wrap text-center">
                            <div className="col-lg-4 col-md-12 p-0">
                                <div className="form-group analysis-form-group">
                                    <span className="analysis-form-input">
                                        <input type="url" name="url" size={40} className="form-control" placeholder="Type website URL" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 p-0">
                                <div className="form-group analysis-form-group analysis-form-border">
                                    <span className="analysis-form-input">
                                        <input type="email" name="email" size={40} className="form-control" placeholder="Your Email" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 p-0">
                                <div className="form-group">
                                    <input type="submit" defaultValue="Check Now" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cta-image d-none d-lg-block d-md-block">
                <img src="assets/img/cta-1-man.svg" width={200} className="img-left" alt="cta" />
                <img src="assets/img/cta-1-mike.svg" width={200} className="img-right" alt="cta" />
            </div>
        </section>
    )
}

export default Calltoaction;
