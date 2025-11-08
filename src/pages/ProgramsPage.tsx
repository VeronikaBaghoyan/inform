import { BookOpen, Clock, Award, Users, CheckCircle, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { translations } from '../utils/translations';

interface ProgramsPageProps {
  language: 'am' | 'en' | 'ru';
}

interface Program {
  id: string;
  program_type: string;
  course: number;
  course_name: string;
  subjects: string[];
  order: number;
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ProgramsPage({ language }: ProgramsPageProps) {
  const t = translations[language];
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      const { data, error } = await supabase
        .from('programs')
        .select('*')
        .order('order', { ascending: true });

      if (error) throw error;
      setPrograms(data || []);
    } catch (error) {
      console.error('Error loading programs:', error);
    } finally {
      setLoading(false);
    }
  };

  const getProgramTypeLabel = (type: string): string => {
    if (language === 'am') {
      if (type === 'bachelor_full') return 'Բակալավրիատի առկա';
      if (type === 'bachelor_distance') return 'Բակալավրիատի հեռակա';
      if (type === 'master') return 'Մագիստրատուրա';
    } else if (language === 'en') {
      if (type === 'bachelor_full') return "Bachelor's Full-time";
      if (type === 'bachelor_distance') return "Bachelor's Distance Learning";
      if (type === 'master') return "Master's Degree";
    }
    return type;
  };

  const getProgramDuration = (type: string): string => {
    if (type === 'bachelor_full') return '4 ' + (language === 'am' ? 'տարի' : 'years');
    if (type === 'bachelor_distance') return '5 ' + (language === 'am' ? 'տարի' : 'years');
    if (type === 'master') return '2 ' + (language === 'am' ? 'տարի' : 'years');
    return '';
  };

  const getProgramDescription = (type: string): string => {
    if (language === 'am') {
      if (type === 'bachelor_full')
        return 'Այս ծրագիրը պատրաստում է մասնագետներ ինֆորմատիկայի, ծրագրավորման և կիրառական մաթեմատիկայի ոլորտներում: Ուսանողները ծանոթանում են ժամանակակից տեխնոլոգիաների և մեթոդների հետ:';
      if (type === 'bachelor_distance')
        return 'Հեռակա ուսուցման ծրագիր, որը թույլ է տալիս ուսանողներին ստանալ բարձրորակ կրթություն ինֆորմատիկայի ոլորտում՝ չխանգարելով իրենց աշխատանքային գործունեությանը:';
      if (type === 'master')
        return 'Խորացված ուսումնական ծրագիր, որը նպատակ ունի պատրաստել բարձր որակավորում ունեցող մասնագետներ գիտական հետազոտությունների և առաջադեմ տեխնոլոգիաների ոլորտում:';
    } else {
      if (type === 'bachelor_full')
        return 'This program prepares specialists in informatics, programming, and applied mathematics. Students become familiar with modern technologies and methods.';
      if (type === 'bachelor_distance')
        return 'Distance learning program that allows students to receive high-quality education in informatics without interfering with their work activities.';
      if (type === 'master')
        return 'Advanced study program aimed at preparing highly qualified specialists in scientific research and advanced technologies.';
    }
    return '';
  };


  if (loading) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">{language === 'am' ? 'Բեռնվում է...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

  const groupedPrograms = programs.reduce((acc: any, prog) => {
    if (!acc[prog.program_type]) {
      acc[prog.program_type] = [];
    }
    acc[prog.program_type].push(prog);
    return acc;
  }, {});

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
          {Object.entries(groupedPrograms).map(([programType, typePrograms]: any) => (
            <div key={programType}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-800">
                  {getProgramTypeLabel(programType)}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {(typePrograms as Program[]).map((program) => (
                  <div key={program.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-8">
                      <div className="flex flex-wrap items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold">{program.course_name}</h3>
                        <div className="flex items-center space-x-4">
                          <span className="bg-yellow-500 text-blue-800 px-4 py-2 rounded-full font-bold">
                            {getProgramTypeLabel(programType)}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center">
                          <Clock className="h-6 w-6 text-yellow-400 mr-3" />
                          <div>
                            <div className="text-sm opacity-90">{t.programs.duration}</div>
                            <div className="font-semibold">{getProgramDuration(programType)}</div>
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
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                            {language === 'am' ? 'Ծրագրի մասին' : 'About Program'}
                          </h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {getProgramDescription(programType)}
                          </p>

                          <h5 className="text-lg font-semibold text-gray-900 mb-3">
                            {language === 'am' ? 'Ընդունելության պահանջներ' : 'Admission Requirements'}
                          </h5>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">
                                {language === 'am' ? 'Ընդհանուր միջնակարգ կրթություն' : 'General Secondary Education'}
                              </span>
                            </li>
                            {programType === 'master' && (
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">
                                  {language === 'am' ? 'Բակալավրի կոչում' : "Bachelor's Degree"}
                                </span>
                              </li>
                            )}
                          </ul>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                              <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                              {language === 'am' ? 'Առարկաներ' : 'Subjects'}
                            </h5>
                            <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
                              {program.subjects.map((subject, index) => (
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
                    : 'June - August 2025'}
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