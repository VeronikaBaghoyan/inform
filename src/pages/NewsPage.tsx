import { Calendar, Tag, User, ArrowRight, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { translations } from '../utils/translations';

interface NewsPageProps {
  language: 'am' | 'en' | 'ru';
}

interface NewsItem {
  id: number;
  title: { am: string; en: string };
  content: { am: string; en: string };
  excerpt: { am: string; en: string };
  date: string;
  author: { am: string; en: string };
  category: { am: string; en: string };
  image: string;
  featured: boolean;
}

export default function NewsPage({ language }: NewsPageProps) {
  const t = translations[language];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: {
        am: 'Նոր ուսումնական տարվա բացման արարողություն',
        en: 'Opening Ceremony of the New Academic Year'
      },
      content: {
        am: 'Սեպտեմբերի 1-ին Գավառի պետական համալսարանում տեղի ունեցավ նոր ուսումնական տարվա բացման հանդիսավոր արարողությունը: Ինֆորմատիկայի և ֆիզիկամաթեմատիկական գիտությունների ամբիոնում այս տարի ընդունվել է 45 նոր ուսանող: Ամբիոնի վարիչ դր. Արամ Գալստյանը ողջունեց նորեկ ուսանողներին և ներկայացրեց ամբիոնի ծրագրերը և հնարավորությունները:',
        en: 'The solemn opening ceremony of the new academic year took place at Gavar State University on September 1st. The Department of Informatics and Physical-Mathematical Sciences admitted 45 new students this year. Department Head Dr. Aram Galstyan welcomed the new students and presented the department\'s programs and opportunities.'
      },
      excerpt: {
        am: 'Սեպտեմբերի 1-ին տեղի ունեցավ նոր ուսումնական տարվա բացման հանդիսավոր արարողությունը:',
        en: 'The solemn opening ceremony of the new academic year took place on September 1st.'
      },
      date: '2024-09-01',
      author: { am: 'Ամբիոնի վարչություն', en: 'Department Administration' },
      category: { am: 'Միջոցառումներ', en: 'Events' },
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      featured: true
    },
    {
      id: 2,
      title: {
        am: 'Միջազգային գիտաժողովի կազմակերպում',
        en: 'Organization of International Scientific Conference'
      },
      content: {
        am: 'Հոկտեմբերի 15-16-ին մեր ամբիոնը կազմակերպում է "Ժամանակակից տեխնոլոգիաները կրթության մեջ" միջազգային գիտաժողովը: Կոնֆերանսին կմասնակցեն Հայաստանի, Ռուսաստանի, Վրաստանի և այլ երկրների հետազոտողներ: Գիտաժողովի հիմնական թեմաները կլինեն արհեստական բանականությունը, մեքենական ուսուցումը և դիգիտալ կրթական տեխնոլոգիաները:',
        en: 'On October 15-16, our department is organizing the international scientific conference "Modern Technologies in Education". Researchers from Armenia, Russia, Georgia, and other countries will participate in the conference. The main topics of the conference will be artificial intelligence, machine learning, and digital educational technologies.'
      },
      excerpt: {
        am: 'Հոկտեմբերի 15-16-ին կանցկացվի "Ժամանակակից տեխնոլոգիաները կրթության մեջ" միջազգային գիտաժողովը:',
        en: 'The international conference "Modern Technologies in Education" will be held on October 15-16.'
      },
      date: '2024-08-20',
      author: { am: 'Դր. Արամ Գալստյան', en: 'Dr. Aram Galstyan' },
      category: { am: 'Կոնֆերանսներ', en: 'Conferences' },
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
      featured: true
    },
    {
      id: 3,
      title: {
        am: 'Նոր համակարգչային լաբորատորիայի բացում',
        en: 'Opening of New Computer Laboratory'
      },
      content: {
        am: 'Ամբիոնում բացվել է նոր ժամանակակից համակարգչային լաբորատորիա, որը հագեցած է վերջին սերնդի սարքավորումներով: Լաբորատորիան ծառայելու է ծրագրավորման, մեքենական ուսուցման և արհեստական բանականության կուրսերի իրականացմանը: Լաբորատորիայում տեղակայված են 30 բարձր արդյունավետությամբ համակարգիչներ և հատուկ սոֆթվեր:',
        en: 'A new modern computer laboratory has been opened at the department, equipped with the latest generation equipment. The laboratory will serve for conducting programming, machine learning, and artificial intelligence courses. The laboratory is equipped with 30 high-performance computers and specialized software.'
      },
      excerpt: {
        am: 'Ամբիոնում բացվել է նոր ժամանակակից համակարգչային լաբորատորիա:',
        en: 'A new modern computer laboratory has been opened at the department.'
      },
      date: '2024-08-15',
      author: { am: 'Անի Մարտիրոսյան', en: 'Ani Martirosyan' },
      category: { am: 'Հայտարարություններ', en: 'Announcements' },
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
      featured: false
    },
    {
      id: 4,
      title: {
        am: 'Ուսանողական ծրագրավորման մրցույթ',
        en: 'Student Programming Competition'
      },
      content: {
        am: 'Նոյեմբերի 10-ին կանցկացվի ամենամյա ուսանողական ծրագրավորման մրցույթը: Մրցույթը բաց է բոլոր ուսանողների համար և ներառում է ալգորիթմական խնդիրների լուծում, վեբ ծրագրավորում և մոբայլ հավելվածների մշakում: Հաղթողները կստանան փոխանցիկ գավաթ և արժեքավոr նվերներ:',
        en: 'The annual student programming competition will be held on November 10th. The competition is open to all students and includes solving algorithmic problems, web programming, and mobile app development. Winners will receive a trophy and valuable prizes.'
      },
      excerpt: {
        am: 'Նոյեմբերի 10-ին կանցկացվի ամենամյա ուսանողական ծրագրավորման մրցույթը:',
        en: 'The annual student programming competition will be held on November 10th.'
      },
      date: '2024-08-10',
      author: { am: 'Դավիթ Սարգսյան', en: 'David Sargsyan' },
      category: { am: 'Ուսանողական կյանք', en: 'Student Life' },
      image: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg',
      featured: false
    },
    {
      id: 5,
      title: {
        am: 'Նոր գիտական հրատարակություններ',
        en: 'New Scientific Publications'
      },
      content: {
        am: 'Ամբիոնի դասախոսները հրատարակել են մի շարք նոր գիտական աշխատություններ: Դր. Մարիամ Հակոբյանի "Մաթեմատիկական վերլուծության ժամանակակից մեթոդները" գիրքը հրատարակվել է միջազգային հրատարակչության կողմից: Դր. Տիգրան Ավանեսյանի հետազոտությունը քվանտային մեխանիկայի ոլորտից ստացել է բարձր գնահատական:',
        en: 'Department faculty have published a series of new scientific works. Dr. Mariam Hakobyan\'s book "Modern Methods of Mathematical Analysis" has been published by an international publisher. Dr. Tigran Avanesyan\'s research in quantum mechanics has received high praise.'
      },
      excerpt: {
        am: 'Ամբիոնի դասախոսները հրատարակել են մի շարք նոր գիտական աշխատություններ:',
        en: 'Department faculty have published a series of new scientific works.'
      },
      date: '2024-08-05',
      author: { am: 'Գիտական մասնակի', en: 'Scientific Committee' },
      category: { am: 'Գիտական գործունեություն', en: 'Research' },
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
      featured: false
    },
    {
      id: 6,
      title: {
        am: 'Ընդունելության արդյունքներ 2024',
        en: 'Admission Results 2024'
      },
      content: {
        am: '2024 թվականի ընդունելության արդյունքները ցույց են տալիս բարձր մրցակցություն: Ինֆորմատիկայի մասնագիտությամբ ընդունված ուսանողների միջին գնահատականը կազմել է 18.5 միավոր: Ֆիզիկայի մասնագիտությամբ՝ 17.8 միավոր: Ընդհանուր առմամբ, բոլոր մասնագիտություններով ընդունվել է 45 ուսանող:',
        en: 'The 2024 admission results show high competition. The average score of students admitted to the Informatics program was 18.5 points. For the Physics program - 17.8 points. In total, 45 students were admitted to all specializations.'
      },
      excerpt: {
        am: '2024 թվականի ընդունելության արդյունքները ցույց են տալիս բարձր մրցակցություն:',
        en: 'The 2024 admission results show high competition.'
      },
      date: '2024-07-30',
      author: { am: 'Ընդունելության հանձնաժողով', en: 'Admission Committee' },
      category: { am: 'Հայտարարություններ', en: 'Announcements' },
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg',
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: { am: 'Բոլորը', en: 'All' } },
    { value: 'events', label: { am: 'Միջոցառումներ', en: 'Events' } },
    { value: 'conferences', label: { am: 'Կոնֆերանսներ', en: 'Conferences' } },
    { value: 'announcements', label: { am: 'Հայտարարություններ', en: 'Announcements' } },
    { value: 'student-life', label: { am: 'Ուսանողական կյանք', en: 'Student Life' } },
    { value: 'research', label: { am: 'Գիտական գործունեություն', en: 'Research' } }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || 
      item.category.en.toLowerCase().replace(' ', '-') === selectedCategory;
    
    const matchesSearch = searchQuery === '' || 
      item.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content[language].toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsItems.filter(item => item.featured);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t.news.title}
          </h1>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'am' 
              ? 'Հետևեք մեր ամբիոնի վերջին նորություններին, միջոցառումներին և հայտարարություններին:'
              : 'Follow the latest news, events, and announcements from our department.'}
          </p>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Tag className="h-6 w-6 text-yellow-600 mr-2" />
              {language === 'am' ? 'Ընտրված նորություններ' : 'Featured News'}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                  <img
                    src={item.image}
                    alt={item.title[language]}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {item.category[language]}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title[language]}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.excerpt[language]}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {item.author[language]}
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors">
                        {t.news.readMore}
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={language === 'am' ? 'Որոնել նորությունները...' : 'Search news...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label[language]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* All News */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={item.image}
                alt={item.title[language]}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                    {item.category[language]}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {item.date}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title[language]}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.excerpt[language]}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <User className="h-3 w-3 mr-1" />
                    {item.author[language]}
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center transition-colors">
                    {t.news.readMore}
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📰</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {language === 'am' ? 'Նորություններ չգտնվեցին' : 'No news found'}
            </h3>
            <p className="text-gray-600">
              {language === 'am' 
                ? 'Փորձեք փոխել որոնման պարամետրերը:'
                : 'Try changing your search parameters.'}
            </p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'am' ? 'Բաժանորդագրվեք մեր նորություններին' : 'Subscribe to Our Newsletter'}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {language === 'am' 
              ? 'Ստացեք վերջին նորությունները և հայտարարությունները ուղիղ ձեր էլ-փոստի հասցեին:'
              : 'Get the latest news and announcements delivered directly to your email.'}
          </p>
          <div className="flex justify-center">
            <div className="flex max-w-md w-full">
              <input
                type="email"
                placeholder={language === 'am' ? 'Ձեր էլ-փոստի հասցեն' : 'Your email address'}
                className="flex-1 px-4 py-3 text-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-blue-800 font-bold rounded-r-lg transition-colors">
                {language === 'am' ? 'Բաժանորդագրվել' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}