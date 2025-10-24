import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { translations } from '../utils/translations';

interface ContactPageProps {
  language: 'am' | 'en' | 'ru';
}

export default function ContactPage({ language }: ContactPageProps) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.address,
      content: language === 'am' 
        ? 'Ազատության փողոց, Գավառ, Հայաստան'
        : 'Azatutyan Street, Gavar, Armenia',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Phone,
      title: t.contact.phone,
      content: '+37460461250, +37477701656',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Mail,
      title: t.contact.email,
      content: 'info@gsu.am',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Clock,
      title: t.contact.workingHours,
      content: t.contact.workingTime,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const staffContacts = [
    {
      name: { am: 'Ավետիսյան Վարազդատ', en: 'Avetisyan Varazdat' },
      position: { am: 'Ամբիոնի վարիչ', en: 'Department Head' },
      email: 'avetisyanvarazdat@gmail.com',
      phone: '+374777701656',
      office: '316'
    },
    {
      name: { am: 'Ոսկանյան Անուշ', en: 'Voskanyan Anush' },
      position: { am: 'Լաբորանտ', en: 'Laboratory Assistant' },
      email: 'a.voskanyan@gsu.am',
      phone: '+37493412468',
      office: '316'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t.contact.title}
          </h1>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'am' 
              ? 'Կապվեք մեզ հետ ցանկացած հարցում կամ առաջարկությունների համար: Մենք միշտ պատրաստ ենք օգնել:'
              : 'Contact us for any questions or suggestions. We are always ready to help.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {language === 'am' ? 'Կոնտակտային տվյալներ' : 'Contact Information'}
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className={`p-3 ${info.bgColor} rounded-lg`}>
                    <info.icon className={`h-6 w-6 ${info.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-600">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <iframe
                src="https://maps.app.goo.gl/vrxH54ws25iR3EMh7"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={language === 'am' ? 'Գավառի պետական համալսարան' : 'Gavar State University'}
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {t.contact.form.title}
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-green-800">{t.contact.form.success}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                  <span className="text-red-800">{t.contact.form.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder={language === 'am' ? 'Ձեր անունը' : 'Your name'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder={language === 'am' ? 'Ձեր էլ-փոստը' : 'Your email'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder={language === 'am' ? 'Հաղորդագրության թեման' : 'Message subject'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder={language === 'am' ? 'Ձեր հաղորդագրությունը...' : 'Your message...'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-800 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {language === 'am' ? 'Ուղարկվում է...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      {t.contact.form.send}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Staff Directory */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {language === 'am' ? 'Հիմնական կոնտակտներ' : 'Key Contacts'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {staffContacts.map((staff, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {staff.name[language]}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {staff.position[language]}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${staff.email}`} className="hover:text-blue-600 transition-colors">
                      {staff.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{staff.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{language === 'am' ? 'Սենյակ' : 'Office'} {staff.office}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {language === 'am' ? 'Ընդհանուր տեղեկատվություն' : 'General Information'}
            </h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center justify-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+37460461250</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+37477701656</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@gsu.am" className="hover:text-blue-600 transition-colors">info@gsu.am</a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {language === 'am' ? 'Հաճախ տրվող հարցեր' : 'Frequently Asked Questions'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {language === 'am' 
                  ? 'Ինչպե՞ս կարող եմ ընդունվել ամբիոն:'
                  : 'How can I apply to the department?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'am' 
                  ? 'Ընդունելության գործընթացի մասին տեղեկությունները կարող եք գտնել մեր կայքի "Ծրագրեր" բաժնում:'
                  : 'Information about the admission process can be found in the "Programs" section of our website.'}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {language === 'am' 
                  ? 'Ունե՞ք գիշերային կամ հեռակա ուսուցում:'
                  : 'Do you have evening or distance learning?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'am' 
                  ? 'Այս պահին մենք առաջարկում ենք միայն առկա ուսուցում, սակայն աշխատում ենք հեռակա ուսուցման ծրագրերի վրա:'
                  : 'Currently, we offer only full-time education, but we are working on distance learning programs.'}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {language === 'am' 
                  ? 'Կարո՞ղ եմ փոխանցվել այլ բուհից:'
                  : 'Can I transfer from another university?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'am' 
                  ? 'Այո, փոխանցման հնարավորություններն ուսումնասիրվում են անհատական կարգով: Կապվեք ամբիոնի քարտուղարի հետ:'
                  : 'Yes, transfer opportunities are considered on an individual basis. Contact the department secretary.'}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {language === 'am' 
                  ? 'Արդյո՞ք կան աշխատանքի հնարավորություններ:'
                  : 'Are there job opportunities available?'}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'am' 
                  ? 'Մեր ավարտականները աշխատում են տարբեր IT ընկերություններում և պետական կառույցներում:'
                  : 'Our graduates work in various IT companies and government institutions.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}