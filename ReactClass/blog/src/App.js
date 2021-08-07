/* eslint-disable */

import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';


function App() {
  let [ title, titleChange ] = useState(['남자 코트 추천', '보기만 해도 웃음이 터지는 나만의 웃음 버튼은?','봄이 오면 혹은 비가 오면 꼭 부르고 싶은 애창곡은?']);
  let [ good, goodChange ] = useState(0);

  // make function to change state 
  function changeTitle(){
    // 수정된 array 만들기
    var newArray = [...title]//title array 복사 //state deep copy   
    newArray[0] = '여자 코트 추천'// 수정 // title[0] 변경
    titleChange(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 BLOG</div> 
      </div>
      <div className = "list">
        <button onClick={ changeTitle }>TitleChangeButton</button>
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
        
        <Modal/>

    </div>
  );
}

function Modal(){
  return (
    <div className = "modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
