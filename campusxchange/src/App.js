import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/Sidebar';
import Feed from './components/Feed/Feed';
import Followerscard from './components/FollowersCard/Followerscard';


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
