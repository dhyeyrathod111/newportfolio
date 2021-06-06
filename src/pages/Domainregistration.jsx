import React , { useEffect } from 'react'
import OtherPageHeader from '../components/OtherPageHeader';
import OtherPageBanner from '../components/OtherPageBanner';
import DomainnameregComp from '../components/DomainnameregComp';
import ServicesBeforfooter from '../components/ServicesBeforfooter';
import Footer from '../components/Footer';

function Domainregistration() {
    useEffect(() => window.scrollTo(0,0));
    return (
        <React.Fragment>
            <OtherPageHeader />
            <div className="main">
                <OtherPageBanner pagename="Domain Registration"/>
                <DomainnameregComp />
                <ServicesBeforfooter />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Domainregistration
