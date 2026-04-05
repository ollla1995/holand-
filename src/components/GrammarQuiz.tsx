import React, { useState } from 'react';
import { quizQuestions } from '../data/dutchData';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

export default function GrammarQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Тест завершен!</h2>
        <p className="text-xl text-slate-600 mb-8">
          Ваш результат: <span className="font-bold text-slate-800">{score}</span> из {quizQuestions.length}
        </p>
        <button
          onClick={restartQuiz}
          className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          Пройти еще раз
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Тест по правилам</h2>
        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full font-medium text-sm">
          Вопрос {currentIndex + 1} из {quizQuestions.length}
        </span>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-medium text-slate-800 leading-relaxed">
          {currentQuestion.question}
        </h3>
      </div>

      <div className="space-y-3 mb-8">
        {currentQuestion.options.map((option, index) => {
          let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium ";
          
          if (!isAnswered) {
            buttonClass += "border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700";
          } else {
            if (index === currentQuestion.correctAnswer) {
              buttonClass += "border-green-500 bg-green-50 text-green-900";
            } else if (index === selectedOption) {
              buttonClass += "border-red-500 bg-red-50 text-red-900";
            } else {
              buttonClass += "border-slate-200 opacity-50 text-slate-500";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              disabled={isAnswered}
              className={buttonClass}
            >
              <div className="flex justify-between items-center">
                <span>{option}</span>
                {isAnswered && index === currentQuestion.correctAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                )}
                {isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer && (
                  <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 mb-8">
          <h4 className="font-bold text-blue-900 mb-2">Объяснение:</h4>
          <p className="text-blue-800">{currentQuestion.explanation}</p>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={nextQuestion}
          disabled={!isAnswered}
          className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-colors ${
            isAnswered
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
        >
          {currentIndex === quizQuestions.length - 1 ? 'Завершить' : 'Следующий вопрос'}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
