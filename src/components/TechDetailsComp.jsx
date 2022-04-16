import React from 'react'
import { Link } from 'react-router-dom';
const TechDetailsComp = ({ props }) => {

    const service = [
        { "name": "Website design", "url": "website_design" },
        { "name": "Responsive Website Design", "url": "responsive_website_design" },
        { "name": "Website Development", "url": "website_development" },
        { "name": "E-Commerce Website", "url": "ecommerce_website_development" },
    ];

    return (
        <section className="project-details-section ptb-100">
            <div className="container">
                <div className="progress-item">
                    <div className="progress-title">
                        <h6>
                            My Expertise In This Skill
                            <span className="float-right"><span className="progress-number">{props.lavel}</span>%</span>
                        </h6>
                    </div>
                    <div className="progress">
                        <span style={{ width: props.lavel + "%" }}><span className="progress-line"></span></span>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-xs-12 col-md-8">
                        <div className="img-wrap mb-md-4 mb-lg-0">
                            <img src={'/assets/' + props.image} alt="project" className="img-fluid rounded w-100" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="project-details-sidebar">
                            <ul className="project-info-list">
                                {service.map((oneService, index) => {
                                    return (
                                        <Link to={'/'+oneService.url}>
                                            <li key={index} className="d-flex align-items-center mb-3 p-4 rounded">
                                                <span className="ti-link icon-sm color-secondary d-block mr-3" />
                                                <div className="d-block">
                                                    <h5 className="mb-0">{oneService.name}</h5>
                                                </div>
                                            </li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                {/*project details row start*/}
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="project-details-content">
                            <h5>{props.skills_name}</h5>
                            <p>{props.descriptions}</p>
                        </div>
                    </div>
                </div>
                {/*project details row end*/}
            </div>
        </section>
    )
}

export default TechDetailsComp
