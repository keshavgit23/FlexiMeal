import {Routes, Route } from 'react-router-dom';

import {LandingPage} from '../pages/LandingPage/LandingPage.tsx';
import {ExploreMesses} from '../pages/ExploreMesses/ExploreMesses';
import StudentHowItWorks from '../pages/HowItWorks/Student/StudentHowItWorks.tsx';
import MessOwner from "../pages/HowItWorks/Owner/Owner.tsx";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore-messes" element={<ExploreMesses />} />
        <Route path="/for-students" element={<StudentHowItWorks/>}/>
        <Route path="/for-messes" element={<MessOwner/>}/>
      </Routes>
  );
};

export default AppRoutes;