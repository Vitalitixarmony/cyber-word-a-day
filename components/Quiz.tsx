"use client";

import { useState } from "react";
import { cyberTerms } from "@/data/cyberTerms";

interface QuizQuestion {
  question: string;
  correct: string;
  options: string[];
  explanation: string;
  termEn: string;
}

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  const generateQuiz = () => {
    const shuffled = [...cyberTerms].sort(() => 0.5 - Math.random());
    const quizQuestions: QuizQuestion[] = shuffled.slice(0, 5).map((term) => {
      const wrongOptions = cyberTerms
        .filter((t) => t.en !== term.en)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((t) => t.uk);

      const options = [...wrongOptions, term.uk].sort(() => 0.5 - Math.random());

      return {
        question: `Який український переклад має термін "${term.en}"?`,
        correct: term.uk,
        options,
        explanation: term.explanation,
        termEn: term.en,
      };
    });

    setQuestions(quizQuestions);
    setCurrent(0);
    setScore(0);
    setAnswered(false);
    setSelectedOption(null);
    setFinished(false);
  };

  const handleAnswer = (option: string) => {
    if (answered) return;
    setAnswered(true);
    setSelectedOption(option);
    if (option === questions[current].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setAnswered(false);
      setSelectedOption(null);
    } else {
      setFinished(true);
    }
  };

  const percentage = questions.length > 0 ? (score / questions.length) * 100 : 0;

  if (questions.length === 0) {
    return (
      <div className="animate-fade-in max-w-2xl mx-auto">
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Перевірте свої знання
          </h3>
          <p className="text-zinc-400 mb-6">
            5 випадкових питань з термінів кібербезпеки. Оберіть правильний
            переклад для кожного терміна.
          </p>
          <button
            onClick={generateQuiz}
            className="px-6 py-3 bg-cyan-400 text-zinc-950 font-bold rounded-lg hover:bg-cyan-300 transition-colors"
          >
            Почати тест
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    let message = "";
    let color = "";

    if (percentage === 100) {
      message = "Відмінно! Ви чудово володієте базовою термінологією.";
      color = "text-emerald-400";
    } else if (percentage >= 60) {
      message = "Хороший результат! Є невеликі прогалини, але база міцна.";
      color = "text-cyan-400";
    } else {
      message = "Рекомендуємо повторити словник та спробувати ще раз.";
      color = "text-rose-400";
    }

    return (
      <div className="animate-fade-in max-w-2xl mx-auto">
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Тест завершено!</h3>
          <p className={`text-5xl font-black ${color} mb-4`}>
            {score} / {questions.length}
          </p>
          <p className="text-zinc-300 mb-8">{message}</p>
          <button
            onClick={generateQuiz}
            className="px-6 py-3 bg-cyan-400 text-zinc-950 font-bold rounded-lg hover:bg-cyan-300 transition-colors"
          >
            Пройти ще раз
          </button>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-8">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-zinc-400">
            Питання {current + 1} з {questions.length}
          </span>
          <span className="text-sm font-bold text-emerald-400">
            Рахунок: {score}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-white mb-6">{q.question}</h3>

        <div className="grid gap-3">
          {q.options.map((option, idx) => {
            let buttonClass =
              "w-full text-left p-4 rounded-lg border border-zinc-700 bg-zinc-950 hover:border-cyan-400 hover:bg-zinc-800 transition-all text-zinc-200";

            if (answered) {
              if (option === q.correct) {
                buttonClass =
                  "w-full text-left p-4 rounded-lg border border-emerald-400 bg-emerald-400/10 text-emerald-400";
              } else if (option === selectedOption) {
                buttonClass =
                  "w-full text-left p-4 rounded-lg border border-rose-400 bg-rose-400/10 text-rose-400";
              } else {
                buttonClass =
                  "w-full text-left p-4 rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-500";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                disabled={answered}
                className={buttonClass}
              >
                {option}
              </button>
            );
          })}
        </div>

        {answered && (
          <div
            className={`mt-6 p-4 rounded-lg ${
              selectedOption === q.correct
                ? "bg-emerald-400/10 border border-emerald-400/30 text-emerald-400"
                : "bg-rose-400/10 border border-rose-400/30 text-rose-400"
            }`}
          >
            <strong>
              {selectedOption === q.correct ? "Правильно!" : "Неправильно."}
            </strong>
            {selectedOption !== q.correct && (
              <span> Правильна відповідь: {q.correct}</span>
            )}
            <br />
            <span className="text-sm text-zinc-300">{q.explanation}</span>
          </div>
        )}

        {answered && (
          <button
            onClick={nextQuestion}
            className="mt-6 w-full py-3 bg-cyan-400 text-zinc-950 font-bold rounded-lg hover:bg-cyan-300 transition-colors"
          >
            {current < questions.length - 1 ? "Далі" : "Завершити"}
          </button>
        )}
      </div>
    </div>
  );
}