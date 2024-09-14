import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Styles/images/logo (2).png';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <button onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <img src={logo} alt="Logo" className='logo2' />
      </div>
      <div className="nav2">
        <Link to="/">Home</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/favs">Destacados</Link>
      </div>
      <button 
        className="theme-toggle" 
        id="theme-toggle" 
        title="Toggles light & dark" 
        aria-label="auto" 
        aria-live="polite"
        onClick={toggleTheme}
      >
        {isDarkMode ? (
          <svg className="moon-icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#FFD700"/>
            <circle cx="16" cy="8" r="6" fill="#222"/>
          </svg>
        ) : (
          <svg className="sun-icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="6" fill="#FFD700"/>
            <line x1="12" y1="1" x2="12" y2="4" stroke="#FFD700" strokeWidth="2"/>
            <line x1="12" y1="20" x2="12" y2="23" stroke="#FFD700" strokeWidth="2"/>
            <line x1="1" y1="12" x2="4" y2="12" stroke="#FFD700" strokeWidth="2"/>
            <line x1="20" y1="12" x2="23" y2="12" stroke="#FFD700" strokeWidth="2"/>
            <line x1="4.22" y1="4.22" x2="6" y2="6" stroke="#FFD700" strokeWidth="2"/>
            <line x1="18" y1="18" x2="19.78" y2="19.78" stroke="#FFD700" strokeWidth="2"/>
            <line x1="4.22" y1="19.78" x2="6" y2="18" stroke="#FFD700" strokeWidth="2"/>
            <line x1="18" y1="6" x2="19.78" y2="4.22" stroke="#FFD700" strokeWidth="2"/>
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
