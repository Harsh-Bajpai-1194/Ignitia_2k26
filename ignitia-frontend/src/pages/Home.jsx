// src/pages/Home.jsx
import bgImage from '../assets/gallery_files/12.jpg'; // We use .. to go up out of 'pages' folder

const Home = () => {
  return (
    <div 
      className="h-screen w-full flex flex-col items-center justify-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }} 
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 mt-10">
        <h1 className="text-6xl text-white font-pixel mb-4 drop-shadow-lg">
          IGNITIA
        </h1>
        <h2 className="text-4xl text-neon-gold font-pixel">
          2K26
        </h2>
      </div>
    </div>
  );
};

export default Home;