
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Icon from '@/components/ui/icon';

interface BlueprintCardProps {
  title: string;
  blueprint: string;
  specifications: string[];
  year: string;
  model: string;
  classification: 'standard' | 'prototype' | 'restricted';
  className?: string;
}

const BlueprintCard = ({
  title,
  blueprint,
  specifications,
  year,
  model,
  classification,
  className,
}: BlueprintCardProps) => {
  const classStyles = {
    standard: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    prototype: "bg-fnaf-yellow/20 text-fnaf-yellow border-fnaf-yellow/30",
    restricted: "bg-fnaf-red/20 text-fnaf-red border-fnaf-red/30"
  };

  const classNames = {
    standard: "Стандартная модель",
    prototype: "Прототип",
    restricted: "Ограниченный доступ"
  };

  return (
    <Card className={cn(
      "border-border/50 overflow-hidden",
      className
    )}>
      <CardHeader className="pb-2 bg-card">
        <CardTitle className="flex justify-between items-center text-lg">
          <span>{title}</span>
          <div className={cn(
            "text-xs px-2 py-1 rounded border",
            classStyles[classification]
          )}>
            {classNames[classification]}
          </div>
        </CardTitle>
        <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Icon name="Calendar" className="h-3 w-3" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Hash" className="h-3 w-3" />
            <span>{model}</span>
          </div>
        </div>
      </CardHeader>
      <div className="relative border-y border-border/50 bg-primary/5">
        <img 
          src={blueprint} 
          alt={title} 
          className="w-full object-contain mix-blend-lighten"
          style={{ height: '280px' }}
        />
      </div>
      <CardContent className="pt-3">
        <h4 className="text-xs uppercase text-muted-foreground mb-2">Спецификации:</h4>
        <ul className="text-sm space-y-1">
          {specifications.map((spec, index) => (
            <li key={index} className="flex items-start gap-2">
              <Icon name="Check" className="h-4 w-4 text-primary mt-0.5" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default BlueprintCard;
