import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context'; 
import Card from '../Components/Card';
import '../Styles/App.css'; 
import logo from '../Styles/images/logo (2).png';

const Home = () => {
  const { state } = useContext(ContextGlobal);
  const { dentists, loading, error, theme } = state;

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (dentists.length === 0) {
    return <p>No se encontraron usuarios.</p>;
  }

  return (
    <div className={`home-container ${theme}`}>
      <div className="hero">
        <div className="titulo">
        <img src={logo} alt="Logo" className='logo3' />
        <h1>Conocé más sobre nuestros dentistas</h1>
        </div>
      </div>
      <div className="subtitulo">
        <h1>Lista de Dentistas</h1>
        <p>Clickealos para saber más</p>
      </div>
      <div className="card-container">
        {dentists.map(dentist => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
