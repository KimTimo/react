import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  let logo: string = 'bizbee';
  let title: string = 'ERP 3팀 진행중 프로젝트';
  let [project, a] = useState(['ERP Mobile', '물류화랑 Mobile', '영업&물류']);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>{project[0]}</p>
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>{project[1]}</p>
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>{project[2]}</p>
      </div>
    </div>
  );
};

export default App;
