import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import Courses from './components/Courses';
import Reviews from './components/Reviews';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import UserProfile from './components/UserProfile';
import CourseDetail from './components/CourseDetail'; 
import Footer from './components/Footer';
import TermsOfUse from './components/TermsOfUse';

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null); 

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLogin(false);
  };

  const handleSignup = (userData) => {
    setUser(userData);
    setShowSignup(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <NavigationBar user={user} onSignupClick={toggleSignup} onLoginClick={toggleLogin} />
        <Routes>
          <Route path="/" element={<>
          <HomePage />
          <Courses />
          <Reviews />
          </>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/profile" element={<UserProfile user={user} onLogout={handleLogout} setUser={setUser} />} />
        </Routes>
        {showSignup && (
          <SignupModal onClose={toggleSignup} onSignup={handleSignup} onLogin={toggleLogin} />
        )}
        {showLogin && (
          <LoginModal onClose={toggleLogin} onLogin={handleLogin} onSignup={toggleSignup} />
        )}
      <Footer />
      </div>
    </Router>
  );
}

export default App;