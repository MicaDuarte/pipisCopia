import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo1 from '../Styles/images/Pipis.png';
import pipisLogo from '../Styles/images/logo1.png';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <nav className="navbar">
      <div className="logo2">
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
        <Link to="/">
        <div className="logos">
                <img src={logo1} alt="Logo 1" className="logo"/>
                <img src={pipisLogo} className="logo" alt="Pipi's Logo" />
        </div>
        </Link>
      </div>
      <div className="nav2">
        <Link to="/">Home</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/login">Iniciar sesion</Link>
        
      </div>
      <div className="nav3">
     

      <Link to="/favs">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className='corazon' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
      </Link>

      <Link to="/cart">
          {/* carrito de compras */}
          <svg xmlns="http://www.w3.org/2000/svg" className='carrito' width="40" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l3-8H6.4m0 0L5.2 5H3m4 8l-1.5 5h11.25m-9 0a1.5 1.5 0 11-3 0m12 0a1.5 1.5 0 11-3 0"/>
          </svg>
        </Link>

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

      </div>
    </nav>
  );
};

export default Navbar;
