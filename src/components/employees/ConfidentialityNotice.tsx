
import Icon from '@/components/ui/icon';

const ConfidentialityNotice = () => {
  return (
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
  );
};

export default ConfidentialityNotice;
