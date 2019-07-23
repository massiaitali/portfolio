import React from 'react';
import ContactItem from './contactItem';
import './contact.css';

const Contact = ({data}) => {
  const { social } = data;
  return (

    <div id={'contact'} className={'section'}>
      <div className="row">
        {
          social.map((item, index) =>
            <ContactItem key={index+'contactItem'} item={item} index={index}/>
          )
        }
      </div>
    </div>
  );
};

export default Contact;

