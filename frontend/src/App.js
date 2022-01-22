import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import NoMatch from './pages/NoMatch'

export default function App() {

  const [lang, setLang] = useState('BR')

  const toggleLang = (e) => {
    setLang(e)
  }

  return (
    <Router>
    <Navbar lang={lang} toggleLang={toggleLang}/>
      <Routes>
          <Route path="/" element={<Home lang={lang} />}/>
          <Route path="/login" element={<Login lang={lang}/>} />
          <Route path="/cart" element={<Cart lang={lang}/>} />
          <Route path="*" element={<NoMatch />} />        
      </Routes>
    </Router>
  );
}