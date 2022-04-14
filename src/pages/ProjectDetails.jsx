import React, { useState, useEffect } from 'react'
import config from 'react-global-configuration';

import OtherPageHeader from '../components/OtherPageHeader';
import OtherPageBanner from '../components/OtherPageBanner';
import Footer from '../components/Footer';
import OneProjectDeatils from '../components/OneProjectDeatils';
import Loader from '../components/Loader';

function ProjectDetails(props) {

    const [apidata, setApidata] = useState(null);

    useEffect(() => {
        if (apidata == null) {
            fetch(config.get('api_url')+'oneproject/'+props.match.params.project_id)
                .then(response => response.json())
                .then(data => {
                    setApidata(data); 
                });
        }
    });
    
    if (apidata == null) return <Loader />

    return (
        <React.Fragment>
            <OtherPageHeader />
            <div className="main">
                <OtherPageBanner pagename={apidata.title} />
                <OneProjectDeatils project={apidata} />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default ProjectDetails
