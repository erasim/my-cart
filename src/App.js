import  React,{useState} from "react";
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
import ShopNow from "./pages/ShopNow";
import ItemsDetails from "./pages/ItemsDetails";
import AddToCard from "./pages/AddToCard";
import Test from "./pages/Test";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Popup from "./pages/Popup";



function App() {
  var inputarr = JSON.parse(localStorage.getItem("arr"));
  const [show, setShow] = useState(false);
  
  // console.log(inputarr.length);
  return (
    <div className="App">
     
      <h1>Welcome to My Shoppoing Cart </h1>
      
      <ul className="links">
      <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/">Home</Link></li>
     <li><Link to="/about">About</Link></li>
    <li>  <Link to="/contact">Contact</Link></li>
    <li  > < Link to="/login" >Login</Link></li>
    <li >  <Link to="/signup">SignUp</Link></li>
    <li >  <Link to="/items">Items</Link></li>
    <span className="ShoppingCartIcon"  onClick={() => setShow(!show)}><ShoppingCartIcon/>{inputarr.length}</span>
   
 
    
    
  </ul>
  <div className="mainbar">
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="shop" element={<ShopNow />} />
        <Route path="add" element={<AddToCard/>} />
        <Route path="shop/:id" element={<ItemsDetails />} />
        <Route path="test" element={<Test/>}/>
        <Route path="popup" element={<Popup/>}/>
      </Routes> 
      <SideBar text="Asim Bhai Sainthal Wale "/>
      </div>
      { show ? (
<table className='cart'>
 { 
 
 inputarr.map(
            (info,ind)=>{ 
                return(
                    <tr key={ind}>
                    <td>{info.name}</td>
                    <td>{info.marks}</td>
     
                    </tr>
                )
            })
         }
         <p>Total Amount is: </p>

</table>
) : null} 



{
  
}

      <Footer/>
    </div>
  );
}

export default App;