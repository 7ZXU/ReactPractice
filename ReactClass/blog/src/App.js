/* eslint-disable */

import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';


function App() {
  let [ title, titleChange ] = useState(['남자 코트 추천', '보기만 해도 웃음이 터지는 나만의 웃음 버튼은?','봄이 오면 혹은 비가 오면 꼭 부르고 싶은 애창곡은?']);
  let [ good, goodChange ] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div> 
      </div>
      <div className = "list">
        <button onClick={ () => { titleChange(['여자 코트 추천', '보기만 해도 웃음이 터지는 나만의 웃음 버튼은?','봄이 오면 혹은 비가 오면 꼭 부르고 싶은 애창곡은?']) } }>TitleChangeButton</button>
        <h3> { title[0] } <span onClick={ ()=> { goodChange( good+1 ) } }>👍</span> { good } </h3>
        <p> 8월 6일 발행</p>
        <hr/>

        <h3> { title[1] } </h3>
        <p> 8월 6일 발행</p>
        <hr/>

        <h3> { title[2] } </h3>
        <p> 8월 6일 발행</p>
        <hr/>
      </div>

    </div>
  );
}

export default App;
