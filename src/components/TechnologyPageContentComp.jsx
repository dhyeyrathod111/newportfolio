import React from 'react';
import OneTechnologyComp from './OneTechnologyComp'
function TechnologyPageContentComp() {
    return (
        <section className="our-blog-section ptb-100">
            <div className="container">

                {/* <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-9">
                        <div className="section-heading text-center mb-5">
                            <strong className="color-secondary">New and Blog</strong>
                            <h2>Our Latest News</h2>
                            <span className="animate-border mr-auto ml-auto mb-4" />
                            <p className="lead">
                                Enthusiastically drive revolutionary opportunities before emerging leadership. Distinctively
                                transform tactical methods of empowerment via resource.
                            </p>
                        </div>
                    </div>
                </div> */}

                
                <div className="row">
                    <OneTechnologyComp 
                        name="PHP"
                        image="assets/skill_images/2851be693a6c2c2630264dfe0fa51f42.jpg"
                        description="I started my IT career with the PHP programing language."
                    />

                    <OneTechnologyComp 
                        name="Jquery"
                        image="assets/skill_images/574f90cfc4bd2f2da518013c9a6e6069.jpeg"
                        description="Till now I experience JQuery It's really awesome and fantastic."
                    />

                    <OneTechnologyComp 
                        name="SQL Database"
                        image="assets/skill_images/92b022c42964e8e8d852888773963306.jpg"
                        description="I practice in SQL for the last 2 years. SQL stands for Structured Query Language."
                    />
                    <OneTechnologyComp 
                        name="AWS"
                        image="assets/skill_images/5740d79b9303e0b741808dd291f0eba8.png"
                        description="Amazon Web Services (AWS) is a subsidiary of Amazon that provides on-demand cloud"
                    />
                    <OneTechnologyComp 
                        name="Codeigniter"
                        image="assets/skill_images/8a2a3cad8ae25b72bf6ddc8e94d27581.png"
                        description="I practice Codeigniter for the last 1 year. Codeigniter is the easiest framework in PHP."
                    />
                    <OneTechnologyComp 
                        name="OWASP (Web Application Security)"
                        image="assets/skill_images/c06d86b9049e0eea25d8ad2175d2e130.jpg"
                        description="I practice on OWASP top 10 for the last 6 months on the organization "
                    />
                    <OneTechnologyComp 
                        name="OpenCart"
                        image="assets/skill_images/5e2ac4fe967ba14b8d0f9c9baeb611d5.jpg"
                        description="OpenCart is a highly customizable open source ecommerce platform with "
                    />
                    <OneTechnologyComp 
                        name="React"
                        image="assets/skill_images/abb1d44614a3611a28e897303caa2636.jpg"
                        description="I practice React for the last 6 months. React is the best frontend technology "
                    />
                    <OneTechnologyComp 
                        name="Laravel"
                        image="assets/skill_images/4d3cca5693a937646a5067ba686800e6.jpg"
                        description="I practice Laravel for the last 8 months. I think this is the best framework for PHP."
                    />


                </div>
            </div>
        </section>
    )
}

export default TechnologyPageContentComp
