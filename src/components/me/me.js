import React from 'react';

const Me = ({ data }) => {
  const { profil, name, detail, exp } = data;

  return (
    <div className="row center margin-top-10">
      <div className="col s12 m2">
        <img alt={profil.alt} className="responsive-img circle margin-top-5" src={profil.src} />
      </div>
      <div className="col s12 m10 margin-top-5">
        <h5 className="left">{ name }</h5>
        <div className='margin-top-5'>
          <p>
            { detail }
          </p>
          <p className='margin-top-2'>
            { exp }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Me;
