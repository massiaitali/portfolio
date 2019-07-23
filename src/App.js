import React from 'react';
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
	const { navbar, contact, educations, footer, home, works } = data;
  return (
  	<React.Fragment>
	    <NavBar data={navbar} />
	    <Home data={home}/>
	    <Educations data={educations}/>
	    <Works data={works}/>
	    <Contact data={contact}/>
	    <Footer data={footer}/>
  	</React.Fragment>
  );
};

export default App;
