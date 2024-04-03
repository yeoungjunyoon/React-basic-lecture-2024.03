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