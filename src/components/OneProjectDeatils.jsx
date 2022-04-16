import React from 'react'
import config from 'react-global-configuration';
import ProjectSidebar from './ProjectSidebar';
import { Link } from 'react-router-dom';

const OneProjectDeatils = props => {
    const service = [
        { "name": "Website design", "url": "website_design" },
        { "name": "Responsive Website Design", "url": "responsive_website_design" },
        { "name": "Website Development", "url": "website_development" },
        { "name": "E-Commerce Website", "url": "ecommerce_website_development" },
    ];
    return (
        <div>
            <div className="module ptb-100">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-md-8">

                            <article className="post">
                                <div className="post-preview"><img src={config.get('api_image_url') + '/' + props.project.file_name} alt="article" className="img-fluid" /></div>
                                <div className="post-wrapper">
                                    <div className="post-header">
                                        <h1 className="post-title">{props.project.title}</h1>
                                    </div>
                                    {/* <div className="post-content">
                                        <p>{props.project.description}</p>
                                    </div> */}
                                    <div class="post-more pt-4 align-items-center d-flex"><a target="_blank" href={props.project.website_url} class="btn secondary-solid-btn">
                                        Go to website </a></div>
                                </div>
                            </article>

                        </div>

                        <div className="col-md-12 col-lg-4">
                            <div className="project-details-sidebar">
                                <ul className="project-info-list">
                                    {service.map((oneService, index) => {
                                        return (
                                            <Link to={'/' + oneService.url}>
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
                </div>
            </div>
        </div>
    )
}

export default OneProjectDeatils
