"use client";

import { useState } from "react";
import CyberCard from "@/components/CyberCard";
import DayNavigation from "@/components/DayNavigation";
import Dashboard from "@/components/Dashboard";
import Dictionary from "@/components/Dictionary";
import Quiz from "@/components/Quiz";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cyberTerms, CyberTerm } from "@/data/cyberTerms";

type Tab = "daily" | "dictionary" | "quiz";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("daily");
  const [currentDay, setCurrentDay] = useState(1);

  const currentTerm = cyberTerms[currentDay - 1] || cyberTerms[0];

  const handleSelectTerm = (term: CyberTerm) => {
    setCurrentDay(term.day);
    setActiveTab("daily");
  };

  const handleDayChange = (day: number) => {
    setCurrentDay(day);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 max-w-7xl mx-auto px-6 py-10 w-full">
        {activeTab === "daily" && (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <h1 className="text-6xl font-black tracking-tight mb-4">
                <span className="text-cyan-400">Cyber Security</span>
                <br />
                Learning Hub
              </h1>
              <p className="text-zinc-400 text-lg">
                Interactive Cybersecurity Education Platform
              </p>
            </div>

            <Dashboard currentDay={currentDay} totalDays={30} />

            <DayNavigation
              currentDay={currentDay}
              setCurrentDay={handleDayChange}
              totalDays={30}
            />

            <CyberCard term={currentTerm} />
          </div>
        )}

        {activeTab === "dictionary" && (
          <div>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black tracking-tight mb-2">
                Словник термінів
              </h2>
              <p className="text-zinc-400">
                30 ключових термінів кібербезпеки з поясненнями
              </p>
            </div>
            <Dictionary onSelectTerm={handleSelectTerm} />
          </div>
        )}

        {activeTab === "quiz" && (
          <div>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black tracking-tight mb-2">
                Міні-тест
              </h2>
              <p className="text-zinc-400">
                Перевірте свої знання з кібербезпеки
              </p>
            </div>
            <Quiz />
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
