
import './App.css';

import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import { Routes } from 'react-router-dom';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Login from "./pages/login/Login.jsx";
function App() {
  return (
   
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/hotels' element={<List/>}></Route>
      <Route path="/hotels/:id" element={<Hotel/>}></Route>
      <Route path="/login" element={<Login/>}/>
    </Routes>   
  );
}

export default App;
