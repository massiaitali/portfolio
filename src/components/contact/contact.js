import React from 'react';
import ContactItem from './contactItem';
import './contact.css';

const Contact = ({data}) => {
  const { social, title } = data;
  return (

    <div id={'contact'} className={'section'}>
      <h1 className={'center title'}>{ title }</h1>
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

