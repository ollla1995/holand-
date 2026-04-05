/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import SentenceBuilder from './components/SentenceBuilder';
import VerbMatrixTrainer from './components/VerbMatrixTrainer';
import GrammarQuiz from './components/GrammarQuiz';
import Reference from './components/Reference';
import NietTrainer from './components/NietTrainer';
import SeparableTrainer from './components/SeparableTrainer';
import { BookOpen, Blocks, PenTool, CheckSquare, Eraser, Scissors } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'builder' | 'verbs' | 'niet' | 'separable' | 'quiz' | 'reference'>('builder');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">Dutch Grammar Trainer</h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm border border-slate-200">
          <button
            onClick={() => setActiveTab('builder')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-colors ${
              activeTab === 'builder' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Blocks className="w-5 h-5" />
            <span className="hidden sm:inline">Конструктор</span>
          </button>
          <button
            onClick={() => setActiveTab('verbs')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-colors ${
              activeTab === 'verbs' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <PenTool className="w-5 h-5" />
            <span className="hidden sm:inline">Глаголы</span>
          </button>
          <button
            onClick={() => setActiveTab('niet')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-colors ${
              activeTab === 'niet' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Eraser className="w-5 h-5" />
            <span className="hidden sm:inline">Позиция Niet</span>
          </button>
          <button
            onClick={() => setActiveTab('separable')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-colors ${
              activeTab === 'separable' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Scissors className="w-5 h-5" />
            <span className="hidden sm:inline">Отделяемые</span>
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-colors ${
              activeTab === 'quiz' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <CheckSquare className="w-5 h-5" />
            <span className="hidden sm:inline">Тест</span>
          </button>
          <button
            onClick={() => setActiveTab('reference')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-colors ${
              activeTab === 'reference' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span className="hidden sm:inline">Шпаргалки</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {activeTab === 'builder' && <SentenceBuilder />}
          {activeTab === 'verbs' && <VerbMatrixTrainer />}
          {activeTab === 'niet' && <NietTrainer />}
          {activeTab === 'separable' && <SeparableTrainer />}
          {activeTab === 'quiz' && <GrammarQuiz />}
          {activeTab === 'reference' && <Reference />}
        </div>
      </main>
    </div>
  );
}
