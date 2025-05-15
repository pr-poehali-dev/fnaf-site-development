
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from '@/components/ui/icon';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background crt-effect">
      <div className="text-center max-w-md p-6 rounded-lg border border-fnaf-red/30 bg-card">
        <div className="w-16 h-16 bg-fnaf-red/20 rounded-full mx-auto mb-4 flex items-center justify-center">
          <Icon name="FileWarning" className="w-8 h-8 text-fnaf-red animate-flicker" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-fnaf-red">Ошибка 404</h1>
        <div className="mb-4 inline-block px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
          ERROR: SECURITY BREACH DETECTED
        </div>
        <p className="text-lg text-muted-foreground mb-4">Файл или документ не найден в системе Fazbear Entertainment.</p>
        <p className="text-sm text-muted-foreground mb-6">
          Ваша попытка доступа к несуществующему файлу была зарегистрирована в системе безопасности.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-fnaf-purple/20 border border-fnaf-purple/30 text-fnaf-purple rounded-md hover:bg-fnaf-purple/30 transition-colors">
          <Icon name="ArrowLeft" className="w-4 h-4" />
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
