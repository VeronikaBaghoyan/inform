import { Mail, Phone, User, GraduationCap, Award } from 'lucide-react';
import { translations } from '../utils/translations';

interface StaffPageProps {
  language: 'am' | 'en' | 'ru';
}

interface StaffMember {
  id: number;
  name: { am: string; en: string; ru: string };
  position: { am: string; en: string; ru: string };
  degree: { am: string; en: string; ru: string };
  email: string;
  phone?: string;
  image: string;
  bio: { am: string; en: string; ru: string };
  specialization: { am: string; en: string; ru: string };
}

export default function StaffPage({ language }: StaffPageProps) {
  const t = translations[language];

  const staffMembers: StaffMember[] = [
    {
      id: 1,
      name: {
        am: 'Վարազդատ Ավետիսյան',
        en: 'Varazdat Avetisyan',
        ru: 'Варазdat Аветисян'
      },
      position: {
        am: 'Ամբիոնի վարիչ',
        en: 'Department Head',
        ru: 'Заведующий кафедрой'
      },
      degree: {
        am: 'Տեխնիկական գիտությունների թեկնածու',
        en: 'Candidate of Technical Sciences',
        ru: 'Кандидат технических наук'
      },
      email: 'avetvarazdat@gmail.com',
      phone: '+374 77701656',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: {
        am: 'Ունի 12 տարվա դասավանդման փորձ ինֆորմատիկայի և համակարգչային գիտությունների ոլորտում:',
        en: 'He has 12 years of teaching experience in the field of informatics and computer science.',
        ru: 'Имеет 12-летний опыт преподавания в области информатики и компьютерных наук.'
      },
      specialization: {
        am: 'Տվյալների հենքեր, Արհեստական բանականություն և մեքենական ուսուցում, Արհեստական բանականության համակարգեր, Նեյրոնային ցանցեր',
        en: 'Databases, Artificial Intelligence and Machine Learning, Artificial Intelligence Systems, Neural Networks',
        ru: 'Базы данных, Искусственный интеллект и машинное обучение, Системы искусственного интеллекта, Нейронные сети'
      }
    },
    {
      id: 2,
      name: {
        am: 'Գասպարյան Շահեն',
        en: 'Gasparyan Shahen',
        ru: 'Гаспарян Шаген'
      },
      position: {
        am: 'Դասախոս',
        en: 'Lecturer',
        ru: 'Преподаватель'
      },
      degree: {
        am: 'Մագիստրոս',
        en: 'Master\'s Degree',
        ru: 'Магистр'
      },
      email: 's.gasparyan@gsu.am',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      bio: {
        am: 'Մասնագիտանում է սերվերային և վեբ ծրագրավորման ոլորտում:',
        en: 'Specializes in server-side and web programming.',
        ru: 'Специализируется в области серверного и веб-программирования.'
      },
      specialization: {
        am: 'Սերվերային ծրագրավորում, Web-ծրագրավորում',
        en: 'Server Programming, Web Programming',
        ru: 'Серверное программирование, Web-программирование'
      }
    },
    {
      id: 3,
      name: {
        am: 'Սարգսյան Երեմ',
        en: 'Sargsyan Yerem',
        ru: 'Саргсян Ерем'
      },
      position: {
        am: 'Դասախոս',
        en: 'Lecturer',
        ru: 'Преподаватель'
      },
      degree: {
        am: 'Մագիստրոս',
        en: 'Master\'s Degree',
        ru: 'Магистр'
      },
      email: 'y.sargsyan@gsu.am',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: {
        am: 'Մասնագիտանում է ծրագրերի թեստավորման ոլորտում:',
        en: 'Specializes in software testing.',
        ru: 'Специализируется в области тестирования программного обеспечения.'
      },
      specialization: {
        am: 'Ծրագրերի թեստավորում',
        en: 'Software Testing',
        ru: 'Тестирование программного обеспечения'
      }
    },
    {
      id: 4,
      name: {
        am: 'Մաստոյան Կարեն',
        en: 'Mastoyan Karen',
        ru: 'Мастоян Карен'
      },
      position: {
        am: 'Դասախոս',
        en: 'Lecturer',
        ru: 'Преподаватель'
      },
      degree: {
        am: 'Մագիստրոս',
        en: 'Master\'s Degree',
        ru: 'Магистр'
      },
      email: 'k.mastoyan@gsu.am',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      bio: {
        am: 'Մասնագիտանում է հաշվողական համակարգերի արատորոշման և մոբայլ տեխնոլոգիաների ոլորտում:',
        en: 'Specializes in computational systems diagnostics and mobile technologies.',
        ru: 'Специализируется в области диагностики вычислительных систем и мобильных технологий.'
      },
      specialization: {
        am: 'Հաշվողական համակարգերի արատորոշում, Mobile տեխնոլոգիաներ',
        en: 'Computational Systems Diagnostics, Mobile Technologies',
        ru: 'Диагностика вычислительных систем, мобильные технологии'
      }
    },
    {
      id: 5,
      name: {
        am: 'Բալագոզյան Արմինե',
        en: 'Balagozyan Armine',
        ru: 'Балагозян Армине'
      },
      position: {
        am: 'Դասախոս',
        en: 'Lecturer',
        ru: 'Преподаватель'
      },
      degree: {
        am: 'Մագիստրոս',
        en: 'Master\'s Degree',
        ru: 'Магистр'
      },
      email: 'a.balagozyan@gsu.am',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      bio: {
        am: 'Մասնագիտանում է էլեկտրոնային կառավարման և տեղեկատվական համակարգերի ոլորտում:',
        en: 'Specializes in electronic control and information management systems.',
        ru: 'Специализируется в области электронных систем управления и информационных систем управления.'
      },
      specialization: {
        am: 'Էլեկտրոնային կառավարման ցանցային համակարգեր, Կառավարման տեղեկատվական համակարգեր',
        en: 'Electronic Control Network Systems, Management Information Systems',
        ru: 'Сетевые системы электронного управления, управленческие информационные системы'
      }
    },
    {
      id: 6,
      name: {
        am: 'Միրիբյան Արթուր',
        en: 'Miribyan Arthur',
        ru: 'Мирибян Артур'
      },
      position: {
        am: 'Դասախոս',
        en: 'Lecturer',
        ru: 'Преподаватель'
      },
      degree: {
        am: 'Մագիստրոս',
        en: 'Master\'s Degree',
        ru: 'Магистр'
      },
      email: 'a.miribyan@gsu.am',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      bio: {
        am: 'Մասնագիտանում է էլեկտրատեխնիկայի և համակարգիչների կիրառման ոլորտում:',
        en: 'Specializes in electrical engineering and computer applications.',
        ru: 'Специализируется в области электротехники и применения компьютеров.'
      },
      specialization: {
        am: 'Ընդհանուր էլեկտրատեխնիկա և չափագիտություն, Համակարգիչների կիրառում',
        en: 'General Electrical Engineering and Metrology, Computer Applications',
        ru: 'Общая электротехника и метрология, применение компьютеров'
      }
    },
    {
      id: 7,
      name: {
        am: 'Խուրշուդյան Արմեն',
        en: 'Khurshudyan Armen',
        ru: 'Хуршудян Армен'
      },
      position: {
        am: 'Դասախոս',
        en: 'Lecturer',
        ru: 'Преподаватель'
      },
      degree: {
        am: 'Մագիստրոս',
        en: 'Master\'s Degree',
        ru: 'Магистр'
      },
      email: 'a.khurshudyan@gsu.am',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: {
        am: 'Մասնագիտանում է ինֆորմատիկայի և ծրագրավորման ոլորտում:',
        en: 'Specializes in informatics and programming.',
        ru: 'Специализируется в области информатики и программирования.'
      },
      specialization: {
        am: 'Ինֆորմատիկա, Ծրագրավորման հիմունքներ, Համակարգային ծրագրավորում',
        en: 'Informatics, Programming Fundamentals, System Programming',
        ru: 'Информатика, основы программирования, системное программирование'
      }
    },
    {
      id: 8,
      name: {
        am: 'Հակոբյան Մամիկոն',
        en: 'Hakobyan Mamikon',
        ru: 'Акопян Мамикон'
      },
      position: {
        am: 'Դասախոս',
        en: 'Lecturer',
        ru: 'Преподаватель'
      },
      degree: {
        am: 'Մագիստրոս',
        en: 'Master\'s Degree',
        ru: 'Магистр'
      },
      email: 'm.hakobyan@gsu.am',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      bio: {
        am: 'Մասնագիտանում է համակարգչային սխեմաների և միկրոպրոցեսորային համակարգերի ոլորտում:',
        en: 'Specializes in computer circuits and microprocessor systems.',
        ru: 'Специализируется в области компьютерных схем и микропроцессорных систем.'
      },
      specialization: {
        am: 'Համակարգչային մասնագիտացված սխեմաներ, Միկրոպրոցեսորային համակարգեր',
        en: 'Computer Specialized Circuits, Microprocessor Systems',
        ru: 'Специализированные компьютерные схемы, микропроцессорные системы'
      }
    },
    {
      id: 9,
      name: {
        am: 'Հովհաննիսյան Մարգար',
        en: 'Hovhannisyan Margar',
        ru: 'Оганнисян Маргар'
      },
      position: {
        am: 'Դասախոս',
        en: 'Lecturer',
        ru: 'Преподаватель'
      },
      degree: {
        am: 'Մագիստրոս',
        en: 'Master\'s Degree',
        ru: 'Магистр'
      },
      email: 'm.hovhannisyan@gsu.am',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      bio: {
        am: 'Մասնագիտանում է ցանցային համակարգերի և անվտանգության ոլորտում:',
        en: 'Specializes in network systems and security.',
        ru: 'Специализируется в области сетевых систем и безопасности.'
      },
      specialization: {
        am: 'Հաշվողական համակարգերի և ցանցեր սերվերներ, Ցանցային համակարգերի պաշտպանություն և անվտանգություն',
        en: 'Computing Systems and Network Servers, Network Systems Protection and Security',
        ru: 'Вычислительные системы и сетевые серверы, защита и безопасность сетевых систем'
      }
    },
    {
      id: 10,
      name: {
        am: 'Դարբինյան Ալբերտ',
        en: 'Darbinyan Albert',
        ru: 'Дарбинян Альберт'
      },
      position: {
        am: 'Դասախոս',
        en: 'Lecturer',
        ru: 'Преподаватель'
      },
      degree: {
        am: 'Մագիստրոս',
        en: 'Master\'s Degree',
        ru: 'Магистр'
      },
      email: 'a.darbinyan@gsu.am',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: {
        am: 'Մասնագիտանում է ավտոմատացված նախագծման և քվանտային ծրագրավորման ոլորտում:',
        en: 'Specializes in automated design and quantum programming.',
        ru: 'Специализируется в области автоматизированного проектирования и квантового программирования.'
      },
      specialization: {
        am: 'Ավտոմատացված նախագծման համակարգեր, Քվանտային ծրագրավորման համակարգեր',
        en: 'Automated Design Systems, Quantum Programming Systems',
        ru: 'Системы автоматизированного проектирования, системы квантового программирования'
      }
    },
    {
      id: 11,
      name: {
        am: 'Նավոյան Ռուստամ',
        en: 'Navoyan Rustam',
        ru: 'Навоян Рустам'
      },
      position: {
        am: 'Դասախոս',
        en: 'Lecturer',
        ru: 'Преподаватель'
      },
      degree: {
        am: 'Մագիստրոս',
        en: 'Master\'s Degree',
        ru: 'Магистр'
      },
      email: 'r.navoyan@gsu.am',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      bio: {
        am: 'Մասնագիտանում է առաջատար մոբայլ տեխնոլոգիաների ոլորտում:',
        en: 'Specializes in advanced mobile technologies.',
        ru: 'Специализируется в области передовых мобильных технологий.'
      },
      specialization: {
        am: 'Առաջատար մոբայլ տեխնոլոգիաներ',
        en: 'Advanced Mobile Technologies',
        ru: 'Передовые мобильные технологии'
      }
    },
    {
      id: 12,
      name: {
        am: 'Դաշտոյան Հ․',
        en: 'Dashtoyan H.',
        ru: 'Даштоян Г.'
      },
      position: {
        am: 'Դասախոս',
        en: 'Lecturer',
        ru: 'Преподаватель'
      },
      degree: {
        am: 'Մագիստրոս',
        en: 'Master\'s Degree',
        ru: 'Магистр'
      },
      email: 'h.dashtoyan@gsu.am',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      bio: {
        am: 'Մասնագիտանում է համակարգիչների սնուցման և ինտեգրալ սխեմաների ոլորտում:',
        en: 'Specializes in computer power supply and integrated circuits.',
        ru: 'Специализируется в области питания компьютеров и интегральных схем.'
      },
      specialization: {
        am: 'Համակարգիչների սնուցման երկրորդական աղբյուրների կազմակերպում, Բազային ինտեգրալ տրամաբանական սխեմաների նախագծում',
        en: 'Organization of Secondary Power Sources for Computers, Design of Basic Integrated Logic Circuits',
        ru: 'Организация вторичных источников питания для компьютеров, проектирование базовых интегральных логических схем'
      }
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t.staff.title}
          </h1>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'am'
              ? 'Մեր ամբիոնը բաղկացած է բարձր որակավորում ունեցող մասնագետներից, ովքեր ունեն հարուստ գիտական և դասավանդական փորձ:'
              : language === 'ru'
              ? 'Наша кафедра состоит из высококвалифицированных специалистов с богатым научным и педагогическим опытом.'
              : 'Our department consists of highly qualified specialists with rich scientific and teaching experience.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name[language]}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <User className="h-6 w-6 text-blue-800 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name[language]}
                  </h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                    <span>{member.position[language]}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <GraduationCap className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span>{member.degree[language]}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-blue-600">
                    <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                    <a href={`mailto:${member.email}`} className="hover:underline">
                      {member.email}
                    </a>
                  </div>
                  
                  {member.phone && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{member.phone}</span>
                    </div>
                  )}
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {language === 'am' ? 'Մասնագիտություն' : language === 'ru' ? 'Специализация' : 'Specialization'}
                  </h4>
                  <p className="text-sm text-blue-700 mb-3">
                    {member.specialization[language]}
                  </p>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio[language]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {language === 'am' ? 'Կապվեք մեր թիմի հետ' : language === 'ru' ? 'Свяжитесь с нашей командой' : 'Connect with Our Team'}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              {language === 'am'
                ? 'Մեր դասախոսները միշտ պատրաստ են օգնել և խորհրդատվություն տալ ուսանողներին և գիտական համագործակցության հարցերում:'
                : language === 'ru'
                ? 'Наши преподаватели всегда готовы помочь и проконсультировать студентов по вопросам научного сотрудничества.'
                : 'Our faculty members are always ready to help and provide advice to students and in matters of scientific cooperation.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white px-6 py-3 rounded-lg shadow-md">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">informatics@gsu.am</span>
              </div>
              <div className="flex items-center bg-white px-6 py-3 rounded-lg shadow-md">
                <Phone className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-700">+374 264 2-24-13</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}