interface Props {
  mode: 'career' | 'business';
  setMode: (mode: 'career' | 'business') => void;
}

export default function ModeSwitcher({ mode, setMode }: Props) {
  return (
    <div className="flex bg-gray-100 rounded-full p-1 mb-4">
      <button
        onClick={() => setMode('career')}
        className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition ${
          mode === 'career' ? 'bg-[#0033A0] text-white shadow-sm' : 'text-gray-600 hover:text-[#0033A0]'
        }`}
      >
        Career
      </button>
      <button
        onClick={() => setMode('business')}
        className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition ${
          mode === 'business' ? 'bg-[#00B5E2] text-white shadow-sm' : 'text-gray-600 hover:text-[#00B5E2]'
        }`}
      >
        Business
      </button>
    </div>
  );
}
