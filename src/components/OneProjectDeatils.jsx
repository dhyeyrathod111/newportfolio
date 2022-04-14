import React from 'react'
import config from 'react-global-configuration';
import ProjectSidebar from './ProjectSidebar';



const OneProjectDeatils = props => {
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
                        <div className="col-lg-4 col-md-4">
                            <ProjectSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneProjectDeatils
