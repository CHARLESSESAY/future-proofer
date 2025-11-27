import { useState } from 'react';

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = () => {
    setLoading(true);
    window.location.href = '/auth/google';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0033A0] to-[#00B5E2] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-[#0033A0] mb-4">Future Proofer</h1>
        <p className="text-gray-600 mb-8">AI foresight for smarter careers and stronger businesses</p>
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full bg-[#0033A0] hover:bg-[#002080] text-white font-medium py-3 rounded-lg transition-colors"
        >
          {loading ? 'Loading...' : 'Sign in with Google'}
        </button>
        <p className="text-xs text-gray-500 mt-4">By Fortizo Technologies © 2025</p>
      </div>
    </div>
  );
}
