import  React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./pages/Style.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./pages/Footer";
import SideBar from "./pages/SideBar";

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Shoppoing Cart</h1>
      
      <ul className="links">
        <li><Link to="/">Home</Link></li>
     <li><Link to="/about">About</Link></li>
    <li>  <Link to="/contact">Contact</Link></li>
    <li  > < Link to="/login" >Login</Link></li>
    <li >  <Link to="/signup">SignUp</Link></li>
    
    
  </ul>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes> 
     
      <SideBar/>
      <Footer/>
    </div>
  );
}

export default App;