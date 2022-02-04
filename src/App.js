import React from "react";
import './App.css';
import Department from "./Component/Home/Department/Department";
import Sidebar from './Component/Sidebar/Sidebar'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Department />
    </div>
  );
}

export default App;