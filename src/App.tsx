import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StaffPage from './pages/StaffPage';
import ProgramsPage from './pages/ProgramsPage';
import ResearchPage from './pages/ResearchPage';
import NewsPage from './pages/NewsPage';
import GalleryPage from './pages/GalleryPage';
import StudentsPage from './pages/StudentsPage';
import ContactPage from './pages/ContactPage';
import AdminPanel from './components/AdminPanel';

function App() {
  const [language, setLanguage] = useState<'am' | 'en'>('am');
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header language={language} setLanguage={setLanguage} setShowAdmin={setShowAdmin} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage language={language} />} />
            <Route path="/about" element={<AboutPage language={language} />} />
            <Route path="/staff" element={<StaffPage language={language} />} />
            <Route path="/programs" element={<ProgramsPage language={language} />} />
            <Route path="/research" element={<ResearchPage language={language} />} />
            <Route path="/news" element={<NewsPage language={language} />} />
            <Route path="/gallery" element={<GalleryPage language={language} />} />
            <Route path="/students" element={<StudentsPage language={language} />} />
            <Route path="/contact" element={<ContactPage language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
        {showAdmin && <AdminPanel language={language} onClose={() => setShowAdmin(false)} />}
      </div>
    </Router>
  );
}

export default App;