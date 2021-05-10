import React from 'react';
import ServicesSidebar from './ServicesSidebar';

function CmsComp() {
    return (
        <section className="service-details-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="service-details-wrap">
                            <img src="assets/service_image/cms_banner.jpg" alt="services" className="img-fluid rounded shadow-sm" />
                            <div className="services-detail-content mt-4 text-justify">
                                <p>Content management system abbreviated as CMS is software or a tool that allows creating, editing, publishing and modifying content within a website. CMS provides a web-based GUI, enabling publishers to access the CMS online using only a Web browser. CMS helps in making the website development process more flexible. CMS helps greatly in managing your content so that you are not in need of any web developer to make any changes to your websites as and when you need. In short CMS is a system to simplify the publication of web content to web sites without any knowledge of the code used in your websites. Your content may be a text, image, video or audio you can add it to your website with greater ease.</p>
                                <h5>Why CMS?</h5>
                                <ul className="list-unstyled tech-feature-list mb-3">
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />Power to add or edit pages on your website yourself without any technical knowledge.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />No need to pay your developer monthly maintenance or hourly rate for any updates.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />Very useful for organization that deal with large amount of contents.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />Manage your content yourself.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />You can change CMS website layout yourself.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />Contents can be searched, retrieved, and reused quickly.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />Create unlimited number of pages.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />Provides security to your data as it is stored in databases.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />Helps largely in reducing your cost in long run.</li>
                                </ul>
                                <p>The usage of CMS is increasing day by day. Many websites have started using CMS to support their website work. CMS has generated a greater efficiency from the point of users. CMS tools are really easy to handle. The main importance of CMS is to present information in a website. So why not use CMS for your websites too?</p>
                                <p>At Digital-Art we create CMS for our various clients. We have been very successful in providing quality services to our customers. We provide this and other services at highly affordable price. Our prices and quality can be challenged with any other service providers.</p>
                                <h5>Benefits of Content Management System?</h5>
                                <ul className="list-unstyled tech-feature-list mb-3">
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />CMS allows easiest and quickest way of publishing and managing contents without the knowledge of any software program.</li>
                                    
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />Security of the content management is fully-secured, assigning user privileges only for the authorized person to access and manage content.</li>
                                    
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />Easy for the user to add, edit, update and review texts.</li>

                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />CMS is driven with timely deliver by allowing it to publish content in multiple channels.</li>

                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />It is a cost-efficient as Content Management Platforms like Drupal, WordPress and Joomla are open source widely used by programmers and developers.</li>
                                    
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

export default CmsComp;
