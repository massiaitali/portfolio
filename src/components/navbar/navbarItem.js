import React from 'react';

const clickMobile = () => {
  const elem = document.querySelector('.sidenav-overlay');
  elem.click();
};

const NavbarItem = ({ item,i }) => {
  return (
    <li key={i}><a key={i} href={`#${item.href}`} onClick={() => clickMobile()}>{item.label}</a></li>
  );
};

export default NavbarItem;
