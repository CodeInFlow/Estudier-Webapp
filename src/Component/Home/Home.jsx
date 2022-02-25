import React from 'react';
import './Home.css';
import Department from './Department/Department';
import TrendingBooks from './Books/TrendingBooks';

function Home() {
  return <div className='home p-6 flex-1'>
    <Department />
    <TrendingBooks />
  </div>;
}

export default Home;

