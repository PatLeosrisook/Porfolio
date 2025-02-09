import React from 'react';
import ReactDOM from 'react-dom/client';
import './Pages/main.css';
import App from './App';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router"
import PrivateRoute from './Component/PrivateRoute';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
    </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
