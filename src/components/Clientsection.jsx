import React from 'react'

function Clientsection() {
    return (
        <div className="client-section ptb-100" style={{ background: 'url("assets/img/client-bg.jpg")no-repeat center center / cover' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="client-heading-wrap">   
                            <h3>Who are Happy With Services and Work</h3>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="client-para">
                            <p>Seamlessly administrate synergistic growth strategies and collaborative markets. Globally
                            empower inexpensive infomediaries after sustainable mindshare. Phosfluorescently brand
                      professional collaboration and idea-sharing without principle-centered interfaces. </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center mb-4">
                    <div className="col-md-10 col-lg-9">
                        <div className="owl-carousel owl-theme clients-carousel dot-indicator client-logo-wrap">
                            <div className="item single-client">
                                <img src="assets/img/clients-logo-01.png" alt="client logo" className="client-img" />
                            </div>
                            <div className="item single-client">
                                <img src="assets/img/clients-logo-02.png" alt="client logo" className="client-img" />
                            </div>
                            <div className="item single-client">
                                <img src="assets/img/clients-logo-03.png" alt="client logo" className="client-img" />
                            </div>
                            <div className="item single-client">
                                <img src="assets/img/clients-logo-04.png" alt="client logo" className="client-img" />
                            </div>
                            <div className="item single-client">
                                <img src="assets/img/clients-logo-05.png" alt="client logo" className="client-img" />
                            </div>
                            <div className="item single-client">
                                <img src="assets/img/clients-logo-06.png" alt="client logo" className="client-img" />
                            </div>
                            <div className="item single-client">
                                <img src="assets/img/clients-logo-07.png" alt="client logo" className="client-img" />
                            </div>
                            <div className="item single-client">
                                <img src="assets/img/clients-logo-08.png" alt="client logo" className="client-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clientsection
