import { BookOpen, Users, Calendar, Award, ExternalLink, FileText, Beaker } from 'lucide-react';
import { translations } from '../utils/translations';

interface ResearchPageProps {
  language: 'am' | 'en' | 'ru';
}

interface Publication {
  id: number;
  title: { am: string; en: string };
  authors: string;
  journal: string;
  year: number;
  type: 'article' | 'book' | 'thesis';
  doi?: string;
}

interface Project {
  id: number;
  title: { am: string; en: string };
  description: { am: string; en: string };
  leader: string;
  status: 'ongoing' | 'completed';
  startYear: number;
  endYear?: number;
  funding?: string;
}

interface Conference {
  id: number;
  title: { am: string; en: string };
  date: string;
  location: { am: string; en: string };
  type: 'upcoming' | 'past';
  participants?: number;
}

export default function ResearchPage({ language }: ResearchPageProps) {
  const t = translations[language];

  const publications: Publication[] = [
    {
      id: 1,
      title: {
        am: 'Արհեստական նյուրոնային ցանցերի օպտիմիզացիոն մեթոդներ',
        en: 'Optimization Methods for Artificial Neural Networks'
      },
      authors: 'Գալստյան Ա., Մարտիրոսյան Ա.',
      journal: 'Journal of Computer Science',
      year: 2023,
      type: 'article',
      doi: '10.1234/jcs.2023.001'
    },
    {
      id: 2,
      title: {
        am: 'Քվանտային մեխանիկայի կիրառությունները նանոտեխնոլոգիաներում',
        en: 'Applications of Quantum Mechanics in Nanotechnology'
      },
      authors: 'Ավանեսյան Տ., Պետրոսյան Ն.',
      journal: 'Physics Today',
      year: 2023,
      type: 'article',
      doi: '10.5678/pt.2023.042'
    },
    {
      id: 3,
      title: {
        am: 'Մաթեմատիկական մոդելավորում և վիմագրություն',
        en: 'Mathematical Modeling and Statistics'
      },
      authors: 'Հակոբյան Մ.',
      journal: 'Zangezur Academic Press',
      year: 2022,
      type: 'book'
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: {
        am: 'Մեքենական ուսուցման ալգորիթմների մշակում բժշկական ախտորոշման համար',
        en: 'Development of Machine Learning Algorithms for Medical Diagnosis'
      },
      description: {
        am: 'Նախագիծը նպատակ ունի մշակել նոր մեքենական ուսուցման ալգորիթմներ բժշկական պատկերների վերլուծության և ախտորոշման համար:',
        en: 'The project aims to develop new machine learning algorithms for medical image analysis and diagnosis.'
      },
      leader: 'Դր. Գալստյան Ա.',
      status: 'ongoing',
      startYear: 2022,
      endYear: 2025,
      funding: 'ՀՀ ԳԱԱ'
    },
    {
      id: 2,
      title: {
        am: 'Նանոմասштաբի ֆիզիկական գործընթացների համակարգչային մոդելավորում',
        en: 'Computer Modeling of Nanoscale Physical Processes'
      },
      description: {
        am: 'Նանոմասնիկների և նանոկառուցվածքների ֆիզիկական հատկությունների ուսումնասիրություն համակարգչային մոդելավորման միջոցով:',
        en: 'Study of physical properties of nanoparticles and nanostructures using computer modeling.'
      },
      leader: 'Դր. Ավանեսյան Տ.',
      status: 'ongoing',
      startYear: 2023,
      endYear: 2026,
      funding: 'ANSEF'
    },
    {
      id: 3,
      title: {
        am: 'Բիգ Դատայի վերլուծության մեթոդների բարելավում',
        en: 'Improvement of Big Data Analysis Methods'
      },
      description: {
        am: 'Մեծ տվյալների արդյունավետ վերլուծության և մշակման նոր մեթոդների մշակում:',
        en: 'Development of new methods for efficient analysis and processing of big data.'
      },
      leader: 'Մարտիրոսյան Ա.',
      status: 'completed',
      startYear: 2020,
      endYear: 2023
    }
  ];

  const conferences: Conference[] = [
    {
      id: 1,
      title: {
        am: 'Միջազգային գիտաժողով "Ժամանակակից տեխնոլոգիաները կրթության մեջ"',
        en: 'International Conference "Modern Technologies in Education"'
      },
      date: '2024-10-15',
      location: { am: 'Գավառ, Հայաստան', en: 'Gavar, Armenia' },
      type: 'upcoming',
      participants: 150
    },
    {
      id: 2,
      title: {
        am: 'Գիտական սեմինար "Արհեստական բանականության հեռանկարները"',
        en: 'Scientific Seminar "Prospects of Artificial Intelligence"'
      },
      date: '2024-12-05',
      location: { am: 'Գավառ, Հայաստան', en: 'Gavar, Armenia' },
      type: 'upcoming',
      participants: 80
    },
    {
      id: 3,
      title: {
        am: 'Ուսանողական գիտական կոնֆերանս',
        en: 'Student Scientific Conference'
      },
      date: '2024-04-20',
      location: { am: 'Գավառ, Հայաստան', en: 'Gavar, Armenia' },
      type: 'past',
      participants: 120
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t.research.title}
          </h1>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {language === 'am' 
              ? 'Մեր ամբիոնը ակտիվորեն զբաղվում է գիտական հետազոտություններով ինֆորմատիկայի, մաթեմատիկայի և ֆիզիկայի ոլորտներում:'
              : 'Our department is actively engaged in scientific research in the fields of informatics, mathematics, and physics.'}
          </p>
        </div>

        {/* Statistics */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-2xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <FileText className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-200">{language === 'am' ? 'Հրատարակություններ' : 'Publications'}</div>
              </div>
              <div>
                <Beaker className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">12</div>
                <div className="text-blue-200">{language === 'am' ? 'Ակտիվ նախագծեր' : 'Active Projects'}</div>
              </div>
              <div>
                <Calendar className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">25</div>
                <div className="text-blue-200">{language === 'am' ? 'Կոնֆերանսներ' : 'Conferences'}</div>
              </div>
              <div>
                <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">8</div>
                <div className="text-blue-200">{language === 'am' ? 'Մրցանակներ' : 'Awards'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Publications Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-blue-800 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              {t.research.publications.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {publications.map((pub) => (
              <div key={pub.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium mr-3 ${
                        pub.type === 'article' ? 'bg-blue-100 text-blue-800' :
                        pub.type === 'book' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {pub.type === 'article' ? (language === 'am' ? 'Հոդված' : 'Article') :
                         pub.type === 'book' ? (language === 'am' ? 'Գիրք' : 'Book') :
                         (language === 'am' ? 'Ատենախոսություն' : 'Thesis')}
                      </span>
                      <span className="text-sm text-gray-500">{pub.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {pub.title[language]}
                    </h3>
                    
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">{language === 'am' ? 'Հեղինակներ' : 'Authors'}:</span> {pub.authors}
                    </p>
                    
                    <p className="text-gray-600">
                      <span className="font-medium">{language === 'am' ? 'Հրատարակիչ' : 'Publisher'}:</span> {pub.journal}
                    </p>
                  </div>
                  
                  {pub.doi && (
                    <button className="ml-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      DOI
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Projects Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Beaker className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              {t.research.projects.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className={`rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow ${
                project.status === 'ongoing' ? 'bg-green-50 border-l-4 border-green-500' : 'bg-gray-50 border-l-4 border-gray-400'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'ongoing' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status === 'ongoing' 
                      ? (language === 'am' ? 'Ընթացիկ' : 'Ongoing')
                      : (language === 'am' ? 'Ավարտված' : 'Completed')}
                  </span>
                  <span className="text-sm text-gray-600">
                    {project.startYear} - {project.endYear || (language === 'am' ? 'ընթացիկ' : 'ongoing')}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title[language]}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description[language]}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium text-gray-900">{language === 'am' ? 'Ղեկավար' : 'Leader'}:</span>
                    <span className="text-gray-600 ml-2">{project.leader}</span>
                  </p>
                  {project.funding && (
                    <p className="text-sm">
                      <span className="font-medium text-gray-900">{language === 'am' ? 'Ֆինանսավորում' : 'Funding'}:</span>
                      <span className="text-gray-600 ml-2">{project.funding}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conferences Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Calendar className="h-8 w-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              {t.research.conferences.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                {t.research.conferences.upcoming}
              </h3>
              <div className="space-y-4">
                {conferences.filter(conf => conf.type === 'upcoming').map((conf) => (
                  <div key={conf.id} className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {conf.title[language]}
                    </h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><span className="font-medium">{language === 'am' ? 'Ամսաթիվ' : 'Date'}:</span> {conf.date}</p>
                      <p><span className="font-medium">{language === 'am' ? 'Վայր' : 'Location'}:</span> {conf.location[language]}</p>
                      {conf.participants && (
                        <p><span className="font-medium">{language === 'am' ? 'Մասնակիցներ' : 'Participants'}:</span> {conf.participants}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-6 w-6 text-gray-600 mr-2" />
                {t.research.conferences.past}
              </h3>
              <div className="space-y-4">
                {conferences.filter(conf => conf.type === 'past').map((conf) => (
                  <div key={conf.id} className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-400">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {conf.title[language]}
                    </h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><span className="font-medium">{language === 'am' ? 'Ամսաթիվ' : 'Date'}:</span> {conf.date}</p>
                      <p><span className="font-medium">{language === 'am' ? 'Վայր' : 'Location'}:</span> {conf.location[language]}</p>
                      {conf.participants && (
                        <p><span className="font-medium">{language === 'am' ? 'Մասնակիցներ' : 'Participants'}:</span> {conf.participants}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-800 to-purple-800 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'am' ? 'Միացեք մեր հետազոտական թիմին' : 'Join Our Research Team'}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            {language === 'am' 
              ? 'Մենք միշտ գտնվում ենք նոր տաղանդավոր հետազոտողների և ուսանողների որոնումներում:'
              : 'We are always looking for new talented researchers and students.'}
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
            {language === 'am' ? 'Կապվել մեզ հետ' : 'Contact Us'}
          </button>
        </div>
      </div>
    </div>
  );
}