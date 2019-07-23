import React from 'react';
import './educations.css';

const Educations = () => {
  return (
    <div id={'educations'} className={'section'}>
      <h1 className={'title center'}>Educations</h1>
    <div className="row">
      <div className="col s0 m2" />
      <div className="col s12 m4">
        <div className="card school-card">
          <div className="card-image">
            <img className={'school-img'} alt={'polytech'} src="data:image/png;base64,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"/>
          </div>
          <div className="card-content">
            <span className="card-title">Polytech Tours</span>
            <p>General IT study with a lot of mathematicals ( Algebra, Analysis ). I learn :
              POO (Java)
              Web Development ( Node Js Server in back and vanilla js in front ) Machine Learning ( Python and JuliaLang )
              3D and Virtual Reality ( Unity )
              advanced IT skills like Polymorphism
              Algorithm optimization (Parallelization, SIMD)</p>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card school-card">
          <div className="card-image">
            <img className={'school-img'} alt={'polytech'} src="https://www.embedded-france.org/wp-content/uploads/2019/01/Polytech.jpg"/>
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
      <div className="col s0 m2" />
    </div>
    </div>
  );
};

export default Educations;

