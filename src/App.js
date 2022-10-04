import './App.css';

// components
import NavBar from './components/NavBar'
import AllUser from './components/AllUsers';
import AddUser from './components/AddUser';
import Home from './components/Home';

// Routing
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<AddUser/>}/>
          <Route path="/all" element={<AllUser/>}/>
          
        </Routes>
    </BrowserRouter>
  );
}

export default App;
