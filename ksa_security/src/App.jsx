import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import LandingPage from './LandingPage.jsx'
import { WhatsAppBtn } from './components/WhatsAppBtn.jsx'
import React, { Suspense, lazy } from 'react';
function App() {
  return (
    <div className="App">
       <Navbar />

      <LandingPage />
      <Footer />
      <WhatsAppBtn/>
    </div>
  )

}

export default App
