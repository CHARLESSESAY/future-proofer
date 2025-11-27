export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0033A0] to-[#00B5E2] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-[#0033A0] mb-4">Future Proofer</h1>
        <p className="text-gray-600 mb-8">AI foresight for smarter careers and stronger businesses</p>
        <a href="/auth/google" className="block bg-[#0033A0] text-white py-4 rounded-lg font-medium hover:bg-[#002280]">
          Continue with Google
        </a>
        <p className="text-xs text-gray-500 mt-8">By Fortizo Technologies © 2025</p>
      </div>
    </div>
  );
}
