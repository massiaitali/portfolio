import React, {useEffect} from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import DownloadButton from './../downloadButton/downloadButton'
import { NavbarItem }  from './navbarItem';
import { DropdownData, DropdownInstance } from './../dropdownLang/dropdownLang';

const NavBar = ({ data, uselang }) => {

  const { brand, nav, downloadButton, lang } = data;

  const tabElements =
    nav.map( (item,i) =>
      <NavbarItem key={i+'contact'} item={item} i={i}/>
    );

  useEffect(() => {
    const dropdown = document.querySelectorAll(".dropdown-trigger");
    const instanceDropdown = M.Dropdown;
    const sidenav = document.querySelectorAll(".sidenav");
    const instanceSidenav = M.Sidenav;
    instanceDropdown.init(dropdown, {});
    instanceSidenav.init(sidenav);
  }, []);

  return (
    <React.Fragment>
		<div className="navbar-fixed">
      <DropdownData lang={lang} id="langage" uselang={uselang}/>
        <nav className="blue">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="#home"  className="brand-logo">{brand}</a>
                    <a href="#menu" data-target="mobile-demo" className="sidenav-trigger">
                      <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        { tabElements }
                        <DropdownInstance lang={lang} id="langage" />
                        <DownloadButton data={ downloadButton }/>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <DropdownData lang={lang} id="langageMob" uselang={uselang}/>
    <ul className="sidenav" id="mobile-demo">
      { tabElements }
      <DropdownInstance lang={lang} id="langageMob" />
      <DownloadButton data={downloadButton}/>
    </ul>
    </React.Fragment>
  );
}

export default NavBar;
