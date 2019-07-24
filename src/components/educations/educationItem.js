import React from 'react';
import Parser from 'html-react-parser';

const EducationItem = ({item, index}) => {
  return (
    <div  key={index+'parentDiv'} className="col s12 m4">
      <div  key={index+'childDiv'} className="card port-card">
        <div  key={index+'divImg'} className="card-image">
          <img  key={index+'img'} className={'school-img'} alt={item.img.alt} src={item.img.src}/>
        </div>
        <div  key={index+'content'} className="card-content">
          <span  key={index+'title'} className="card-title">{item.title}</span>
          <p key={index} >
            {Parser(item.content)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
