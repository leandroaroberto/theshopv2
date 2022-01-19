import React, {useState} from 'react';

import Navbar from './components/Navbar'
import Header from './components/Header'
import Box from './components/Box'

function App() {

  const [lang, setLang] = useState('BR')

  const toggleLang = (e) => {
    setLang(e)
  }

  return (
    <>
     <Navbar lang={lang} toggleLang={toggleLang}/>
      <Header lang={lang}/>
      <section className="boxes">
        <div className="container">
          <Box/>
          <Box/>
          <Box/>          
          <Box/>
          <Box/>
          <Box/>
          <Box/>          
        </div>
      </section>
    </>
  );
}

export default App;