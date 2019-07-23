import React from 'react';

const ContactItem = ({ item, index }) => {
  return (
    <div key={index} className='col s12 m4 center' >
      <a key={index} className="link" href={item.url}>
        <i key={index} className={`fa ${item.network} contact-size`}></i>
      </a>
    </div>
  );
};

export default ContactItem;
