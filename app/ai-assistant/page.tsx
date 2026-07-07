'use client';

import { FormEvent, useState } from 'react';
import DashboardShell from '../../components/DashboardShell';
import { analyzeBrandVoice, generateReplySuggestions } from '../../lib/aiService';

const suggestions = [
  'Give me five TikTok ideas for my reading app.',
  'Write an Instagram caption for a fantasy reading challenge.',
  'Create a launch campaign for my new app feature.',
  'What should I post this week?',
  'Find five topics I should reply to on X.'
];

export default function AIAssistantPage() {
  const [query, setQuery] = useState('');
  const [responses, setResponses] = useState<Array<{ question: string; answer: string }>>([]);
  const [analysis, setAnalysis] = useState({ summary: '', recommendation: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Thinking...');
    const replies = await generateReplySuggestions(query || 'What should I post this week?');
    const summary = await analyzeBrandVoice('Brand voice sample');
    setAnalysis(summary);
    setResponses((current) => [{ question: query || 'What should I post this week?', answer: replies[0].text }, ...current]);
    setQuery('');
    setStatus('Response generated (mock).');
  };

  return (
    <DashboardShell title="AI Assistant">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Chat assistant</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Ask the AI for brand-aware marketing copy.</h2>
            <p className="mt-2 text-slate-400">The assistant uses your saved brand kit details to suggest posts, replies, and campaign ideas.</p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <textarea value={query} onChange={(event) => setQuery(event.target.value)} className="w-full rounded-[1.5rem] border border-slate-700 bg-slate-950 px-4 py-4 text-sm text-slate-100 outline-none focus:border-sky-400/80" placeholder="Ask something like: Write an Instagram caption for a fantasy reading challenge." rows={4} />
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">Send prompt</button>
              {status && <p className="text-sm text-slate-400">{status}</p>}
            </form>
          </section>
          <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Suggested prompts</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {suggestions.map((prompt) => (
                <button key={prompt} type="button" onClick={() => setQuery(prompt)} className="rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-4 text-left text-sm text-slate-200 transition hover:border-slate-500">{prompt}</button>
              ))}
            </div>
          </section>
          <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Response preview</p>
              <button className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300 transition hover:border-slate-500">Save to Content Studio</button>
            </div>
            {responses.length === 0 ? (
              <p className="mt-4 text-slate-400">Your AI chat history will appear here as you generate content.</p>
            ) : (
              <div className="mt-5 space-y-4">
                {responses.map((reply, index) => (
                  <div key={index} className="rounded-3xl bg-slate-900/80 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Prompt</p>
                    <p className="mt-2 text-white">{reply.question}</p>
                    <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-400">AI answer</p>
                    <p className="mt-2 text-slate-300">{reply.answer}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                      <span className="rounded-full bg-slate-800 px-2 py-1">Copy</span>
                      <span className="rounded-full bg-slate-800 px-2 py-1">Add to calendar</span>
                      <span className="rounded-full bg-slate-800 px-2 py-1">Convert to campaign</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
        <aside className="space-y-6">
          <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Brand voice analysis</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <h3 className="text-sm text-slate-400">Summary</h3>
                <p className="mt-2 text-slate-200">{analysis.summary || 'AI will summarize your brand voice once you ask a question.'}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <h3 className="text-sm text-slate-400">Recommendation</h3>
                <p className="mt-2 text-slate-200">{analysis.recommendation || 'Use shorter captions with a friendly, conversational tone for BookTok and reading audiences.'}</p>
              </div>
            </div>
          </section>
          <section className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Reminder</p>
            <p className="mt-3 text-slate-400">AI-generated replies should be reviewed before publishing. Publishing requires connected API permissions for each social platform.</p>
          </section>
        </aside>
      </div>
    </DashboardShell>
  );
}
