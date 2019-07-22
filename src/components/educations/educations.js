import React from 'react';
import './educations.css';

const Educations = () => {
  return (
    <div id={'educations'} className={'section'}>
    <div className="row">
      <div className="col s1 m4" />
      <div className="col s10 m4">
        <div className="card school-card">
          <div className="card-image">
            <img className={'school-img'} alt={'polytech'} src="https://pbs.twimg.com/profile_images/1125301632479178752/4ulwAu21_400x400.png"/>
          </div>
          <div className="card-content">
            <span className="card-title">Polytech Paris Sud</span>
            <p>General IT study with a lot of mathematicals ( Algebra, Analysis ). I learn :
              POO (Java)
              Web Development ( Node Js Server in back and vanilla js in front ) Machine Learning ( Python and JuliaLang )
              3D and Virtual Reality ( Unity )
              advanced IT skills like Polymorphism
              Algorithm optimization (Parallelization, SIMD)</p>
          </div>
        </div>
      </div>
      <div className="col s1 m4" />
    </div>
    </div>
  );
};

export default Educations;

