// import "./App.css";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Work from "./Components/Work";
// import Testimonial from "./Components/Testimonial";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
// import MenuPage from "./Components/MenuPage";

// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <MenuPage/>
//       <About />
//       <Work />
//       <Testimonial />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import MenuPage from "./Components/MenuPage";
import Navbar from "./Components/Navbar";
// import MenuPage from "./pages/MenuPage";
import CartPage from "./Components/CartPage";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <div className="App">
        <Navbar cart={cart} setCart={setCart}/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/menu" element={<MenuPage />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<MenuPage cart={cart} setCart={setCart} />} />
         <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
