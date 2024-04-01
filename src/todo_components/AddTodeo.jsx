import '../apps/App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdLibraryAddCheck } from "react-icons/md";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (event) => setText(event.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0)
      return;
    onAdd({id:uuidv4(), work:text, status:'active'});
    setText('');
  }
  return (
    <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
      <input type='text' placeholder='할 일을 입력하세요.' value={text}
        onChange={handleChange} />
      <button><MdLibraryAddCheck /> 추가</button>
    </form>
  );
}