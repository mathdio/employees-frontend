import { Route, Routes } from 'react-router-dom';

import Employees from './pages/Employees';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={ <Employees /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}
