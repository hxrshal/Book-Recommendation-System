import './App.css';
import React from 'react';
import DropDown from './test/DropDown';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:4000/";


function App() {
  return (
    <div className="App">
      <DropDown/>
    </div>
  );
}

export default App;
