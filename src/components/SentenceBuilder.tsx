import React, { useState, useEffect } from 'react';
import { sentences, SentenceExercise } from '../data/dutchData';
import { CheckCircle2, XCircle, RefreshCw, ArrowRight } from 'lucide-react';
import AnimatedExample from './AnimatedExample';
import VerbTransformer from './VerbTransformer';

const inversionA = [
  { id: 'subj', color: 'bg-blue-600', text: 'Ik' },
  { id: 'verb', color: 'bg-red-600', text: 'werk' },
  { id: 'rest', color: 'bg-slate-500', text: 'vandaag' },
];
const inversionB = [
  { id: 'rest', color: 'bg-slate-500', text: 'Vandaag' },
  { id: 'verb', color: 'bg-red-600', text: 'werk' },
  { id: 'subj', color: 'bg-blue-600', text: 'ik' },
];

const directA = [
  { id: 'subj', color: 'bg-blue-600', text: 'Ik' },
  { id: 'modal', color: 'bg-red-600', text: 'wil' },
  { id: 'inf', color: 'bg-orange-500', text: 'aankleden' },
  { id: 'refl', color: 'bg-emerald-500', text: 'me' },
  { id: 'rest', color: 'bg-slate-500', text: 'nu' },
];
const directB = [
  { id: 'subj', color: 'bg-blue-600', text: 'Ik' },
  { id: 'modal', color: 'bg-red-600', text: 'wil' },
  { id: 'refl', color: 'bg-emerald-500', text: 'me' },
  { id: 'rest', color: 'bg-slate-500', text: 'nu' },
  { id: 'inf', color: 'bg-orange-500', text: 'aankleden' },
];

const twoInfinitivesA = [
  { id: 'subj', color: 'bg-blue-600', text: 'Wij' },
  { id: 'aux', color: 'bg-slate-500', text: 'hebben' },
  { id: 'modal', color: 'bg-orange-500', text: 'moeten' },
  { id: 'inf', color: 'bg-orange-500', text: 'aankleden' },
  { id: 'refl', color: 'bg-emerald-500', text: 'ons' },
  { id: 'rest', color: 'bg-slate-500', text: 'gisteren' },
];
const twoInfinitivesB = [
  { id: 'subj', color: 'bg-blue-600', text: 'Wij' },
  { id: 'aux', color: 'bg-slate-500', text: 'hebben' },
  { id: 'refl', color: 'bg-emerald-500', text: 'ons' },
  { id: 'rest', color: 'bg-slate-500', text: 'gisteren' },
  { id: 'modal', color: 'bg-orange-500', text: 'moeten' },
  { id: 'inf', color: 'bg-orange-500', text: 'aankleden' },
];

const gaanA = [
  { id: 'subj', color: 'bg-blue-600', text: 'Ik' },
  { id: 'aux', color: 'bg-slate-500', text: 'ga' },
  { id: 'inf', color: 'bg-orange-500', text: 'inschrijven' },
  { id: 'refl', color: 'bg-emerald-500', text: 'me' },
  { id: 'rest', color: 'bg-slate-500', text: 'morgen' },
];
const gaanB = [
  { id: 'subj', color: 'bg-blue-600', text: 'Ik' },
  { id: 'aux', color: 'bg-slate-500', text: 'ga' },
  { id: 'refl', color: 'bg-emerald-500', text: 'me' },
  { id: 'rest', color: 'bg-slate-500', text: 'morgen' },
  { id: 'inf', color: 'bg-orange-500', text: 'inschrijven' },
];

const aanHetA = [
  { id: 'subj', color: 'bg-blue-600', text: 'Ik' },
  { id: 'aux', color: 'bg-slate-500', text: 'ben' },
  { id: 'aanhet', color: 'bg-orange-400', text: 'aan het' },
  { id: 'inf', color: 'bg-orange-500', text: 'aankleden' },
  { id: 'refl', color: 'bg-emerald-500', text: 'me' },
  { id: 'rest', color: 'bg-slate-500', text: 'nu' },
];
const aanHetB = [
  { id: 'subj', color: 'bg-blue-600', text: 'Ik' },
  { id: 'aux', color: 'bg-slate-500', text: 'ben' },
  { id: 'refl', color: 'bg-emerald-500', text: 'me' },
  { id: 'rest', color: 'bg-slate-500', text: 'nu' },
  { id: 'aanhet', color: 'bg-orange-400', text: 'aan het' },
  { id: 'inf', color: 'bg-orange-500', text: 'aankleden' },
];

const questionA = [
  { id: 'subj', color: 'bg-blue-600', text: 'jij' },
  { id: 'verb', color: 'bg-red-600', text: 'Wil' },
  { id: 'refl', color: 'bg-emerald-500', text: 'je' },
  { id: 'rest', color: 'bg-slate-500', text: 'vandaag' },
  { id: 'inf', color: 'bg-orange-500', text: 'aankleden' },
];
const questionB = [
  { id: 'verb', color: 'bg-red-600', text: 'Wil' },
  { id: 'subj', color: 'bg-blue-600', text: 'jij' },
  { id: 'refl', color: 'bg-emerald-500', text: 'je' },
  { id: 'rest', color: 'bg-slate-500', text: 'vandaag' },
  { id: 'inf', color: 'bg-orange-500', text: 'aankleden' },
];

const omdatA = [
  { id: 'omdat', color: 'bg-slate-400', text: 'omdat' },
  { id: 'subj', color: 'bg-blue-600', text: 'ik' },
  { id: 'verb', color: 'bg-red-600', text: 'moet' },
  { id: 'refl', color: 'bg-emerald-500', text: 'me' },
  { id: 'inf', color: 'bg-orange-500', text: 'aankleden' },
];
const omdatB = [
  { id: 'omdat', color: 'bg-slate-400', text: 'omdat' },
  { id: 'subj', color: 'bg-blue-600', text: 'ik' },
  { id: 'refl', color: 'bg-emerald-500', text: 'me' },
  { id: 'inf', color: 'bg-orange-500', text: 'aankleden' },
  { id: 'verb', color: 'bg-red-600', text: 'moet' },
];

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

const getAnimationForSentence = (id: number) => {
  switch (id) {
    case 1:
      return {
        title: "Правило: Прямой порядок и Модальная рамка",
        desc: "Модальный глагол на 2-м месте, инфинитив в конце.",
        stateA: directA,
        stateB: directB
      };
    case 2:
    case 12:
      return {
        title: "Правило: Инверсия",
        desc: "Глагол всегда на 2-м месте. Если на 1-е место выходит Время или Место, подлежащее уступает и уходит на 3-е место.",
        stateA: inversionA,
        stateB: inversionB
      };
    case 3:
      return {
        title: "Правило: Правило двух инфинитивов (VTT)",
        desc: "Вспомогательный hebben на 2-м месте, а модальный и смысловой глаголы уходят в конец в форме инфинитива.",
        stateA: twoInfinitivesA,
        stateB: twoInfinitivesB
      };
    case 4:
      return {
        title: "Правило: Конструкция с Gaan (Будущее)",
        desc: "'gaan' работает как модальный глагол, создавая рамку с инфинитивом в конце.",
        stateA: gaanA,
        stateB: gaanB
      };
    case 5:
      return {
        title: "Правило: Континиус (Aan het)",
        desc: "zijn + aan het + инфинитив. Возвратное местоимение стоит сразу после 'zijn'.",
        stateA: aanHetA,
        stateB: aanHetB
      };
    case 6:
    case 7:
      return {
        title: "Правило: Вопрос",
        desc: "Инверсия. Глагол на 1-м месте (или после вопросительного слова).",
        stateA: questionA,
        stateB: questionB
      };
    case 8:
      return {
        title: "Правило: Позиция Niet",
        desc: "Niet ставится ПЕРЕД инфинитивом в конце.",
        stateA: nietA,
        stateB: nietB
      };
    case 9:
      return {
        title: "Правило: Подчинение (omdat)",
        desc: "Глагольная рамка 'схлопывается'. Спрягаемый глагол отправляется в самый конец.",
        stateA: omdatA,
        stateB: omdatB
      };
    case 10:
    case 11:
      return {
        title: "Правило: Отделяемые глаголы",
        desc: "Приставка отрывается от основы и убегает в самый конец предложения.",
        stateA: sepA,
        stateB: sepB
      };
    default:
      return {
        title: "Правило: Инверсия",
        desc: "Глагол всегда на 2-м месте. Если на 1-е место выходит Время или Место, подлежащее уступает и уходит на 3-е место.",
        stateA: inversionA,
        stateB: inversionB
      };
  }
};

export default function SentenceBuilder() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState<SentenceExercise>(sentences[0]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    loadSentence(currentIndex);
  }, [currentIndex]);

  const loadSentence = (index: number) => {
    const sentence = sentences[index];
    setCurrentSentence(sentence);
    // Shuffle words
    const shuffled = [...sentence.words].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setSelectedWords([]);
    setIsChecked(false);
    setIsCorrect(false);
  };

  const handleWordClick = (word: string, fromAvailable: boolean) => {
    if (isChecked) return;

    if (fromAvailable) {
      setAvailableWords(availableWords.filter(w => w !== word));
      setSelectedWords([...selectedWords, word]);
    } else {
      setSelectedWords(selectedWords.filter(w => w !== word));
      setAvailableWords([...availableWords, word]);
    }
  };

  const checkAnswer = () => {
    const isMatch = selectedWords.join(' ') === currentSentence.correctOrder.join(' ');
    setIsCorrect(isMatch);
    setIsChecked(true);
  };

  const nextSentence = () => {
    if (currentIndex < sentences.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back
    }
  };

  const resetSentence = () => {
    loadSentence(currentIndex);
  };

  const currentAnimation = getAnimationForSentence(currentSentence.id);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Animation Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{currentAnimation.title}</h3>
        <AnimatedExample stateA={currentAnimation.stateA} stateB={currentAnimation.stateB} ruleText={currentAnimation.desc} />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Конструктор предложений</h2>
          <p className="text-slate-600">Соберите предложение в правильном порядке.</p>
        </div>

      <div className="bg-slate-50 p-4 rounded-lg mb-6 border border-slate-100">
        <p className="text-lg font-medium text-slate-700">{currentSentence.russian}</p>
      </div>

      {/* Selected Words Area */}
      <div className="min-h-[80px] p-4 bg-slate-100 rounded-lg mb-6 flex flex-wrap gap-2 items-start border-2 border-dashed border-slate-300">
        {selectedWords.length === 0 && !isChecked && (
          <span className="text-slate-400 italic">Нажимайте на слова ниже...</span>
        )}
        {selectedWords.map((word, idx) => (
          <button
            key={`sel-${idx}`}
            onClick={() => handleWordClick(word, false)}
            disabled={isChecked}
            className={`px-4 py-2 rounded-md font-medium text-white shadow-sm transition-transform active:scale-95 ${
              isChecked ? (isCorrect ? 'bg-green-500' : 'bg-red-500') : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Available Words Area */}
      <div className="flex flex-wrap gap-2 mb-8 min-h-[60px]">
        {availableWords.map((word, idx) => (
          <button
            key={`avail-${idx}`}
            onClick={() => handleWordClick(word, true)}
            disabled={isChecked}
            className="px-4 py-2 bg-white border-2 border-slate-200 text-slate-700 rounded-md font-medium hover:border-blue-400 hover:text-blue-600 transition-colors active:scale-95"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Feedback Area */}
      {isChecked && (
        <div className={`p-4 rounded-lg mb-6 flex items-start gap-3 ${isCorrect ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          {isCorrect ? <CheckCircle2 className="w-6 h-6 shrink-0 text-green-600" /> : <XCircle className="w-6 h-6 shrink-0 text-red-600" />}
          <div>
            <p className="font-bold mb-1">{isCorrect ? 'Отлично!' : 'Ошибка'}</p>
            {!isCorrect && (
              <p className="mb-2">Правильно: <span className="font-bold">{currentSentence.correctOrder.join(' ')}</span></p>
            )}
            <p className="text-sm opacity-90">{currentSentence.explanation}</p>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex justify-between items-center pt-4 border-t border-slate-100">
        <span className="text-sm text-slate-500 font-medium">
          {currentIndex + 1} / {sentences.length}
        </span>
        <div className="flex gap-3">
          <button
            onClick={resetSentence}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Сбросить
          </button>
          
          {!isChecked ? (
            <button
              onClick={checkAnswer}
              disabled={availableWords.length > 0}
              className="flex items-center gap-2 px-6 py-2 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Проверить
            </button>
          ) : (
            <button
              onClick={nextSentence}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Дальше
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
    
    <VerbTransformer />
    </div>
  );
}
