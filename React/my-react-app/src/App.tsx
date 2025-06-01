import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Order from './Order';
import { All } from './All'; // All 타입을 import
import Get from './Get';
import axios from 'axios';
import RegisterList from './register/RegisterList';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import PageOne from './Components/PageOne';
import RegisterPage from './realRegister/RegisterPage';


function App () {

  return (
    <div>
      <RegisterPage/>
      <BrowserRouter>
        <Link to={"./realRegister/RegisterPage"}> RegisterPage</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
