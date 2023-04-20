import React from "react";
import {
  Home,
  About,
  Pricing,
  Testimonial,
  Blog,
  Product,
} from "./pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/CommonComponents/Sidebar"
import "./App.css"

const App = () => {
  return (
    <div style={{ overflowX: "hidden" }} className="appMain">
      <BrowserRouter>
      <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

