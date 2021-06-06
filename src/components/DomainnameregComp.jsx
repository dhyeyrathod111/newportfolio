import React from 'react';
import ServicesSidebar from './ServicesSidebar';
import { Link } from 'react-router-dom';

function DomainnameregComp() {
    return (
        <section className="service-details-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="service-details-wrap">
                            <img src="assets/service_image/domain-registration-banner.jpg" alt="services" className="img-fluid rounded shadow-sm" />
                            <div className="services-detail-content mt-4 text-justify">
                                <h4>Domain Registration</h4>
                                <p>I am doing Domain Name Registration (Web Address). For having Web Presence, Every Company Requires Domain name in his company name like <Link className="bold" to={'/'}>dhyeyrathod.rf.gd</Link>. Domain name registration is done for minimum period of one Year and, maximum for ten years.</p>
                                <p>I do Domain registration of .com/ .net/ .org/ co. in. Domain name provide your own online identity. A domain name is an identification string that defines a realm of administrative autonomy, authority, or control on the Internet. DNS [Domain Name System] is the most recognized system for assigning addresses to Internet web servers. Domain names are used to identify one or more IP addresses. For e.g. the domain name microsoft.com represents about a dozen IP addresses. Domain names are used in URLs to identify particular Web pages.</p>
                                <p> Technically, any name registered in the DNS is a domain name. Domain registration is the process of acquiring a domain name from a domain name registrar. Domain names serve as humanly memorable names for Internet participants, like computers, networks, and services. A domain name represents an Internet Protocol resource </p>
                                <p>Every website to be visible over the internet needs a domain name so that their clients can easily navigate to these sites. You can select any domain name for your website. We at Digital-Art provide you with the service for getting your required domain name registered. The complete process of registering your website is provided to our customers as a service for their ease and benefits.</p>
                            </div>
                        </div>
                    </div>
                    <ServicesSidebar />
                </div>
            </div>
        </section>
    )
}

export default DomainnameregComp
