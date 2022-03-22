
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './component/Cart';



  
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    
     <Router>
      
     <Navbar/>
     <>
    
     {}
     <Routes>
     
       <Route path =  "/" element = {<Home />} ></Route>
       <Route path =  "/products" element = {<Products/>}></Route>
       <Route path =  "/contact" element = {<Contact/>}></Route>
       <Route path = "/cart" element = {<Cart/>}></Route>
    
     </Routes>

     </>
     <Footer/>
    </Router>
  );
}

export default App;
