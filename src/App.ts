import React, { useEffect, Suspense } from "react";
import { Switch, Route, Redirect } from "wouter";

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

// Temporary placeholder components (will be replaced with real ones)
const PlaceholderPage = ({ title, description }: { title: string, description: string }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="mb-4">
        <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">🏗️</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center justify-center space-x-2 text-green-700">
          <span className="text-lg">✅</span>
          <span>Komponente wird übertragen...</span>
        </div>
      </div>
    </div>
  </div>
);

// Temporary components that will be replaced
const SimpleLoginPage = () => (
  <PlaceholderPage 
    title="Bau-Structura Login" 
    description="Sicherer Zugang zu Ihrem Bauprojekt-Management"
  />
);

const MarketingPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700">
    <div className="container mx-auto px-4 py-16">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-6">🏗️ Bau-Structura</h1>
        <p className="text-xl mb-8 opacity-90">
          Professionelle Bauprojekt-Verwaltung der nächsten Generation
        </p>
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-green-500/20 rounded-lg p-4">
              <span className="text-2xl mb-2 block">✅</span>
              <p>Frontend läuft auf Vercel</p>
            </div>
            <div className="bg-green-500/20 rounded-lg p-4">
              <span className="text-2xl mb-2 block">✅</span>
              <p>Backend läuft auf bau-structura.de</p>
            </div>
            <div className="bg-blue-500/20 rounded-lg p-4">
              <span className="text-2xl mb-2 block">🚀</span>
              <p>Migration in Progress...</p>
            </div>
          </div>
        </div>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Zur Demo-Version
        </button>
      </div>
    </div>
  </div>
);

const HomePage = () => (
  <PlaceholderPage 
    title="Dashboard" 
    description="Übersicht über alle Ihre Bauprojekte und Aktivitäten"
  />
);

const ProjectsPage = () => (
  <PlaceholderPage 
    title="Projektmanagement" 
    description="Verwalten Sie alle Ihre Bauprojekte an einem Ort"
  />
);

const CustomersPage = () => (
  <PlaceholderPage 
    title="Kundenverwaltung" 
    description="Zentrale Verwaltung aller Kundendaten und Kontakte"
  />
);

const CompaniesPage = () => (
  <PlaceholderPage 
    title="Firmenverwaltung" 
    description="Verwaltung von Firmeninformationen und Unternehmensdaten"
  />
);

const ConstructionDiaryPage = () => (
  <PlaceholderPage 
    title="Bautagebuch" 
    description="Digitale Dokumentation des Baufortschritts"
  />
);

const TiefbauMapPage = () => (
  <PlaceholderPage 
    title="Tiefbau-Karten" 
    description="Interaktive Karten für Tiefbauprojekte und Infrastruktur"
  />
);

const BodenAnalysePage = () => (
  <PlaceholderPage 
    title="Bodenanalyse" 
    description="Professionelle Analyse von Bodenbeschaffenheit und -eigenschaften"
  />
);

const AdminPage = () => (
  <PlaceholderPage 
    title="Administration" 
    description="Systemverwaltung und erweiterte Einstellungen"
  />
);

const SettingsPage = () => (
  <PlaceholderPage 
    title="Einstellungen" 
    description="Persönliche und System-Einstellungen"
  />
);

const NotFoundPage = () => (
  <PlaceholderPage 
    title="Seite nicht gefunden" 
    description="Die angeforderte Seite existiert nicht oder wurde verschoben"
  />
);

function Router() {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path="/marketing" component={MarketingPage} />
      <Route path="/login" component={SimpleLoginPage} />
      
      {/* Main App Routes */}
      <Route path="/dashboard" component={HomePage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/projektverwaltung" component={ProjectsPage} />
      <Route path="/customers" component={CustomersPage} />
      <Route path="/companies" component={CompaniesPage} />
      <Route path="/construction-diary" component={ConstructionDiaryPage} />
      <Route path="/tiefbau-map" component={TiefbauMapPage} />
      <Route path="/bodenanalyse" component={BodenAnalysePage} />
      <Route path="/boden-analyse" component={BodenAnalysePage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/settings" component={SettingsPage} />
      
      {/* Root Route Logic */}
      <Route path="/" component={() => {
        const hostname = window.location.hostname;
        if (hostname === 'www.bau-structura.de' || hostname === 'bau-structura.de') {
          return <Redirect to="/marketing" />;
        }
        return <SimpleLoginPage />;
      }} />
      
      {/* 404 Fallback */}
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function App() {
  // Domain-based routing logic
  useEffect(() => {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    console.log('🚀 Bau-Structura App loading:', { hostname, pathname });
    
    if (hostname === 'www.bau-structura.de' || hostname === 'bau-structura.de') {
      if (pathname === '/') {
        window.location.href = '/marketing';
        return;
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<LoadingSpinner />}>
        <Router />
      </Suspense>
      
      {/* Migration Status Indicator */}
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Migration Phase 2 Active</span>
        </div>
      </div>
    </div>
  );
}

export default App;