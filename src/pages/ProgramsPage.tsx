import { BookOpen, Clock, Award, Users, CheckCircle, Calendar } from 'lucide-react';
import { translations } from '../utils/translations';

interface ProgramsPageProps {
  language: 'am' | 'en';
}

interface Program {
  id: number;
  title: { am: string; en: string };
  level: { am: string; en: string };
  duration: string;
  credits: number;
  description: { am: string; en: string };
  subjects: { am: string[]; en: string[] };
  career: { am: string[]; en: string[] };
  requirements: { am: string[]; en: string[] };
}

export default function ProgramsPage({ language }: ProgramsPageProps) {
  const t = translations[language];

  const programs: Program[] = [
    {
      id: 1,
      title: { 
        am: 'Ինֆորմատիկա և կիրառական մաթեմատիկա', 
        en: 'Informatics and Applied Mathematics' 
      },
      level: { am: 'Բակալավրիատ', en: 'Bachelor\'s Degree' },
      duration: '4 ' + (language === 'am' ? 'տարի' : 'years'),
      credits: 240,
      description: {
        am: 'Այս ծրագիրը պատրաստում է մասնագետներ ինֆորմատիկայի, ծրագրավորման և կիրառական մաթեմատիկայի ոլորտներում: Ուսանողները ծանոթանում են ժամանակակից տեխնոլոգիաների և մեթոդների հետ:',
        en: 'This program prepares specialists in informatics, programming, and applied mathematics. Students become familiar with modern technologies and methods.'
      },
      subjects: {
        am: [
          'Ծրագրավորման հիմունքներ',
          'Տվյալների կառուցվածք և ալգորիթմներ',
          'Տվյալների բազաներ',
          'Վեբ տեխնոլոգիաներ',
          'Մաթեմատիկական վերլուծություն',
          'Գծային ալգեբրա',
          'Հավանականությունների տեսություն',
          'Մաթեմատիկական մոդելավորում'
        ],
        en: [
          'Programming Fundamentals',
          'Data Structures and Algorithms',
          'Databases',
          'Web Technologies',
          'Mathematical Analysis',
          'Linear Algebra',
          'Probability Theory',
          'Mathematical Modeling'
        ]
      },
      career: {
        am: [
          'Ծրագրակազմ ինժեներ',
          'Վեբ մշակիչ',
          'Տվյալների վերլուծաբան',
          'Համակարգային վարիչ',
          'IT կոնսուլտանտ',
          'Մաթեմատիկական մոդելավորման մասնագետ'
        ],
        en: [
          'Software Engineer',
          'Web Developer',
          'Data Analyst',
          'System Administrator',
          'IT Consultant',
          'Mathematical Modeling Specialist'
        ]
      },
      requirements: {
        am: [
          'Ընդհանուր միջնակարգ կրթություն',
          'Մաթեմատիկա (նվազագույն 60%)',
          'Ֆիզիկա (նվազագույն 50%)',
          'Հայոց լեզու և գրականություն'
        ],
        en: [
          'General Secondary Education',
          'Mathematics (minimum 60%)',
          'Physics (minimum 50%)',
          'Armenian Language and Literature'
        ]
      }
    },
    {
      id: 2,
      title: { 
        am: 'Ֆիզիկա և տեխնոլոգիաներ', 
        en: 'Physics and Technologies' 
      },
      level: { am: 'Բակալավրիատ', en: 'Bachelor\'s Degree' },
      duration: '4 ' + (language === 'am' ? 'տարի' : 'years'),
      credits: 240,
      description: {
        am: 'Ծրագիրը ուղղված է տեսական և կիրառական ֆիզիկայի, նանոտեխնոլոգիաների և նյութագիտության ոլորտների մասնագետների պատրастմանը:',
        en: 'The program is aimed at training specialists in theoretical and applied physics, nanotechnology, and materials science.'
      },
      subjects: {
        am: [
          'Ընդհանուր ֆիզիկա',
          'Տեսական մեխանիկա',
          'Էլեկտրադինամիկա',
          'Քվանտային մեխանիկա',
          'Կոշտ մարմնի ֆիզիկա',
          'Նանոֆիզիկա',
          'Մաթեմատիկական ֆիզիկա',
          'Համակարգչային մոդելավորում'
        ],
        en: [
          'General Physics',
          'Theoretical Mechanics',
          'Electrodynamics',
          'Quantum Mechanics',
          'Solid State Physics',
          'Nanophysics',
          'Mathematical Physics',
          'Computer Modeling'
        ]
      },
      career: {
        am: [
          'Ֆիզիկոս հետազոտող',
          'Լաբորատոր ֆիզիկոս',
          'Նանոտեխնոլոգիաների մասնագետ',
          'Տեխնիկական ֆիզիկոս',
          'Գիտական հետազոտող',
          'Ֆիզիկայի դասախոս'
        ],
        en: [
          'Research Physicist',
          'Laboratory Physicist',
          'Nanotechnology Specialist',
          'Technical Physicist',
          'Scientific Researcher',
          'Physics Lecturer'
        ]
      },
      requirements: {
        am: [
          'Ընդհանուր միջնակարգ կրթություն',
          'Ֆիզիկա (նվազագույն 70%)',
          'Մաթեմատիկա (նվազագույն 65%)',
          'Քիմիա (նվազագույն 50%)'
        ],
        en: [
          'General Secondary Education',
          'Physics (minimum 70%)',
          'Mathematics (minimum 65%)',
          'Chemistry (minimum 50%)'
        ]
      }
    },
    {
      id: 3,
      title: { 
        am: 'Ինֆորմատիկա և կիրառական մաթեմատիկա', 
        en: 'Informatics and Applied Mathematics' 
      },
      level: { am: 'Մագիստրատուրա', en: 'Master\'s Degree' },
      duration: '2 ' + (language === 'am' ? 'տարի' : 'years'),
      credits: 120,
      description: {
        am: 'Խորացված ուսումնական ծրագիր, որը նպատակ ունի պատրաստել բարձր որակավորում ունեցող մասնագետներ գիտական հետազոտությունների և առաջադեմ տեխնոլոգիաների ոլորտում:',
        en: 'Advanced study program aimed at preparing highly qualified specialists in scientific research and advanced technologies.'
      },
      subjects: {
        am: [
          'Արհեստական բանականության հիմունքներ',
          'Մեքենական ուսուցում',
          'Մեծ տվյալների վերլուծություն',
          'Գիտական հաշվարկներ',
          'Նյուրոցանցեր',
          'Ծրագրային ինժեներություն',
          'Տվյալների կառուցվածք (առաջադեմ)',
          'Մագիստրական թեզ'
        ],
        en: [
          'Fundamentals of Artificial Intelligence',
          'Machine Learning',
          'Big Data Analysis',
          'Scientific Computing',
          'Neural Networks',
          'Software Engineering',
          'Advanced Data Structures',
          'Master\'s Thesis'
        ]
      },
      career: {
        am: [
          'Գիտական հետազոտող',
          'AI մասնագետ',
          'Տվյալների գիտնական',
          'Ծրագրային ճարտարապետ',
          'Տեխնիկական տնօրեն',
          'Ակադեմիական կարիերա'
        ],
        en: [
          'Research Scientist',
          'AI Specialist',
          'Data Scientist',
          'Software Architect',
          'Technical Director',
          'Academic Career'
        ]
      },
      requirements: {
        am: [
          'Բակալավրի կոչում համապատասխան ոլորտում',
          'GPA առնվազն 3.0',
          'Մտահոգությունների հարցազրույց',
          'Անգլերեն լեզվի իմացություն'
        ],
        en: [
          'Bachelor\'s degree in relevant field',
          'Minimum GPA of 3.0',
          'Admission interview',
          'English language proficiency'
        ]
      }
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t.programs.title}
          </h1>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {language === 'am' 
              ? 'Մեր ամբիոնը առաջարկում է ժամանակակից և մրցունակ կրթական ծրագրեր, որոնք համապատասխանում են միջազգային ստանդարտներին:'
              : 'Our department offers modern and competitive educational programs that meet international standards.'}
          </p>
        </div>

        <div className="space-y-12">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-8">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold">{program.title[language]}</h2>
                  <div className="flex items-center space-x-4">
                    <span className="bg-yellow-500 text-blue-800 px-4 py-2 rounded-full font-bold">
                      {program.level[language]}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-yellow-400 mr-3" />
                    <div>
                      <div className="text-sm opacity-90">{t.programs.duration}</div>
                      <div className="font-semibold">{program.duration}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-yellow-400 mr-3" />
                    <div>
                      <div className="text-sm opacity-90">{t.programs.credits}</div>
                      <div className="font-semibold">{program.credits} {language === 'am' ? 'կրեդիտ' : 'credits'}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-yellow-400 mr-3" />
                    <div>
                      <div className="text-sm opacity-90">{t.programs.language}</div>
                      <div className="font-semibold">{language === 'am' ? 'Հայերեն' : 'Armenian'}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                      {language === 'am' ? 'Ծրագրի մասին' : 'About Program'}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {program.description[language]}
                    </p>

                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {language === 'am' ? 'Ընդունելության պահանջներ' : 'Admission Requirements'}
                    </h4>
                    <ul className="space-y-2">
                      {program.requirements[language].map((req, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                        {language === 'am' ? 'Հիմնական առարկաներ' : 'Main Subjects'}
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {program.subjects[language].map((subject, index) => (
                          <div key={index} className="bg-blue-50 px-3 py-2 rounded-lg text-sm text-blue-800 font-medium">
                            {subject}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="h-5 w-5 text-green-600 mr-2" />
                        {language === 'am' ? 'Կարիերայի հեռանկարներ' : 'Career Prospects'}
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {program.career[language].map((career, index) => (
                          <div key={index} className="bg-green-50 px-3 py-2 rounded-lg text-sm text-green-800 font-medium">
                            {career}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <button className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    {language === 'am' ? 'Դիմել հիմա' : 'Apply Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {language === 'am' ? 'Լրացուցիչ տեղեկություններ' : 'Additional Information'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {language === 'am' ? 'Ընդունելություն' : 'Admission'}
                </h3>
                <p className="text-gray-600">
                  {language === 'am' 
                    ? 'Հունիս - Օգոստոս 2024'
                    : 'June - August 2024'}
                </p>
              </div>
              
              <div className="text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {language === 'am' ? 'Ուսումնական խմբեր' : 'Study Groups'}
                </h3>
                <p className="text-gray-600">
                  {language === 'am' 
                    ? '15-20 ուսանող խմբում'
                    : '15-20 students per group'}
                </p>
              </div>
              
              <div className="text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {language === 'am' ? 'Կրթաթոշակներ' : 'Scholarships'}
                </h3>
                <p className="text-gray-600">
                  {language === 'am' 
                    ? 'Առկա են գերազանց ուսանողների համար'
                    : 'Available for excellent students'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}