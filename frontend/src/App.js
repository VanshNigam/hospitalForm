import React, { useState } from 'react';
import LeftImage from './left (2).png'; // Adjust the path as necessary
import Right from './right'; // Ensure 'Right' is the correct name for your component
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false); // Initialize the login state

  return (
    <div className=" flex flex-row font-inter">
      <img src={LeftImage} className="w-[541px] h-[1024px]" alt="image" />
      <Right isLogin={isLogin} setIsLogin={setIsLogin} />
    </div>
  );
}

export default App;
