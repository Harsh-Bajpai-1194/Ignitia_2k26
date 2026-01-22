import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen w-full bg-deep-black flex items-center justify-center p-4 relative overflow-hidden">
       
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-neon-red/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-neon-gold/10 rounded-full blur-[100px]"></div>

        <div className="bg-black/80 border border-gray-800 p-8 rounded-2xl w-full max-w-md backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] relative z-10">
            <h2 className="text-3xl font-pixel text-white text-center mb-2">WELCOME BACK</h2>
            <p className="text-gray-400 font-tech text-center mb-8">LOGIN TO ACCESS IGNITIA DASHBOARD</p>
            
            <form className="space-y-6">
                <div>
                    <label className="block text-neon-gold font-pixel text-xs mb-2">COLLEGE EMAIL</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 text-white p-3 rounded focus:outline-none focus:border-neon-red transition-colors font-tech"
                        placeholder="student@psit.ac.in"
                    />
                </div>
                <div>
                    <label className="block text-neon-gold font-pixel text-xs mb-2">PASSWORD</label>
                    <input 
                        type="password" 
                        className="w-full bg-gray-900 border border-gray-700 text-white p-3 rounded focus:outline-none focus:border-neon-red transition-colors font-tech"
                        placeholder="••••••••"
                    />
                </div>

                <button className="w-full bg-gradient-to-r from-neon-red to-red-700 text-white font-pixel py-3 rounded hover:opacity-90 transition-opacity">
                    LOGIN
                </button>
            </form>

            <div className="mt-6 text-center">
                <Link to="/" className="text-gray-500 hover:text-white font-tech text-sm">
                    Back to Home
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Login;