
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AnimatronicCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
  color: string;
  className?: string;
}

const AnimatronicCard = ({
  name,
  role,
  image,
  description,
  color,
  className,
}: AnimatronicCardProps) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/20 group border-border/50",
      className
    )}>
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className={cn(
          "absolute inset-0 opacity-40",
          color === 'brown' && 'bg-fnaf-brown',
          color === 'purple' && 'bg-fnaf-purple',
          color === 'yellow' && 'bg-fnaf-yellow',
          color === 'red' && 'bg-fnaf-red',
        )} />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <span className="text-xl">{name}</span>
          <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
            {role}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AnimatronicCard;
