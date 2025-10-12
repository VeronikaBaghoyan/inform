import { Mail, Phone, MapPin, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from '../utils/translations';

interface FooterProps {
  language: 'am' | 'en';
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <p className="text-sm">
                  {language === 'am' 
                    ? 'Ազատության փողոց, Գավառ, Հայաստան' 
                    : 'Azatutyan Street, Gavar, Armenia'}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <div className="text-sm">
                  <p>+37460461250</p>
                  <p>+37477701656</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <p className="text-sm">info@gsu.am</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm hover:text-yellow-400 transition-colors">
                {t.nav.about}
              </Link>
              <Link to="/staff" className="block text-sm hover:text-yellow-400 transition-colors">
                {t.nav.staff}
              </Link>
              <Link to="/programs" className="block text-sm hover:text-yellow-400 transition-colors">
                {t.nav.programs}
              </Link>
              <Link to="/research" className="block text-sm hover:text-yellow-400 transition-colors">
                {t.nav.research}
              </Link>
              <Link to="/news" className="block text-sm hover:text-yellow-400 transition-colors">
                {t.nav.news}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.followUs}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">{t.footer.newsletter}</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder={language === 'am' ? 'Ձեր էլ․ փոստը' : 'Your email'}
                  className="flex-1 px-3 py-2 text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 rounded-r-md transition-colors font-medium text-blue-800">
                  {language === 'am' ? 'Բաժանորդագրվել' : 'Subscribe'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-sm text-blue-200">
            © 2025 {language === 'am' ? 'Գավառի պետական համալսարան' : 'Gavar State University'}. {language === 'am' ? 'Բոլոր իրավունքները պաշտպանված են։' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}