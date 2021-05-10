import React from 'react'

function ServicesSidebar() {
    return (
        <div className="col-lg-4 col-md-4">
            <div className="sidebar-right pl-4">
                <aside className="widget widget-categories">
                    <div className="widget-title">
                        <h5>All Services</h5>
                    </div>
                    <ul className="all-service-list">
                        <li><a href="#">Financial Services Consulting</a></li>
                        <li><a href="#">Consumer Product Consulting</a></li>
                        <li><a href="#">Global Consumer insights</a></li>
                        <li><a href="#">Independent contractor</a></li>
                        <li><a href="#">Creative Idea Development</a></li>
                        <li><a href="#">Social Media Marketing</a></li>
                    </ul>
                </aside>
                <aside className="widget widget-categories">
                    <div className="widget-title">
                        <h5>Need Help?</h5>
                    </div>
                    <p>We are available in 24/7 hours for dedicated support</p>
                    <ul className="primary-list mt-25">
                        <li><span className="ti-location-pin mr-2 color-primary" /> 123 Yellow House, Mn 9007
                                    </li>
                        <li><span className="ti-mobile mr-2 color-primary" /> (+123) 456-789-012</li>
                        <li><span className="ti-email mr-2 color-primary" /> youname@domail.com</li>
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
