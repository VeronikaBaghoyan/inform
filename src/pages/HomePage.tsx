import { ArrowRight, Users, BookOpen, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from '../utils/translations';

interface HomePageProps {
  language: 'am' | 'en';
}

export default function HomePage({ language }: HomePageProps) {
  const t = translations[language];

  const newsItems = [
    {
      id: 1,
      title: language === 'am' 
        ? 'Նոր ուսումնական տարվա բացում' 
        : 'New Academic Year Opening',
      excerpt: language === 'am' 
        ? 'Սեպտեմբերի 1-ին կգործի նոր ուսումնական տարվա բացման հանդեսը:' 
        : 'The opening ceremony of the new academic year will take place on September 1st.',
      date: '2024-08-25',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    },
    {
      id: 2,
      title: language === 'am' 
        ? 'Գիտական կոնֆերանս' 
        : 'Scientific Conference',
      excerpt: language === 'am' 
        ? 'Հոկտեմբերի 15-ին կանցկացվի միջազգային գիտական կոնֆերանս:' 
        : 'International scientific conference will be held on October 15th.',
      date: '2024-08-20',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
    },
    {
      id: 3,
      title: language === 'am' 
        ? 'Նոր լաբորատորիայի բացում' 
        : 'New Laboratory Opening',
      excerpt: language === 'am' 
        ? 'Ամբիոնում բացվել է նոր ժամանակակից համակարգչային լաբորատորիա:' 
        : 'A new modern computer laboratory has been opened at the department.',
      date: '2024-08-15',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    },
  ];

  const quickLinks = [
    {
      title: t.home.quickLinks.admissions,
      href: '/programs',
      icon: BookOpen,
    },
    {
      title: t.home.quickLinks.schedule,
      href: '/students',
      icon: Calendar,
    },
    {
      title: t.home.quickLinks.library,
      href: '/students',
      icon: BookOpen,
    },
    {
      title: t.home.quickLinks.portal,
      href: '/students',
      icon: Users,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t.home.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              {t.home.hero.subtitle}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-800 font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              {t.home.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t.home.about.title}
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {t.home.about.description}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-800 hover:text-blue-600 font-semibold transition-colors"
              >
                {language === 'am' ? 'Իմանալ ավելին' : 'Learn More'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Users className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-800 mb-2">15+</div>
                <div className="text-gray-600">
                  {language === 'am' ? 'Դասախոսներ' : 'Faculty Members'}
                </div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg text-center">
                <BookOpen className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-yellow-600 mb-2">3</div>
                <div className="text-gray-600">
                  {language === 'am' ? 'Կրթական ծրագրեր' : 'Educational Programs'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {t.home.news.title}
            </h2>
            <Link
              to="/news"
              className="text-blue-800 hover:text-blue-600 font-semibold transition-colors flex items-center"
            >
              {t.home.news.viewAll}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <Link
                    to="/news"
                    className="text-blue-800 hover:text-blue-600 font-medium transition-colors flex items-center"
                  >
                    {language === 'am' ? 'Կարդալ ավելին' : 'Read More'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t.home.quickLinks.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <link.icon className="h-12 w-12 text-blue-800 mb-4 group-hover:text-blue-600 transition-colors" />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                  {link.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}