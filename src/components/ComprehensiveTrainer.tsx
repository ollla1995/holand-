import React, { useState, useEffect } from 'react';
import { comprehensiveExercises } from '../data/dutchData';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ComprehensiveTrainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const exercise = comprehensiveExercises[currentIndex];

  const [selectedVerb, setSelectedVerb] = useState<string>('');
  const [placedIds, setPlacedIds] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  // Reset when exercise changes
  useEffect(() => {
    setSelectedVerb('');
    setPlacedIds([]);
    setStatus('idle');
  }, [currentIndex]);

  const allWords = [
    { id: 'verb', text: selectedVerb || '[ Выберите глагол ]' },
    ...exercise.otherWords.map((w, i) => ({ id: `word-${i}`, text: w }))
  ];

  const placedWords = placedIds.map(id => allWords.find(w => w.id === id)!);
  const availableWords = allWords.filter(w => !placedIds.includes(w.id));

  const handleWordClick = (id: string) => {
    if (status !== 'idle') return;
    setPlacedIds([...placedIds, id]);
  };

  const handlePlacedWordClick = (id: string) => {
    if (status !== 'idle') return;
    setPlacedIds(placedIds.filter(placedId => placedId !== id));
  };

  const checkAnswer = () => {
    if (!selectedVerb) {
      alert("Пожалуйста, выберите форму глагола!");
      return;
    }
    if (placedIds.length !== allWords.length) {
      alert("Пожалуйста, используйте все слова для составления предложения!");
      return;
    }

    const constructedSentence = placedWords.map(w => w.text);
    const isCorrect =
      selectedVerb === exercise.correctVerbForm &&
      constructedSentence.join(' ') === exercise.correctOrder.join(' ');

    setStatus(isCorrect ? 'correct' : 'incorrect');
  };

  const nextExercise = () => {
    if (currentIndex < comprehensiveExercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const resetExercise = () => {
    setSelectedVerb('');
    setPlacedIds([]);
    setStatus('idle');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                Упражнение {currentIndex + 1} из {comprehensiveExercises.length}
              </span>
            </h2>
            <button
              onClick={resetExercise}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              title="Сбросить"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
          <p className="text-2xl font-medium text-slate-800">{exercise.russian}</p>
        </div>

        <div className="p-6 space-y-8">
          {/* Step 1: Select Verb */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-600 uppercase tracking-wider">
              Шаг 1: Выберите форму глагола <span className="text-blue-600 lowercase">{exercise.infinitive}</span>
            </label>
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <select
                value={selectedVerb}
                onChange={(e) => {
                  setSelectedVerb(e.target.value);
                  if (status !== 'idle') setStatus('idle');
                }}
                disabled={status !== 'idle'}
                className="w-full md:w-auto px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-lg font-medium text-slate-800 bg-white disabled:bg-slate-50 disabled:text-slate-500 cursor-pointer"
              >
                <option value="" disabled>Выберите глагол...</option>
                {exercise.verbOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              
              <div className="flex-1 bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800 leading-relaxed">
                  {exercise.tenseHint}
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Build Sentence */}
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-slate-600 uppercase tracking-wider">
              Шаг 2: Составьте предложение
            </label>
            
            {/* Drop Zone */}
            <div className="min-h-[80px] p-4 bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex flex-wrap gap-2 items-center">
              {placedWords.length === 0 && (
                <span className="text-slate-400 font-medium w-full text-center">
                  Нажимайте на слова ниже, чтобы составить предложение
                </span>
              )}
              <AnimatePresence>
                {placedWords.map((word) => (
                  <motion.button
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    key={word.id}
                    onClick={() => handlePlacedWordClick(word.id)}
                    disabled={status !== 'idle'}
                    className={`px-4 py-2 rounded-lg font-medium shadow-sm transition-colors text-lg ${
                      word.id === 'verb' 
                        ? (selectedVerb ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-slate-300 text-slate-500 cursor-not-allowed')
                        : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                    }`}
                  >
                    {word.text}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            {/* Available Words */}
            <div className="flex flex-wrap gap-2 p-4 bg-white rounded-xl border border-slate-200 min-h-[80px]">
              <AnimatePresence>
                {availableWords.map((word) => (
                  <motion.button
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    key={word.id}
                    onClick={() => handleWordClick(word.id)}
                    disabled={status !== 'idle' || (word.id === 'verb' && !selectedVerb)}
                    className={`px-4 py-2 rounded-lg font-medium shadow-sm transition-colors text-lg ${
                      word.id === 'verb'
                        ? (selectedVerb ? 'bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200' : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed')
                        : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                    }`}
                  >
                    {word.text}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Actions & Feedback */}
          <div className="pt-4 border-t border-slate-100">
            {status === 'idle' ? (
              <button
                onClick={checkAnswer}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-colors shadow-sm"
              >
                Проверить
              </button>
            ) : (
              <div className="space-y-6">
                <div className={`p-6 rounded-xl flex items-start gap-4 ${
                  status === 'correct' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  {status === 'correct' ? (
                    <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-500 shrink-0" />
                  )}
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      {status === 'correct' ? 'Отлично! Правильно.' : 'Есть ошибка. Попробуйте еще раз.'}
                    </h3>
                    
                    {status === 'incorrect' && (
                      <div className="mt-3 p-4 bg-white/60 rounded-lg">
                        <p className="text-sm font-semibold text-red-800/70 uppercase tracking-wider mb-1">Правильный ответ:</p>
                        <p className="font-medium text-lg">{exercise.correctOrder.join(' ')}</p>
                      </div>
                    )}
                    
                    <div className="mt-4 flex items-start gap-2 text-sm opacity-90">
                      <Info className="w-5 h-5 shrink-0 mt-0.5" />
                      <p>{exercise.explanation}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={nextExercise}
                  className="w-full py-4 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold text-lg transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  Следующее упражнение
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
