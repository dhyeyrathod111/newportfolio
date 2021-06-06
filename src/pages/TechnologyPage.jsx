import React, { useEffect } from 'react'
import OtherPageHeader from '../components/OtherPageHeader';
import OtherPageBanner from '../components/OtherPageBanner';
import TechnologyPageContentComp from '../components/TechnologyPageContentComp';

import Footer from '../components/Footer';

const TechnologyPage = () => {
    useEffect(() => window.scrollTo(0,0));
    return (
        <React.Fragment>
            <OtherPageHeader />
            <div className="main">
                <OtherPageBanner pagename="Technology" />
                <TechnologyPageContentComp />
                <Footer />
            </div>
        </React.Fragment>
    )
}
export default TechnologyPage;