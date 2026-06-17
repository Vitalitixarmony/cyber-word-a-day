"use client";

interface DashboardProps {
  currentDay: number;
  totalDays: number;
}

export default function Dashboard({ currentDay, totalDays }: DashboardProps) {
  const progress = (currentDay / totalDays) * 100;

  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 mb-8">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-zinc-400">Прогрес навчання</span>
        <span className="text-sm font-bold text-cyan-400">
          {currentDay} / {totalDays} днів
        </span>
      </div>
      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-zinc-500 mt-2">
        {Math.round(progress)}% завершено
      </p>
    </div>
  );
}