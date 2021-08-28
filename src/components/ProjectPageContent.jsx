import React, { useState, useEffect } from 'react';
import OneProjectComp from './OneProjectComp';
import Loader from './Loader';
const ProjectPageContent = props => {
    const [apidata, setApidata] = useState(null);
    useEffect(() => {
        if (apidata == null) {
            fetch('http://localhost/dhyey_rathod/apistacksetup/api/all_project')
                .then(response => response.json())
                .then(data => {
                    setApidata(data);
                });
        }
    });
    if (apidata == null) return <Loader />
    return (
        <section className="our-blog-section ptb-100">
            <div className="container">
                <div className="row">
                    {apidata.projects.map(oneProject => (
                        <OneProjectComp
                            name={oneProject.title}
                            image={oneProject.file_name}
                            description={oneProject.description.slice(0, 60)}
                            key={oneProject.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectPageContent

