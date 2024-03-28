import './App.css';

function App() {
  const name = 'james';   // 자바스크립트 영역
  return (
    <div>  {/* 하나의 태그로 감싸줘야 함. */} 
      <h1 style={{backgroundColor:"beige"}}>name: {name}</h1>
      <hr />     { /* 반드시 닫는 태크가 있어야 함 */ }
      <img src="https://picusm.photos/200/200" className="photo" />
    </div>
  );
}

export default App;
