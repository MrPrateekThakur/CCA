import './App.css'

import { Routes, Route } from 'react-router-dom';
import Home from './Components/HomePage/Home.js';
import Header from './Components/Header.js';
import Team from './Components/TeamPage/Team.js';
function App() {
  return <>
    <Header />
    <Team/>
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes> */}
    {/* <Home /> */}
  </>
}

export default App;
