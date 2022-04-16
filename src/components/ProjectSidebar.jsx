import React, { useState, useEffect } from 'react';
import config from 'react-global-configuration';
import Loader from './Loader';
import { Link } from 'react-router-dom';

function ProjectSidebar() {
    const [apidata, setApidata] = useState(null);

    useEffect(() => {
        if (apidata == null) {
            fetch(config.get('api_url') + '/all_project/5')
                .then(response => response.json())
                .then(data => {
                    setApidata(data);
                });
        }
    });

    if (apidata == null) return <Loader />
    return (
        <div className="sidebar-left pr-4">
            <aside className="widget widget-recent-entries-custom">
                <div className="widget-title">
                    <h6>Recent Posts</h6>
                </div>
                <ul>
                    {apidata.projects.map(oneProject => (
                        <OneSidebarProject data={oneProject} />
                    ))}
                </ul>
            </aside>
        </div>
    )
}

const OneSidebarProject = props => {
    return (
        <Link to={'/projects_details?id='+props.data.id}>
            <li className="clearfix" key={props.data.id}>
                <div className="wi"><img src={config.get('api_image_url') + props.data.file_name} alt="recent post" className="img-fluid rounded" /></div>
                <div className="wb"><a href="#">{props.data.title}</a><span className="post-date">May 8, 2016</span></div>
            </li>
        </Link>
    )
}

export default ProjectSidebar;
