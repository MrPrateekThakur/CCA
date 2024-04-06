import './App.css'

import { Routes, Route } from 'react-router-dom';
import Home from './Components/HomePage/Home.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

function App() {
  return <>
    <Header />
    {/* <Routes>
      <Route path='/' element={<Home />} />
    </Routes> */}
    <Footer />
    {/* <Home /> */}
  </>
}

export default App;
