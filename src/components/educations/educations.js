import React from 'react';
import EducationItem from './educationItem';

const Educations = ({ data }) => {
  const { title, school } = data;

  return (
    <div id={'educations'} className={'section'}>
      <h1 className={'title center'}>{title}</h1>
    <div className="row">
      <div className="col s0 m2" />
      {
        school.map( (item, index) =>
            <EducationItem key={index+'item'} item={item} index={index} />
        )
      }
      <div className="col s0 m2" />
    </div>
    </div>
  );
};

export default Educations;

