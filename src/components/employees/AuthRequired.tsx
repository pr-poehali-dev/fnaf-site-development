
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import AccessForm from './AccessForm';

interface AuthRequiredProps {
  onAccessGranted: () => void;
}

const AuthRequired = ({ onAccessGranted }: AuthRequiredProps) => {
  return (
    <Card className="border-fnaf-red/30 bg-card/80">
      <CardHeader>
        <CardTitle className="text-fnaf-red flex items-center gap-2">
          <Icon name="ShieldAlert" className="h-5 w-5" />
          <span>Требуется авторизация</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Эта секция содержит материалы с ограниченным доступом. Пожалуйста, введите код доступа для продолжения.
          </p>
          
          <AccessForm onAccessGranted={onAccessGranted} />
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthRequired;
