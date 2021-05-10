import React from 'react'

function Ourportfoliosection() {
    return (
        <section className="our-portfolio-section ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-heading text-center mb-4">
                            <strong className="color-secondary">Previous Project</strong>
                            <h2>Our Case Studies</h2>
                            <span className="animate-border mr-auto ml-auto mb-4" />
                            <p className="lead">Dynamically pursue reliable convergence rather than 24/7 process improvements.
                            Intrinsicly
                  develop end-to-end customer service without extensive data.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center pb-2">
                            <button type="button" className="filter-btn" data-mixitup-control data-filter="all">Digital
                            Marketing
                </button>
                            <button type="button" className="filter-btn" data-mixitup-control data-filter=".branding">Marketing
                            Strategy
                </button>
                            <button type="button" className="filter-btn" data-mixitup-control data-filter=".animation">Content
                            Marketing
                </button>
                            <button type="button" className="filter-btn" data-mixitup-control data-filter=".other">SEO
                            Services
                </button>
                        </div>
                        <div className="portfolio-container" id="MixItUp">
                            <div className="mix portfolio-item branding" data-ref="mixitup-target">
                                <div className="portfolio-wrapper">
                                    <a href="project-details.html" target="_blank">
                                        <div className="content-overlay" />
                                        <img className="img-fluid" src="assets/img/portfolios/3.jpg" alt="portfolio" />
                                        <div className="content-details fadeIn-bottom text-white">
                                            <h5 className="text-white mb-1">Creative Design</h5>
                                            <p>Design</p>
                                        </div>
                                    </a>
                                    <div className="text-center p-4">
                                        <h5 className="mb-1">Market Research Analysis</h5>
                                        <span>Sales, SEO, Marketing</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mix portfolio-item other animation" data-ref="mixitup-target">
                                <div className="portfolio-wrapper">
                                    <a href="project-details.html" target="_blank">
                                        <div className="content-overlay" />
                                        <img className="img-fluid" src="assets/img/portfolios/2.jpg" alt="portfolio" />
                                        <div className="content-details fadeIn-bottom text-white">
                                            <h5 className="text-white mb-1">Web UI/UX Design</h5>
                                            <p>Web, Design</p>
                                        </div>
                                    </a>
                                    <div className="text-center p-4">
                                        <h5 className="mb-1">Market Research Analysis</h5>
                                        <span>Sales, SEO, Marketing</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mix portfolio-item animation" data-ref="mixitup-target">
                                <div className="portfolio-wrapper">
                                    <a href="project-details.html" target="_blank">
                                        <div className="content-overlay" />
                                        <img className="img-fluid" src="assets/img/portfolios/4.jpg" alt="portfolio" />
                                        <div className="content-details fadeIn-bottom text-white">
                                            <h5 className="text-white mb-1">Corporate Flyer Design</h5>
                                            <p>Flyer Design</p>
                                        </div>
                                    </a>
                                    <div className="text-center p-4">
                                        <h5 className="mb-1">Market Research Analysis</h5>
                                        <span>Sales, SEO, Marketing</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mix portfolio-item branding" data-ref="mixitup-target">
                                <div className="portfolio-wrapper">
                                    <a href="project-details.html" target="_blank">
                                        <div className="content-overlay" />
                                        <img className="img-fluid" src="assets/img/portfolios/1.jpg" alt="portfolio" />
                                        <div className="content-details fadeIn-bottom text-white">
                                            <h5 className="text-white mb-1">Web UI/UX Design</h5>
                                            <p>Web, Design</p>
                                        </div>
                                    </a>
                                    <div className="text-center p-4">
                                        <h5 className="mb-1">Market Research Analysis</h5>
                                        <span>Sales, SEO, Marketing</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mix portfolio-item animation other" data-ref="mixitup-target">
                                <div className="portfolio-wrapper">
                                    <a href="project-details.html" target="_blank">
                                        <div className="content-overlay" />
                                        <img className="img-fluid" src="assets/img/portfolios/5.jpg" alt="portfolio" />
                                        <div className="content-details fadeIn-bottom text-white">
                                            <h5 className="text-white mb-1">Wall Painting Design</h5>
                                            <p>Painting Design</p>
                                        </div>
                                    </a>
                                    <div className="text-center p-4">
                                        <h5 className="mb-1">Market Research Analysis</h5>
                                        <span>Sales, SEO, Marketing</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mix portfolio-item branding " data-ref="mixitup-target">
                                <div className="portfolio-wrapper">
                                    <a href="project-details.html" target="_blank">
                                        <div className="content-overlay" />
                                        <img className="img-fluid" src="assets/img/portfolios/6.jpg" alt="portfolio" />
                                        <div className="content-details fadeIn-bottom text-white">
                                            <h5 className="text-white mb-1">Corporate Identity Design</h5>
                                            <p>Corporate Design</p>
                                        </div>
                                    </a>
                                    <div className="text-center p-4">
                                        <h5 className="mb-1">Market Research Analysis</h5>
                                        <span>Sales, SEO, Marketing</span>
                                    </div>
                                </div>
                            </div>
                            <div className="gap" />
                            <div className="gap" />
                            <div className="gap" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourportfoliosection;
