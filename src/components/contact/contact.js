import React from 'react';
import './contact.css';

const Contact = () => {
  return (

    <div id={'contact'} className={'section'}>
      <div className="row">
        <div className='col s12 m4 center' >
          <a className="link" href="mailto:massi.aitali@gmail.com">
            <i className="fa fa-envelope-o contact-size"></i>
          </a>
        </div>
        <div className='col s12 m4 center' >
        <a className="link"
           href="https://www.linkedin.com/in/massinissa-ait-ali-07711aba/">
          <i className="fa fa-linkedin contact-size"></i>
        </a>
        </div>
        <div className='col s12 m4 center' >
        <a className="link" href="https://github.com/massiaitali">
          <i className="fa fa-github contact-size"></i>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

