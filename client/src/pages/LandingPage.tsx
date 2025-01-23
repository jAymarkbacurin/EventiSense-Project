import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Application</h1>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
          onClick={() => navigate('/register')}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

