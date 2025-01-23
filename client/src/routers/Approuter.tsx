
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../pages/AuthForm/Register';
import Login from '../pages/AuthForm/Login';
import LandingPage from '../pages/LandingPage'; // Add your landing page

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
