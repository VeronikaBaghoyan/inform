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
  description: { am: string; en: string };
  subjects: { am: string[]; en: string[] };
  requirements: { am: string[]; en: string[] };
}

export default function ProgramsPage({ language }: ProgramsPageProps) {
  const t = translations[language];

  const programs: Program[] = [
    {
      id: 1,
      title: { 
        am: 'Համակարգչային ճարտարագիտություն', 
        en: 'Computer Engineering' 
      },
      level: { am: 'Բակալավրիատի առկա', en: 'Bachelor\'s Full-time' },
      duration: '4 ' + (language === 'am' ? 'տարի' : 'years'),
      description: {
        am: 'Այս ծրագիրը պատրաստում է մասնագետներ ինֆորմատիկայի, ծրագրավորման և կիրառական մաթեմատիկայի ոլորտներում: Ուսանողները ծանոթանում են ժամանակակից տեխնոլոգիաների և մեթոդների հետ:',
        en: 'This program prepares specialists in informatics, programming, and applied mathematics. Students become familiar with modern technologies and methods.'
      },
      subjects: {
        am: [
          'Mobile տեխնոլոգիաներ',
          'Ծրագրերի թեստավորում',
          'Արհեստական բանականություն և մեքենայական ուսուցում',
          'Տվյալների կառուցվածքներ և ալգորիթմներ',
          'Տվյալների բազաներ',
          'Տեղեկատվության պահպանման և ցանցային շրջանառման տեխնոլոգիաներ',
          'Ընդհանուր էլեկտրատեխնիկա և չափագիտություն',
          'Համակարգիչների կիրառում',
          'Համակարգային ծրագրավորում',
          'Ծրագրավորման հիմունքներ',
          'Web-ծրագրավորում',
          'Օբյեկտ - կողմնորոշված ծրագրավորում',
          'Ինֆորմատիկա',
          'Սերվերային ծրագրավորում',
          'Ինֆորմատիկայի մաթեմատիկական հիմունքներ',
          'Հաշվողական համակարգերի արատորոշում',
          'Համակարգչային սխեմոտեխնիկա',
          'Կառավարման տեղեկատվական համակարգեր',
          'Տեղեկատվության պաշտպանության հիմունքներ',
          'Թվային սխեմաների և համակարգերի նախագծում',
          'Թվային համակարգերի նախագծում',
          'Հաշվողական համակարգերի ճարտարապետություն',
          'Միկրոպրոցեսորային համակարգեր',
          'Կառավարման հիմունքներ',
          'Ցանցային օպերացիոն համակարգեր',
          'Հաշվողական համակարգերի ճարտարապետություն',
          'Համակարգչային մասնագիտացված սխեմաներ',
          'Համակարգչային ցանցերի կազմակերպում'
        ],
        en: [
          'Mobile Technologies',
          'Software Testing',
          'Artificial Intelligence and Machine Learning',
          'Data Structures and Algorithms',
          'Databases',
          'Information Storage and Network Circulation Technologies',
          'General Electrical Engineering and Metrology',
          'Computer Applications',
          'System Programming',
          'Programming Fundamentals',
          'Web Programming',
          'Object-Oriented Programming',
          'Informatics',
          'Server Programming',
          'Mathematical Foundations of Informatics',
          'Computing Systems Diagnostics',
          'Computer Circuit Engineering',
          'Management Information Systems',
          'Information Security Fundamentals',
          'Digital Circuits and Systems Design',
          'Digital Systems Design',
          'Computing Systems Architecture',
          'Microprocessor Systems',
          'Management Fundamentals',
          'Network Operating Systems',
          'Computing Systems Architecture',
          'Computer Specialized Circuits',
          'Computer Networks Organization'
        ]
      },
      requirements: {
        am: [
          'Ընդհանուր միջնակարգ կրթություն',
          'Մաթեմատիկա',
          'Ֆիզիկա',
          
        ],
        en: [
          'General Secondary Education',
          'Mathematics ',
          'Physics ',
         
        ]
      }
    },
    {
      id: 2,
      title: { 
        am: 'Համակարգչային ճարտարագիտություն', 
        en: 'Computer Engineering' 
      },
      level: { am: 'Բակալավրիատի հեռակա', en: 'Bachelor\'s Distance Learning' },
      duration: '5 ' + (language === 'am' ? 'տարի' : 'years'),
      description: {
        am: 'Հեռակա ուսուցման ծրագիր, որը թույլ է տալիս ուսանողներին ստանալ բարձրորակ կրթություն ինֆորմատիկայի ոլորտում՝ չխանգարելով իրենց աշխատանքային գործունեությանը:',
        en: 'Distance learning program that allows students to receive high-quality education in informatics without interfering with their work activities.'
      },
      subjects: {
        am: [
          'Mobile տեխնոլոգիաներ',
          'Ծրագրերի թեստավորում',
          'Արհեստական բանականություն և մեքենայական ուսուցում',
          'Տվյալների կառուցվածքներ և ալգորիթմներ',
          'Տվյալների բազաներ',
          'Տեղեկատվության պահպանման և ցանցային շրջանառման տեխնոլոգիաներ',
          'Ընդհանուր էլեկտրատեխնիկա և չափագիտություն',
          'Համակարգիչների կիրառում',
          'Համակարգային ծրագրավորում',
          'Ծրագրավորման հիմունքներ',
          'Web-ծրագրավորում',
          'Օբյեկտ - կողմնորոշված ծրագրավորում',
          'Ինֆորմատիկա',
          'Սերվերային ծրագրավորում',
          'Ինֆորմատիկայի մաթեմատիկական հիմունքներ',
          'Հաշվողական համակարգերի արատորոշում',
          'Համակարգչային սխեմոտեխնիկա',
          'Կառավարման տեղեկատվական համակարգեր',
          'Տեղեկատվության պաշտպանության հիմունքներ',
          'Թվային սխեմաների և համակարգերի նախագծում',
          'Թվային համակարգերի նախագծում',
          'Հաշվողական համակարգերի ճարտարապետություն',
          'Միկրոպրոցեսորային համակարգեր',
          'Կառավարման հիմունքներ',
          'Ցանցային օպերացիոն համակարգեր',
          'Հաշվողական համակարգերի ճարտարապետություն',
          'Համակարգչային մասնագիտացված սխեմաներ',
          'Համակարգչային ցանցերի կազմակերպում'
        ],
        en: [
          'Mobile Technologies',
          'Software Testing',
          'Artificial Intelligence and Machine Learning',
          'Data Structures and Algorithms',
          'Databases',
          'Information Storage and Network Circulation Technologies',
          'General Electrical Engineering and Metrology',
          'Computer Applications',
          'System Programming',
          'Programming Fundamentals',
          'Web Programming',
          'Object-Oriented Programming',
          'Informatics',
          'Server Programming',
          'Mathematical Foundations of Informatics',
          'Computing Systems Diagnostics',
          'Computer Circuit Engineering',
          'Management Information Systems',
          'Information Security Fundamentals',
          'Digital Circuits and Systems Design',
          'Digital Systems Design',
          'Computing Systems Architecture',
          'Microprocessor Systems',
          'Management Fundamentals',
          'Network Operating Systems',
          'Computing Systems Architecture',
          'Computer Specialized Circuits',
          'Computer Networks Organization'
        ]
      },
      requirements: {
        am: [
          'Ընդհանուր միջնակարգ կրթություն',
          'Մաթեմատիկա',
          'Ֆիզիկա',
        ],
        en: [
          'General Secondary Education',
          'Mathematics',
          'Physics',
         
        ]
      }
    },
    {
      id: 3,
      title: { 
        am: 'Համակարգչային ճարտարագիտություն', 
        en: 'Computer Engineering' 
      },
      level: { am: 'Մագիստրատուրա', en: 'Master\'s Degree' },
      duration: '2 ' + (language === 'am' ? 'տարի' : 'years'),
      description: {
        am: 'Խորացված ուսումնական ծրագիր, որը նպատակ ունի պատրաստել բարձր որակավորում ունեցող մասնագետներ գիտական հետազոտությունների և առաջադեմ տեխնոլոգիաների ոլորտում:',
        en: 'Advanced study program aimed at preparing highly qualified specialists in scientific research and advanced technologies.'
      },
      subjects: {
        am: [
          'Արհեստական բանականության ծրագրագործիքային միջոցներ',
          'Զուգահեռ համակարգչային ճարտարապետություններ',
          'Արհեստական բանականության համակարգեր',
          'Առաջատար մոբայլ տեխնոլոգիաներ',
          'Մաթեմատիկական ծրագրավորում',
          'Ծրագրավորում Net միջավայրում',
          'Առաջատար web-տեխնոլոգիաներ',
          'Համակարգչային ցանցերի նախագծում և իրականացում',
          'Հաշվողական համակարգերի և ցանցեր սերվերներ',
          'Առաջատար ծրագրային ճարտարապետություն',
          'Նեյրոնային ցանցեր',
          'Քվանտային ծրագրավորման համակարգեր',
          'Միկրո և նանոտեխնոլոգիաներ',
          'Ցանցային համակարգերի պաշտպանություն և անվտանգություն',
          'Ծրագրային համալիր MATLAB',
          'Մեծ տվյալների մշակման համակարգեր',
          'Բարդ համակարգերի մոդելավորում և հուսալիություն',
          'Օբյեկտ կողմնորոշված վերլուծություն և նախագծում',
          'Որոշումների կայացման տեսություն'
        ],
        en: [
          'Artificial Intelligence Software Tools',
          'Parallel Computer Architectures',
          'Artificial Intelligence Systems',
          'Advanced Mobile Technologies',
          'Mathematical Programming',
          'Programming in .Net Environment',
          'Advanced Web Technologies',
          'Computer Networks Design and Implementation',
          'Computing Systems and Network Servers',
          'Advanced Software Architecture',
          'Neural Networks',
          'Quantum Programming Systems',
          'Micro and Nanotechnologies',
          'Network Systems Protection and Security',
          'MATLAB Software Complex',
          'Big Data Processing Systems',
          'Complex Systems Modeling and Reliability',
          'Object-Oriented Analysis and Design',
          'Decision Making Theory'
        ]
      },
      requirements: {
        am: [
          'Բակալավրի կոչում',
          
        ],
        en: [
          'Bachelor\'s degree',
         '
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-yellow-400 mr-3" />
                    <div>
                      <div className="text-sm opacity-90">{t.programs.duration}</div>
                      <div className="font-semibold">{program.duration}</div>
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
                      <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
                        {program.subjects[language].map((subject, index) => (
                          <div key={index} className="bg-blue-50 px-3 py-2 rounded-lg text-sm text-blue-800 font-medium">
                            {subject}
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
                    ? 'Հունիս - Օգոստոս 2025'
                    : 'June - August 2025}
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