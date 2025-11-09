import { useState, useEffect } from 'react';
import { X, Plus, CreditCard as Edit, Trash2, Save, Upload, Image, FileText } from 'lucide-react';
import { translations } from '../utils/translations';
import { supabase } from '../utils/supabaseClient';

interface AdminPanelProps {
  language: 'am' | 'en' | 'ru';
  onClose: () => void;
}

interface NewsItem {
  id: string;
  title_am: string;
  title_en: string;
  title_ru: string;
  content_am: string;
  content_en: string;
  content_ru: string;
  created_at: string;
  updated_at: string;
}

export default function AdminPanel({ language, onClose }: AdminPanelProps) {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState<'news'>('news');
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setLoading(true);
    try {
      const { data, error: err } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false });

      if (err) throw err;
      setNewsItems(data || []);
    } catch (err) {
      setError('Failed to load news');
      console.error('Error loading news:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNew = () => {
    const newItem: NewsItem = {
      id: '',
      title_am: '',
      title_en: '',
      title_ru: '',
      content_am: '',
      content_en: '',
      content_ru: '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    setEditingItem(newItem);
    setIsEditing(true);
  };

  const handleEdit = (item: NewsItem) => {
    setEditingItem({ ...item });
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!editingItem) return;

    setLoading(true);
    try {
      if (editingItem.id) {
        const { error: err } = await supabase
          .from('news')
          .update({
            title_am: editingItem.title_am,
            title_en: editingItem.title_en,
            title_ru: editingItem.title_ru,
            content_am: editingItem.content_am,
            content_en: editingItem.content_en,
            content_ru: editingItem.content_ru,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editingItem.id);

        if (err) throw err;
      } else {
        const { error: err } = await supabase
          .from('news')
          .insert([{
            title_am: editingItem.title_am,
            title_en: editingItem.title_en,
            title_ru: editingItem.title_ru,
            content_am: editingItem.content_am,
            content_en: editingItem.content_en,
            content_ru: editingItem.content_ru,
          }]);

        if (err) throw err;
      }

      await loadNews();
      setIsEditing(false);
      setEditingItem(null);
    } catch (err) {
      setError('Failed to save news');
      console.error('Error saving news:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(language === 'am' ? 'Համոզվա՞ծ եք, որ ուզում եք ջնջել:' : 'Are you sure you want to delete?')) {
      return;
    }

    setLoading(true);
    try {
      const { error: err } = await supabase
        .from('news')
        .delete()
        .eq('id', id);

      if (err) throw err;
      await loadNews();
    } catch (err) {
      setError('Failed to delete news');
      console.error('Error deleting news:', err);
    } finally {
      setLoading(false);
    }
  };

  const getTitle = (item: NewsItem) => {
    if (language === 'am') return item.title_am;
    if (language === 'ru') return item.title_ru;
    return item.title_en;
  };

  const getContent = (item: NewsItem) => {
    if (language === 'am') return item.content_am;
    if (language === 'ru') return item.content_ru;
    return item.content_en;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {language === 'am' ? 'Նորությունների կառավարում' : 'News Management'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          <div className="p-6">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {language === 'am' ? 'Նորություններ' : 'News'}
              </h3>
              <button
                onClick={handleAddNew}
                className="flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                {t.admin?.add || 'Add'}
              </button>
            </div>

            {loading && activeTab === 'news' && !isEditing ? (
              <div className="text-center text-gray-500">
                {language === 'am' ? 'Բեռնվում է...' : 'Loading...'}
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {newsItems.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {getTitle(item)}
                    </h4>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {getContent(item)}
                    </p>

                    <p className="text-xs text-gray-500 mb-4">
                      {new Date(item.created_at).toLocaleDateString()}
                    </p>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="flex items-center px-3 py-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        {t.admin?.edit || 'Edit'}
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex items-center px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        {t.admin?.delete || 'Delete'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {isEditing && editingItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl w-full max-w-2xl max-h-[80vh] overflow-auto">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {editingItem.id ? (language === 'am' ? 'Խմբագրել նորություն' : 'Edit News') : (language === 'am' ? 'Նոր նորություն' : 'New News')}
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'am' ? 'Վերնագիր (Հայ)' : 'Title (Armenian)'}
                    </label>
                    <input
                      type="text"
                      value={editingItem.title_am}
                      onChange={(e) => setEditingItem({
                        ...editingItem,
                        title_am: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'am' ? 'Վերնագիր (Անգ)' : 'Title (English)'}
                    </label>
                    <input
                      type="text"
                      value={editingItem.title_en}
                      onChange={(e) => setEditingItem({
                        ...editingItem,
                        title_en: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'am' ? 'Վերնագիր (Ռուս)' : 'Title (Russian)'}
                    </label>
                    <input
                      type="text"
                      value={editingItem.title_ru}
                      onChange={(e) => setEditingItem({
                        ...editingItem,
                        title_ru: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'am' ? 'Բովանդակություն (Հայ)' : 'Content (Armenian)'}
                    </label>
                    <textarea
                      rows={4}
                      value={editingItem.content_am}
                      onChange={(e) => setEditingItem({
                        ...editingItem,
                        content_am: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'am' ? 'Բովանդակություն (Անգ)' : 'Content (English)'}
                    </label>
                    <textarea
                      rows={4}
                      value={editingItem.content_en}
                      onChange={(e) => setEditingItem({
                        ...editingItem,
                        content_en: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'am' ? 'Բովանդակություն (Ռուս)' : 'Content (Russian)'}
                    </label>
                    <textarea
                      rows={4}
                      value={editingItem.content_ru}
                      onChange={(e) => setEditingItem({
                        ...editingItem,
                        content_ru: e.target.value
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {t.admin?.cancel || 'Cancel'}
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors flex items-center disabled:opacity-50"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {loading ? (language === 'am' ? 'Պահպանվում է...' : 'Saving...') : (t.admin?.save || 'Save')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
