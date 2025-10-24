import { useState } from 'react';
import { X, Plus, CreditCard as Edit, Trash2, Save, Upload, Image, FileText, Users } from 'lucide-react';
import { translations } from '../utils/translations';

interface AdminPanelProps {
  language: 'am' | 'en' | 'ru';
  onClose: () => void;
}

interface ContentItem {
  id: number;
  type: 'news' | 'staff' | 'gallery';
  title: { am: string; en: string };
  content?: { am: string; en: string };
  image?: string;
  date?: string;
}

export default function AdminPanel({ language, onClose }: AdminPanelProps) {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState<'news' | 'staff' | 'gallery'>('news');
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  
  // Mock data for demonstration
  const [newsItems, setNewsItems] = useState<ContentItem[]>([
    {
      id: 1,
      type: 'news',
      title: {
        am: 'Նոր ուսումնական տարվա բացում',
        en: 'New Academic Year Opening'
      },
      content: {
        am: 'Սեպտեմբերի 1-ին տեղի ունեցավ նոր ուսումնական տարվա բացման հանդիսավոր արարողությունը...',
        en: 'The solemn opening ceremony of the new academic year took place on September 1st...'
      },
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      date: '2024-09-01'
    }
  ]);

  const [staffItems, setStaffItems] = useState<ContentItem[]>([
    {
      id: 1,
      type: 'staff',
      title: {
        am: 'Դր. Արամ Գալստյան',
        en: 'Dr. Aram Galstyan'
      },
      content: {
        am: 'Ամբիոնի վարիչ, տեխնիկական գիտությունների դոկտոր',
        en: 'Department Head, Doctor of Technical Sciences'
      },
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    }
  ]);

  const [galleryItems, setGalleryItems] = useState<ContentItem[]>([
    {
      id: 1,
      type: 'gallery',
      title: {
        am: 'Համակարգչային լաբորատորիա',
        en: 'Computer Laboratory'
      },
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
      date: '2024-08-15'
    }
  ]);

  const getCurrentItems = () => {
    switch (activeTab) {
      case 'news':
        return newsItems;
      case 'staff':
        return staffItems;
      case 'gallery':
        return galleryItems;
      default:
        return [];
    }
  };

  const handleEdit = (item: ContentItem) => {
    setEditingItem({ ...item });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!editingItem) return;

    const updateItems = (items: ContentItem[]) => 
      items.map(item => item.id === editingItem.id ? editingItem : item);

    switch (activeTab) {
      case 'news':
        setNewsItems(updateItems);
        break;
      case 'staff':
        setStaffItems(updateItems);
        break;
      case 'gallery':
        setGalleryItems(updateItems);
        break;
    }

    setIsEditing(false);
    setEditingItem(null);
  };

  const handleDelete = (id: number) => {
    if (!confirm(language === 'am' ? 'Համոզվա՞ծ եք, որ ուզում եք ջնջել:' : 'Are you sure you want to delete?')) {
      return;
    }

    const filterItems = (items: ContentItem[]) => items.filter(item => item.id !== id);

    switch (activeTab) {
      case 'news':
        setNewsItems(filterItems);
        break;
      case 'staff':
        setStaffItems(filterItems);
        break;
      case 'gallery':
        setGalleryItems(filterItems);
        break;
    }
  };

  const handleAddNew = () => {
    const newItem: ContentItem = {
      id: Date.now(),
      type: activeTab,
      title: { am: '', en: '' },
      content: activeTab !== 'gallery' ? { am: '', en: '' } : undefined,
      image: '',
      date: new Date().toISOString().split('T')[0]
    };

    setEditingItem(newItem);
    setIsEditing(true);
  };

  const tabs = [
    { id: 'news' as const, label: t.admin.news, icon: FileText },
    { id: 'staff' as const, label: t.admin.staff, icon: Users },
    { id: 'gallery' as const, label: t.admin.gallery, icon: Image },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {t.admin.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-3" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </h3>
                <button
                  onClick={handleAddNew}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  {t.admin.add}
                </button>
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {getCurrentItems().map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title[language]}
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                    )}
                    
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {item.title[language]}
                    </h4>
                    
                    {item.content && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {item.content[language]}
                      </p>
                    )}
                    
                    {item.date && (
                      <p className="text-xs text-gray-500 mb-4">
                        {item.date}
                      </p>
                    )}
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="flex items-center px-3 py-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        {t.admin.edit}
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex items-center px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        {t.admin.delete}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Edit Modal */}
        {isEditing && editingItem && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl w-full max-w-2xl max-h-[80vh] overflow-auto">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {language === 'am' ? 'Խմբագրում' : 'Edit Item'}
                </h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'am' ? 'Վերնագիր (Հայ)' : 'Title (Armenian)'}
                      </label>
                      <input
                        type="text"
                        value={editingItem.title.am}
                        onChange={(e) => setEditingItem({
                          ...editingItem,
                          title: { ...editingItem.title, am: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'am' ? 'Վերնագիր (Անգ)' : 'Title (English)'}
                      </label>
                      <input
                        type="text"
                        value={editingItem.title.en}
                        onChange={(e) => setEditingItem({
                          ...editingItem,
                          title: { ...editingItem.title, en: e.target.value }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {editingItem.content && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'am' ? 'Բովանդակություն (Հայ)' : 'Content (Armenian)'}
                        </label>
                        <textarea
                          rows={4}
                          value={editingItem.content.am}
                          onChange={(e) => setEditingItem({
                            ...editingItem,
                            content: { ...editingItem.content!, am: e.target.value }
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'am' ? 'Բովանդակություն (Անգ)' : 'Content (English)'}
                        </label>
                        <textarea
                          rows={4}
                          value={editingItem.content.en}
                          onChange={(e) => setEditingItem({
                            ...editingItem,
                            content: { ...editingItem.content!, en: e.target.value }
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'am' ? 'Նկարի URL' : 'Image URL'}
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="url"
                        value={editingItem.image || ''}
                        onChange={(e) => setEditingItem({
                          ...editingItem,
                          image: e.target.value
                        })}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="https://example.com/image.jpg"
                      />
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                        <Upload className="h-4 w-4 mr-2" />
                        {language === 'am' ? 'Բեռնել' : 'Upload'}
                      </button>
                    </div>
                  </div>

                  {editingItem.date && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'am' ? 'Ամսաթիվ' : 'Date'}
                      </label>
                      <input
                        type="date"
                        value={editingItem.date}
                        onChange={(e) => setEditingItem({
                          ...editingItem,
                          date: e.target.value
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {t.admin.cancel}
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {t.admin.save}
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