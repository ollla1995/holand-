import React, { useState, useEffect } from 'react';
import { separableExercises } from '../data/dutchData';
import { CheckCircle2, XCircle, ArrowRight, RefreshCw, Scissors } from 'lucide-react';
import AnimatedExample from './AnimatedExample';

const sepA = [
  { id: 'subj', color: 'bg-blue-600', text: 'Ik' },
  { id: 'verb_pref', color: 'bg-orange-500', text: 'op' },
  { id: 'verb_root', color: 'bg-red-600', text: 'bel' },
  { id: 'rest', color: 'bg-slate-500', text: 'je' },
];
const sepB = [
  { id: 'subj', color: 'bg-blue-600', text: 'Ik' },
  { id: 'verb_root', color: 'bg-red-600', text: 'bel' },
  { id: 'rest', color: 'bg-slate-500', text: 'je' },
  { id: 'verb_pref', color: 'bg-orange-500', text: 'op' },
];

export default function SeparableTrainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const exercise = separableExercises[currentIndex];
  const gapCount = exercise.segments.filter(s => s.type === 'gap').length;

  useEffect(() => {
    setAnswers(Array(gapCount).fill(''));
    setIsChecked(false);
    setResults([]);
  }, [currentIndex, gapCount]);

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    let gapIndex = 0;
    const newResults: boolean[] = [];
    let allCorrect = true;

    exercise.segments.forEach((segment) => {
      if (segment.type === 'gap') {
        const isCorrect = answers[gapIndex].trim().toLowerCase() === segment.value.toLowerCase();
        newResults.push(isCorrect);
        if (!isCorrect) allCorrect = false;
        gapIndex++;
      }
    });

    setResults(newResults);
    setIsChecked(true);
  };

  const nextExercise = () => {
    if (currentIndex < separableExercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const resetExercise = () => {
    setAnswers(Array(gapCount).fill(''));
    setIsChecked(false);
    setResults([]);
  };

  const allCorrect = results.length > 0 && results.every(r => r);

  let currentGapIndex = 0;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-2 flex items-center justify-center gap-2">
          <Scissors className="w-8 h-8 text-orange-500" />
          Тренировка отделяемых глаголов
        </h2>
        <p className="text-slate-600">
          Вставьте правильные формы глагола и приставки в предложения.
        </p>
      </div>

      {/* Animation Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">Правило: Отделяемые глаголы (Настоящее время)</h3>
        <p className="text-slate-600">Приставка отрывается от глагола и убегает в самый конец предложения, образуя рамку.</p>
        <AnimatedExample stateA={sepA} stateB={sepB} />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
            Упражнение {currentIndex + 1} из {separableExercises.length}
          </span>
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-bold">
            {exercise.tense}
          </span>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-slate-500 font-medium">Глагол:</span>
            <span className="text-xl font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded">
              {exercise.infinitive}
            </span>
          </div>
          <p className="text-lg text-slate-600 italic">"{exercise.russian}"</p>
        </div>

        <div className="text-2xl leading-loose mb-8 flex flex-wrap items-center gap-y-4">
          {exercise.segments.map((segment, index) => {
            if (segment.type === 'text') {
              return <span key={index} className="text-slate-800">{segment.value}</span>;
            } else {
              const gapIndex = currentGapIndex++;
              const isCorrect = results[gapIndex];
              const hasBeenChecked = isChecked;
              
              let inputClass = "mx-2 px-3 py-1 border-b-2 outline-none text-center font-bold transition-colors w-32 bg-slate-50 ";
              
              if (hasBeenChecked) {
                if (isCorrect) {
                  inputClass += "border-green-500 text-green-700 bg-green-50";
                } else {
                  inputClass += "border-red-500 text-red-700 bg-red-50";
                }
              } else {
                inputClass += "border-slate-300 focus:border-orange-500 text-slate-800";
              }

              return (
                <div key={index} className="relative inline-block">
                  <input
                    type="text"
                    value={answers[gapIndex]}
                    onChange={(e) => handleInputChange(gapIndex, e.target.value)}
                    className={inputClass}
                    disabled={hasBeenChecked && isCorrect}
                    placeholder="..."
                  />
                  {hasBeenChecked && (
                    <span className="absolute -top-3 -right-2">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 bg-white rounded-full" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 bg-white rounded-full" />
                      )}
                    </span>
                  )}
                </div>
              );
            }
          })}
        </div>

        {isChecked && (
          <div className={`p-4 rounded-lg mb-8 ${allCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-medium ${allCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {allCorrect ? 'Отлично! Правильно.' : 'Есть ошибки. Попробуйте еще раз.'}
            </p>
            <p className="mt-2 text-slate-700">
              <span className="font-bold">Правило: </span>
              {exercise.explanation}
            </p>
            {!allCorrect && (
              <div className="mt-4">
                <p className="text-sm font-bold text-slate-600 mb-1">Правильный ответ:</p>
                <p className="text-slate-800 font-medium">
                  {exercise.segments.map(s => s.value).join('')}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-end gap-4">
          {!isChecked || !allCorrect ? (
            <button
              onClick={checkAnswers}
              disabled={answers.some(a => a.trim() === '')}
              className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <CheckCircle2 className="w-5 h-5" />
              Проверить
            </button>
          ) : null}

          {isChecked && !allCorrect && (
            <button
              onClick={resetExercise}
              className="flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-300 transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              Повторить
            </button>
          )}

          {isChecked && allCorrect && (
            <button
              onClick={nextExercise}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Дальше
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
