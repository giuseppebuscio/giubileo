import React from 'react';
import { FaVrCardboard } from "react-icons/fa6";

function TourVirtuali() {
  // Array dei link dei tour virtuali
  const tourLinks = {
    'madonna-del-ponte': 'https://tour.ceformedsrl.it/madonnadelponte/',
    'madonna-del-furi': 'https://tour.ceformedsrl.it/madonnadelfuri/',
    'beata-pina-suriano': 'https://tour.ceformedsrl.it/pinasuriano/',
    'romitello': 'https://tour.ceformedsrl.it/romitello/',
    'maria-ss-miracoli': 'https://tour.ceformedsrl.it/madonnadeimiracoli/',
    'maria-ss-alto': '#'
  };

  const handleTourClick = (tourId) => {
    const link = tourLinks[tourId];
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
                    Tour Virtuali
                  </h3>
                  <p className="text-sm md:text-lg text-gray-200 leading-relaxed">
                    Scopri i santuari attraverso esperienze immersive e interattive
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-amber-200 text-xs md:text-sm">
                6 Santuari Disponibili
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {/* Project 1 - Santuario della Madonna del Ponte */}
        <div 
          className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 cursor-pointer transition-all duration-500 hover:scale-105"
          onClick={() => handleTourClick('madonna-del-ponte')}
        >
          <div className="relative h-64 md:h-80 overflow-hidden rounded-xl md:rounded-2xl">
            <img 
              src="/mdp-drone.jpg" 
              alt="Santuario della Madonna del Ponte" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 md:p-3">
                  <FaVrCardboard className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                Santuario della Madonna del Ponte
              </h3>
              <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                Costruito nel 1300 da Federico II d'Aragona, è un importante simbolo storico-religioso e punto di riferimento per la comunità partinicese.
              </p>
              <button className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base">
                Esplora
              </button>
            </div>
          </div>
        </div>

        {/* Project 2 - Santuario della Madonna del Furi */}
        <div 
          className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 cursor-pointer transition-all duration-500 hover:scale-105"
          onClick={() => handleTourClick('madonna-del-furi')}
        >
          <div className="relative h-64 md:h-80 overflow-hidden rounded-xl md:rounded-2xl">
            <img 
              src="/mdf-drone.jpg" 
              alt="Santuario della Madonna del Furi" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 md:p-3">
                  <FaVrCardboard className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                Santuario della Madonna del Furi
              </h3>
              <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                Nato da un evento miracoloso nel 1718, è incastonato in una cornice naturale straordinaria, che ne fa anche una meta turistica naturalistica.
              </p>
              <button className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base">
                Esplora
              </button>
            </div>
          </div>
        </div>

        {/* Project 3 - Santuario della Beata Pina Suriano */}
        <div 
          className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 cursor-pointer transition-all duration-500 hover:scale-105"
          onClick={() => handleTourClick('beata-pina-suriano')}
        >
          <div className="relative h-64 md:h-80 overflow-hidden rounded-xl md:rounded-2xl">
            <img 
              src="/sps-drone.jpg" 
              alt="Santuario della Beata Pina Suriano" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 md:p-3">
                  <FaVrCardboard className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                Santuario della Beata Pina Suriano
              </h3>
              <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                Situato nel cuore del centro storico, è dedicato alla Beata laica Pina Suriano, figura simbolo di fede, impegno civile e carità cristiana.
              </p>
              <button className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base">
                Esplora
              </button>
            </div>
          </div>
        </div>

        {/* Project 4 - Santuario del Romitello */}
        <div 
          className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 cursor-pointer transition-all duration-500 hover:scale-105"
          onClick={() => handleTourClick('romitello')}
        >
          <div className="relative h-64 md:h-80 overflow-hidden rounded-xl md:rounded-2xl">
            <img 
              src="/sdr-drone.jpeg" 
              alt="Santuario del Romitello" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 md:p-3">
                  <FaVrCardboard className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                Santuario del Romitello
              </h3>
              <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                Di origine quattrocentesca, immerso tra le montagne, è noto per la sua bellezza e per la forte partecipazione popolare alle celebrazioni religiose.
              </p>
              <button className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base">
                Esplora
              </button>
            </div>
          </div>
        </div>

        {/* Project 5 - Santuario di Maria SS dei Miracoli */}
        <div 
          className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 cursor-pointer transition-all duration-500 hover:scale-105"
          onClick={() => handleTourClick('maria-ss-miracoli')}
        >
          <div className="relative h-64 md:h-80 overflow-hidden rounded-xl md:rounded-2xl">
            <img 
              src="/smm-drone.jpg" 
              alt="Santuario di Maria SS dei Miracoli" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 md:p-3">
                  <FaVrCardboard className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                Santuario di Maria SS dei Miracoli
              </h3>
              <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                Considerata la Porta Santa della città, è uno dei principali centri di devozione mariana del territorio. Ogni anno richiama pellegrini da tutta la regione.
              </p>
              <button className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base">
                Esplora
              </button>
            </div>
          </div>
        </div>

        {/* Project 6 - Santuario di Maria SS dell'Alto */}
        <div 
          className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 cursor-pointer transition-all duration-500 hover:scale-105"
          onClick={() => handleTourClick('maria-ss-alto')}
        >
          <div className="relative h-64 md:h-80 overflow-hidden rounded-xl md:rounded-2xl">
            <img 
              src="/sma-drone.jpg" 
              alt="Santuario di Maria SS dell'Alto" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 md:p-3">
                  <FaVrCardboard className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                Santuario di Maria SS dell'Alto
              </h3>
              <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                Situato sul Monte Bonifato, domina il paesaggio con la sua posizione panoramica. Unisce spiritualità e natura in un luogo suggestivo e ricco di leggende.
              </p>
              <button className="bg-white text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base">
                Non disponibile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourVirtuali; 