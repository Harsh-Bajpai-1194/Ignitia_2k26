import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
      {/* Logo / Home Link */}
      <Link to="/" className="text-white font-pixel text-xl hover:text-neon-gold transition-colors">
        IGNITIA
      </Link>

      {/* Navigation Links */}
      <div className="space-x-8 font-tech text-lg font-bold tracking-wider">
        <Link to="/" className="text-gray-300 hover:text-neon-gold transition-colors">
          HOME
        </Link>
        <Link to="/about" className="text-gray-300 hover:text-neon-gold transition-colors">
          ABOUT PSIT
        </Link>
        
        {/* Login Button - Styled like a button */}
        <Link to="/login">
          <button className="bg-neon-red text-white px-6 py-2 rounded border-2 border-neon-red hover:bg-transparent hover:text-neon-red transition-all font-pixel text-xs">
            LOGIN
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;