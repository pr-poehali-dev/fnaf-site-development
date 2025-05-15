import Layout from "@/components/Layout";
import SecurityBanner from "@/components/SecurityBanner";
import BlueprintCard from "@/components/BlueprintCard";

const Blueprints = () => {
  const blueprints = [
    {
      title: "Freddy Fazbear",
      blueprint:
        "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?q=80&w=1000",
      specifications: [
        "Система распознавания лиц",
        "Модуль воспроизведения музыки",
        "Улучшенные сервоприводы",
        "Аварийное отключение",
      ],
      year: "1983",
      model: "FF-853-A",
      classification: "standard" as const,
    },
    {
      title: "Bonnie",
      blueprint:
        "https://cdn.poehali.dev/files/ad88af0e-bb58-4535-a974-b8b7a4c56ec2.jpg",
      specifications: [
        "Система распознавания лиц",
        "Анимация игры на гитаре",
        "Улучшенная подвижность рук",
        "Рост: 8,9 футов",
        "Вес: 428 фунтов",
      ],
      year: "1983",
      model: "BN-853-B",
      classification: "standard" as const,
    },
    {
      title: "Chica",
      blueprint:
        "https://images.unsplash.com/photo-1581092918482-7d21185e1e0f?q=80&w=1000",
      specifications: [
        "Система распознавания лиц",
        "Модуль воспроизведения голоса",
        "Съемная бутафорская пицца",
        "Повышенная огнестойкость материалов",
      ],
      year: "1983",
      model: "CH-853-C",
      classification: "standard" as const,
    },
    {
      title: "Foxy",
      blueprint:
        "https://cdn.poehali.dev/files/08243d10-e080-4bff-b4fc-4e04efcc15f9.jpg",
      specifications: [
        "Резиновый крюк для безопасности посетителей",
        "Датчик приближения в голове",
        "Ноги конструированы для бега",
        "Рост: 6.3 фута",
        "Вес: 260 фунтов",
      ],
      year: "1984",
      model: "FX-844-D",
      classification: "prototype" as const,
    },
    {
      title: "Golden Freddy",
      blueprint:
        "https://images.unsplash.com/photo-1504280539878-538b933c05b7?q=80&w=1000",
      specifications: [
        "Двойной режим (костюм/аниматроник)",
        "Система spring-lock",
        "Ручное управление",
        "Специальная защита от влаги",
      ],
      year: "1982",
      model: "GF-825-S",
      classification: "restricted" as const,
    },
    {
      title: "Puppet",
      blueprint:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1000",
      specifications: [
        "Система отслеживания движения",
        "Магнитные крепления",
        "Безмоторная конструкция",
        "Активация музыкальной шкатулкой",
      ],
      year: "1985",
      model: "PP-857-M",
      classification: "prototype" as const,
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold text-fnaf-blue retro-shadow mb-2">
              Технические чертежи
            </h1>
            <p className="text-muted-foreground">
              Архив технических чертежей и спецификаций аниматроников Freddy
              Fazbear's Pizza. Документация предназначена для технического
              персонала.
            </p>
          </div>
          <SecurityBanner
            level="medium"
            message="Доступ разрешен только техническим специалистам уровня 2 и выше."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blueprints.map((blueprint, index) => (
            <BlueprintCard
              key={index}
              title={blueprint.title}
              blueprint={blueprint.blueprint}
              specifications={blueprint.specifications}
              year={blueprint.year}
              model={blueprint.model}
              classification={blueprint.classification}
            />
          ))}
        </div>

        <div className="bg-card border border-border/50 rounded-lg p-4 mt-6">
          <h3 className="text-lg font-medium mb-2 text-fnaf-blue">
            Техническая информация:
          </h3>
          <p className="text-muted-foreground text-sm mb-3">
            Чертежи содержат конфиденциальную информацию о внутреннем устройстве
            и механизмах аниматроников. Запрещается копировать или передавать
            данные схемы третьим лицам. Любое обслуживание должно производиться
            в строгом соответствии с техническими инструкциями.
          </p>
          <p className="text-xs px-3 py-2 bg-muted rounded">
            <span className="text-fnaf-blue font-medium">ПРИМЕЧАНИЕ:</span>
            Модели с пометкой "Restricted" требуют специального разрешения для
            доступа к полной документации. Для получения детальных схем
            обратитесь к руководителю технического отдела.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Blueprints;
