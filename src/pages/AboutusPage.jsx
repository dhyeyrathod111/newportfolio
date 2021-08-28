import React, { useEffect } from 'react'
import OtherPageHeader from '../components/OtherPageHeader';
import OtherPageBanner from '../components/OtherPageBanner';
import Promosection from '../components/Promosection';
import Workprocesssection from '../components/Workprocesssection';
import Workprogress from '../components/Workprogress';
import Clientsection from '../components/Clientsection';
import Footer from '../components/Footer';
import AboutHomepage from '../components/AboutHomepage';

const AboutusPage = () => {
    useEffect(() => window.scrollTo(0,0));
    return (
        <React.Fragment>
            <OtherPageHeader />
            <div className="main">
                <OtherPageBanner pagename="About me" />
                <AboutHomepage />
                <Promosection />
                <Workprocesssection />
                <Workprogress />
                <Clientsection />
                <Footer />
            </div>
        </React.Fragment>
    )
}
export default AboutusPage;