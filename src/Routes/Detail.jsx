import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context'; 


const Detail = () => {
  const { id } = useParams(); 
  const { state } = useContext(ContextGlobal);
  const { dentists, theme } = state;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const user = dentists.find(d => d.id === parseInt(id));
        if (!user) throw new Error('Dentista no encontrado');
        setUser(user);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserDetail();
  }, [id, dentists]);

  if (loading) {
    return <div className={`loading ${theme}`}>Cargando...</div>;
  }

  if (error) {
    return <div className={`error ${theme}`}>Error: {error}</div>;
  }

  if (!user) {
    return <div className={`no-user ${theme}`}>No se encontró el Dentista.</div>;
  }

  const { name, email, phone, website, address } = user;
  const { geo } = address;
  const { lat, lng } = geo;

  return (
    <div className={`detail-container ${theme}`}>
      <div className="container">

      <div className="map-container">
            <iframe
              title="Mapa de Ubicación"
              src={`https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=${lat},${lng}`}
              style={{ border: 0 }}
              width="500"
              height="400"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <br />
            <small>
              <a href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}`} target="_blank" rel="noopener noreferrer">
                Ver mapa en OpenStreetMap
              </a>
            </small>
          </div>
        <div className="detail-content">
          <h2 className="detail-title">Detalle del Dentista</h2>
          <p><strong>Nombre:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Teléfono:</strong> {phone}</p>
          <p><strong>Website:</strong> {website}</p>


         
        </div>
      </div>
    </div>
  );
};

export default Detail;
