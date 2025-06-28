import { Link } from 'react-router-dom';

const MarketingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-white">
              <span className="text-3xl">🏗️</span>
              <span className="text-xl font-bold">Bau-Structura</span>
            </div>
            <Link
              to="/login"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Anmelden
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professionelle Bauprojekt-Verwaltung
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Digitalisieren Sie Ihre Bauprojekte mit Bau-Structura. 
            Von der Planung bis zur Fertigstellung - alles in einer Plattform.
          </p>
          
          {/* Status Cards */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6">Migration Status</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-green-500/20 rounded-lg p-6">
                <span className="text-3xl mb-2 block">✅</span>
                <h4 className="font-semibold mb-2">Frontend auf Vercel</h4>
                <p className="text-sm opacity-80">React + TypeScript</p>
              </div>
              <div className="bg-green-500/20 rounded-lg p-6">
                <span className="text-3xl mb-2 block">✅</span>
                <h4 className="font-semibold mb-2">Backend API</h4>
                <p className="text-sm opacity-80">bau-structura.de</p>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-6">
                <span className="text-3xl mb-2 block">🚀</span>
                <h4 className="font-semibold mb-2">Phase 2</h4>
                <p className="text-sm opacity-80">Core Features</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Jetzt starten
            </Link>
            <a
              href="#features"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Unsere Kernfunktionen
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Projektmanagement</h3>
              <p className="text-gray-600">Verwalten Sie alle Bauprojekte zentral mit Zeitplänen und Meilensteinen</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tiefbau-Karten</h3>
              <p className="text-gray-600">Interaktive Karten mit Bodenanalyse und Infrastruktur-Daten</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kostenkalkulation</h3>
              <p className="text-gray-600">Präzise Kostenberechnung und Maschinenauswahl für Ihre Projekte</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Bau-Structura. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
};

export default MarketingPage;