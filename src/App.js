import React, {useState} from 'react';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import Educations from './components/educations/educations';
import Works from './components/works/works';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

import "materialize-css/dist/css/materialize.min.css";
import './App.css';

import data from './dataPortfolio'

const App = () => {
	const [lang, useLang] = useState('en');

	const dataPortfolio = data[lang];


	const { navbar, contact, educations, footer, home, works } = dataPortfolio;
  return (
  	<React.Fragment>
	    <NavBar data={navbar} uselang={useLang} />
	    <Home data={home}/>
	    <Educations data={educations}/>
	    <Works data={works}/>
	    <Contact data={contact}/>
	    <Footer data={footer}/>
  	</React.Fragment>
  );
};

export default App;
