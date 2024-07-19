import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

// Context
import Context from './modules/Context';

// Pages
import Home from './pages/Home';

export default function App() {
  // Hooks
  const [theme, setTheme] = useState('light'); // Default "light"

  // Handler
  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  // User info
  const user = {
    name: 'Luca',
    surname: 'Gerace',
    email: 'geraceluca91@gmail.com'
  };

  // Context value
  const contextValue = {
    user,
    theme,
    toggleTheme,
  };

  // Switch theme
  useEffect(() => {
    document.body.className = ''; // Reset
    document.body.classList.add(`bg-theme-${theme}`);
  }, [theme]);

  return (
    <BrowserRouter>
      <Context.Provider value={contextValue}>
        <Header />
        <div className={`main bg-theme-${theme}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
      </Context.Provider>
    </BrowserRouter>
  )
}