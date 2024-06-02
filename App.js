import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import PhotoPage from './pages/PhotoPage';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/photo/:id" element={<PhotoPage/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

