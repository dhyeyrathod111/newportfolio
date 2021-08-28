import React, { useEffect } from 'react';
import OtherPageHeader from '../components/OtherPageHeader';
import OtherPageBanner from '../components/OtherPageBanner';
import ResumePageContent from '../components/ResumePageContent';
import Footer from '../components/Footer';

function ResumePage() {
    useEffect(() => window.scrollTo(0,0));
    return (
        <React.Fragment>
            <OtherPageHeader />
            <div className="main">
                <OtherPageBanner pagename="Resume" />
                <ResumePageContent />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default ResumePage
