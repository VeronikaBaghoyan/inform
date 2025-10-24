import { BookOpen, Calendar, Download, ExternalLink, Users, Award, FileText, Laptop } from 'lucide-react';
import { translations } from '../utils/translations';

interface StudentsPageProps {
  language: 'am' | 'en' | 'ru';
}

interface Resource {
  id: number;
  title: { am: string; en: string };
  description: { am: string; en: string };
  url?: string;
  downloadUrl?: string;
  category: 'document' | 'link' | 'software';
  icon: any;
}

export default function StudentsPage({ language }: StudentsPageProps) {
  const t = translations[language];

  const documents: Resource[] = [
    {
      id: 1,
      title: { am: 'Ուսանողական ուղեցույց', en: 'Student Handbook' },
      description: { 
        am: 'Ամբիոնի ուսանողների համար ամբողջական ուղեցույց',
        en: 'Complete guide for department students'
      },
      downloadUrl: '/documents/student-handbook.pdf',
      category: 'document',
      icon: BookOpen
    },
    {
      id: 2,
      title: { am: 'Ամբիոնի կանոնադրություն', en: 'Department Regulations' },
      description: { 
        am: 'Ուսանողական կյանքի կանոնակարգ',
        en: 'Student life regulations'
      },
      downloadUrl: '/documents/regulations.pdf',
      category: 'document',
      icon: FileText
    },
    {
      id: 3,
      title: { am: 'Դիմումի ձևակերպեր', en: 'Application Forms' },
      description: { 
        am: 'Տարբեր դիմումների և հայտերի նմուշներ',
        en: 'Various application and request samples'
      },
      downloadUrl: '/documents/forms.zip',
      category: 'document',
      icon: FileText
    }
  ];

  const resources: Resource[] = [
    {
      id: 1,
      title: { am: 'Էլեկտրոնային գրադարան', en: 'Digital Library' },
      description: {
        am: 'Մասնագիտական գրականության և մենագրություների հավաքածու',
        en: 'Collection of professional literature and monographs'
      },
      url: 'https://library.gsu.am',
      category: 'link',
      icon: BookOpen
    }
  ];

  const supportServices = [
    {
      title: { am: 'Ակադեմիական խորհրդատվություն', en: 'Academic Advising' },
      description: { 
        am: 'Առարկաների ընտրություն և կարիերայի պլանավորում',
        en: 'Course selection and career planning'
      },
      contact: 'academic@gsu.am',
      icon: Award,
      color: 'blue'
    },
    {
      title: { am: 'Տեխնիկական աջակցություն', en: 'Technical Support' },
      description: { 
        am: 'Համակարգչային և ծրագրային խնդիրների լուծում',
        en: 'Computer and software problem solving'
      },
      contact: 'tech-support@gsu.am',
      icon: Laptop,
      color: 'green'
    },
    {
      title: { am: 'Կարիերայի ծառայություններ', en: 'Career Services' },
      description: { 
        am: 'Աշխատանքի որոնում և մաքս���ոնալ զարգացում',
        en: 'Job search and professional development'
      },
      contact: 'career@gsu.am',
      icon: Users,
      color: 'purple'
    }
  ];

  const announcements = [
    {
      id: 1,
      title: {
        am: 'Առցանց գրանցման ժամանակացույց',
        en: 'Online Registration Schedule'
      },
      date: '2024-08-25',
      urgent: true
    },
    {
      id: 2,
      title: {
        am: 'Նոր ուսումնական տարվա կանոնակարգ',
        en: 'New Academic Year Regulations'
      },
      date: '2024-08-20',
      urgent: false
    },
    {
      id: 3,
      title: {
        am: 'Կրթաթոշակի դիմումների ժամկետ',
        en: 'Scholarship Application Deadline'
      },
      date: '2024-08-15',
      urgent: true
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t.students.title}
          </h1>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'am' 
              ? 'Ուսանողների համար պիտանի բոլոր ռեսուրսները, ծառայությունները և տեղեկատվությունը մեկ տեղում:'
              : 'All necessary resources, services, and information for students in one place.'}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Users className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold">250+</div>
              <div className="text-blue-200">{language === 'am' ? 'Ակտիվ ուսանողներ' : 'Active Students'}</div>
            </div>
            <div>
              <BookOpen className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold">40+</div>
              <div className="text-blue-200">{language === 'am' ? 'Առարկաներ' : 'Courses'}</div>
            </div>
            <div>
              <Calendar className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-200">{language === 'am' ? 'Օնլայն աջակցություն' : 'Online Support'}</div>
            </div>
          </div>
        </div>

        {/* Important Announcements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Calendar className="h-8 w-8 text-red-600 mr-3" />
            {language === 'am' ? 'Կարևոր հայտարարություններ' : 'Important Announcements'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements.map((announcement) => (
              <div key={announcement.id} className={`rounded-lg p-6 border-l-4 ${
                announcement.urgent 
                  ? 'bg-red-50 border-red-500' 
                  : 'bg-blue-50 border-blue-500'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    announcement.urgent
                      ? 'bg-red-100 text-red-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {announcement.urgent 
                      ? (language === 'am' ? 'Շտապ' : 'Urgent')
                      : (language === 'am' ? 'Տեղեկատվություն' : 'Info')}
                  </span>
                  <span className="text-sm text-gray-600">{announcement.date}</span>
                </div>
                <h3 className="font-semibold text-gray-900">
                  {announcement.title[language]}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Documents Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                {t.students.documents.title}
              </h2>
              <div className="space-y-4">
                {documents.map((doc) => (
                  <div key={doc.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <doc.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {doc.title[language]}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {doc.description[language]}
                          </p>
                        </div>
                      </div>
                      <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        <Download className="h-4 w-4 mr-1" />
                        {language === 'am' ? 'Ներբեռնել' : 'Download'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Laptop className="h-8 w-8 text-green-600 mr-3" />
                {t.students.resources.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource) => (
                  <div key={resource.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg mr-4 ${
                        resource.category === 'link' ? 'bg-green-100' :
                        resource.category === 'software' ? 'bg-purple-100' : 'bg-blue-100'
                      }`}>
                        <resource.icon className={`h-6 w-6 ${
                          resource.category === 'link' ? 'text-green-600' :
                          resource.category === 'software' ? 'text-purple-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {resource.title[language]}
                        </h3>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                    <p className="text-gray-600 mb-4">
                      {resource.description[language]}
                    </p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-2 px-4 rounded-lg font-medium transition-colors text-center ${
                        resource.category === 'link' ? 'bg-green-600 hover:bg-green-700 text-white' :
                        resource.category === 'software' ? 'bg-purple-600 hover:bg-purple-700 text-white' :
                        'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}>
                      {language === 'am' ? 'Անցնել' : 'Access'}
                    </a>
                  </div>
                ))}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg mr-4 bg-blue-100">
                      <Laptop className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {language === 'am' ? 'Ուսումնական հարթակ' : 'Learning Platform'}
                      </h3>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>
                  <p className="text-gray-600 mb-4">
                    {language === 'am'
                      ? 'Առցանց դասընթացներ և ուսումնական նյութեր'
                      : 'Online courses and learning materials'}
                  </p>
                  <a
                    href="http://learn.gsu.am/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2 px-4 rounded-lg font-medium transition-colors text-center bg-blue-600 hover:bg-blue-700 text-white">
                    {language === 'am' ? 'Անցնել' : 'Access'}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Support Services Sidebar */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 text-purple-600 mr-2" />
              {t.students.support.title}
            </h2>
            <div className="space-y-6">
              {supportServices.map((service, index) => (
                <div key={index} className={`bg-${service.color}-50 rounded-lg p-6 border-l-4 border-${service.color}-500`}>
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 bg-${service.color}-100 rounded-lg`}>
                      <service.icon className={`h-6 w-6 text-${service.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {service.title[language]}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {service.description[language]}
                      </p>
                      <a
                        href={`mailto:${service.contact}`}
                        className={`text-${service.color}-600 hover:text-${service.color}-800 text-sm font-medium transition-colors`}
                      >
                        {service.contact}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Study Tips */}
            <div className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 text-yellow-600 mr-2" />
                {language === 'am' ? 'Ուսումնական խորհուրդներ' : 'Study Tips'}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {language === 'am' 
                    ? 'Օրական պլանավորեք ուսումնական ժամանակը'
                    : 'Plan your study time daily'}
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {language === 'am' 
                    ? 'Մասնակցեք խմբային պարապմունքներին'
                    : 'Participate in group study sessions'}
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {language === 'am' 
                    ? 'Օգտագործեք գրադարանի ռեսուրսները'
                    : 'Use library resources'}
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {language === 'am' 
                    ? 'Մի հետաձգեք նրաագծային աշխատանքները'
                    : 'Don\'t postpone project work'}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-800 to-purple-800 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'am' ? 'Օգնություն է պետք?' : 'Need Help?'}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {language === 'am' 
              ? 'Մեր թիմը միշտ պատրաստ է օգնել ձեզ ուսումնական և կառավարական հարցերում:'
              : 'Our team is always ready to help you with academic and administrative matters.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-800 px-6 py-3 rounded-lg font-bold transition-colors inline-block">
              {language === 'am' ? 'Կապվել մեզ հետ' : 'Contact Us'}
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 rounded-lg font-bold transition-colors">
              {language === 'am' ? 'FAQ' : 'FAQ'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}