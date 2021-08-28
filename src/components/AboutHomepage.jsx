import React from 'react'

const AboutHomepage = props => {
    return (
        <section className="about-us-section ptb-100 gray-light-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="about-us-img">
                            <img src="assets/img/about-us-img.svg" alt="about us" className="img-fluid about-single-img" />
                            <img src="assets/img/about-us-img-bg.svg" alt="about bg" className="about-us-bg" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="about-us-content-wrap">
                            <strong className="color-secondary">About me</strong>
                            <h3>I Design and develop stunning Digital Products</h3>
                            <span className="animate-border mb-4" />
                            <p>I having expertise in providing SAAS (Software as a service) Solutions, Corporate Branding For Business Brands, UI/UX Designing, E-commerce and Portal Development, Android & IOS App Development, Customized Software Solutions, App Development and Digital Marketing. I encourage innovation and experimentation with fresh ideas, while considering the clients requirements at the same time.</p>
                            <p>
                                I can build you a new website from scratch, redesign your current site and I also undertake jobs for updating the content for websites. I specialize in building intuitive and easy to use websites. Good design is more than just making things look pretty; it’s about creative problem solving.
                            </p>
                            <p>
                                So come on, make full use of our talent and service, which is being offered at a very affordable price. I came to Technical world with core mission to produce creative, effective and cost effective web solutions for our clients in powerful, clear, memorable manner. I treat each of our clients individually and work according to their needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutHomepage;