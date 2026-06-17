"use client";

import { useState } from "react";
import { cyberTerms, categories, CyberTerm } from "@/data/cyberTerms";

interface DictionaryProps {
  onSelectTerm: (term: CyberTerm) => void;
}

export default function Dictionary({ onSelectTerm }: DictionaryProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filtered = cyberTerms.filter((term) => {
    const matchesSearch =
      term.en.toLowerCase().includes(search.toLowerCase()) ||
      term.uk.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Пошук терміна..."
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition-colors"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            selectedCategory === "all"
              ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/30"
              : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700"
          }`}
        >
          Всі
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              selectedCategory === cat
                ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/30"
                : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-3">
        {filtered.map((term) => (
          <div
            key={term.id}
            onClick={() => onSelectTerm(term)}
            className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-cyan-400/30 cursor-pointer transition-all group"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {term.en}
                </h3>
                <span className="text-xs text-zinc-500">День {term.day}</span>
              </div>
              <div className="text-right">
                <span className="text-cyan-400 font-medium">{term.uk}</span>
                <div className="text-xs text-zinc-600 mt-1">{term.category}</div>
              </div>
            </div>
            <p className="text-sm text-zinc-400 line-clamp-2">
              {term.explanation}
            </p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-zinc-500">
          Термінів не знайдено
        </div>
      )}
    </div>
  );
}