import NavBar from "./components/navbar/navbar.component";
import Shop from "./pages/shop/shop.component";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/landing-page.component";
import './App.css'
import {useState,useEffect} from 'react'
import Footer from './components/footer/footer.component'

function App() {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  
    
  }, [])
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/shop" element={<Shop products={products}/>} />
        <Route path="/" element={<LandingPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
