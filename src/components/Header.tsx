import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Settings, GraduationCap } from 'lucide-react';
import { translations } from '../utils/translations';

interface HeaderProps {
  language: 'am' | 'en' | 'ru';
  setLanguage: (lang: 'am' | 'en' | 'ru') => void;
  setShowAdmin: (show: boolean) => void;
}

export default function Header({ language, setLanguage, setShowAdmin }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const t = translations[language];

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.staff, href: '/staff' },
    { name: t.nav.programs, href: '/programs' },
    { name: t.nav.research, href: '/research' },
    { name: t.nav.news, href: '/news' },
    { name: t.nav.gallery, href: '/gallery' },
    { name: t.nav.students, href: '/students' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <GraduationCap className="h-10 w-10 text-blue-800" />
              <div>
                <h1 className="text-xl font-bold text-blue-800 leading-tight">
                  {language === 'am' ? 'Գավառի պետական համալսարան' : 'Gavar State University'}
                </h1>
                <p className="text-sm text-gray-600">
                  {language === 'am'
                    ? 'Ինֆորմատիկայի և ֆիզիկամաթեմատիկական գիտությունների ամբիոն'
                    : 'Department of Informatics and Physical-Mathematical Sciences'}
                </p>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('am')}
                className={`px-2 py-1 text-sm rounded ${language === 'am' ? 'bg-blue-800 text-white' : 'text-gray-600 hover:text-blue-800'}`}
              >
                ՀԱՅ
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm rounded ${language === 'en' ? 'bg-blue-800 text-white' : 'text-gray-600 hover:text-blue-800'}`}
              >
                ENG
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 text-sm rounded ${language === 'ru' ? 'bg-blue-800 text-white' : 'text-gray-600 hover:text-blue-800'}`}
              >
                РУС
              </button>
            </div>
            <button
              onClick={() => setShowAdmin(true)}
              className="p-2 text-gray-400 hover:text-blue-800 transition-colors"
              title="Admin Panel"
            >
              <Settings className="h-5 w-5" />
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <nav className="hidden lg:flex space-x-8 pb-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors relative group ${
                location.pathname === item.href
                  ? 'text-blue-800'
                  : 'text-gray-600 hover:text-blue-800'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full ${
                location.pathname === item.href ? 'w-full' : ''
              }`} />
            </Link>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('am')}
                className={`px-3 py-1 text-sm rounded ${language === 'am' ? 'bg-blue-800 text-white' : 'text-gray-600 hover:text-blue-800'}`}
              >
                ՀԱՅ
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded ${language === 'en' ? 'bg-blue-800 text-white' : 'text-gray-600 hover:text-blue-800'}`}
              >
                ENG
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 text-sm rounded ${language === 'ru' ? 'bg-blue-800 text-white' : 'text-gray-600 hover:text-blue-800'}`}
              >
                РУС
              </button>
              <button
                onClick={() => setShowAdmin(true)}
                className="p-2 text-gray-400 hover:text-blue-800 transition-colors"
                title="Admin Panel"
              >
                <Settings className="h-5 w-5" />
              </button>
            </div>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.href
                      ? 'bg-blue-50 text-blue-800'
                      : 'text-gray-600 hover:text-blue-800 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}