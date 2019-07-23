import React, {useEffect} from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import DownloadButton from './../downloadButton/downloadButton'

const NavBar = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    const instance = M.Sidenav.init(elems);
    console.log(instance);
  }, []);

  return (
    <React.Fragment>
		<div className="navbar-fixed">
        <nav className="blue">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="#home"  className="brand-logo">MA</a>
                    <a href="#menu" data-target="mobile-demo" className="sidenav-trigger">
                      <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#educations">Educations</a></li>
                        <li><a href="#works">Work history</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><DownloadButton/></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <ul className="sidenav" id="mobile-demo">
      <li><a href="#home">Home</a></li>
      <li><a href="#educations">Educations</a></li>
      <li><a href="#works">Work history</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><DownloadButton/></li>
    </ul>
    </React.Fragment>
  );
}

export default NavBar;
