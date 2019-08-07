import React, {useState, useEffect} from 'react';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import Educations from './components/educations/educations';
import Works from './components/works/works';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import axios from 'axios'

import "materialize-css/dist/css/materialize.min.css";
import './App.css';

import data from './dataPortfolio'

const getGeoInfo = (changeLang) => {
    axios.get('https://ipapi.co/json/').then((response) => {
        const dataJson = response.data;
        dataJson.country === 'FR' && changeLang('fr');
    }).catch((error) => {
        return false;
    });
};

const App = () => {
	const [lang, useLang] = useState('en');

	useEffect(() => {
	    getGeoInfo(useLang);
	}, []);

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
