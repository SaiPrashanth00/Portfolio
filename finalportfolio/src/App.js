import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
     
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Skills"element={<Skills/>}/>
        <Route path="/About"element={<About/>}/>
        <Route path="/Contact"element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


