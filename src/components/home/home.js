import React from 'react';
import Me from './../me/me';

const Home = ({ data }) => {
  const { search, job, me } = data;

	return (
		<div className="section" id="home">
      <div className="section" id="home">
        <div className="container">
          <h5 className="center text-grey margin-top-5">{ search }</h5>
          <h1 className="center title">
            { job }
          </h1>
          <Me data={me}/>
        </div>
      </div>
    </div>
  );
};

export default Home;

