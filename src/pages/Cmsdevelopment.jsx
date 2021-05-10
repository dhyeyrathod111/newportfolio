import React, { useEffect } from 'react';
import OtherPageHeader from '../components/OtherPageHeader';
import OtherPageBanner from '../components/OtherPageBanner';
import CmsComp from '../components/CmsComp';
import ServicesBeforfooter from '../components/ServicesBeforfooter';
import Footer from '../components/Footer';

const Cmsdevelopment = props => {
    useEffect(() => window.scrollTo(0,0));
    return (
        <React.Fragment>
            <OtherPageHeader />
            <div className="main">
                <OtherPageBanner pagename="Content Management System (CMS)" />
                <CmsComp />
                <ServicesBeforfooter />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Cmsdevelopment;
