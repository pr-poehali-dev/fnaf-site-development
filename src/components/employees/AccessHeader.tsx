
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const AccessHeader = () => {
  return (
    <div className="bg-fnaf-purple/10 border border-fnaf-purple/30 rounded-md p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Icon name="Unlock" className="h-5 w-5 text-fnaf-purple" />
        <span className="text-fnaf-purple">Доступ предоставлен: Специальные проекты Fazbear Entertainment</span>
      </div>
      <Badge className="bg-fnaf-purple text-white">Уровень допуска: 5</Badge>
    </div>
  );
};

export default AccessHeader;
