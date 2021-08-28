import React, { useEffect } from 'react'
import OtherPageHeader from '../components/OtherPageHeader';
import OtherPageBanner from '../components/OtherPageBanner';
import ProjectPageContent from '../components/ProjectPageContent';
import Footer from '../components/Footer';

function ProjectsPage() {
    useEffect(() => window.scrollTo(0,0));
    return (
        <React.Fragment>
            <OtherPageHeader />
            <div className="main">
                <OtherPageBanner pagename="My Projects" />
                <ProjectPageContent />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default ProjectsPage;
