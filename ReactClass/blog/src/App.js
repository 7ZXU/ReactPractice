// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';


function App() {
  let [ title, titleChange ] = useState(['혼밥 혼영, 혼자 어디까지 해봤니?', '보기만 해도 웃음이 터지는 나만의 웃음 버튼은?','봄이 오면 혹은 비가 오면 꼭 부르고 싶은 애창곡은?']);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div> 
      </div>
      <div className = "list">
        <h3> { title[0] } </h3>
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
