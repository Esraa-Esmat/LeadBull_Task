import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ScrollToTopButton from './Components/Global/ScrollToTopButton/ScrollToTopButton';
import { ToastContainer } from 'react-toastify';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Spinner from './Components/Spinner/Spinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Router>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <ScrollToTopButton />
            <ToastContainer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
