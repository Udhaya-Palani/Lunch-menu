import './App.css';
import Menu from './Menu';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Lunch from './Pages/lunch';
import Takeout from './Pages/takeout';
import Profile from './Pages/profile';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation(); 
  const renderMenu = !location.pathname.startsWith('/orderNow');

  return (
    <div>
      {renderMenu && <Menu  />}
      <Routes>
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/takeout" element={<Takeout />} />
        <Route path="/orderNow" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
