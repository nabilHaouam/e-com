import NavBar from "./components/navbar/navbar.component";
import Shop from "./pages/shop/shop.component";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/landing-page.component";
import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/footer/footer.component";
import SingleProduct from "./pages/single-product/single-product.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

function App() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/e-com/shop" element={<Shop products={products} />} />
        <Route path="/e-com/" element={<LandingPage />} />
        <Route path="/e-com/sign-in-sign-up" element={<SignInSignUp />} />
        {products
          ? products.map((product) => {
              var slug = product.title
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
              return (
                <Route
                  key={product.id}
                  path={`/e-com/shop/${slug}`}
                  element={<SingleProduct product={product} />}
                />
              );
            })
          : null}
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
