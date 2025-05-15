import Layout from "@/components/Layout";
import SecurityBanner from "@/components/SecurityBanner";
import IncidentCard from "@/components/IncidentCard";

const Incidents = () => {
  const incidents = [
    {
      title: 'Инцидент "Укус 87"',
      date: "1987-11-13",
      type: "bite" as const,
      description:
        "Во время дневного представления один из новых аниматроников (предположительно из серии Toy) совершил непредвиденную атаку на посетителя, повредив лобную долю головного мозга. Пострадавший выжил, но получил серьезные травмы. Расследование выявило возможный сбой в системе распознавания лиц.\n\nВсе аниматроники серии Toy были отправлены на диагностику. Инцидент привел к пересмотру протоколов безопасности и модификации всех моделей.",
      classification: "closed" as const,
    },
    {
      title: 'Инцидент "Укус 83"',
      date: "1983-06-26",
      type: "bite" as const,
      description:
        "Ребенок был помещен в рот аниматроника Fredbear во время праздника и получил смертельную черепно-мозговую травму. Свидетелями происшествия стали несколько детей, в том числе старший брат пострадавшего, который, предположительно, принимал участие в инциденте.\n\nВ результате происшествия аниматроник Fredbear и вся линейка Spring-lock костюмов были отозваны из активного использования.",
      classification: "classified" as const,
    },
    {
      title: "Исчезновение пяти детей",
      date: "1985-07-09",
      type: "missing" as const,
      description:
        "Во время праздника в пиццерии Freddy Fazbear's Pizza пропало пятеро детей. По показаниям свидетелей, дети ушли с человеком в костюме аниматроника. Камеры наблюдения зафиксировали неизвестного в форме сотрудника, однако его личность установить не удалось.\n\nВпоследствии из аниматроников стал распространяться неприятный запах, и посетители жаловались на красные пятна на костюмах. Официальное расследование не дало результатов. Дети не были найдены.",
      classification: "open" as const,
    },
    {
      title: "Неисправность костюма Spring Bonnie",
      date: "1985-03-17",
      type: "malfunction" as const,
      description:
        "Технический сотрудник получил серьезные травмы при использовании костюма Spring Bonnie в режиме костюма (suit mode). Произошло непреднамеренное срабатывание пружинных механизмов, что привело к множественным проникающим ранениям.\n\nВсе костюмы с технологией spring-lock были отозваны для проверки. Изданы новые инструкции по использованию.",
      classification: "closed" as const,
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold text-fnaf-red retro-shadow mb-2">
              Архив инцидентов
            </h1>
            <p className="text-muted-foreground">
              Записи о происшествиях и несчастных случаях, связанных с пиццерией
              Freddy Fazbear's Pizza. Эта информация является строго
              конфиденциальной.
            </p>
          </div>
          <SecurityBanner
            level="medium"
            message="Доступ ограничен персоналом уровня 2 и выше. Распространение информации запрещено."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {incidents.map((incident, index) => (
            <IncidentCard
              key={index}
              title={incident.title}
              date={incident.date}
              type={incident.type}
              description={incident.description}
              classification={incident.classification}
            />
          ))}
        </div>

        <div className="bg-card border border-border/50 rounded-lg p-4 mt-6">
          <h3 className="text-lg font-medium mb-2 text-fnaf-red">
            Директива безопасности:
          </h3>
          <p className="text-muted-foreground text-sm mb-3">
            В соответствии с политикой Fazbear Entertainment, все инциденты
            должны рассматриваться в рамках компании. Обсуждение внутренних
            происшествий с посторонними лицами, включая членов семьи и
            представителей прессы, строго запрещено и является основанием для
            немедленного увольнения.
          </p>
          <p className="text-xs px-3 py-2 bg-muted rounded animate-flicker">
            <span className="text-fnaf-red font-medium">ВНИМАНИЕ:</span> Все
            упоминания об инцидентах категории "classified" подлежат строгому
            контролю. Информация о данных происшествиях доступна только
            руководству компании и специально уполномоченным лицам.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Incidents;
