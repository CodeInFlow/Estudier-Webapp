import React from 'react';
import Department from './Department/Department';
import TrendingBooks from './Books/TrendingBooks';
import Subjects from './Department/Subjects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ParticularSubject from './Department/ParticularSubject';
import PdfReader from './PdfReader';

function Home() {
  return <div className='home p-6 flex-1'>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Department />
          <TrendingBooks />
        </Route>
        <Route exact path='/dept/:id'>
          <Subjects />
        </Route>
        <Route exact path='/dept/:id/:id2'>
          <ParticularSubject />
        </Route>
        <Route exact path='/dept/:id/:id2/:id3'>
          <PdfReader />
        </Route>
      </Switch>
    </Router>

  </div>;
}

export default Home;

