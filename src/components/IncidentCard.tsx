
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface IncidentCardProps {
  title: string;
  date: string;
  type: 'bite' | 'missing' | 'malfunction';
  description: string;
  classification: 'open' | 'closed' | 'classified';
  className?: string;
}

const IncidentCard = ({
  title,
  date,
  type,
  description,
  classification,
  className,
}: IncidentCardProps) => {
  const typeStyles = {
    bite: "bg-fnaf-red/20 text-fnaf-red border-fnaf-red/30",
    missing: "bg-fnaf-purple/20 text-fnaf-purple border-fnaf-purple/30",
    malfunction: "bg-fnaf-yellow/20 text-fnaf-yellow border-fnaf-yellow/30",
  };
  
  const classificationStyles = {
    open: "bg-green-500/20 text-green-500",
    closed: "bg-gray-500/20 text-gray-400",
    classified: "bg-fnaf-red/20 text-fnaf-red",
  };

  return (
    <Card className={cn(
      "border-border/50 hover:border-border transition-all",
      className
    )}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{date}</CardDescription>
          </div>
          <Badge className={classificationStyles[classification]}>
            {classification === 'open' && 'В расследовании'}
            {classification === 'closed' && 'Закрыто'}
            {classification === 'classified' && 'Засекречено'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className={cn(
          "text-xs inline-block px-2 py-1 rounded mb-3 border",
          typeStyles[type]
        )}>
          {type === 'bite' && 'Инцидент с травмой'}
          {type === 'missing' && 'Пропажа людей'}
          {type === 'malfunction' && 'Сбой оборудования'}
        </div>
        <p className="text-sm text-muted-foreground whitespace-pre-line">{description}</p>
      </CardContent>
    </Card>
  );
};

export default IncidentCard;
