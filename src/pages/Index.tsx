
import Layout from '@/components/Layout';
import AnimatronicCard from '@/components/AnimatronicCard';
import SecurityBanner from '@/components/SecurityBanner';

const Index = () => {
  const animatronics = [
    {
      name: 'Freddy Fazbear',
      role: 'Ведущий аниматроник',
      image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000',
      description: 'Главный персонаж и лицо пиццерии. Обычно находится в центре сцены. Активен в поздние часы. Система распознавания лиц может давать сбои в ночное время.',
      color: 'brown'
    },
    {
      name: 'Bonnie',
      role: 'Гитарист',
      image: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1000',
      description: 'Играет на гитаре в группе. Часто перемещается по западному крылу. Демонстрирует повышенную активность в течение первых ночей. Следует регулярно проверять местоположение.',
      color: 'purple'
    },
    {
      name: 'Chica',
      role: 'Бэк-вокалистка',
      image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1000',
      description: 'Подпевает на сцене и держит кекс. Обычно перемещается через столовую и восточное крыло. Издает шум на кухне. Любит задерживаться у двери офиса.',
      color: 'yellow'
    },
    {
      name: 'Foxy',
      role: 'Аниматроник "Пиратской бухты"',
      image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1000',
      description: 'Находится за занавесом в "Пиратской бухте". Имеет уникальное поведение - выбегает по коридору если долго не проверять камеру. Поврежден, списан как неисправный.',
      color: 'red'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold text-fnaf-purple retro-shadow mb-2">
              База данных аниматроников
            </h1>
            <p className="text-muted-foreground">
              Внутренняя система учета и контроля аниматроников Freddy Fazbear's Pizza. 
              Информация строго конфиденциальна и предназначена только для сотрудников компании.
            </p>
          </div>
          <SecurityBanner level="low" message="Основная информация доступна всем сотрудникам. Детальные записи требуют повышенного допуска." />
        </div>

        <h2 className="text-xl font-medium border-b border-border pb-2 mb-4">Основная четверка аниматроников</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {animatronics.map((animatronic) => (
            <AnimatronicCard
              key={animatronic.name}
              name={animatronic.name}
              role={animatronic.role}
              image={animatronic.image}
              description={animatronic.description}
              color={animatronic.color}
            />
          ))}
        </div>

        <div className="bg-card border border-border/50 rounded-lg p-4 mt-6">
          <h3 className="text-lg font-medium mb-2 text-fnaf-purple">Информация для сотрудников:</h3>
          <p className="text-muted-foreground text-sm mb-3">
            Аниматроники переходят в "ночной режим" после закрытия пиццерии. Это нормальный 
            режим работы, предназначенный для обслуживания сервоприводов. Сотрудникам ночной
            смены запрещается покидать комнату охраны без крайней необходимости.
          </p>
          <p className="text-xs px-3 py-2 bg-muted rounded">
            <span className="text-fnaf-red font-medium">ВАЖНО:</span> При возникновении нештатных ситуаций
            или необычного поведения аниматроников немедленно сообщите
            руководству. Любые модификации или обслуживание разрешены только
            авторизованному техническому персоналу.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
