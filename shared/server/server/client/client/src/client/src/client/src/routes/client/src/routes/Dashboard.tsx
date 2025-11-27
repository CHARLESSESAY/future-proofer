import { useState } from "react";

export default function Dashboard() {
  const [mode, setMode] = useState<"career" | "business">("career");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0033A0] mb-6">Welcome back!</h1>
        
        <div className="flex gap-4 mb-8">
          <button onClick={() => setMode("career")} className={`px-6 py-3 rounded-full font-medium ${mode === "career" ? "bg-[#0033A0] text-white" : "bg-gray-200"}`}>
            Career Mode
          </button>
          <button onClick={() => setMode("business")} className={`px-6 py-3 rounded-full font-medium ${mode === "business" ? "bg-[#00B5E2] text-white" : "bg-gray-200"}`}>
            Business Mode
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Top Growing Skill</h3>
            <p className="text-3xl font-bold text-[#00B5E2] mt-2">AI Literacy</p>
            <p className="text-green-600">+84% demand</p>
          </div>
          {/* Add more cards... */}
        </div>
      </div>
    </div>
  );
}
