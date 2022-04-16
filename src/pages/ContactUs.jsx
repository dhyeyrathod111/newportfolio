import React, { useEffect } from 'react'
import OtherPageHeader from '../components/OtherPageHeader';
import OtherPageBanner from '../components/OtherPageBanner';
import ServicesBeforfooter from '../components/ServicesBeforfooter';
import ContactUsContent from '../components/ContactUsContent';
import Footer from '../components/Footer';

const ContactUs = props => {
    return (
        <React.Fragment>
            <OtherPageHeader />
            <div className="main">
                <OtherPageBanner pagename="Contact Me" />
                <ContactUsContent />
                <ServicesBeforfooter />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default ContactUs;
