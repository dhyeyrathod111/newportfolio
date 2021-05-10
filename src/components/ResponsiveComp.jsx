import React from 'react';
import ServicesSidebar from './ServicesSidebar';

function ResponsiveComp() {
    return (
        <section className="service-details-section ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="service-details-wrap">
                            <img src="assets/service_image/Responsive_Website_Design.jpg" alt="services" className="img-fluid rounded shadow-sm" />
                            <div className="services-detail-content mt-4 text-justify">
                                <h4>Responsive Website Design</h4>
                                <p>Responsive web design allows one to use technology and methodology that develops a website that will automatically adjust to the screen size and device when interchanged from one device to another. This system of developing and designing a website that is dynamic for all devices thus ensures a consistent user experience, allows replication of content on large or small screens. The user's experience is kept in mind and is adjusted based on what the user is using to see your site or page. </p>
                                <p>They say...mobile is the future. Every product or service that are promoted on various channels, needs to be migrated to a mobile platform. It is evident that mobile devices with full browsers have far greater reach than any other platform, considering there have been more Google search queries on smartphones than on desktop computers and tablets. So why not embrace this change?</p>
                                <h5>Some advantages of Responsive Design : </h5>
                                <ul className="list-unstyled tech-feature-list mb-3">

                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />Your site will show up scaled on different devices that are: desktops, notebooks, tablets, and smartphones.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />You have to build only one type of dynamic site cutting on design and development if different ones had to be made.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />You have the ability to provide broader content for mobile devices.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />It is recommended by Google and the search engine algorithm favours such dynamic sites over others to give good search results. The site is easier to manage with a simple set of keywords and one dynamic site.</li>
                                    <li className="py-1"><span className="ti-control-forward mr-2 color-secondary" />It saves time as it is easier to put the site on the market and it gives a better conversion rate and is more widely used on mobile and handheld devices increasing conversion rate and a higher Rate on investment.</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <ServicesSidebar />
                    
                </div>
            </div>
        </section>
    )
}

export default ResponsiveComp
