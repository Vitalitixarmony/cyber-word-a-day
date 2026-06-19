"use client";

import { CyberTerm } from "@/data/cyberTerms";

interface CyberCardProps {
  term: CyberTerm;
}

export default function CyberCard({ term }: CyberCardProps) {
  return (
    <div className="animate-fade-in">
      {}
      <div className="text-center mb-8">
        <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-4">
          День {term.day} &middot; {term.category}
        </span>
        <h2 className="text-4xl font-black text-white mb-2">{term.en}</h2>
        <p className="text-xl text-cyan-400 font-semibold">{term.uk}</p>
      </div>

      {}
      <div className="grid gap-4 md:grid-cols-2">
        {}
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-cyan-400/30 transition-colors">
          <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
            Пояснення
          </h3>
          <p className="text-zinc-300 leading-relaxed">{term.explanation}</p>
        </div>

        {}
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-emerald-400/30 transition-colors">
          <h3 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full" />
            Приклад застосування
          </h3>
          <p className="text-zinc-300 leading-relaxed">{term.example}</p>
        </div>

        {}
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-rose-400/30 transition-colors">
          <h3 className="text-rose-400 font-semibold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-rose-400 rounded-full" />
            Типова помилка
          </h3>
          <p className="text-zinc-300 leading-relaxed">{term.mistake}</p>
        </div>

        {}
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-amber-400/30 transition-colors">
          <h3 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-400 rounded-full" />
            Захисний захід
          </h3>
          <p className="text-zinc-300 leading-relaxed">{term.defense}</p>
        </div>
      </div>
    </div>
  );
}