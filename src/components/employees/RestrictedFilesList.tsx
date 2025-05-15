
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SecretFile, { SecretFileType } from "./SecretFile";

interface RestrictedFilesListProps {
  files: SecretFileType[];
}

const RestrictedFilesList = ({ files }: RestrictedFilesListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Секретные проекты и чертежи</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {files.map((file, index) => (
            <SecretFile key={index} file={file} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RestrictedFilesList;
