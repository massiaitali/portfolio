import React from 'react';
import Parser from 'html-react-parser';

const WorkItem = ({ item, index }) => {
  return (
    <div key={index+'cardwork'} className="col s12 m4">
      <div className="card port-card">
        <div className="card-image">
          <img alt={item.img.alt} src={item.img.src}/>
        </div>
        <div key={index+'cardwork'} className="card-content">
          <span key={index+'titlework'} className="card-title">{item.title}</span>
          {Parser(item.content)}
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
