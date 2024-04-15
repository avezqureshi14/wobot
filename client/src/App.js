import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './pages/Home'
import Single from './pages/Single'
import Header from './components/Header'
import Footer from './components/Footer'
import Auth from './pages/Auth'
import About from './pages/About';
import AllRecipies from './pages/AllRecipies';
import Favourites from './pages/Favourites';

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipie/:id" element={<Single />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<AllRecipies />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
