import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/arya-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  function addTask() {
    const task = document.getElementsByClassName("task")[0].value
    setValue2(task)
  }

  return (
    <div className="App">
      <div className='container'>
        <InputText className='task' value={value1} onChange={(e) => setValue1(e.target.value)} />
        <Button label="Submit" aria-label="Submit" onClick={addTask} />
        <div className='task'>{value2 != "" ? "Task is : " : ""}{value2}</div>
      </div>
    </div>
  );
}

export default App;
