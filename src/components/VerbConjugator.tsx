import React, { useState, useEffect } from 'react';
import { verbs, VerbExercise } from '../data/dutchData';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export default function VerbConjugator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVerb, setCurrentVerb] = useState<VerbExercise>(verbs[0]);
  const [answers, setAnswers] = useState({
    ik_ott: '',
    hij_ott: '',
    wij_ott: '',
    ik_ovt: '',
    wij_ovt: '',
    vtt: '',
    ik_continuous: '',
    hij_continuous: '',
    ik_future: '',
    hij_future: ''
  });
  const [isChecked, setIsChecked] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});

  useEffect(() => {
    loadVerb(currentIndex);
  }, [currentIndex]);

  const loadVerb = (index: number) => {
    setCurrentVerb(verbs[index]);
    setAnswers({
      ik_ott: '',
      hij_ott: '',
      wij_ott: '',
      ik_ovt: '',
      wij_ovt: '',
      vtt: '',
      ik_continuous: '',
      hij_continuous: '',
      ik_future: '',
      hij_future: ''
    });
    setIsChecked(false);
    setResults({});
  };

  const handleChange = (field: keyof typeof answers, value: string) => {
    setAnswers({ ...answers, [field]: value });
  };

  const checkAnswers = () => {
    const newResults: Record<string, boolean> = {};
    let allCorrect = true;

    Object.keys(answers).forEach((key) => {
      const isCorrect = answers[key as keyof typeof answers].trim().toLowerCase() === currentVerb.forms[key as keyof typeof currentVerb.forms].toLowerCase();
      newResults[key] = isCorrect;
      if (!isCorrect) allCorrect = false;
    });

    setResults(newResults);
    setIsChecked(true);
  };

  const nextVerb = () => {
    if (currentIndex < verbs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const renderInputRow = (label: string, field: keyof typeof answers, placeholder: string) => {
    return (
      <div className="flex items-center gap-4 mb-4">
        <div className="w-24 font-medium text-slate-700 text-right">{label}</div>
        <div className="relative flex-1">
          <input
            type="text"
            value={answers[field]}
            onChange={(e) => handleChange(field, e.target.value)}
            disabled={isChecked}
            placeholder={placeholder}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors ${
              isChecked
                ? results[field]
                  ? 'border-green-500 bg-green-50 text-green-900'
                  : 'border-red-500 bg-red-50 text-red-900'
                : 'border-slate-300'
            }`}
          />
          {isChecked && (
            <div className="absolute right-3 top-2.5">
              {results[field] ? (
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
          )}
        </div>
        {isChecked && !results[field] && (
          <div className="w-1/3 text-sm font-medium text-red-600">
            {currentVerb.forms[field]}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Матрица глаголов</h2>
          <p className="text-slate-600">Заполните формы глагола.</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-blue-600">{currentVerb.infinitive}</div>
          <div className="text-slate-500 font-medium">{currentVerb.translation}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* OTT Section */}
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Настоящее (O.T.T.)</h3>
          {renderInputRow('Ik', 'ik_ott', 'Основа')}
          {renderInputRow('Hij/Zij', 'hij_ott', 'Основа + t')}
          {renderInputRow('Wij', 'wij_ott', 'Инфинитив')}
        </div>

        {/* OVT Section */}
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="text-lg font-bold text-slate-800">Прошедшее (O.V.T.)</h3>
            {currentVerb.type === 'regular' && (
              <span className="text-xs font-bold px-2 py-1 bg-amber-100 text-amber-800 rounded-md">
                't Kofschip: {currentVerb.ketchup ? 'Да' : 'Нет'}
              </span>
            )}
          </div>
          {renderInputRow('Ik', 'ik_ovt', 'Основа + te/de')}
          {renderInputRow('Wij', 'wij_ovt', 'Основа + ten/den')}
        </div>

        {/* VTT Section */}
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="text-lg font-bold text-slate-800">Перфект (V.T.T.)</h3>
            <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
              Вспом.: {currentVerb.auxiliary}
            </span>
          </div>
          {renderInputRow('Ik', 'vtt', 'heb/ben + ge-stam-t/d')}
        </div>

        {/* Continuous Section */}
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Континиус (Aan het)</h3>
          {renderInputRow('Ik', 'ik_continuous', 'ben aan het ...')}
          {renderInputRow('Hij/Zij', 'hij_continuous', 'is aan het ...')}
        </div>

        {/* Future Section */}
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 md:col-span-2">
          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Будущее (Gaan)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {renderInputRow('Ik', 'ik_future', 'ga ...')}
            {renderInputRow('Hij/Zij', 'hij_future', 'gaat ...')}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
        <span className="text-sm text-slate-500 font-medium">
          Глагол {currentIndex + 1} из {verbs.length}
        </span>
        <div className="flex gap-3">
          {!isChecked ? (
            <button
              onClick={checkAnswers}
              className="flex items-center gap-2 px-8 py-3 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-colors"
            >
              Проверить
            </button>
          ) : (
            <button
              onClick={nextVerb}
              className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Следующий глагол
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
