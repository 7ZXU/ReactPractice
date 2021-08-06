import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';

  function func(){
    return 100
  }
  
  let navStyle = { color:'red', fontSize : '30px' };


  return (
    <div className="App">
      <div className="black-nav">
        <div style = { navStyle }>개발 BLOG</div> 
      </div>
      <img src = { logo } />
      <h4>{ posts }</h4>
    </div>
  );
}

export default App;
