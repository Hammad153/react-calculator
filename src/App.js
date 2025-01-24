import React from 'react';
import { useState } from 'react';
import './App.css';
import Calculator from './Calculator';
import { evaluate } from 'mathjs';

function App() {

  const [value, setValue] = useState("");

  const handleClick = (value) => {
    setValue((prevInput => prevInput + value));
  } 

  const clearInput = () => {
    setValue("");
  }

  const handleEqualsClick = () => {
    try {
      const result = evaluate(value); 
      setValue(result.toString());
    } catch (error) {
      console.log(error);
      setValue("Error");
    }
  };

  return (
      <>
      <div>
        <Calculator 
           value={value} 
           handleClick={handleClick} 
           clearInput={clearInput} 
           handleEqualsClick={handleEqualsClick}
        /> 
      </div>
      </>
  );
  
}

export default App;
