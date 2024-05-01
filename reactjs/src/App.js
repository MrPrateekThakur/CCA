import { Routes, Route } from 'react-router-dom';

import SignIn from './Components/SignIn.js';
import SignUp from './Components/SignUp.js';

import Home from './Components/HomePage/Home.js';

import PlayerProfile from './Components/Player/PlayerProfile.js';
import Players from './Components/Player/Players.js';

import Tournament from './Components/Tournaments/Tournament.js';

import Teams from './Components/Team/team.js';
import TeamDetail from './Components/Team/TeamDetails.js';

import './App.css'
import RegistrationForm from './Components/Team/registerTeam.js';

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/signIn' element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />

      <Route path='/teams' element={<Teams />} />
      <Route path='/teamDetails' element={<TeamDetail />} />
      <Route path='/registerTeam' element={<RegistrationForm />} />

      <Route path='/tournament' element={<Tournament />} />

      <Route path='/PlayerProfile' element={<PlayerProfile />} />
      <Route path='/players' element={<Players />} />

    </Routes>
  </>
}

export default App;
