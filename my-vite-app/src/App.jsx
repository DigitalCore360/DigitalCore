import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import Navbar from "./components/layouts/navBar";
import Footer from "./components/layouts/footer";

// Pages
import Home from "./pages/home/home";
import About from "./pages/aboutUs/aboutUs";
import ContactUsPage from './pages/contactUs/contactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/contactUs" element={<ContactUsPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;