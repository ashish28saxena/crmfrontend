import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Registration from './component/Registration';
import Login from './component/Login';
import Lead from './component/Lead';
import Adddoctor from './component/Adddoctor';
import Leadlist from "./component/Leadlist"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Nav/>
      <Routes>
        <Route path='/' element={<h1>home</h1>}></Route>
        <Route path='/adddoctor' element={<Adddoctor/>}></Route>
        <Route path='/addlead' element={<Lead/>}></Route>
        <Route path='/leadlist' element={<Leadlist/>}></Route>
        
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/logout' element={<h1>Logout</h1>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
