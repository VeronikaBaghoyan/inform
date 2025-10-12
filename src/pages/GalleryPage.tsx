import { useState } from 'react';
import { Play, Image, Calendar, Users, Award, Building, X } from 'lucide-react';
import { translations } from '../utils/translations';

interface GalleryPageProps {
  language: 'am' | 'en';
}

interface MediaItem {
  id: number;
  title: { am: string; en: string };
  description: { am: string; en: string };
  url: string;
  thumbnailUrl: string;
  type: 'photo' | 'video';
  category: 'events' | 'academic' | 'campus' | 'conference';
  date: string;
}

export default function GalleryPage({ language }: GalleryPageProps) {
  const t = translations[language];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      title: { am: 'Նոր ուսումնական տարվա բացում', en: 'New Academic Year Opening' },
      description: { am: 'Սեպտեմբերի 1-ի հանդիսավոր արարողություն', en: 'September 1st ceremonial event' },
      url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      thumbnailUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      type: 'photo',
      category: 'events',
      date: '2024-09-01'
    },
    {
      id: 2,
      title: { am: 'Համակարգչային լաբորատորիա', en: 'Computer Laboratory' },
      description: { am: 'Նոր բացված ժամանակակից լաբորատորիա', en: 'Newly opened modern laboratory' },
      url: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
      thumbnailUrl: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
      type: 'photo',
      category: 'campus',
      date: '2024-08-15'
    },
    {
      id: 3,
      title: { am: 'Գիտական կոնֆերանս', en: 'Scientific Conference' },
      description: { am: 'Միջազգային գիտաժողով 2024', en: 'International Conference 2024' },
      url: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
      thumbnailUrl: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
      type: 'photo',
      category: 'conference',
      date: '2024-10-15'
    },
    {
      id: 4,
      title: { am: 'Ուսանողական պարապմունքներ', en: 'Student Classes' },
      description: { am: 'Ծրագրավորման դասընթացներ', en: 'Programming courses' },
      url: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg',
      thumbnailUrl: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg',
      type: 'photo',
      category: 'academic',
      date: '2024-09-15'
    },
    {
      id: 5,
      title: { am: 'Ֆիզիկայի լաբորատորիա', en: 'Physics Laboratory' },
      description: { am: 'Ֆիզիկական գործիքներ և սարքավորումներ', en: 'Physics equipment and instruments' },
      url: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg',
      thumbnailUrl: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg',
      type: 'photo',
      category: 'campus',
      date: '2024-08-20'
    },
    {
      id: 6,
      title: { am: 'Ուսանողական թիմային աշխատանք', en: 'Student Team Work' },
      description: { am: 'Նախագծային աշխատանքներ', en: 'Project work sessions' },
      url: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg',
      thumbnailUrl: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg',
      type: 'photo',
      category: 'academic',
      date: '2024-09-20'
    },
    {
      id: 7,
      title: { am: 'Գրադարան', en: 'Library' },
      description: { am: 'Ուսումնական գրականություն և ռեսուրսներ', en: 'Academic literature and resources' },
      url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
      thumbnailUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
      type: 'photo',
      category: 'campus',
      date: '2024-08-10'
    },
    {
      id: 8,
      title: { am: 'Մրցույթների ավարտ', en: 'Competition Awards' },
      description: { am: 'Ծրագրավորման մրցույթի հաղթողներ', en: 'Programming competition winners' },
      url: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
      thumbnailUrl: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg',
      type: 'photo',
      category: 'events',
      date: '2024-11-10'
    }
  ];

  const categories = [
    { value: 'all', label: { am: 'Բոլորը', en: 'All' }, icon: Image },
    { value: 'events', label: { am: 'Միջոցառումներ', en: 'Events' }, icon: Calendar },
    { value: 'academic', label: { am: 'Ակադեմիական կյանք', en: 'Academic Life' }, icon: Users },
    { value: 'campus', label: { am: 'Ամբիոն', en: 'Campus' }, icon: Building },
    { value: 'conference', label: { am: 'Կոնֆերանսներ', en: 'Conferences' }, icon: Award }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: MediaItem) => {
    setLightboxItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxItem(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t.gallery.title}
          </h1>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'am' 
              ? 'Գեղեցիկ պահերի և կարևոր միջոցառումների լուսանկարային և տեսա հավաքածու:'
              : 'A photographic and video collection of beautiful moments and important events.'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`flex items-center px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
                  selectedCategory === category.value
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 shadow-md'
                }`}
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.label[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Statistics */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <Image className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">200+</div>
              <div className="text-gray-600">{language === 'am' ? 'Լուսանկարներ' : 'Photos'}</div>
            </div>
            <div>
              <Play className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">25+</div>
              <div className="text-gray-600">{language === 'am' ? 'Տեսանյութեր' : 'Videos'}</div>
            </div>
            <div>
              <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">{language === 'am' ? 'Միջոցառումներ' : 'Events'}</div>
            </div>
            <div>
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">10+</div>
              <div className="text-gray-600">{language === 'am' ? 'Մրցանակներ' : 'Awards'}</div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(item)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={item.thumbnailUrl}
                  alt={item.title[language]}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {item.type === 'video' && (
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                      {item.title[language]}
                    </h3>
                    <p className="text-gray-200 text-xs line-clamp-1">
                      {item.description[language]}
                    </p>
                  </div>
                </div>

                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.type === 'video' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                  }`}>
                    {item.type === 'video' ? 
                      (language === 'am' ? 'Տեսանյութ' : 'Video') : 
                      (language === 'am' ? 'Լուսանկար' : 'Photo')
                    }
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🖼️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {language === 'am' ? 'Նյութ չգտնվեց' : 'No media found'}
            </h3>
            <p className="text-gray-600">
              {language === 'am' 
                ? 'Ընտրեք այլ կատեգորիա:'
                : 'Try selecting a different category.'}
            </p>
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              <img
                src={lightboxItem.url}
                alt={lightboxItem.title[language]}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold mb-2">
                  {lightboxItem.title[language]}
                </h3>
                <p className="text-gray-200 mb-2">
                  {lightboxItem.description[language]}
                </p>
                <div className="flex items-center text-sm text-gray-300">
                  <Calendar className="h-4 w-4 mr-1" />
                  {lightboxItem.date}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}