import React, { useState, useEffect } from 'react';
import { verbs, VerbExercise } from '../data/dutchData';
import { CheckCircle2, XCircle, RefreshCw, ArrowRight, HelpCircle } from 'lucide-react';

const subjects = [
  { pronoun: 'ik', formKey: 'ik_ott' },
  { pronoun: 'jij', formKey: 'hij_ott' }, // Special case for question: drops 't' -> ik_ott
  { pronoun: 'hij', formKey: 'hij_ott' },
  { pronoun: 'zij (она)', formKey: 'hij_ott' },
  { pronoun: 'wij', formKey: 'wij_ott' },
  { pronoun: 'jullie', formKey: 'wij_ott' },
  { pronoun: 'zij (они)', formKey: 'wij_ott' },
];

export default function VerbTransformer() {
  const [currentVerb, setCurrentVerb] = useState<VerbExercise>(verbs[0]);
  const [currentSubject, setCurrentSubject] = useState(subjects[0]);
  
  const [questionInput, setQuestionInput] = useState('');
  const [negativeInput, setNegativeInput] = useState('');
  
  const [isChecked, setIsChecked] = useState(false);
  const [results, setResults] = useState({ question: false, negative: false });

  const loadRandomExercise = () => {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    
    setCurrentVerb(randomVerb);
    setCurrentSubject(randomSubject);
    setQuestionInput('');
    setNegativeInput('');
    setIsChecked(false);
    setResults({ question: false, negative: false });
  };

  useEffect(() => {
    loadRandomExercise();
  }, []);

  const getExpectedQuestion = () => {
    let verbForm = currentVerb.forms[currentSubject.formKey as keyof typeof currentVerb.forms];
    if (currentSubject.pronoun === 'jij') {
      verbForm = currentVerb.forms['ik_ott'];
    }

    if (currentVerb.type === 'separable') {
      // e.g., "bel op" -> ["bel", "op"]
      const parts = verbForm.split(' ');
      if (parts.length === 2) {
        return `${parts[0]} ${currentSubject.pronoun} ${parts[1]}?`.toLowerCase();
      }
    }

    return `${verbForm} ${currentSubject.pronoun}?`.toLowerCase();
  };

  const getExpectedNegative = () => {
    const verbForm = currentVerb.forms[currentSubject.formKey as keyof typeof currentVerb.forms];
    
    if (currentVerb.type === 'separable') {
      // e.g., "bel op" -> ["bel", "op"]
      const parts = verbForm.split(' ');
      if (parts.length === 2) {
        return `${currentSubject.pronoun} ${parts[0]} niet ${parts[1]}.`.toLowerCase();
      }
    }

    return `${currentSubject.pronoun} ${verbForm} niet.`.toLowerCase();
  };

  const checkAnswers = () => {
    const expectedQ = getExpectedQuestion();
    const expectedN = getExpectedNegative();
    
    // Normalize inputs (remove extra spaces, handle optional punctuation)
    const normalize = (str: string) => str.toLowerCase().replace(/[.?]/g, '').trim();
    
    const isQCorrect = normalize(questionInput) === normalize(expectedQ);
    const isNCorrect = normalize(negativeInput) === normalize(expectedN);
    
    setResults({ question: isQCorrect, negative: isNCorrect });
    setIsChecked(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mt-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-blue-500" />
          Трансформер: Вопрос и Отрицание
        </h2>
        <p className="text-slate-600">Напишите вопросительную и отрицательную форму для заданного глагола и подлежащего в настоящем времени (OTT).</p>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg mb-6 border border-slate-100 flex items-center gap-6">
        <div>
          <span className="text-sm text-slate-500 uppercase font-bold tracking-wider">Глагол</span>
          <p className="text-xl font-bold text-slate-800">{currentVerb.infinitive} <span className="text-base font-normal text-slate-500">({currentVerb.translation})</span></p>
        </div>
        <div className="w-px h-10 bg-slate-200"></div>
        <div>
          <span className="text-sm text-slate-500 uppercase font-bold tracking-wider">Подлежащее</span>
          <p className="text-xl font-bold text-blue-600">{currentSubject.pronoun}</p>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {/* Question Input */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Вопрос (с вопросительным знаком)</label>
          <div className="relative">
            <input
              type="text"
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
              disabled={isChecked}
              placeholder="Например: werk jij?"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors ${
                isChecked
                  ? results.question
                    ? 'border-green-500 bg-green-50 text-green-900'
                    : 'border-red-500 bg-red-50 text-red-900'
                  : 'border-slate-300'
              }`}
            />
            {isChecked && (
              <div className="absolute right-3 top-3.5">
                {results.question ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
              </div>
            )}
          </div>
          {isChecked && !results.question && (
            <p className="mt-2 text-sm text-red-600 font-medium">Правильно: {getExpectedQuestion()}</p>
          )}
        </div>

        {/* Negative Input */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Отрицание (с точкой)</label>
          <div className="relative">
            <input
              type="text"
              value={negativeInput}
              onChange={(e) => setNegativeInput(e.target.value)}
              disabled={isChecked}
              placeholder="Например: jij werkt niet."
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors ${
                isChecked
                  ? results.negative
                    ? 'border-green-500 bg-green-50 text-green-900'
                    : 'border-red-500 bg-red-50 text-red-900'
                  : 'border-slate-300'
              }`}
            />
            {isChecked && (
              <div className="absolute right-3 top-3.5">
                {results.negative ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
              </div>
            )}
          </div>
          {isChecked && !results.negative && (
            <p className="mt-2 text-sm text-red-600 font-medium">Правильно: {getExpectedNegative()}</p>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-3">
        {!isChecked ? (
          <button
            onClick={checkAnswers}
            disabled={!questionInput.trim() || !negativeInput.trim()}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Проверить
          </button>
        ) : (
          <button
            onClick={loadRandomExercise}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Следующий глагол
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
