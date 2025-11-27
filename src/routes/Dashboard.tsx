import { useState } from 'react';
import ModeSwitcher from '../components/dashboard/ModeSwitcher';
import InsightCard from '../components/dashboard/InsightCard';
import ForecastChart from '../components/dashboard/ForecastChart';
import BusinessMateChat from '../components/chat/BusinessMateChat';

export default function Dashboard() {
  const [mode, setMode] = useState<'career' | 'business'>('career');

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="hidden md:block fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-4 z-50">
        <div className="font-bold text-[#0033A0] mb-8">Future Proofer</div>
        <ModeSwitcher mode={mode} setMode={setMode} />
        <nav className="mt-8 space-y-2">
          <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
            <span>📊</span> Insights
          </a>
          <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
            <span>⚙️</span> Settings
          </a>
        </nav>
      </nav>
      <main className="md:ml-64 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[#0033A0] mb-6">Welcome back!</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <InsightCard title="Top Growing Skill" value="AI Literacy" trend="+84% YoY" color="text-[#00B5E2]" />
            <InsightCard title="Market Forecast" value="Digital Jobs" trend="+62% in 3Y" color="text-[#0033A0]" />
            <InsightCard title="Readiness Score" value="78%" trend="+12% MoM" color="text-green-600" />
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ForecastChart mode={mode} />
            </div>
            <BusinessMateChat />
          </div>
        </div>
      </main>
    </div>
  );
}
