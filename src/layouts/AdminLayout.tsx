import React, { ReactNode, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { 
  Laptop, 
  Users, 
  Database, 
  FileText, 
  BarChart2, 
  Settings, 
  HardDrive, 
  Home, 
  LogOut,
  AlertCircle,
  Zap,
  CreditCard,
  BookOpen,
  TestTube,
  Menu,
  X,
  Bug
} from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [location] = useLocation();
  const { logoutMutation, user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Überprüfung der Benutzerrolle
  const isAdmin = user?.role === 'administrator';

  const allMenuItems = [
    // Hauptanwendung - für alle Benutzer sichtbar
    { path: '/', label: 'Dashboard', icon: <Home className="w-5 h-5 mr-2" />, section: 'main', requiresAdmin: false },
    { path: '/company', label: 'Firmendaten', icon: <Laptop className="w-5 h-5 mr-2" />, section: 'main', requiresAdmin: false },
    { path: '/customers', label: 'Kundendaten', icon: <Users className="w-5 h-5 mr-2" />, section: 'main', requiresAdmin: false },
    { path: '/projects', label: 'Projektverwaltung', icon: <BarChart2 className="w-5 h-5 mr-2" />, section: 'main', requiresAdmin: false },
    { path: '/tiefbau', label: 'Tiefbau-Planung', icon: <Settings className="w-5 h-5 mr-2" />, section: 'main', requiresAdmin: false },
    { path: '/cost-calculation', label: 'Kostenkalkulation', icon: <BarChart2 className="w-5 h-5 mr-2" />, section: 'main', requiresAdmin: false },
    { path: '/documents', label: 'Dokumente', icon: <FileText className="w-5 h-5 mr-2" />, section: 'main', requiresAdmin: false },
    { path: '/help', label: 'Hilfe & Info', icon: <AlertCircle className="w-5 h-5 mr-2" />, section: 'main', requiresAdmin: false },
    
    // Administration - nur für Administratoren sichtbar
    { path: '/admin/users', label: 'Benutzerverwaltung', icon: <Users className="w-5 h-5 mr-2" />, section: 'admin', requiresAdmin: true },
    { path: '/subscription', label: 'Abonnements', icon: <CreditCard className="w-5 h-5 mr-2" />, section: 'admin', requiresAdmin: true },
    { path: '/admin/data-quality', label: 'Admin Datenqualität', icon: <Database className="w-5 h-5 mr-2" />, section: 'admin', requiresAdmin: true },
    { path: '/admin/logs', label: 'System-Logs', icon: <FileText className="w-5 h-5 mr-2" />, section: 'admin', requiresAdmin: true },
    { path: '/admin/backup-status', label: 'Backups', icon: <HardDrive className="w-5 h-5 mr-2" />, section: 'admin', requiresAdmin: true },
    { path: '/admin/documentation', label: 'Dokumentation', icon: <BookOpen className="w-5 h-5 mr-2" />, section: 'admin', requiresAdmin: true },
    { path: '/admin/testing-guide', label: 'Testing Guide', icon: <TestTube className="w-5 h-5 mr-2" />, section: 'admin', requiresAdmin: true },
    { path: '/admin/system-analysis', label: 'System-Analyse', icon: <Bug className="w-5 h-5 mr-2" />, section: 'admin', requiresAdmin: true },
    { path: '/admin/system-optimization', label: 'System-Optimierung', icon: <Zap className="w-5 h-5 mr-2" />, section: 'admin', requiresAdmin: true },
    { path: '/admin/emails', label: 'E-Mail-Vorlagen', icon: <AlertCircle className="w-5 h-5 mr-2" />, section: 'admin', requiresAdmin: true },
  ];

  // Filtere Menüelemente basierend auf Benutzerrolle
  const menuItems = allMenuItems.filter(item => !item.requiresAdmin || isAdmin);

  const mainItems = menuItems.filter(item => item.section === 'main');
  const adminItems = menuItems.filter(item => item.section === 'admin');

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Mobile Header mit Hamburger-Menü */}
      <div className="lg:hidden bg-slate-800 text-white p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold flex items-center">
          <Laptop className="mr-2" /> Bau-Structura
        </h1>
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="text-white border-slate-600 hover:bg-slate-700"
            >
              <Home className="h-4 w-4 mr-1" />
              Dashboard
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="text-white hover:bg-slate-700"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Seitenleiste - Desktop und Mobile */}
      <div className={`
        ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block
        w-full lg:w-64 bg-slate-800 text-white
        ${isMobileMenuOpen ? 'absolute z-50 min-h-screen' : 'lg:relative'}
      `}>
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold flex items-center">
              <Laptop className="mr-2" /> Admin-Bereich
            </h1>
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="text-white border-slate-600 hover:bg-slate-700"
              >
                <Home className="h-4 w-4 mr-1" />
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
        <nav className="mt-4">
          <div className="px-2 mb-4">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Navigieren
            </h3>
            <ul>
              {mainItems.map((item) => (
                <li key={item.path} className="mb-1">
                  <Link href={item.path}>
                    <a 
                      className={`flex items-center p-3 rounded-md transition-colors ${
                        location === item.path
                          ? 'bg-slate-700 text-white font-medium'
                          : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Administration-Bereich nur für Administratoren anzeigen */}
          {isAdmin && adminItems.length > 0 && (
            <div className="px-2">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Administration
              </h3>
              <ul>
                {adminItems.map((item) => (
                  <li key={item.path} className="mb-1">
                    <Link href={item.path}>
                      <a 
                        className={`flex items-center p-3 rounded-md transition-colors ${
                          location === item.path
                            ? 'bg-slate-700 text-white font-medium'
                            : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.icon}
                        {item.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
        <div className="lg:absolute lg:bottom-0 w-full lg:w-64 p-4 border-t border-slate-700 mt-4 lg:mt-0">
          <Button
            variant="ghost"
            className="w-full text-slate-300 hover:text-white justify-start"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 mr-2" /> Abmelden
          </Button>
        </div>
      </div>

      {/* Hauptinhalt - mobil-responsiv */}
      <div className="flex-1 bg-gray-50 w-full overflow-x-auto">
        <div className="min-h-screen p-4 lg:p-6 w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
export { AdminLayout };