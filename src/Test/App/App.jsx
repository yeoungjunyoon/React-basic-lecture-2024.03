import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);


  const onIncrease = () => {
    setNumber((prevCount) => (prevCount % 10) +1);
  }

  const disabled = () => {
    setNumber(prevNumber => 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>증가시키기</button>
      <button onClick={disabled}>리셋하기</button>
    </div>
  );
}


// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(1);
//   const handleClick = () => {
//     setCount(count+1);
//   }
//   return (
//     <div style={{width: '200px', textAlign: 'center', backgroundColor: '#ebebeb'}}>    
//       <div style={{fontSize: '5rem'}}>{count}</div>
//       <button onClick={handleClick} disabled={count >= 10}>증가하기</button>
//       <button onClick={() => setCount(1)}>리셋하기</button>
//     </div>
//   );
// }

// export default App;

