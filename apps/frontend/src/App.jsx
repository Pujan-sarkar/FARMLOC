import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Faq from "./pages/faq";
import Review from "./pages/Review";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/contact";
import AnnouncementBar from "./components/AnnouncmentBar";
import ColdStorage from "./pages/ColdStorage";
import Marketplace from "./pages/Marketplace";
import CartPage from "./pages/CartPage";
import {ToastContainer} from "react-toastify"

import Explore from "./pages/Explore";
import BackToTop from "./components/BackToTop";

const sectionMap = {
  "/": "home",
  "/about": "about",
  "/cold-storage": "cold-storage",
  "/market": "market",
  "/review": "review",
  "/contact": "contact",
};

const FullLandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = sectionMap[location.pathname];
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.pathname]);

  return (
    <>
      <Home />
      <About />
      <ColdStorage />
      <Marketplace />
      <Services />
      <Faq />
      <Review />
      <Contact />
      <BackToTop />

      {/* Add other components similarly */}
    </>
  );
};

const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const hideLayoutPaths = ["/login", "/signup", "/dashboard"];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      {!shouldHideLayout && <AnnouncementBar />}
      {children}
      {!shouldHideLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <>
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<FullLandingPage />} />
          <Route path="/about" element={<FullLandingPage />} />
          <Route path="/cold-storage" element={<FullLandingPage />} />
          <Route path="/market" element={<FullLandingPage />} />
          <Route path="/review" element={<FullLandingPage />} />
          <Route path="/contact" element={<FullLandingPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </LayoutWrapper>
    </Router>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
    </>
  );
};

export default App;
