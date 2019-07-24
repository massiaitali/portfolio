import React from 'react';
import {clickMobile} from "../navbar/navbarItem";

export const DropdownData = ({ lang, id, uselang }) => {

  return (
    <ul id={id} className="dropdown-content" onClick={() => clickMobile()}>
      <li><a href={`#${lang.options[0].value}`} onClick={() => uselang('en')}>{ lang.options[0].label }</a></li>
      <li><a href={`#${lang.options[1].value}`} onClick={() => uselang('fr')}>{ lang.options[1].label }</a></li>
    </ul>
  );
};

export const DropdownInstance = ({ lang, id }) => {

  return (
    <li>
      <a className="dropdown-trigger" href="#lang" data-target={id}>{ lang.label }<i
        className="material-icons right">arrow_drop_down</i></a>
    </li>
  );
};
