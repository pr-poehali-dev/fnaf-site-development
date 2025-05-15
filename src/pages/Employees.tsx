import { useState } from "react";
import Layout from "@/components/Layout";
import SecurityBanner from "@/components/SecurityBanner";
import AuthRequired from "@/components/employees/AuthRequired";
import AccessHeader from "@/components/employees/AccessHeader";
import RestrictedFilesList from "@/components/employees/RestrictedFilesList";
import ConfidentialityNotice from "@/components/employees/ConfidentialityNotice";
import { restrictedFiles } from "@/data/restrictedFiles";

/**
 * Страница секретных материалов только для сотрудников,
 * защищенная системой авторизации
 */
const Employees = () => {
  // Состояние для отслеживания доступа к защищенным материалам
  const [accessGranted, setAccessGranted] = useState(false);

  const handleAccessGranted = () => {
    setAccessGranted(true);
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
              Защищенная секция с ограниченным доступом. Содержимое доступно
              только для авторизованного персонала.
            </p>
          </div>
          <SecurityBanner
            level="high"
            message="ВНИМАНИЕ! Несанкционированный доступ преследуется по закону."
          />
        </div>

        {!accessGranted ? (
          // Показываем экран авторизации, если доступ еще не предоставлен
          <AuthRequired onAccessGranted={handleAccessGranted} />
        ) : (
          // Показываем секретные материалы, если авторизация пройдена
          <div className="space-y-4">
            <AccessHeader />
            <RestrictedFilesList files={restrictedFiles} />
            <ConfidentialityNotice />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Employees;
