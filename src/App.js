import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import Me from './components/me/me';
import Educations from './components/educations/educations';
import Works from './components/works/works';
import Contact from './components/contact/contact';

import './App.css';

const App = () => {
  return (
  	<React.Fragment>
	    <NavBar />
	    <Home />
	    <Me />
	    <Educations />
	    <Works />
	    <Contact />
  	</React.Fragment>
  );
};

export default App;
