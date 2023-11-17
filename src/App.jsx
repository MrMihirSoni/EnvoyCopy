import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Demo from './pages/Demo';
import Home from './pages/Home';
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
