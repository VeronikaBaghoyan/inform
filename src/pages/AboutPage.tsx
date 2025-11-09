import { History, Target, Users, Building } from 'lucide-react';
import { translations } from '../utils/translations';

interface AboutPageProps {
  language: 'am' | 'en' | 'ru';
}

interface DepartmentHead {
  id: string;
  name: string;
  start_year?: number;
  end_year?: number;
  order: number;
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AboutPage({ language }: AboutPageProps) {
  const t = translations[language];
  const [departmentHeads, setDepartmentHeads] = useState<DepartmentHead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDepartmentHeads();
  }, []);

  const loadDepartmentHeads = async () => {
    try {
      const { data, error } = await supabase
        .from('department_heads')
        .select('*')
        .order('order', { ascending: true });

      if (error) throw error;
      setDepartmentHeads(data || []);
    } catch (error) {
      console.error('Error loading department heads:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t.about.title}
          </h1>
          <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
        </div>

        {/* History Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <History className="h-8 w-8 text-blue-800 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {t.about.history.title}
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {language === 'am'
                  ? 'Ինֆորմատիկայի և ֆիզիկամաթեմատիկական գիտությունների ամբիոնը հիմնադրվել է 1993 թվականին Գավառի պետական համալսարանի կազմում: Ամբիոնը վերապատրաստել և թողարկել է հազարավոր բարձրորակ մասնագետներ, ովքեր աշխատում են տարբեր ոլորտներում ինչպես Հայաստանում, այնպես էլ արտերկրում:'
                  : language === 'ru'
                  ? 'Кафедра информатики и физико-математических наук была основана в 1993 году в составе Гаварского государственного университета. Кафедра подготовила и выпустила тысячи высококвалифицированных специалистов, которые работают в различных областях как в Армении, так и за рубежом.'
                  : 'The Department of Informatics and Physical-Mathematical Sciences was established in 1993 within Gavar State University. The department has trained and graduated thousands of high-quality specialists who work in various fields both in Armenia and abroad.'}
              </p>
            </div>
            <div className="relative">
              <img
                src="https://gsu.am/wp-content/uploads/2025/07/IMG_5865.jpeg"
                alt="University Building"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-800 opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16 bg-blue-50 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-blue-800 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              {t.about.mission.title}
            </h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            {language === 'am'
              ? 'Մեր առաքելությունն է ապահովել բարձրորակ կրթություն ինֆորմատիկայի ոլորում, մշակել նորարարական մեթոդներ և կատարել գիտական հետազոտություններ, որոնք նպաստում են գիտելիքի առաջխաղացմանը:'
              : language === 'ru'
              ? 'Наша миссия - обеспечить качественное образование в области информатики, разработать инновационные методы и проводить научные исследования, способствующие развитию знаний.'
              : 'Our mission is to provide high-quality education in the field of informatics, develop innovative methods, and conduct scientific research that contributes to the advancement of knowledge.'}
          </p>
        </div>

        {/* Goals and Objectives */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Target className="h-8 w-8 text-blue-800 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              {t.about.goals.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.about.goals.items.map((goal, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Structure Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://takshashilauniv.ac.in/wp-content/uploads/2023/10/computer-engineering.jpg"
                alt="Department Structure"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-yellow-600 opacity-10 rounded-lg"></div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Building className="h-8 w-8 text-blue-800 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {t.about.structure.title}
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {language === 'am'
                  ? 'Ամբիոնը թողարկում է համակարգչային ճարտարագիտություն կրթական ծրագիրը, շնորհվող որակավորումը՝ «Ինֆորմատիկայի բակալավր», «Ինֆորմատիկայի մագիստրոս»:'
                  : language === 'ru'
                  ? 'Кафедра предлагает образовательную программу по компьютерной инженерии, присуждаемые квалификации - "Бакалавр информатики", "Магистр информатики".'
                  : 'The department offers a computer engineering educational program, with qualifications awarded as "Bachelor of Informatics" and "Master of Informatics".'}
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-800">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    {language === 'am' ? 'Համակարգչային ճարտարագիտություն' : language === 'ru' ? 'Компьютерная инженерия' : 'Computer engineering'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'am'
                      ? 'Ծրագրավորման լեզուներ, վեբ տեխնոլոգիաներ, տվյալների բազաներ և այլն'
                      : language === 'ru'
                      ? 'Языки программирования, веб-технологии, базы данных и т.д'
                      : 'Programming languages, web technologies, databases etc'}
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                  <h3 className="font-semibold text-green-600 mb-2">
                    {language === 'am' ? 'Այլ կրթական ծրագրեր' : language === 'ru' ? 'Другие образовательные программы' : 'Other educational programs'}
                  </h3>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Department Heads Section */}
        {!loading && departmentHeads.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Crown className="h-8 w-8 text-yellow-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">
                {language === 'am' ? 'Ամբիոնի վարիչներ' : language === 'ru' ? 'Руководители кафедры' : 'Department Heads'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentHeads.map((head) => (
                <div key={head.id} className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow-600">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {head.name}
                      </h3>
                      {head.start_year && (
                        <p className="text-sm text-gray-600 mt-2">
                          {head.start_year}{head.end_year ? ` - ${head.end_year}` : ''}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">
                {language === 'am' ? 'Դասախոսներ' : language === 'ru' ? 'Преподаватели' : 'Faculty Members'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-blue-200">
                {language === 'am' ? 'Կրթական ծրագրեր' : language === 'ru' ? 'Программы' : 'Programs'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}