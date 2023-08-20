import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './About';

import { 
BrowserRouter,
Routes, 
Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#101010';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
    }
  }

  return (
    <>
    
      <BrowserRouter>

        <Navbar title="React App" mode={mode} toggleMode={toggleMode}/>

        <Routes>
          <Route path='/' element={<TextForm mode={mode}/>}/> 
          <Route path="/about" element={<About mode={mode}/>}></Route>	
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;

