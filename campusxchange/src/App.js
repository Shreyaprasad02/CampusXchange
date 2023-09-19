import React from 'react';
import './App.css';
import Header from './Header';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Followerscard from './Followerscard';

function App() {
  return (
    <div className="app">
      <Header />
      {/* App Body */}
      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Followerscard />
      </div>
    </div>
  );
}

export default App;
