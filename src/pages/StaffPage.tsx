import { Mail, Phone, User, GraduationCap, Award } from 'lucide-react';
import { translations } from '../utils/translations';

interface StaffPageProps {
  language: 'am' | 'en';
}

interface StaffMember {
  id: number;
  name: { am: string; en: string };
  position: { am: string; en: string };
  degree: { am: string; en: string };
  email: string;
  phone?: string;
  image: string;
  bio: { am: string; en: string };
  specialization: { am: string; en: string };
}

export default function StaffPage({ language }: StaffPageProps) {
  const t = translations[language];

  const staffMembers: StaffMember[] = [
    {
      id: 1,
      name: { 
        am: 'Վարազդատ Ավետիսյան', 
        en: 'Varazdat Avetisyan' 
      },
      position: { 
        am: 'Ամբիոնի վարիչ', 
        en: 'Department Head' 
      },
      degree: { 
        am: 'Տեխնիկական գիտությունների թեկնածու', 
        en: 'Candidate of Technical Sciences' 
      },
      email: 'avetvarazdat@gmail.com',
      phone: '+374 77701656',
      image: '+374 77701656',
      bio: {
        am: 'Ունի 12 տարվա դասավանդման փորձ ինֆորմատիկայի և համակարգչային գիտությունների ոլորտում:',
        en: 'He has 12 years of teaching experience in the field of informatics and computer science.'
      },
      specialization: {
        am: 'Տվյալների հենքեր, Արհեստական բանականություն և մեքենական ուսուցում, Արհեստական բանականության համակարգեր, Նեյրոնային ցանցեր',
        en: 'Databases, Artificial Intelligence and Machine Learning, Artificial Intelligence Systems, Neural Networks'
      }
    },
    {
      id: 2,
      name: { 
        am: 'Դր. Մարիամ Հակոբյան', 
        en: 'Dr. Mariam Hakobyan' 
      },
      position: { 
        am: 'Պրոֆեսոր', 
        en: 'Professor' 
      },
      degree: { 
        am: 'Ֆիզիկամաթեմատիկական գիտությունների դոկտոր', 
        en: 'Doctor of Physical and Mathematical Sciences' 
      },
      email: 'm.hakobyan@gsu.am',
      phone: '+374 264 2-25-14',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      bio: {
        am: 'Մասնագիտանում է մաթեմատիկական վերլուծության և դիֆերենցիալ հավասարումների ոլորտում: Հեղինակ է 50+ գիտական աշխատությունների:',
        en: 'Specializes in mathematical analysis and differential equations. Author of 50+ scientific publications.'
      },
      specialization: {
        am: 'Մաթեմատիկական վերլուծություն, դիֆերենցիալ հավասարումներ',
        en: 'Mathematical Analysis, Differential Equations'
      }
    },
    {
      id: 3,
      name: { 
        am: 'Դր. Տիգրան Ավանեսյան', 
        en: 'Dr. Tigran Avanesyan' 
      },
      position: { 
        am: 'Դոցենտ', 
        en: 'Associate Professor' 
      },
      degree: { 
        am: 'Ֆիզիկամաթեմատիկական գիտությունների թեկնածու', 
        en: 'Candidate of Physical and Mathematical Sciences' 
      },
      email: 't.avanesyan@gsu.am',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: {
        am: 'Զբաղվում է տեսական ֆիզիկայի և քվանտային մեխանիկայի հետազոտություններով: Մասնակցում է միջազգային գիտական նախագծերի:',
        en: 'Conducts research in theoretical physics and quantum mechanics. Participates in international scientific projects.'
      },
      specialization: {
        am: 'Տեսական ֆիզիկա, քվանտային մեխանիկա',
        en: 'Theoretical Physics, Quantum Mechanics'
      }
    },
    {
      id: 4,
      name: { 
        am: 'Անի Մարտիրոսյան', 
        en: 'Ani Martirosyan' 
      },
      position: { 
        am: 'Ավագ դասախոս', 
        en: 'Senior Lecturer' 
      },
      degree: { 
        am: 'Տեխնիկական գիտությունների թեկնածու', 
        en: 'Candidate of Technical Sciences' 
      },
      email: 'a.martirosyan@gsu.am',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      bio: {
        am: 'Մասնագիտանում է վեբ տեխնոլոգիաների և տվյալների բազաների ոլորտում: Ղեկավարում է ուսանողական ծրագրավորման ակումբը:',
        en: 'Specializes in web technologies and databases. Leads the student programming club.'
      },
      specialization: {
        am: 'Վեբ տեխնոլոգիաներ, տվյալների բազաներ',
        en: 'Web Technologies, Databases'
      }
    },
    {
      id: 5,
      name: { 
        am: 'Դավիթ Սարգսյան', 
        en: 'David Sargsyan' 
      },
      position: { 
        am: 'Դասախոս', 
        en: 'Lecturer' 
      },
      degree: { 
        am: 'Մագիստրոս', 
        en: 'Master\'s Degree' 
      },
      email: 'd.sargsyan@gsu.am',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      bio: {
        am: 'Երիտասարդ մասնագետ, ով մասնագիտանում է ծրագրավորման լեզուների և ալգորիթմների ոլորտում: Ակտիվ մասնակից է տեխնոլոգիական կոնֆերանսների:',
        en: 'Young specialist specializing in programming languages and algorithms. Active participant in tech conferences.'
      },
      specialization: {
        am: 'Ծրագրավորման լեզուներ, ալգորիթմներ',
        en: 'Programming Languages, Algorithms'
      }
    },
    {
      id: 6,
      name: { 
        am: 'Դր. Նանե Պետրոսյան', 
        en: 'Dr. Nane Petrosyan' 
      },
      position: { 
        am: 'Պրոֆեսոր', 
        en: 'Professor' 
      },
      degree: { 
        am: 'Ֆիզիկամաթեմատիկական գիտությունների դոկտոր', 
        en: 'Doctor of Physical and Mathematical Sciences' 
      },
      email: 'n.petrosyan@gsu.am',
      phone: '+374 264 2-26-15',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      bio: {
        am: 'Հանրապետության մեջ ճանաչված մասնագետ գծային ալգեբրայի և հندկական մոդելավորման ոլորտում: Հեղինակ է բազմաթիվ դասագրքերի:',
        en: 'Recognized specialist in linear algebra and geometric modeling. Author of multiple textbooks.'
      },
      specialization: {
        am: 'Գծային ալգեբրա, հندկական մոդելավորում',
        en: 'Linear Algebra, Geometric Modeling'
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
                    {language === 'am' ? 'Մասնագիտություն' : 'Specialization'}
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
              {language === 'am' ? 'Կապվեք մեր թիմի հետ' : 'Connect with Our Team'}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              {language === 'am' 
                ? 'Մեր դասախոսները միշտ պատրաստ են օգնել և խորհրդատվություն տալ ուսանողներին և գիտական համագործակցության հարցերում:'
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