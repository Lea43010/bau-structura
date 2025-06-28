import React, { ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { LogOut, Menu, X } from 'lucide-react';

interface MainLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showSidebar = true 
}) => {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const navItems = [
    { path: '/home', label: 'Dashboard' },
    { path: '/tiefbau-map', label: 'Tiefbau-Karte' },
    { path: '/denkmal-atlas', label: 'Denkmal-Atlas' },
    { path: '/bodenanalyse', label: 'Bodenanalyse' },
    { path: '/maschinen-auswahl', label: 'Maschinenauswahl' },
    { path: '/kostenkalkulation', label: 'Kostenkalkulation' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-primary-foreground p-3 shadow-md fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              className="mr-2 md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X /> : <Menu />}
            </Button>
            <Link href="/home">
              <a className="flex items-center">
                <span className="text-xl font-bold">Bau-Structura</span>
              </a>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {user && (
              <>
                <span className="hidden md:inline">
                  {user.username}
                </span>
                <Button variant="secondary" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-1" />
                  <span className="hidden md:inline">Abmelden</span>
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-grow pt-16">
        {showSidebar && (
          <aside 
            className={`fixed md:sticky top-16 z-30 h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r bg-background md:flex flex-col transition-all duration-300 ${
              sidebarOpen ? 'flex left-0' : 'left-[-100%] -translate-x-full md:translate-x-0 md:left-0'
            }`}
          >
            <nav className="flex-1 p-4 space-y-1">
              {navItems.map(item => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={`flex items-center p-3 rounded-md transition-colors ${
                      location === item.path
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </nav>
          </aside>
        )}

        <main className={`flex-1 ${showSidebar ? 'md:ml-0' : ''}`}>
          {children}
        </main>
      </div>

      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default MainLayout;