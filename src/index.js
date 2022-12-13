import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navigation />
    <Login />
    <Register />
  </div>
);
