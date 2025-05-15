
import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SecurityBannerProps {
  level?: 'low' | 'medium' | 'high';
  message?: string;
  className?: string;
}

const SecurityBanner = ({ 
  level = 'medium', 
  message = 'Доступ к информации ограничен. Требуется уровень допуска.',
  className 
}: SecurityBannerProps) => {
  const colors = {
    low: 'bg-muted/80 text-muted-foreground',
    medium: 'bg-fnaf-yellow/20 text-fnaf-yellow',
    high: 'bg-fnaf-red/20 text-fnaf-red',
  };

  return (
    <div className={cn(
      'rounded-md py-2 px-3 flex items-center gap-2 mb-4 text-sm border security-text',
      colors[level],
      level === 'low' ? 'border-muted-foreground/30' : '',
      level === 'medium' ? 'border-fnaf-yellow/30' : '',
      level === 'high' ? 'border-fnaf-red/30' : '',
      className
    )}>
      <AlertCircle className="h-4 w-4" />
      <span className={cn(
        level === 'high' ? 'animate-flicker' : ''
      )}>
        {message}
      </span>
    </div>
  );
};

export default SecurityBanner;
