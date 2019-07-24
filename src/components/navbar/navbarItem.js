import React from 'react';

export const clickMobile = () => {
  const elem = document.querySelector('.sidenav-overlay');
  elem.click();
};

export const NavbarItem = ({ item,i }) => {
  return (
    <li key={i}><a key={i} href={`#${item.href}`} onClick={() => clickMobile()}>{item.label}</a></li>
  );
};
