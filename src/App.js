import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [currentForm, setCurrentForm]=useState('login');
  const toggleForm =(formName)=>{
    setCurrentForm(formName);
  }
  return (
    <div>
      {currentForm === 'login' ? <Login onFormSwitch={toggleForm}></Login> : <Signup onFormSwitch={toggleForm}></Signup>}
    </div>
  );
}

export default App;
