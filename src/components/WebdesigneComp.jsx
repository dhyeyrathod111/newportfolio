import React from 'react';
import ServicesSidebar from './ServicesSidebar';

function WebdesigneComp() {
    return (
        <section className="service-details-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="service-details-wrap">
                            <img src="assets/service_image/web_design_banner.jpg" alt="services" className="img-fluid rounded shadow-sm" />
                            <div className="services-detail-content mt-4 text-justify">
                                <h4>Website Design</h4>
                                <p>For every business it is now vital to have website as website is the best means of communication between your company and your customers. If you have not yet designed your company website you probably lose your potential business and customer. Don't worry you are in the right hand, if you want to a good website designing company in Mumbai then Digital-Art is one of the companies you can rely upon.</p>
                                <p>I provides affordable website designing service in Mumbai. At Digital-Art we know how important is your brand and your online presence, that's why our website designing service caters to companies, individuals, professionals etc.</p>
                                <p>I am, one of the professionally managed Website Designing Company can deliver the best web services entirely based on your budget. Let us know your requirements and we will design the best customized solution for your company.</p>
                                <p>Responsive websites are the latest trend in the market of website development. The successful projects and happy clients prove our expertise in responsive website development. Our developed responsive websites have better user experience, higher conversion rate and excellent performance. Our team of developers is equipped with latest technologies and immense resources to each time develop totally innovative and high-performing responsive website.</p>
                                <p>Our team understands the difference between a mobile user and a computer user, their behavior, and limitation in terms of technology, environment and usability. Therefore, we carefully research thoroughly before developing responsive websites, which will be able to engage more and convert more. Apart from this, we try our best to understand your requirements, your business system, and target audience. If you want to make your existing website responsive then we also provide responsive web design services for the existing websites. Our developed responsive designs are compatible across all major devices and mobile operating systems.</p>
                            </div>
                        </div>
                    </div>
                    
                    <ServicesSidebar />
                    
                </div>
            </div>
        </section>
    )
}

export default WebdesigneComp
