import React from 'react';
import WorkItem from './workItem';
import './works.css'

const Works = ({ data }) => {
  const { title, worksItem } = data;

  return (
    <div id={'works'} className={'section'}>
      <h1 className={'center title'}>{ title }</h1>
      <div className="row">
        {
          worksItem.map( (item, index) =>
              <WorkItem item={item} index={index} key={index+'workitem'}/>
          )
        }
      </div>
    </div>
  );
};

export default Works;

