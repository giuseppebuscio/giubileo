import React from 'react';
import { FaPlay } from "react-icons/fa";

function Video360() {
  // Array dei link dei video promozionali
  const videoLinks = {
    'santuario-madonna-ponte': 'https://youtu.be/RVsDDQT9KP4?si=m-lY9KrcK5OReOU4',
    'santuario-madonna-furi': '',
    'santuario-beata-pina': '',
    'santuario-romitello': '',
    'santuario-maria-miracoli': '',
    'santuario-maria-alto': ''
  };

  const handleVideoClick = (videoId) => {
    const link = videoLinks[videoId];
    if (link && link !== '#') {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="w-full">
      {/* Hero Image Section */}
      <div className="mb-8 md:mb-16">
        <div className="relative h-48 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-slate-800 to-zinc-900">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-2xl md:blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-gradient-to-tr from-amber-500/8 to-transparent rounded-full blur-xl md:blur-2xl"></div>
          </div>
          
          {/* Glassmorphism Content */}
          <div className="absolute inset-0">
            <div className="h-full w-full p-4 md:p-8 bg-white/10 backdrop-blur-md border border-amber-500/20 rounded-2xl md:rounded-3xl">
              <div className="flex items-center h-full">
                <div>
                  <h3 className="text-2xl md:text-5xl font-bold text-white mb-2">
                    Video 360
                  </h3>
                  <p className="text-sm md:text-lg text-gray-200 leading-relaxed">
                    Esplora i santuari con video immersivi a 360 gradi che ti permettono di vivere un'esperienza completamente immersiva.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-amber-200 text-xs md:text-sm">
                1 Video Disponibile
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {/* Video 1 - Santuario della Madonna del Ponte */}
        <div 
          className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 cursor-pointer transition-all duration-500 hover:scale-105"
          onClick={() => handleVideoClick('santuario-madonna-ponte')}
        >
          <div className="flex items-center h-32 md:h-40">
            <div className="relative w-32 md:w-40 h-full overflow-hidden rounded-xl md:rounded-2xl flex-shrink-0">
              <img 
                src="/mdp-drone.jpg" 
                alt="Santuario della Madonna del Ponte" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3">
                  <FaPlay className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white">
                Santuario della Madonna del Ponte
              </h3>
            </div>
          </div>
        </div>

        {/* Video 2 - Santuario della Madonna del Furi */}
        {/* <div 
          className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 cursor-pointer transition-all duration-500 hover:scale-105"
          onClick={() => handleVideoClick('santuario-madonna-furi')}
        >
          <div className="flex items-center h-32 md:h-40">
            <div className="relative w-32 md:w-40 h-full overflow-hidden rounded-xl md:rounded-2xl flex-shrink-0">
              <img 
                src="/mdf-drone.jpg" 
                alt="Santuario della Madonna del Furi" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3">
                  <FaPlay className="w-4 h-4 md:w-6 md:w-6 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white">
                Santuario della Madonna del Furi
              </h3>
            </div>
          </div>
        </div> */}

        {/* Video 3 - Santuario della Beata Pina Suriano */}
        {/* <div 
          className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 cursor-pointer transition-all duration-500 hover:scale-105"
          onClick={() => handleVideoClick('santuario-beata-pina')}
        >
          <div className="flex items-center h-32 md:h-40">
            <div className="relative w-32 md:w-40 h-full overflow-hidden rounded-xl md:rounded-2xl flex-shrink-0">
              <img 
                src="/sps-drone.jpg" 
                alt="Santuario della Beata Pina Suriano" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3">
                  <FaPlay className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white">
                Santuario della Beata Pina Suriano
              </h3>
            </div>
          </div>
        </div> */}

        {/* Video 4 - Santuario del Romitello */}
        {/* <div 
          className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 cursor-pointer transition-all duration-500 hover:scale-105"
          onClick={() => handleVideoClick('santuario-romitello')}
        >
          <div className="flex items-center h-32 md:h-40">
            <div className="relative w-32 md:w-40 h-full overflow-hidden rounded-xl md:rounded-2xl flex-shrink-0">
              <img 
                src="/sdr-drone.jpeg" 
                alt="Santuario del Romitello" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3">
                  <FaPlay className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white">
                Santuario del Romitello
              </h3>
            </div>
          </div>
        </div> */}

        {/* Video 5 - Santuario di Maria SS dei Miracoli */}
        {/* <div 
          className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 cursor-pointer transition-all duration-500 hover:scale-105"
          onClick={() => handleVideoClick('santuario-maria-miracoli')}
        >
          <div className="flex items-center h-32 md:h-40">
            <div className="relative w-32 md:w-40 h-full overflow-hidden rounded-xl md:rounded-2xl flex-shrink-0">
              <img 
                src="/sps-drone.jpg" 
                alt="Santuario di Maria SS dei Miracoli" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3">
                <FaPlay className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white">
                Santuario di Maria SS dei Miracoli
              </h3>
            </div>
          </div>
        </div> */}

        {/* Video 6 - Santuario di Maria SS dell'Alto */}
        {/* <div 
          className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 cursor-pointer transition-all duration-500 hover:scale-105"
          onClick={() => handleVideoClick('santuario-maria-alto')}
        >
          <div className="flex items-center h-32 md:h-40">
            <div className="relative w-32 md:w-40 h-full overflow-hidden rounded-xl md:rounded-2xl flex-shrink-0">
              <img 
                src="/sma-drone.jpg" 
                alt="Santuario di Maria SS dell'Alto" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3">
                  <FaPlay className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white">
                Santuario di Maria SS dell'Alto
              </h3>
            </div>
          </div>
        </div> */}
      </div>

      {/* Logos Section */}
      <div className="mt-16 md:mt-24">
        <div className="flex justify-center items-center">
          <img 
            src="/loghi.png" 
            alt="Loghi dei partner" 
            className="max-w-full h-auto max-h-32 md:max-h-48 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Video360;
