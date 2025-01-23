import React, { useState } from 'react';
import api from '../../api/api';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/auth/login', formData);
      setMessage(response.data.message);
      setRedirect(true);
    } catch (error: any) {
      setMessage(error.response?.data?.error || 'Login failed');
    }
  };
  if (redirect) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
          Login
        </button>
        {message && <p className="text-center text-red-500 mt-4">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
