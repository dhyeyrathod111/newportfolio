import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import config from 'react-global-configuration';
import './App.css';
import Homepage from './pages/Homepage';
import AboutusPage from './pages/AboutusPage';
import Webdesigne from './pages/Webdesigne';
import Websitedevelopment from './pages/Websitedevelopment';
import EcommerceDeveopment from './pages/EcommerceDeveopment';
import Responsivedesign from './pages/Responsivedesign';
import Cmsdevelopment from './pages/Cmsdevelopment';
import Webhosting from './pages/Webhosting';
import Domainregistration from './pages/Domainregistration';
import TechnologyPage from './pages/TechnologyPage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';
import TechDetails from './pages/TechDetails';
import ContactUs from './pages/ContactUs';

config.set({
	api_url: 'http://localhost/dhyey_rathod/apistacksetup/api/',
	api_image_url: 'http://localhost/dhyey_rathod/apistacksetup/',
	facebook_url: 'https://www.facebook.com/dhyey.rathod.98',
	instagram_url: 'https://www.instagram.com/prince.rathod111/'
});

// config.set({
// 	api_url: 'http://dhyeyrathod111.rf.gd/apistacksetup/API/',
// 	api_image_url: 'http://dhyeyrathod111.rf.gd/apistacksetup/',
// 	facebook_url: 'https://www.facebook.com/dhyey.rathod.98',
// 	instagram_url: 'https://www.instagram.com/prince.rathod111/'
// });


function App() {
	return (
		<section>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/about" component={AboutusPage} />
					<Route exact path="/website_design" component={Webdesigne} />
					<Route exact path="/website_development" component={Websitedevelopment} />
					<Route exact path="/cms_website_development" component={Cmsdevelopment} />
					<Route exact path="/ecommerce_website_development" component={EcommerceDeveopment} />
					<Route exact path="/responsive_website_design" component={Responsivedesign} />
					<Route exact path="/web_hosting" component={Webhosting} />
					<Route exact path="/domain_registration" component={Domainregistration} />
					<Route exact path="/technology" component={TechnologyPage} />
					<Route exact path="/technology_details/:techname/:tech_id" component={TechDetails} />
					<Route exact path="/resume" component={ResumePage} />
					<Route exact path="/projects" component={ProjectsPage} />
					<Route exact path="/projects_details" component={ProjectDetails} />
					<Route exact path="/contact" component={ContactUs} />
				</Switch>
			</BrowserRouter>
		</section>
	);
}

export default App;
