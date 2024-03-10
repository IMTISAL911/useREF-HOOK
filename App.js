import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';


function App() {

  let inputRef=useRef(null);

  function handleInput(){
    console.log(inputRef.current.value);
    inputRef.current.value="100";
    inputRef.current.focus();
    inputRef.current.style.color="red";

  }
  return (
    <div className="App">
      
      <h1>USE_REF HOOK IN REACT</h1>

      <input type='text' ref={inputRef} />

      <button onClick={handleInput}>chek USEREF</button>
    </div>
  );
}

export default App;
