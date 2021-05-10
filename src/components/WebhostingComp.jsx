import React from 'react';
import ServicesSidebar from './ServicesSidebar';

function WebhostingComp() {
    return (
        <section className="service-details-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="service-details-wrap">
                            <img src="assets/service_image/web-hosting-banner.jpg" alt="services" className="img-fluid rounded shadow-sm" />
                            <div className="services-detail-content mt-4 text-justify">
                                <h4>Web Hosting</h4>
                                <p>Website hosting provide as a foundation stone for online being and consequently online advancement. The beginning and initiative step for a company that wishes to have a web presence is to sign up with a Web Hosting company.</p>
                                <p>Digital-Art provides Web Hosting that allows individuals, business or organizations to post their Web Content or Website in the World Wide Web with the Web Space. It is simply termed as service of providing storage space for information, files, videos, images and other content onto servers which can be accessed through Internet by everyone.</p>
                                <p>Digital-Art provides you with the Web Space, Bandwidth, Sub domain, Email Ids and FTP details and we are offering Premium Quality Services in Web Hosting.</p>
                                <h5>Our Web Hosting Services are :</h5>
                                <ul className="list-unstyled tech-feature-list mb-3">
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />Linux Web Hosting.</li>

                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />No need to pay your developer monthly maintenance or hourly rate for any updates.</li>

                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />Windows Hosting</li>

                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />Reseller Hosting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <ServicesSidebar />
                    
                </div>
            </div>
        </section>
    )
}

export default WebhostingComp
