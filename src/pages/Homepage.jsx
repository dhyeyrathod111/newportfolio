import React, { useEffect } from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Promotion from '../components/Promotion'
import AboutHomepage from '../components/AboutHomepage';
import Calltoaction from '../components/Calltoaction';
import Services_section from '../components/Services_section';
import Whychooseus from '../components/Whychooseus';
import Outstandingsection from '../components/Outstandingsection';
import Calltoactionvideo from '../components/Calltoactionvideo';
import Workprocesssection from '../components/Workprocesssection';
import Testimonialsection from '../components/Testimonialsection';
import Ourblogsection from '../components/Ourblogsection';
import Clientsection from '../components/Clientsection';
import Teamtwosection from '../components/Teamtwosection';
import Footer from '../components/Footer';

const Homepage = props => {
    useEffect(() => window.scrollTo(0,0));
    return (
        <React.Fragment>
            <Header />
            <div className="main">
                <Banner />
                <Promotion />
                <AboutHomepage />
                <Calltoaction />
                <Services_section />
                <Whychooseus />
                <Workprocesssection />
                <Calltoactionvideo />
                <Outstandingsection />
                {/* <Testimonialsection />
                <Ourblogsection />
                <Clientsection />
                <Teamtwosection /> */}
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Homepage;
