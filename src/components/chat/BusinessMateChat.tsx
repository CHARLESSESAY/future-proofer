export default function BusinessMateChat() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 h-96 flex flex-col">
      <h3 className="font-medium text-[#00B5E2] mb-4">BusinessMate AI</h3>
      <div className="flex-1 bg-gray-50 rounded p-3 mb-4 overflow-y-auto text-sm text-gray-600">
        <p>Hello! Ask me about career trends or business risks.</p>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type your question..."
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:border-[#00B5E2]"
        />
        <button className="bg-[#00B5E2] text-white px-4 py-2 rounded-lg">Send</button>
      </div>
    </div>
  );
}
