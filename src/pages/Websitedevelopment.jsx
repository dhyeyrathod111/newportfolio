import React, { useEffect } from 'react';
import OtherPageHeader from '../components/OtherPageHeader';
import OtherPageBanner from '../components/OtherPageBanner';
import WebdevlopmentComp from '../components/WebdevlopmentComp';
import ServicesBeforfooter from '../components/ServicesBeforfooter';
import Footer from '../components/Footer';

function Websitedevelopment() {
    useEffect(() => window.scrollTo(0, 0));
    return (
        <React.Fragment>
            <OtherPageHeader />
            <div className="main">
                <OtherPageBanner pagename="Website Development" />
                <WebdevlopmentComp />
                <ServicesBeforfooter />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Websitedevelopment;
