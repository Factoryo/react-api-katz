import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import PageDetail from './components/PageDetail';
import PageEdition from './components/PageEdition';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/detail/:id" element={<PageDetail />} />
        <Route path="/edit/:id" element={<PageEdition />} />
      </Routes>
    </Router>
  );
}

export default App;