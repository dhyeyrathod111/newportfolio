import React from 'react'

function Workprogress() {
    return (
        <section className="call-to-action ptb-100" style={{ background: 'url("assets/img/ctg-bg-2.jpg")no-repeat center center / cover' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="circle-box">
                            <div className="chart" data-percent={70}><span>70%</span></div>
                        </div>
                        <div className="progress-info text-center mt-3">
                            <strong className="color-secondary">Our Services</strong>
                            <h5 className="text-white">Keywords Results</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="circle-box">
                            <div className="chart" data-percent={75}><span>75%</span></div>
                        </div>
                        <div className="progress-info text-center mt-3">
                            <strong className="color-secondary">Our Services</strong>
                            <h5 className="text-white">Google Analytics</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="circle-box">
                            <div className="chart" data-percent={80}><span>80%</span></div>
                        </div>
                        <div className="progress-info text-center mt-3">
                            <strong className="color-secondary">Our Services</strong>
                            <h5 className="text-white">Competition Metrics</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="circle-box">
                            <div className="chart" data-percent={65}><span>65%</span></div>
                        </div>
                        <div className="progress-info text-center mt-3">
                            <strong className="color-secondary">Our Services</strong>
                            <h5 className="text-white">SEO &amp; Marketing</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Workprogress
