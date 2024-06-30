import { Route, Routes } from 'react-router-dom';

import Employees from './pages/Employees';

import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/employees" element={ <Employees /> } />
    </Routes>
  );
}
