import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';

//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#414141';
      showAlert(" Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Dark mode has been disabled", "success");
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    // <Navbar title="TextUtils" aboutText="About TextUtils" />
    // <Navbar />
    <>
      {/* <Router>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router> */}

      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
