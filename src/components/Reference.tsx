import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Layers, ArrowRightLeft, Maximize2, Scissors, Magnet, Eraser, Table, CheckCircle2 } from 'lucide-react';
import AnimatedExample from './AnimatedExample';

// Animation States
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

const modalA = [
  { id: 'subj', color: 'bg-blue-600', text: 'Ik' },
  { id: 'modal', color: 'bg-red-600', text: 'wil' },
  { id: 'inf', color: 'bg-orange-500', text: 'aankleden' },
  { id: 'refl', color: 'bg-emerald-500', text: 'me' },
  { id: 'rest', color: 'bg-slate-500', text: 'nu' },
];
const modalB = [
  { id: 'subj', color: 'bg-blue-600', text: 'Ik' },
  { id: 'modal', color: 'bg-red-600', text: 'wil' },
  { id: 'refl', color: 'bg-emerald-500', text: 'me' },
  { id: 'rest', color: 'bg-slate-500', text: 'nu' },
  { id: 'inf', color: 'bg-orange-500', text: 'aankleden' },
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

const omdatA = [
  { id: 'omdat', color: 'bg-slate-400', text: 'omdat' },
  { id: 'subj', color: 'bg-blue-600', text: 'hij' },
  { id: 'verb', color: 'bg-red-600', text: 'wil' },
  { id: 'refl', color: 'bg-emerald-500', text: 'zich' },
  { id: 'inf', color: 'bg-orange-500', text: 'voorbereiden' },
];
const omdatB = [
  { id: 'omdat', color: 'bg-slate-400', text: 'omdat' },
  { id: 'subj', color: 'bg-blue-600', text: 'hij' },
  { id: 'refl', color: 'bg-emerald-500', text: 'zich' },
  { id: 'inf', color: 'bg-orange-500', text: 'voorbereiden' },
  { id: 'verb', color: 'bg-red-600', text: 'wil' },
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

export default function Reference() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      
      {/* Header & Legend */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <Layers className="w-8 h-8 text-blue-600" />
          Архитектура предложения
        </h2>
        
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-8">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Цветовой код (Строительные блоки)</h3>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-blue-600"></div> Подлежащее</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-red-600"></div> Глагол 1 / Модальный</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-emerald-500"></div> Возвратное (zich)</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-slate-500"></div> Остальное (Время/Место)</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-orange-500"></div> Инфинитив / Глагол 2</div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-slate-800"></div> Отрицание (niet)</div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Rule 2: Inversion */}
          <section>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-2">
              <ArrowRightLeft className="w-6 h-6 text-amber-500" />
              Инверсия (Перестановка мебели)
            </h3>
            <p className="text-slate-600">Глагол — это король, который не двигается с трона (2-е место). Если на 1-е место выходит Время или Место, подлежащее уступает и уходит на 3-е место.</p>
            <AnimatedExample stateA={inversionA} stateB={inversionB} />
          </section>

          {/* Rule 3: Modal Frame */}
          <section>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-2">
              <Maximize2 className="w-6 h-6 text-blue-500" />
              Несущая рамка (Модальные глаголы)
            </h3>
            <p className="text-slate-600">Глаголы <strong>willen, kunnen, moeten, mogen</strong> создают физическую скобку вокруг предложения. Спрягаемый глагол стоит на 2-м месте, а инфинитив улетает в самый конец.</p>
            <AnimatedExample stateA={modalA} stateB={modalB} />
          </section>

          {/* Rule 8: Separable Verbs */}
          <section>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-2">
              <Scissors className="w-6 h-6 text-red-500" />
              Отделяемые глаголы (Модульные блоки)
            </h3>
            <p className="text-slate-600">В настоящем времени (OTT) приставка отрывается от глагола и убегает в самый конец предложения, образуя рамку.</p>
            <AnimatedExample stateA={sepA} stateB={sepB} />
          </section>

          {/* Rule 5: Omdat Magnet */}
          <section>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-2">
              <Magnet className="w-6 h-6 text-purple-500" />
              Эффект Магнита (Сложноподчиненные)
            </h3>
            <p className="text-slate-600">Союзы <strong>omdat, dat, als</strong> работают как магнит — они выталкивают все глаголы в самый конец придаточного предложения.</p>
            <AnimatedExample stateA={omdatA} stateB={omdatB} />
          </section>

          {/* Rule 9: Niet */}
          <section>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-2">
              <Eraser className="w-6 h-6 text-slate-800" />
              Позиция отрицания (Niet)
            </h3>
            <p className="text-slate-600">Слово <strong>niet</strong> стремится в конец предложения, но всегда уступает место и встает <strong>ПЕРЕД</strong> вторым глаголом (инфинитивом), прилагательным или предлогом.</p>
            <AnimatedExample stateA={nietA} stateB={nietB} />
          </section>
        </div>
      </div>

      {/* Summary Tables */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
          <Table className="w-8 h-8 text-blue-600" />
          Сводные таблицы
        </h2>

        {/* Matrix Table */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Матрица Автоматизма (Глагол: zich voorbereiden)</h3>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm text-left text-slate-700">
              <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                <tr>
                  <th className="px-6 py-4">Время / Конструкция</th>
                  <th className="px-6 py-4 text-green-600">[+] Утверждение</th>
                  <th className="px-6 py-4 text-red-600">[-] Отрицание</th>
                  <th className="px-6 py-4 text-blue-600">[?] Вопрос</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold">OTT (Настоящее)</td>
                  <td className="px-6 py-4">Hij wil zich voorbereiden.</td>
                  <td className="px-6 py-4">Hij wil zich <span className="font-bold text-slate-900">niet</span> voorbereiden.</td>
                  <td className="px-6 py-4">Wil hij zich voorbereiden?</td>
                </tr>
                <tr className="bg-white border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold">OVT (Прошедшее)</td>
                  <td className="px-6 py-4">Hij wilde zich voorbereiden.</td>
                  <td className="px-6 py-4">Hij wilde zich <span className="font-bold text-slate-900">niet</span> voorbereiden.</td>
                  <td className="px-6 py-4">Wilde hij zich voorbereiden?</td>
                </tr>
                <tr className="bg-white border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold">VTT (Перфект)</td>
                  <td className="px-6 py-4">Hij heeft zich moeten voorbereiden.</td>
                  <td className="px-6 py-4">Hij heeft zich <span className="font-bold text-slate-900">niet</span> moeten voorbereiden.</td>
                  <td className="px-6 py-4">Heeft hij zich moeten voorbereiden?</td>
                </tr>
                <tr className="bg-white border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold">Gaan (Будущее)</td>
                  <td className="px-6 py-4">Hij gaat zich voorbereiden.</td>
                  <td className="px-6 py-4">Hij gaat zich <span className="font-bold text-slate-900">niet</span> voorbereiden.</td>
                  <td className="px-6 py-4">Gaat hij zich voorbereiden?</td>
                </tr>
                <tr className="bg-white border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold">Aan het (Континиус)</td>
                  <td className="px-6 py-4">Hij is zich aan het voorbereiden.</td>
                  <td className="px-6 py-4">Hij is zich <span className="font-bold text-slate-900">niet</span> aan het voorbereiden.</td>
                  <td className="px-6 py-4">Is hij zich aan het voorbereiden?</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold">Omdat (Подчинение)</td>
                  <td className="px-6 py-4">..., omdat hij zich voorbereiden wil.</td>
                  <td className="px-6 py-4">..., omdat hij zich <span className="font-bold text-slate-900">niet</span> voorbereiden wil.</td>
                  <td className="px-6 py-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Separable Verbs Evolution */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Эволюция фразы: Отделяемые глаголы (opbellen)</h3>
          <p className="text-slate-600 mb-4">Обратите внимание, как приставка и глагол ведут себя в зависимости от времени (Золотые правила).</p>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm text-left text-slate-700">
              <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                <tr>
                  <th className="px-6 py-4">Время</th>
                  <th className="px-6 py-4">Пример</th>
                  <th className="px-6 py-4">Правило</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold">Настоящее (OTT)</td>
                  <td className="px-6 py-4 text-base">
                    Ik <span className="bg-blue-600 text-white px-2 py-1 rounded inline-block mx-1">bel</span> je vandaag <span className="bg-orange-500 text-white px-2 py-1 rounded inline-block mx-1">op</span>.
                  </td>
                  <td className="px-6 py-4">Приставка отрывается и убегает в самый конец предложения.</td>
                </tr>
                <tr className="bg-white border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold">Прошедшее (VTT)</td>
                  <td className="px-6 py-4 text-base">
                    Ik <span className="bg-slate-500 text-white px-2 py-1 rounded inline-block mx-1">heb</span> je vandaag <span className="inline-flex mx-1"><span className="bg-orange-500 text-white px-2 py-1 rounded-l">op</span><span className="bg-slate-700 text-white px-2 py-1">ge</span><span className="bg-blue-600 text-white px-2 py-1 rounded-r">beld</span></span>.
                  </td>
                  <td className="px-6 py-4">Приставка + <strong>ge</strong> + основа сливаются в конце.</td>
                </tr>
                <tr className="bg-white border-b hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold">Будущее (Gaan)</td>
                  <td className="px-6 py-4 text-base">
                    Ik <span className="bg-slate-500 text-white px-2 py-1 rounded inline-block mx-1">ga</span> je morgen <span className="inline-flex mx-1"><span className="bg-orange-500 text-white px-2 py-1 rounded-l">op</span><span className="bg-blue-600 text-white px-2 py-1 rounded-r">bellen</span></span>.
                  </td>
                  <td className="px-6 py-4">Целый и первозданный инфинитив стоит в конце.</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold">Длительное (Aan het)</td>
                  <td className="px-6 py-4 text-base">
                    Ik <span className="bg-slate-500 text-white px-2 py-1 rounded inline-block mx-1">ben</span> je nu aan het <span className="inline-flex mx-1"><span className="bg-orange-500 text-white px-2 py-1 rounded-l">op</span><span className="bg-blue-600 text-white px-2 py-1 rounded-r">bellen</span></span>.
                  </td>
                  <td className="px-6 py-4">Целый инфинитив стоит в конце после 'aan het'.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Ketchup & Reflexive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Sexy Soft Ketchup */}
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Алгоритм "Sexy Soft Ketchup"
            </h3>
            <p className="text-amber-800 text-sm mb-4">Для правильных глаголов в OVT и VTT. Посмотрите на последнюю букву основы (stam).</p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <div className="font-bold text-slate-800 mb-1">Буква есть в словах:</div>
                <div className="text-xl font-black text-amber-600 tracking-widest mb-2">S e X y &nbsp; S o F t &nbsp; K e T c H u P</div>
                <div className="flex gap-4 text-sm font-medium">
                  <div className="bg-amber-100 px-3 py-1 rounded text-amber-800">OVT: + te / ten</div>
                  <div className="bg-amber-100 px-3 py-1 rounded text-amber-800">VTT: + t</div>
                </div>
                <div className="text-xs text-slate-500 mt-2">Пример: werk (k) → werkte / gewerkt</div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <div className="font-bold text-slate-800 mb-2">Буквы НЕТ в этих словах:</div>
                <div className="flex gap-4 text-sm font-medium">
                  <div className="bg-slate-100 px-3 py-1 rounded text-slate-700">OVT: + de / den</div>
                  <div className="bg-slate-100 px-3 py-1 rounded text-slate-700">VTT: + d</div>
                </div>
                <div className="text-xs text-slate-500 mt-2">Пример: hoor (r) → hoorde / gehoord</div>
              </div>
            </div>
          </div>

          {/* Reflexive Pronouns */}
          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
            <h3 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Возвратные местоимения (Zich)
            </h3>
            <p className="text-emerald-800 text-sm mb-4">Частица "себя" меняется в зависимости от действующего лица.</p>
            
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase text-emerald-800 border-b border-emerald-200">
                <tr>
                  <th className="py-2">Лицо</th>
                  <th className="py-2">Местоимение</th>
                </tr>
              </thead>
              <tbody className="text-emerald-900 font-medium">
                <tr className="border-b border-emerald-100"><td className="py-2">Ik</td><td className="py-2 text-emerald-600">me</td></tr>
                <tr className="border-b border-emerald-100"><td className="py-2">Jij / Je</td><td className="py-2 text-emerald-600">je</td></tr>
                <tr className="border-b border-emerald-100"><td className="py-2">Hij / Zij / Het / U</td><td className="py-2 text-emerald-600 font-bold">zich</td></tr>
                <tr className="border-b border-emerald-100"><td className="py-2">Wij</td><td className="py-2 text-emerald-600">ons</td></tr>
                <tr className="border-b border-emerald-100"><td className="py-2">Jullie</td><td className="py-2 text-emerald-600">je</td></tr>
                <tr><td className="py-2">Zij (Они)</td><td className="py-2 text-emerald-600 font-bold">zich</td></tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
