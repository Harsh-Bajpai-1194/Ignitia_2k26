import Navbar from '../components/Navbar';

const Gallery = () => {
  const imagesObj = import.meta.glob('../assets/gallery_files/*.jpg', { eager: true });
  const galleryImages = Object.values(imagesObj).map((img) => img.default);

  return (
    <div className="min-h-screen bg-deep-black text-white pt-24 px-4 pb-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-pixel text-neon-gold mb-4 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
          EVENT GALLERY
        </h1>
        <p className="font-tech text-xl text-gray-400">
          MOMENTS FROM PAST IGNITIA EVENTS
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {galleryImages.length > 0 ? (
          galleryImages.map((src, index) => (
            <div key={index} className="relative group overflow-hidden border-2 border-transparent hover:border-neon-red rounded-lg transition-all duration-300">
              <img 
                src={src} 
                alt={`Gallery ${index}`} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-pixel text-neon-gold text-xs">VIEW</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-white col-span-full text-center font-tech text-2xl">
            No images found. Check the folder path!
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;