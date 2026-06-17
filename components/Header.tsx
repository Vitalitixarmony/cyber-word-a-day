"use client";

import { useState } from "react";

type Tab = "daily" | "dictionary" | "quiz";

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs: { key: Tab; label: string }[] = [
    { key: "daily", label: "Термін дня" },
    { key: "dictionary", label: "Словник" },
    { key: "quiz", label: "Міні-тест" },
  ];

  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-cyan-400 rounded-lg flex items-center justify-center text-zinc-950 font-black text-lg">
            C
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-wide text-cyan-400 leading-tight">
              CS
Learning Hub
            </h1>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
              Learning Platform
            </p>
          </div>
        </div>

        <nav className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === tab.key
                  ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/30"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}