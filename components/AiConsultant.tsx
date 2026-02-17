
import React, { useState } from 'react';
import { getAiConsultation } from '../services/gemini';

const AiConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    const result = await getAiConsultation(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col overflow-hidden border border-slate-200">
          <div className="bg-slate-900 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">✨</div>
              <h3 className="text-white font-bold text-sm">MIRAi AI Consultant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="flex-1 p-4 max-h-96 overflow-y-auto bg-slate-50">
            {response ? (
              <div className="animate-fade-in">
                <p className="text-slate-800 text-sm leading-relaxed whitespace-pre-wrap">{response}</p>
                <button
                  onClick={() => { setResponse(null); setQuery(''); }}
                  className="mt-4 text-xs font-bold text-teal-600 hover:text-teal-700"
                >
                  Ask another question →
                </button>
              </div>
            ) : loading ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-xs text-slate-500 animate-pulse">Analyzing enterprise data...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-slate-600 text-sm">Hello! I can help find the right MIRAi solution for your business. What are you looking to achieve?</p>
                <div className="flex flex-wrap gap-2">
                  {["Migration to Cloud", "GenAI Strategy", "Data Security"].map(suggestion => (
                    <button
                      key={suggestion}
                      onClick={() => setQuery(suggestion)}
                      className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:bg-teal-50 hover:border-teal-200 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask our AI..."
                className="flex-1 bg-slate-100 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                disabled={loading || !query}
                className="bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:bg-teal-600 transition-all transform hover:scale-110 flex items-center space-x-2 group"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-bold">Talk to MIRAi AI</span>
          <div className="w-6 h-6 flex items-center justify-center">✨</div>
        </button>
      )}
    </div>
  );
};

export default AiConsultant;
