
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

interface AccessFormProps {
  onAccessGranted: () => void;
}

const AccessForm = ({ onAccessGranted }: AccessFormProps) => {
  const [accessCode, setAccessCode] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  
  const CORRECT_CODE = "1983";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (accessCode === CORRECT_CODE) {
      onAccessGranted();
      setErrorMessage("");
    } else {
      setAttempts(attempts + 1);
      setErrorMessage("Неверный код доступа. Пожалуйста, попробуйте снова.");
      
      if (attempts >= 2) {
        setErrorMessage("Слишком много неудачных попыток. Ваш IP адрес записан.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="password"
          className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground security-text tracking-widest"
          placeholder="Введите код доступа..."
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          maxLength={4}
        />
        <div className={cn(
          "absolute top-0 right-0 h-full flex items-center pr-3",
          accessCode.length === 4 ? "text-fnaf-yellow" : "text-muted-foreground" 
        )}>
          <Icon name="Keypad" className="h-4 w-4" />
        </div>
      </div>
      
      {errorMessage && (
        <div className="text-fnaf-red text-sm flex items-center gap-2">
          <Icon name="AlertCircle" className="h-4 w-4" />
          <span className={attempts >= 2 ? "animate-flicker" : ""}>{errorMessage}</span>
        </div>
      )}
      
      <button 
        type="submit" 
        className="w-full bg-fnaf-red/20 border border-fnaf-red/30 text-fnaf-red py-2 rounded-md hover:bg-fnaf-red/30 transition-colors"
      >
        Получить доступ
      </button>
      
      <div className="text-xs text-muted-foreground pt-2 border-t border-border/50">
        Примечание: Все попытки доступа фиксируются в системе безопасности. В случае повторных неудачных 
        попыток ваш аккаунт может быть заблокирован.
      </div>
    </form>
  );
};

export default AccessForm;
