import React from 'react';
import ServicesSidebar from './ServicesSidebar';

function WebdevlopmentComp() {
    return (
        <section className="service-details-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="service-details-wrap">
                            <img src="assets/service_image/website_development.webp" alt="services" className="img-fluid rounded shadow-sm" />
                            <div className="services-detail-content mt-4 text-justify">
                                <h4>Website Development</h4>
                                <p>Digital-Art is a prestigious Web App Development Company, taking pride in providing Web Application Development Services for local as well as international business. We process with a perfect solutions for a fresh website, reconstructing ideas for your existing website or whether you are looking out for redesigning your website, starting a new website or providing a flash application development for your website, we always make sure that you are 100% satisfied.  </p>

                                <ul className="list-unstyled tech-feature-list mb-3">
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />We have proven experience in developing web application development, integrating in business applications.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />Providing seamless web development process and end-to-end web solutions for better project quality.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />We have a technically sound team with high degree of efficiency on web application development.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />We focus on systematic approach ensuring to match the clientele needs and requirements in terms of cost-effective and time-bound process.</li>
                                </ul>

                                <p>Web Application Development services maximizes the effort of designing, developing and deploying Web application tools for business enterprise domains, to create the best website in web industry, aiming user-friendly functionalities for the visitors to get attracted. There are many business enterprises and organizations which have successfully carried out various business operations all over the world with the use of Web Portal. </p>

                                <p>Websites have become an absolute necessity which has now become more sophisticated with advanced web technologies and applications. Most of the companies are adapting these advanced features to target promotional and marketing for scalable and robust process. </p>

                            </div>
                        </div>
                    </div>

                    <ServicesSidebar />

                </div>
            </div>
        </section>
    )
}

export default WebdevlopmentComp
