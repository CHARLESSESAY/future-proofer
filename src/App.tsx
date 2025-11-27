import { Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
