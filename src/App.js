import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/sideBar';
import About from './pages/About.jsx';
import Additives from './pages/Additives.jsx';
// import DashBoard from './pages/DashBoard.jsx';
import Explore from './pages/Explore.jsx';
import Setting from './pages/Setting.jsx';
import HomePage from './pages/HomePage.jsx';


const App = ()=> {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          {/* <Route path='/' element={<DashBoard />}/> */}
          {/* <Route path='/dashboard' element={<DashBoard />}/> */}
          <Route path='/homepage' element={<HomePage />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/additives' element={<Additives />}/>
          <Route path='/setting' element={<Setting />}/>
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
