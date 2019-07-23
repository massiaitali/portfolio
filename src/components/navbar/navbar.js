import React, {useEffect} from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import DownloadButton from './../downloadButton/downloadButton'
import NavbarItem from './navbarItem';

const NavBar = ({data}) => {

  const { brand, nav, downloadButton } = data;

  const tabElements = nav.map( (item,i) =>
                        <NavbarItem key={i+'contact'} item={item} i={i}/>
                      );

  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    const instance = M.Sidenav;
    instance.init(elems);;
  }, []);

  return (
    <React.Fragment>
		<div className="navbar-fixed">
        <nav className="blue">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="#home"  className="brand-logo">{brand}</a>
                    <a href="#menu" data-target="mobile-demo" className="sidenav-trigger">
                      <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        { tabElements }
                        <li><DownloadButton data={downloadButton}/></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <ul className="sidenav" id="mobile-demo">
      { tabElements }
      <li><DownloadButton data={downloadButton}/></li>
    </ul>
    </React.Fragment>
  );
}

export default NavBar;
