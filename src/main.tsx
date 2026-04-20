import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { PresentationPage } from './pages/PresentationPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<PresentationPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
