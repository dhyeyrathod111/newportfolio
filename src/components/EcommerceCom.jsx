import React from 'react';
import ServicesSidebar from './ServicesSidebar';

function EcommerceCom() {
    return (
        <section className="service-details-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="service-details-wrap">
                            <img src="assets/service_image/ecommerce-website.jpg" alt="services" className="img-fluid rounded shadow-sm" />
                            <div className="services-detail-content mt-4 text-justify">
                                <h4>E-Commerce Website Development</h4>
                                <p>Digital-Art provides you with the best ecommerce web design for your industry. Digital-Art is one of leading E-Commerce Web Design Company, taking their customers into the public eye as they build their online stores reaching prospects.   </p>
                                <p>In today’s online market trends E-Commerce (Electronics Commerce) revolutionary change the selling and purchasing goods and services over the internet using online payment like credit cards or PayPal. At Digital-Art, we offer full range of e-commerce website application development including payment gateway, shopping cart integration, e-mails, and all other features that you would like to integrate in your ecommerce website.</p>
                                <p>Now a day’s online shopping become the mainstream for all types of shopping needs and if you have not yet developed an e-commerce website then you probably lose your customer. At Digital-Art, we can saddle up on your behalf and developed full featured e-commerce website that ensure that your customer can easily and conveniently shop from your online store. </p>
                                <p>Digital-Art focuses on providing best industry solution to your customers by developing e-commerce enable website that offers customers to see, choose, buy and pay online through your website using secure payment options. </p>
                                <p>What you are waiting for, contact us today for your e-commerce development. </p>
                            </div>
                        </div>
                    </div>

                    <ServicesSidebar />

                </div>
            </div>
        </section>
    )
}

export default EcommerceCom
