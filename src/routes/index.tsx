import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {LandingPage} from '../pages/LandingPage/LandingPage.tsx';
import {ExploreMesses} from '../pages/ExploreMesses/ExploreMesses';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore-messes" element={<ExploreMesses />} />
      </Routes>
  );
};

export default AppRoutes;