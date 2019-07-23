import React from 'react';

const Footer = ({data}) => {
  const { name, github } = data;

  return (
    <footer className="page-footer blue no-top-padding">
      <div className="footer-copyright">
        <div className="container">
          { name }
          <a className="grey-text text-lighten-4 right" href={github.src}>{ github.label }</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
