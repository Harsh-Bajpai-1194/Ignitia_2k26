import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Assuming you moved Home to its own file or kept it here
import About from './pages/About';
import Gallery from './pages/Gallery'; // Import Gallery
import Login from './pages/Login';     // Import Login
import bgImage from './assets/gallery_files/12.jpg'; 

// (If your Home component is still inside App.jsx, keep it here)
const HomeComp = () => (
    <div 
      className="h-screen w-full flex flex-col items-center justify-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }} 
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 mt-10">
        <h1 className="text-6xl text-white font-pixel mb-4 drop-shadow-lg">IGNITIA</h1>
        <h2 className="text-4xl text-neon-gold font-pixel">2K26</h2>
      </div>
    </div>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} /> {/* New Route */}
        <Route path="/login" element={<Login />} />     {/* New Route */}
      </Routes>
    </Router>
  );
}