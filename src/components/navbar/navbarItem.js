import React from 'react';

const NavbarItem = ({ item,i }) => {
  return (
    <li key={i}><a key={i} href={`#${item.href}`}>{item.label}</a></li>
  );
};

export default NavbarItem;
