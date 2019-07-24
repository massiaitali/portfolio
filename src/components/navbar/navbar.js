import React, {useEffect} from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import DownloadButton from './../downloadButton/downloadButton'
import { NavbarItem, clickMobile }  from './navbarItem';

const NavBar = ({ data, uselang }) => {

  const { brand, nav, downloadButton } = data;

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
      <ul id="langage" className="dropdown-content" onClick={() => clickMobile()}>
        <li><a href="#en" onClick={(event) => uselang('en')}>English</a></li>
        <li className="divider"></li>
        <li><a href="#fr"onClick={(event) => uselang('fr')}>French</a></li>
      </ul>
        <nav className="blue">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="#home"  className="brand-logo">{brand}</a>
                    <a href="#menu" data-target="mobile-demo" className="sidenav-trigger">
                      <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        { tabElements }
                        <li>
                          <a className="dropdown-trigger" href="#lang" data-target="langage">Lang<i
                            className="material-icons right">arrow_drop_down</i></a>
                        </li>
                        <li><DownloadButton data={ downloadButton }/></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
      <ul id="langageMob" className="dropdown-content" onClick={() => clickMobile()}>
        <li><a href="#en" onClick={(event) => uselang('en')}>English</a></li>
        <li className="divider"></li>
        <li><a href="#fr"onClick={(event) => uselang('fr')}>French</a></li>
      </ul>
    <ul className="sidenav" id="mobile-demo">
      { tabElements }
      <li>
        <a className="dropdown-trigger" href="#lang" data-target="langageMob">Lang<i
          className="material-icons right">arrow_drop_down</i></a>
      </li>
      <li><DownloadButton data={downloadButton}/></li>
    </ul>
    </React.Fragment>
  );
}

export default NavBar;
