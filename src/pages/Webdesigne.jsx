import React, { useEffect } from 'react';
import OtherPageHeader from '../components/OtherPageHeader';
import OtherPageBanner from '../components/OtherPageBanner';
import WebdesigneComp from '../components/WebdesigneComp';
import ServicesBeforfooter from '../components/ServicesBeforfooter';
import Footer from '../components/Footer';

const Webdesigne = props => {
    useEffect(() => window.scrollTo(0,0));
    return (
        <React.Fragment>
            <OtherPageHeader />
            <div className="main">
                <OtherPageBanner pagename="Website design" />
                <WebdesigneComp />
                <ServicesBeforfooter />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Webdesigne;
