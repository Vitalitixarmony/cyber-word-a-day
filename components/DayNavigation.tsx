"use client";

interface DayNavigationProps {
  currentDay: number;
  setCurrentDay: (day: number) => void;
  totalDays: number;
}

export default function DayNavigation({
  currentDay,
  setCurrentDay,
  totalDays,
}: DayNavigationProps) {
  const goPrev = () => {
    if (currentDay > 1) setCurrentDay(currentDay - 1);
  };

  const goNext = () => {
    if (currentDay < totalDays) setCurrentDay(currentDay + 1);
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <button
        onClick={goPrev}
        disabled={currentDay === 1}
        className="px-4 py-2 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        &larr; Попередній
      </button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => (
          <button
            key={day}
            onClick={() => setCurrentDay(day)}
            className={`w-8 h-8 text-xs font-medium rounded-md transition-all ${
              day === currentDay
                ? "bg-cyan-400 text-zinc-950 font-bold"
                : "text-zinc-500 hover:text-white hover:bg-zinc-800"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <button
        onClick={goNext}
        disabled={currentDay === totalDays}
        className="px-4 py-2 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Наступний &rarr;
      </button>
    </div>
  );
}