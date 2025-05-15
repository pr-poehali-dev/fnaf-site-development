
import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const navigationItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/incidents', label: 'Инциденты', icon: 'FileWarning' },
    { path: '/blueprints', label: 'Чертежи', icon: 'FileText' },
    { path: '/employees', label: 'Только для сотрудников', icon: 'Lock' },
  ];

  return (
    <div className="min-h-screen flex flex-col crt-effect">
      <header className="bg-card border-b border-border/40 py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-fnaf-purple flex items-center justify-center">
              <Icon name="PizzaIcon" fallback="Pizza" className="h-4 w-4 text-background" />
            </div>
            <h1 className="text-xl font-bold text-fnaf-purple hidden sm:block">Freddy Fazbear's Pizza</h1>
            <div className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground ml-2 hidden sm:flex">
              Система внутреннего учета <span className="animate-flicker ml-1">_</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            {navigationItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 text-sm transition-colors rounded-md",
                  isActive(item.path) 
                    ? "bg-muted text-fnaf-purple" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <Icon name={item.icon} className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setShowMenu(!showMenu)}
          >
            <Icon name={showMenu ? "X" : "Menu"} className="h-5 w-5" />
          </Button>
        </div>
      </header>
      
      {showMenu && (
        <div className="md:hidden bg-card border-b border-border/40 shadow-md">
          <nav className="container mx-auto px-4 py-2">
            {navigationItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-3 py-3 text-sm transition-colors",
                  isActive(item.path) 
                    ? "text-fnaf-purple" 
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setShowMenu(false)}
              >
                <Icon name={item.icon} className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
      
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>
      
      <footer className="bg-card/50 border-t border-border/40 py-3 text-xs text-muted-foreground">
        <div className="container mx-auto px-4 text-center">
          <p>© 1983-1987 Fazbear Entertainment Inc. · Доступ ограничен · Все данные являются собственностью компании</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
