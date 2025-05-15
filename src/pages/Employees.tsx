
import Layout from '@/components/Layout';
import SecurityBanner from '@/components/SecurityBanner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Employees = () => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  
  const CORRECT_CODE = "1983";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (accessCode === CORRECT_CODE) {
      setAccessGranted(true);
      setErrorMessage("");
    } else {
      setAttempts(attempts + 1);
      setErrorMessage("Неверный код доступа. Пожалуйста, попробуйте снова.");
      
      if (attempts >= 2) {
        setErrorMessage("Слишком много неудачных попыток. Ваш IP адрес записан.");
      }
    }
  };
  
  const restrictedFiles = [
    {
      name: "spring_bonnie_blueprint.pdf",
      type: "blueprint",
      size: "4.2 MB",
      date: "1982-06-12",
      classification: "Высший уровень допуска"
    },
    {
      name: "circus_baby_schematics.dwg",
      type: "blueprint",
      size: "8.7 MB",
      date: "1985-11-30",
      classification: "Проект CBPW"
    },
    {
      name: "funtime_freddy_voice_module.pdf",
      type: "technical",
      size: "2.1 MB",
      date: "1985-12-15",
      classification: "Проект CBPW"
    },
    {
      name: "funtime_foxy_assembly.dwg",
      type: "blueprint",
      size: "6.3 MB",
      date: "1986-01-22",
      classification: "Проект CBPW"
    },
    {
      name: "ballora_dance_protocols.docx",
      type: "manual",
      size: "1.8 MB",
      date: "1986-02-10",
      classification: "Проект CBPW"
    },
    {
      name: "remnant_research_notes.pdf",
      type: "research",
      size: "3.4 MB",
      date: "1986-05-07",
      classification: "СТРОГО СЕКРЕТНО"
    }
  ];

  const fileTypeIcons = {
    blueprint: "FileText",
    technical: "Settings",
    manual: "BookOpen",
    research: "FlaskConical"
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold text-fnaf-red retro-shadow mb-2">
              Только для сотрудников
            </h1>
            <p className="text-muted-foreground">
              Защищенная секция с ограниченным доступом. Содержимое доступно только для авторизованного персонала.
            </p>
          </div>
          <SecurityBanner 
            level="high" 
            message="ВНИМАНИЕ! Несанкционированный доступ преследуется по закону." 
          />
        </div>

        {!accessGranted ? (
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
                </form>
                
                <div className="text-xs text-muted-foreground pt-2 border-t border-border/50">
                  Примечание: Все попытки доступа фиксируются в системе безопасности. В случае повторных неудачных 
                  попыток ваш аккаунт может быть заблокирован.
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            <div className="bg-fnaf-purple/10 border border-fnaf-purple/30 rounded-md p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon name="Unlock" className="h-5 w-5 text-fnaf-purple" />
                <span className="text-fnaf-purple">Доступ предоставлен: Специальные проекты Fazbear Entertainment</span>
              </div>
              <Badge className="bg-fnaf-purple text-white">Уровень допуска: 5</Badge>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Секретные проекты и чертежи</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {restrictedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-border/40 pb-2 group hover:bg-card/80 p-2 rounded-md">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                          <Icon name={fileTypeIcons[file.type as keyof typeof fileTypeIcons]} className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{file.name}</p>
                          <p className="text-xs text-muted-foreground">{file.date} · {file.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                          {file.classification}
                        </span>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground">
                          <Icon name="Download" className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-fnaf-red/10 border border-fnaf-red/30 rounded-md p-4 animate-flicker">
              <div className="flex items-center gap-2 text-fnaf-red">
                <Icon name="AlertCircle" className="h-5 w-5" />
                <span className="font-medium">Напоминание о конфиденциальности</span>
              </div>
              <p className="text-sm mt-2 text-muted-foreground">
                Все материалы в этом разделе строго конфиденциальны и защищены законом. Несанкционированное копирование, 
                распространение или обсуждение данных материалов с неавторизованными лицами является основанием для 
                уголовного преследования. Fazbear Entertainment отслеживает все действия с секретными документами.
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Employees;
