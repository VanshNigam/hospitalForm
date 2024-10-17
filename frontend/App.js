import React from 'react';
import LeftImage from './left (2).png'; // Adjust the path as necessary// Adjust the path as necessary
import Right from './right'; // Ensure 'Right' is the correct name for your component
import './App.css';

function App() {
  return (
    <div className=" flex flex-row">
      <img src={LeftImage} className="w-[541px] h-[1024px]" alt="image" />
      <Right />
    </div>
  );
}

export default App;
