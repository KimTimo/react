import React, { useState } from 'react';
import './App.css';

import Modal from './component/Modal';

const App = () => {
  let logo: string = '지콩홈';
  let [title, setTitle] = useState(['지콩가족', '머콩가족', '상어가족', '자몽가족', '몽돌가족', '꼬비가족']);
  // array 정렬하기
  let [isLike, addLike] = useState(0);
  let [member, setMember] = useState(['안자몽', '안몽쉘', '안꼬비']);

  let sortTitle = () => {
    // setTitle(title.map((title) => title));
    let newTitle = [...title];
    newTitle.sort((a, b) => b.localeCompare(a));
    setTitle(newTitle);
    console.log(title);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{member[0]} <span onClick={() => { addLike(isLike++); }}> {' '}👍</span>{isLike}</h4>
        <p>{ title[0] }</p>
      <button onClick={() => {
        let copyMember = [...member];
        copyMember[0] = '김오뜨';
          setMember(copyMember);
        }} >버튼임</button>
        <button onClick={sortTitle}>정렬버튼</button>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <p>{member[0]}</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>{member[1]}</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>{member[2]}</p>
      </div>
      <Modal />
    </div>

  );
};

export default App;
