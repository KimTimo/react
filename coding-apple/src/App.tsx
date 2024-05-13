import React, { useState } from 'react';
import './App.css';

const App = () => {
  let logo: string = '지콩홈';
  let [title, setTitle] = useState('지콩가족');
  let [member, setMember] = useState(['안자몽', '안몽쉘', '안꼬비']);
  let [isLike, addLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button onClick={() => {
        let copyMember = [...member];
        copyMember[0] = '김오뜨';
          setMember(copyMember);
        }} >버튼임</button>
      <div className="list">
        <h4>{ title }<span onClick={() => { addLike(isLike++); }}> {' '}👍</span>{isLike}</h4>
        <p>{member[0]} </p>
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>{member[1]}</p>
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>{member[2]}</p>
      </div>
    </div>
  );
};

export default App;
