import React from 'react'
import { Link } from 'react-router-dom';
function ServicesSidebar() {

    const service = [
        { "name": "Domain Registration", "url": "domain_registration" },
        { "name": "Web Hosting", "url": "web_hosting" },
        { "name": "Content Management System (CMS)", "url": "cms_website_development" },
        { "name": "E-Commerce Website", "url": "ecommerce_website_development" },
        { "name": "Website Development", "url": "website_development" },
        { "name": "Website design", "url": "website_design" },
    ];

    return (
        <div className="col-lg-4 col-md-4">
            <div className="sidebar-right pl-4">
                <aside className="widget widget-categories">
                    <div className="widget-title">
                        <h5>All Services</h5>
                    </div>
                    <ul className="all-service-list">
                        {service.map((oneService, index) => {
                            return (
                                <li><Link key={index} to={'/'+oneService.url}>{oneService.name}</Link></li>
                            )
                        })}
                    </ul>
                </aside>
                <aside className="widget widget-categories">
                    <div className="widget-title">
                        <h5>Need Help?</h5>
                    </div>
                    <p>I am available in 24/7 hours for dedicated support</p>
                    <ul className="primary-list mt-25">
                        <li><span className="ti-location-pin mr-2 color-primary" /> Mumbai , Maharastra</li>
                        <li><span className="ti-mobile mr-2 color-primary" /> +91 9967313968</li>
                        <li><span className="ti-email mr-2 color-primary" /> dhyeyrathod111@gmail.com</li>
                    </ul>
                </aside>
                <aside className="widget widget-categories">
                    <div className="widget-title">
                        <h5>Newsletter</h5>
                    </div>
                    <p>Enter your email address below to subscribe to my newsletter</p>
                    <form action="#" method="post" className="d-none d-md-block d-lg-block">
                        <input type="text" className="form-control input" id="email-footer" name="email" placeholder="info@yourdomain.com" />
                        <button type="submit" className="btn secondary-solid-btn btn-block btn-not-rounded mt-3">Subscribe
                        </button>
                    </form>
                </aside>
            </div>
        </div>
    )
}

export default ServicesSidebar
