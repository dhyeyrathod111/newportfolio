import React, { useEffect } from 'react';
import OtherPageHeader from '../components/OtherPageHeader';
import OtherPageBanner from '../components/OtherPageBanner';
import WebhostingComp from '../components/WebhostingComp';
import ServicesBeforfooter from '../components/ServicesBeforfooter';
import Footer from '../components/Footer';

const Webhosting = props => {
    useEffect(() => window.scrollTo(0,0));
    return (
        <React.Fragment>
            <OtherPageHeader />
            <div className="main">
                <OtherPageBanner pagename="Web Hosting" />
                <WebhostingComp />
                <ServicesBeforfooter />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Webhosting;
