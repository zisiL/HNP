import './App.css';

import { useState} from 'react'
import Users from './pages/Users.js';


import AddUpdateUser from './pages/AddUpdateUser.js';
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';

import ShowUserVaccination from './Components/ShowUserVaccination';
import AddPatient from './pages/AddPatient';
import AddVaccination from './pages/AddVaccination';

function App() {
  const[userId, setUserId]= useState("");
  return (
    <>
    <div className="App">
    </div>
    <Router>
          <Routes>
          <Route path="/" element={<Users setUserId={setUserId}/>} />
          <Route path="/users" element={<Users setUserId={setUserId}/>} />
          <Route path="/AddUser"  element={<AddUpdateUser status="add"/>}/>
          <Route path="/UpdateUser/:id" element={<AddUpdateUser status="update"/>} />
          <Route path="/AddPatient"  element={<AddPatient />}/>
          <Route path="/AddVaccination"  element={<AddVaccination />}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
