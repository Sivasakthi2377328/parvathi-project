import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';

import { BrowserRouter as Rs, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Login from "./Components/Login";
import Signup from './Components/Signup';
import { Home,Products } from './Components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Rs>
 <Routes>
  <Route extact path='/' Component={Home}></Route>
  <Route  path='/login' Component={Login}></Route>
  <Route  path='/signin' Component={Signup}></Route>
  <Route  path='/products' Component={Products}></Route>
 </Routes>
  </Rs>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
