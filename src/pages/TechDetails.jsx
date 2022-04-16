import React, { useState, useEffect } from 'react'
import config from 'react-global-configuration';
import OtherPageHeader from '../components/OtherPageHeader';
import OtherPageBanner from '../components/OtherPageBanner';
import TechDetailsComp from '../components/TechDetailsComp'
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const TechDetails = props => {

    const [apidata, setApidata] = useState(null);
    let tech_id = props.match.params.tech_id;

    useEffect(() => {
        if (apidata == null) {
            fetch(config.get('api_url') + '/skill_detail/' + tech_id)
                .then(response => response.json())
                .then(data => {
                    setApidata(data);
                });
        }
    });
    if (apidata == null) return <Loader />
    console.log(apidata);
    return (
        <React.Fragment>
            <OtherPageHeader />
            <div className="main">
                <OtherPageBanner pagename={apidata.skills.skills_name} />
                <TechDetailsComp
                    props={apidata.skills}
                />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default TechDetails;