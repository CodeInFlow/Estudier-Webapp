import React from "react";
import './App.css';
import Home from "./Component/Home/Home";
import Sidebar from './Component/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;