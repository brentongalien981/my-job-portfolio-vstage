import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import SampleProjectsPage from './pages/SampleProjectsPage/SampleProjectsPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import './App.css';


const App: React.FC = () => {
  return (
    <Router>
      <div id="root">
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<SampleProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
