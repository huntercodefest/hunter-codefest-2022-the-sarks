import { useState } from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

function App() {

  return (
    
    <div className="App">
      <>
        
        <Routes>
        <Route
            path='/register'
            element={ <Login />}   
          />

          <Route
            path='/home'
            element={<Home />}
          />

        </Routes>
      </>
    </div>
  );
}

export default App;