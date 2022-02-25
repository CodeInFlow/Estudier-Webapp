import React from "react";
import './App.css';
import Home from "./Component/Home/Home";
import Sidebar from './Component/Sidebar/Sidebar';
import Subjects from './Component/Home/Department/Subjects';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
      <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/dept/:id'>
            <Subjects/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;