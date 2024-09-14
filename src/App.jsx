import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Context} from './Components/utils/global.context.jsx';


function App() {
  return (
    <BrowserRouter>
      <Context> 
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="*" element={<h1>Error 404 - Page not Found</h1>} />
          </Routes>
          <Footer />
        </div>
      </Context>
    </BrowserRouter>
  );
}

export default App;