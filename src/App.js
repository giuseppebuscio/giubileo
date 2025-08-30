import React, { useState } from 'react';
import { FaVrCardboard, FaVideo, FaGlobe, FaBars, FaXmark } from "react-icons/fa6";
import TourVirtuali from './pages/TourVirtuali';
import VideoPromozionali from './pages/VideoPromozionali';
import Video360 from './pages/Video360';

function App() {
  const [currentPage, setCurrentPage] = useState('tour-virtuali');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'tour-virtuali', name: 'Tour Virtuali', icon: <FaVrCardboard className="w-5 h-5" /> },
    { id: 'video-promozionali', name: 'Video Promozionali', icon: <FaVideo className="w-5 h-5" /> },
    { id: 'video-360', name: 'Video 360', icon: <FaVideo className="w-5 h-5" /> },
    { id: 'sito-web', name: 'Sito Web', icon: <FaGlobe className="w-5 h-5" />, external: true, url: 'https://giubileo.ceformedsrl.it/' }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'tour-virtuali':
        return <TourVirtuali />;
      case 'video-promozionali':
        return <VideoPromozionali />;
      case 'video-360':
        return <Video360 />;
      default:
        return <TourVirtuali />;
    }
  };

  const handleMenuClick = (item) => {
    if (item.external && item.url) {
      window.open(item.url, '_blank');
    } else {
      setCurrentPage(item.id);
    }
    // Chiudi la sidebar su mobile dopo la selezione
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-zinc-900 via-slate-900 to-black">
      {/* Sidebar */}
      <div className={`fixed md:relative inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-slate-800/95 via-slate-800/90 to-zinc-900/95 border-r border-amber-500/20 shadow-2xl backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="p-6 border-b border-amber-500/20">
          <h1 className="text-2xl font-semibold text-white">G.I.U.B.I.L.E.O.</h1>
          <p className="text-sm text-amber-200 mt-1">Piattaforma Giubileo</p>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuClick(item)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    currentPage === item.id && !item.external
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black border border-amber-400/30 shadow-lg'
                      : item.external
                      ? 'text-zinc-300 hover:bg-zinc-700/50 hover:text-amber-200 backdrop-blur-sm'
                      : 'text-zinc-300 hover:bg-zinc-700/50 hover:text-amber-200 backdrop-blur-sm'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                  {item.external && (
                    <span className="ml-auto text-xs text-amber-400">↗</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-amber-500/20">
          <button 
            onClick={() => window.open('https://galgolfodicastellammare.eu/', '_blank')}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black py-3 px-4 rounded-lg font-medium hover:from-yellow-500 hover:to-amber-500 transition-all duration-300 shadow-lg"
          >
            Sito del GAL
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gradient-to-br from-zinc-900 via-slate-900 to-black">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-amber-500/20">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black p-2 rounded-lg shadow-lg hover:from-yellow-500 hover:to-amber-500 transition-all duration-300"
            >
              {sidebarOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
            <div>
              <h1 className="text-lg font-semibold text-white">G.I.U.B.I.L.E.O.</h1>
              <p className="text-xs text-amber-200">Piattaforma Giubileo</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 md:p-8">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
