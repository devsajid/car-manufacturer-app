import "./App.css";
import Navbar from "./SharedComponents/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Footer from "./SharedComponents/Footer/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
