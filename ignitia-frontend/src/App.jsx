import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import About from './pages/About';
import Gallery from './pages/Gallery'; 
import Login from './pages/Login';     
import bgImage from './assets/gallery_files/12.jpg'; 


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}