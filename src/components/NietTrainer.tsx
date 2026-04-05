import React, { useState } from 'react';
import { nietExercises } from '../data/dutchData';
import { CheckCircle2, XCircle, ArrowRight, RefreshCw } from 'lucide-react';
import AnimatedExample from './AnimatedExample';

const nietA = [
  { id: 'subj', color: 'bg-blue-600', text: 'Ik' },
  { id: 'verb', color: 'bg-red-600', text: 'kan' },
  { id: 'rest', color: 'bg-slate-500', text: 'u' },
  { id: 'inf', color: 'bg-orange-500', text: 'horen' },
  { id: 'niet', color: 'bg-slate-800', text: 'niet' },
];
const nietB = [
  { id: 'subj', color: 'bg-blue-600', text: 'Ik' },
  { id: 'verb', color: 'bg-red-600', text: 'kan' },
  { id: 'rest', color: 'bg-slate-500', text: 'u' },
  { id: 'niet', color: 'bg-slate-800', text: 'niet' },
  { id: 'inf', color: 'bg-orange-500', text: 'horen' },
];

export default function NietTrainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedGap, setSelectedGap] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const exercise = nietExercises[currentIndex];

  const handleGapClick = (index: number) => {
    if (isChecked) return;
    setSelectedGap(index);
  };

  const checkAnswer = () => {
    setIsChecked(true);
  };

  const nextExercise = () => {
    if (currentIndex < nietExercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    setSelectedGap(null);
    setIsChecked(false);
  };

  const resetExercise = () => {
    setSelectedGap(null);
    setIsChecked(false);
  };

  const isCorrect = selectedGap === exercise.correctGapIndex;

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Animation Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">Правило: Позиция Niet</h3>
        <p className="text-slate-600">Niet ставится ПЕРЕД прилагательными, предлогами и инфинитивами, но ПОСЛЕ времени и дополнений.</p>
        <AnimatedExample stateA={nietA} stateB={nietB} />
      </div>

      {/* Exercise Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Тренировка "niet"</h2>
          <p className="text-slate-600">Нажмите на правильное место, чтобы вставить отрицание "niet".</p>
        </div>

      <div className="bg-slate-50 p-4 rounded-lg mb-8 border border-slate-100">
        <p className="text-lg font-medium text-slate-700">{exercise.russian}</p>
      </div>

      <div className="flex flex-wrap items-center gap-y-4 mb-8 text-xl font-medium text-slate-800">
        {/* Render gaps and words */}
        {exercise.parts.map((part, index) => (
          <React.Fragment key={index}>
            <button
              onClick={() => handleGapClick(index)}
              disabled={isChecked}
              className={`mx-2 px-3 py-1 rounded-lg transition-all border-2 ${
                selectedGap === index
                  ? isChecked
                    ? isCorrect
                      ? 'bg-green-500 border-green-600 text-white'
                      : 'bg-red-500 border-red-600 text-white'
                    : 'bg-blue-600 border-blue-700 text-white'
                  : 'border-dashed border-slate-300 hover:border-blue-400 hover:bg-blue-50 text-transparent hover:text-blue-200'
              }`}
            >
              niet
            </button>
            <span>{part}</span>
          </React.Fragment>
        ))}
        {/* Final gap at the end */}
        <button
          onClick={() => handleGapClick(exercise.parts.length)}
          disabled={isChecked}
          className={`mx-2 px-3 py-1 rounded-lg transition-all border-2 ${
            selectedGap === exercise.parts.length
              ? isChecked
                ? isCorrect
                  ? 'bg-green-500 border-green-600 text-white'
                  : 'bg-red-500 border-red-600 text-white'
                : 'bg-blue-600 border-blue-700 text-white'
              : 'border-dashed border-slate-300 hover:border-blue-400 hover:bg-blue-50 text-transparent hover:text-blue-200'
          }`}
        >
          niet
        </button>
      </div>

      {/* Feedback Area */}
      {isChecked && (
        <div className={`p-4 rounded-lg mb-6 flex items-start gap-3 ${isCorrect ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          {isCorrect ? <CheckCircle2 className="w-6 h-6 shrink-0 text-green-600" /> : <XCircle className="w-6 h-6 shrink-0 text-red-600" />}
          <div>
            <p className="font-bold mb-1">{isCorrect ? 'Отлично!' : 'Ошибка'}</p>
            <p className="text-sm opacity-90">{exercise.explanation}</p>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
        <span className="text-sm text-slate-500 font-medium">
          {currentIndex + 1} / {nietExercises.length}
        </span>
        <div className="flex gap-3">
          <button
            onClick={resetExercise}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Сбросить
          </button>
          
          {!isChecked ? (
            <button
              onClick={checkAnswer}
              disabled={selectedGap === null}
              className="flex items-center gap-2 px-6 py-2 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Проверить
            </button>
          ) : (
            <button
              onClick={nextExercise}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Дальше
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
