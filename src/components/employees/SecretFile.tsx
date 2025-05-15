
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

export interface SecretFileType {
  name: string;
  type: string;
  size: string;
  date: string;
  classification: string;
}

interface SecretFileProps {
  file: SecretFileType;
}

const fileTypeIcons: Record<string, string> = {
  blueprint: "FileText",
  technical: "Settings",
  manual: "BookOpen",
  research: "FlaskConical"
};

const SecretFile = ({ file }: SecretFileProps) => {
  return (
    <div className="flex items-center justify-between border-b border-border/40 pb-2 group hover:bg-card/80 p-2 rounded-md">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
          <Icon name={fileTypeIcons[file.type] || "File"} className="h-4 w-4" />
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
  );
};

export default SecretFile;
