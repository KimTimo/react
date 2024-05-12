import React from 'react';

const Clock = (props) => {
  return (
    <div>
      <h1>Hi, React!</h1>
      <h2>현재 시간 : {new Date().toLocaleDateString()}</h2>
    </div>
  );
};

export default Clock;
