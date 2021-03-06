import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import { Navbar } from './components/Navbar';
import { Alert } from 'bootstrap';
import { AlertState } from './context/alert/AlertState';


function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar /> 
        <div className="container pt-4">
          <Alert />
          <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/about"} element={<About />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;