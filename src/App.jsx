import { Route, Routes } from 'react-router-dom';

import Employees from './pages/Employees';

export default function App() {
  return (
    <Routes>
      <Route path="/employees" element={ <Employees /> } />
    </Routes>
  );
}
