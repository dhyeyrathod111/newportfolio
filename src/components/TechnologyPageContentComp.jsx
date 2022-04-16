import React, { useState, useEffect } from 'react';
import OneTechnologyComp from './OneTechnologyComp';
import config from 'react-global-configuration';
import Loader from './Loader';
const TechnologyPageContentComp = props => {
    const [apidata, setApidata] = useState(null);
    useEffect(() => {
        if (apidata == null) {
            fetch(`${config.get('api_url')}/all_skill`)
                .then(response => response.json())
                .then(data => setApidata(data));
        }
    });
    if (apidata == null) return <Loader />
    return (
        <section className="our-blog-section ptb-100">
            <div className="container">
                <div className="row">
                    {apidata.skills.map(oneSkils => (
                        <OneTechnologyComp
                            name={oneSkils.skills_name}
                            image={oneSkils.image}
                            description={oneSkils.descriptions.slice(0, 60)}
                            key={oneSkils.id}
                            id={oneSkils.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechnologyPageContentComp
