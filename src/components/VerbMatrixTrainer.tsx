import React, { useState, useEffect } from 'react';
import { verbs, VerbExercise } from '../data/dutchData';
import { CheckCircle2, XCircle, ArrowRight, RefreshCw, Settings2, Info, ChevronDown, ChevronUp } from 'lucide-react';

const PRONOUNS = ['ik', 'jij', 'hij', 'wij', 'jullie', 'zij'];
const TENSES = [
  { id: 'OTT', name: 'Настоящее (OTT)' },
  { id: 'OVT', name: 'Прошедшее (OVT)' },
  { id: 'VTT', name: 'Перфект (VTT)' },
  { id: 'Continuous', name: 'Континиус (Aan het)' },
  { id: 'Future', name: 'Будущее (Gaan)' },
];

type FormType = 'pos' | 'q' | 'neg';

const Cube = ({ type, children }: { type: 'subject' | 'verb' | 'rest' | 'niet' | 'reflexive', children: React.ReactNode }) => {
  const styles = {
    subject: 'bg-blue-100 border-blue-300 text-blue-800 shadow-[0_3px_0_rgb(147,197,253)]',
    verb: 'bg-orange-100 border-orange-300 text-orange-800 shadow-[0_3px_0_rgb(253,186,116)]',
    rest: 'bg-emerald-100 border-emerald-300 text-emerald-800 shadow-[0_3px_0_rgb(110,231,183)]',
    niet: 'bg-red-100 border-red-400 text-red-800 shadow-[0_3px_0_rgb(248,113,113)]',
    reflexive: 'bg-purple-100 border-purple-300 text-purple-800 shadow-[0_3px_0_rgb(216,180,254)]',
  };
  return (
    <div className={`px-3 py-1.5 rounded-lg border-2 font-bold text-xs sm:text-sm flex items-center justify-center text-center transform transition-transform hover:-translate-y-0.5 ${styles[type]}`}>
      {children}
    </div>
  );
};

const CheatSheet = ({ currentTense }: { currentTense: string }) => {
  const [isOpen, setIsOpen] = useState(true);

  const renderTenseRules = () => {
    switch (currentTense) {
      case 'OTT':
        return (
          <>
            <h4 className="font-bold text-slate-700 mb-4 border-b pb-2">Окончания (Настоящее время - OTT)</h4>
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 border-b border-slate-200">
                  <tr>
                    <th className="p-3 text-left text-slate-600">Местоимение</th>
                    <th className="p-3 text-left text-slate-600">Правило</th>
                    <th className="p-3 text-left text-slate-600">Пример (werken)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-bold text-slate-700">ik</td>
                    <td className="p-3"><Cube type="verb">Основа</Cube></td>
                    <td className="p-3 font-medium">werk</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">jij / u / hij / zij</td>
                    <td className="p-3"><Cube type="verb">Основа + t</Cube></td>
                    <td className="p-3 font-medium">werk<span className="text-red-500 font-bold">t</span></td>
                  </tr>
                  <tr className="bg-blue-50/50">
                    <td className="p-3 font-bold text-blue-700">вопрос: werk jij?</td>
                    <td className="p-3 text-blue-700 font-medium">Для jij в вопросе <span className="font-bold text-red-500">-t</span> исчезает!</td>
                    <td className="p-3 font-medium text-blue-700">werk</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">wij / jullie / zij</td>
                    <td className="p-3"><Cube type="verb">Инфинитив</Cube></td>
                    <td className="p-3 font-medium">werken</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
      case 'OVT':
        return (
          <>
            <h4 className="font-bold text-slate-700 mb-4 border-b pb-2">Окончания (Прошедшее время - OVT)</h4>
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 border-b border-slate-200">
                  <tr>
                    <th className="p-3 text-left text-slate-600">Местоимение</th>
                    <th className="p-3 text-left text-slate-600">Правило</th>
                    <th className="p-3 text-left text-slate-600">Пример (werken)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-bold text-slate-700">ik / jij / hij</td>
                    <td className="p-3"><Cube type="verb">Основа + te/de</Cube></td>
                    <td className="p-3 font-medium">werk<span className="text-red-500 font-bold">te</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">wij / jullie / zij</td>
                    <td className="p-3"><Cube type="verb">Основа + ten/den</Cube></td>
                    <td className="p-3 font-medium">werk<span className="text-red-500 font-bold">ten</span></td>
                  </tr>
                  <tr className="bg-amber-50/50">
                    <td colSpan={3} className="p-3 text-amber-800 font-medium">
                      <strong>Правило 't Kofschip (Правильные глаголы):</strong> Если основа заканчивается на глухую согласную (t, k, f, s, c, h, p), добавляем <strong>-te(n)</strong>. Иначе <strong>-de(n)</strong>.
                    </td>
                  </tr>
                  <tr className="bg-purple-50/50">
                    <td colSpan={3} className="p-3 text-purple-800 font-medium">
                      <strong>Неправильные глаголы:</strong> Меняют корневую гласную (Ablaut). Окончания -te/-de не добавляются! Для ед.ч. (ik/jij/hij) берется просто измененная основа, для мн.ч. (wij/jullie/zij) добавляется -en. <br/><em>Пример: kijken {'->'} keek (ед.ч), keken (мн.ч).</em>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
      case 'VTT':
        return (
          <>
            <h4 className="font-bold text-slate-700 mb-4 border-b pb-2">Окончания (Перфект - VTT)</h4>
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 border-b border-slate-200">
                  <tr>
                    <th className="p-3 text-left text-slate-600">Местоимение</th>
                    <th className="p-3 text-left text-slate-600">Вспом. глагол</th>
                    <th className="p-3 text-left text-slate-600">Основной глагол</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-bold text-slate-700">ik</td>
                    <td className="p-3"><Cube type="verb">heb / ben</Cube></td>
                    <td className="p-3 font-medium" rowSpan={4}><Cube type="verb">ge + основа + t/d</Cube><br/><br/>(gewerkt)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">jij / u</td>
                    <td className="p-3"><Cube type="verb">hebt / bent</Cube></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">hij / zij / het</td>
                    <td className="p-3"><Cube type="verb">heeft / is</Cube></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">wij / jullie / zij</td>
                    <td className="p-3"><Cube type="verb">hebben / zijn</Cube></td>
                  </tr>
                  <tr className="bg-blue-50/50">
                    <td className="p-3 font-bold text-blue-700">вопрос: heb jij?</td>
                    <td colSpan={2} className="p-3 text-blue-700 font-medium">Для jij в вопросе <span className="font-bold text-red-500">-t</span> исчезает (heb/ben jij)!</td>
                  </tr>
                  <tr className="bg-purple-50/50">
                    <td colSpan={3} className="p-3 text-purple-800 font-medium">
                      <strong>Неправильные глаголы:</strong> Причастие (Participle II) часто заканчивается на <strong>-en</strong> и может менять корневую гласную. <br/><em>Пример: kijken {'->'} heb gekeken.</em>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
      case 'Continuous':
        return (
          <>
            <h4 className="font-bold text-slate-700 mb-4 border-b pb-2">Окончания (Континиус - Aan het)</h4>
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 border-b border-slate-200">
                  <tr>
                    <th className="p-3 text-left text-slate-600">Местоимение</th>
                    <th className="p-3 text-left text-slate-600">Вспом. глагол (zijn)</th>
                    <th className="p-3 text-left text-slate-600">Основной глагол</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-bold text-slate-700">ik</td>
                    <td className="p-3"><Cube type="verb">ben</Cube></td>
                    <td className="p-3 font-medium" rowSpan={4}><Cube type="verb">aan het + инфинитив</Cube><br/><br/>(aan het werken)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">jij / u</td>
                    <td className="p-3"><Cube type="verb">bent</Cube></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">hij / zij / het</td>
                    <td className="p-3"><Cube type="verb">is</Cube></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">wij / jullie / zij</td>
                    <td className="p-3"><Cube type="verb">zijn</Cube></td>
                  </tr>
                  <tr className="bg-blue-50/50">
                    <td className="p-3 font-bold text-blue-700">вопрос: ben jij?</td>
                    <td colSpan={2} className="p-3 text-blue-700 font-medium">Для jij в вопросе <span className="font-bold text-red-500">-t</span> исчезает!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
      case 'Future':
        return (
          <>
            <h4 className="font-bold text-slate-700 mb-4 border-b pb-2">Окончания (Будущее - Gaan)</h4>
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 border-b border-slate-200">
                  <tr>
                    <th className="p-3 text-left text-slate-600">Местоимение</th>
                    <th className="p-3 text-left text-slate-600">Вспом. глагол (gaan)</th>
                    <th className="p-3 text-left text-slate-600">Основной глагол</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-bold text-slate-700">ik</td>
                    <td className="p-3"><Cube type="verb">ga</Cube></td>
                    <td className="p-3 font-medium" rowSpan={4}><Cube type="verb">инфинитив</Cube><br/><br/>(werken)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">jij / u / hij / zij</td>
                    <td className="p-3"><Cube type="verb">gaat</Cube></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-700">wij / jullie / zij</td>
                    <td className="p-3"><Cube type="verb">gaan</Cube></td>
                  </tr>
                  <tr className="bg-blue-50/50">
                    <td className="p-3 font-bold text-blue-700">вопрос: ga jij?</td>
                    <td colSpan={2} className="p-3 text-blue-700 font-medium">Для jij в вопросе <span className="font-bold text-red-500">-t</span> исчезает!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
      <div 
        className="flex justify-between items-center cursor-pointer select-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold flex items-center gap-2 text-slate-800">
          <Info className="w-5 h-5 text-blue-500" /> 
          Шпаргалка: Порядок слов и окончания
        </h3>
        {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
      </div>
      
      {isOpen && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Word Order */}
          <div>
            <h4 className="font-bold text-slate-700 mb-4 border-b pb-2">Порядок слов (Структура)</h4>
            <div className="space-y-4">
              {/* [+] */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="w-8 font-bold text-green-600 text-lg">[+]</span>
                <Cube type="subject">Местоимение</Cube>
                <Cube type="verb">Сказуемое (Глагол 1)</Cube>
                <Cube type="rest">Время / Объект</Cube>
                <Cube type="verb">Глагол 2 / Приставка</Cube>
              </div>
              {/* [?] */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="w-8 font-bold text-blue-600 text-lg">[?]</span>
                <Cube type="verb">Сказуемое (Глагол 1)</Cube>
                <Cube type="subject">Местоимение</Cube>
                <Cube type="rest">Время / Объект</Cube>
                <Cube type="verb">Глагол 2 / Приставка</Cube>
              </div>
              {/* [-] */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="w-8 font-bold text-red-600 text-lg">[-]</span>
                <Cube type="subject">Местоимение</Cube>
                <Cube type="verb">Сказуемое (Глагол 1)</Cube>
                <Cube type="niet">niet</Cube>
                <Cube type="rest">Время / Объект</Cube>
                <Cube type="verb">Глагол 2 / Приставка</Cube>
              </div>
            </div>

            {/* NIET Architecture */}
            <div className="mt-8 bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-4 text-lg border-b pb-2">Архитектура отрицания (NIET vs GEEN)</h4>
              
              {/* NIET vs GEEN */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-100/50 p-3 rounded-lg border border-blue-200">
                  <h6 className="font-bold text-blue-800 mb-1">GEEN (Нет / Никакой)</h6>
                  <p className="text-xs text-blue-900 mb-2">Отрицает существительные с неопределенным артиклем (een) или без артикля.</p>
                  <code className="text-xs font-bold bg-white px-2 py-1 rounded text-blue-700 block text-center">Hij heeft geen geld.</code>
                </div>
                <div className="bg-red-100/50 p-3 rounded-lg border border-red-200">
                  <h6 className="font-bold text-red-800 mb-1">NIET (Не)</h6>
                  <p className="text-xs text-red-900 mb-2">Отрицает все остальное (глаголы, прилагательные, конкретные сущ., местоимения).</p>
                  <code className="text-xs font-bold bg-white px-2 py-1 rounded text-red-700 block text-center">Ik ken deze man niet.</code>
                </div>
              </div>

              {/* Master Blueprint */}
              <h5 className="font-bold text-slate-700 mb-3">Мастер-Blueprint: Универсальная шкала позиций</h5>
              <div className="flex flex-wrap items-center gap-1.5 text-xs mb-6 bg-white p-3 rounded-lg border border-slate-200">
                <Cube type="verb">1. Спрягаемый глагол</Cube>
                <span className="text-slate-400 font-bold">➔</span>
                <Cube type="reflexive">2. zich / me</Cube>
                <span className="text-slate-400 font-bold">➔</span>
                <Cube type="subject">3. Опред. доп. / Время</Cube>
                <span className="text-slate-400 font-bold">➔</span>
                <Cube type="niet">4. NIET</Cube>
                <span className="text-slate-400 font-bold">➔</span>
                <Cube type="rest">5. Предлог / Место</Cube>
                <span className="text-slate-400 font-bold">➔</span>
                <Cube type="verb">6. Инф. / Прич. / Приставка</Cube>
              </div>

              {/* Checklist */}
              <h5 className="font-bold text-slate-700 mb-3">Чек-лист: Алгоритм быстрого решения</h5>
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" /> Отрицаем существительное без артикля?</td>
                      <td className="p-2.5 font-bold text-blue-600">Используем [GEEN]</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" /> Точечное отрицание конкретного слова?</td>
                      <td className="p-2.5 font-bold text-red-600">[NIET] строго перед словом</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" /> Отрицаем простое нераспространенное действие?</td>
                      <td className="p-2.5 font-bold text-red-600">[NIET] сразу после глагола</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" /> Есть второй глагол (причастие/инфинитив) или приставка?</td>
                      <td className="p-2.5 font-bold text-red-600">[NIET] перед ними (внутри рамки)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" /> Есть предложная группа (направление/место)?</td>
                      <td className="p-2.5 font-bold text-red-600">[NIET] перед предлогом</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-2.5 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" /> Строим придаточное предложение (с dat, omdat)?</td>
                      <td className="p-2.5 font-bold text-red-600">[NIET] перед всеми глаголами на конце</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right: Conjugation Rules */}
          <div>
            {renderTenseRules()}
          </div>
        </div>
      )}
      
      {isOpen && (
        <div className="mt-8 pt-6 border-t border-slate-200">
          <h4 className="font-bold text-slate-700 mb-4">Возвратные глаголы (zich)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 border-b border-slate-200">
                  <tr>
                    <th className="p-3 text-left text-slate-600">Местоимение</th>
                    <th className="p-3 text-left text-slate-600">Возвратная частица</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr><td className="p-3 font-bold text-slate-700">ik</td><td className="p-3 text-blue-700 font-bold">me</td></tr>
                  <tr><td className="p-3 font-bold text-slate-700">jij</td><td className="p-3 text-blue-700 font-bold">je</td></tr>
                  <tr><td className="p-3 font-bold text-slate-700">hij / zij / het</td><td className="p-3 text-blue-700 font-bold">zich</td></tr>
                  <tr><td className="p-3 font-bold text-slate-700">wij</td><td className="p-3 text-blue-700 font-bold">ons</td></tr>
                  <tr><td className="p-3 font-bold text-slate-700">jullie</td><td className="p-3 text-blue-700 font-bold">je</td></tr>
                  <tr><td className="p-3 font-bold text-slate-700">zij</td><td className="p-3 text-blue-700 font-bold">zich</td></tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm text-blue-800">
                <strong>Позиция частицы:</strong> Возвратная частица ставится сразу после спрягаемого глагола (или после подлежащего в вопросе).
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Ik voel <strong>me</strong> goed.</li>
                  <li>Voel jij <strong>je</strong> goed?</li>
                  <li>Ik heb <strong>me</strong> aangekleed.</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-sm text-orange-800">
                <strong>Возвратно-отделяемые глаголы:</strong> Приставка уходит в конец, а возвратная частица остается после глагола.
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Ik kleed <strong>me</strong> aan.</li>
                  <li>Kleed jij <strong>je</strong> aan?</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-sm text-red-800">
                <strong>Отрицание (NIET):</strong> Частица <strong>niet</strong> всегда ставится ПОСЛЕ возвратного местоимения.
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Ik voel me <strong>niet</strong> goed.</li>
                  <li>Ik kleed me <strong>niet</strong> aan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function VerbMatrixTrainer() {
  const [verbTypeFilter, setVerbTypeFilter] = useState<'all' | 'regular' | 'irregular' | 'separable_regular' | 'separable_irregular' | 'reflexive_regular' | 'reflexive_irregular' | 'reflexive_separable_regular' | 'reflexive_separable_irregular'>('all');
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0);
  const [currentTense, setCurrentTense] = useState(TENSES[0].id);
  
  // answers[pronoun][formType] = string
  const [answers, setAnswers] = useState<Record<string, Record<FormType, string>>>({});
  const [isChecked, setIsChecked] = useState(false);
  const [results, setResults] = useState<Record<string, Record<FormType, boolean>>>({});

  const filteredVerbs = verbs.filter(v => verbTypeFilter === 'all' || v.type === verbTypeFilter);
  const currentVerb = filteredVerbs[currentVerbIndex] || filteredVerbs[0];

  useEffect(() => {
    setCurrentVerbIndex(0);
  }, [verbTypeFilter]);

  useEffect(() => {
    resetGrid();
  }, [currentVerbIndex, currentTense, verbTypeFilter]);

  const resetGrid = () => {
    const initialAnswers: Record<string, Record<FormType, string>> = {};
    PRONOUNS.forEach(p => {
      initialAnswers[p] = { pos: '', q: '', neg: '' };
    });
    setAnswers(initialAnswers);
    setIsChecked(false);
    setResults({});
  };

  const getExpectedForms = (verb: VerbExercise, tense: string, pronoun: string) => {
    let pos = '', q = '', neg = '';
    
    const isJij = pronoun === 'jij';
    const isHij = pronoun === 'hij';
    const isPlural = pronoun === 'wij' || pronoun === 'jullie' || pronoun === 'zij';
    const isIk = pronoun === 'ik';

    const isReflexive = verb.type.includes('reflexive');
    let reflPro = '';
    if (isReflexive) {
      if (isIk) reflPro = 'me';
      else if (isJij) reflPro = 'je';
      else if (isHij) reflPro = 'zich';
      else if (pronoun === 'wij') reflPro = 'ons';
      else if (pronoun === 'jullie') reflPro = 'je';
      else if (pronoun === 'zij') reflPro = 'zich';
    }
    const rSpace = isReflexive ? ` ${reflPro}` : '';

    const getVttAux = (baseAux: string, isQuestion: boolean) => {
      if (baseAux === 'heb') {
        if (isIk) return 'heb';
        if (isJij) return isQuestion ? 'heb' : 'hebt';
        if (isHij) return 'heeft';
        return 'hebben';
      } else if (baseAux === 'ben') {
        if (isIk) return 'ben';
        if (isJij) return isQuestion ? 'ben' : 'bent';
        if (isHij) return 'is';
        return 'zijn';
      }
      return baseAux;
    };

    const getZijnAux = (isQuestion: boolean) => {
      if (isIk) return 'ben';
      if (isJij) return isQuestion ? 'ben' : 'bent';
      if (isHij) return 'is';
      return 'zijn';
    };

    const getGaanAux = (isQuestion: boolean) => {
      if (isIk) return 'ga';
      if (isJij) return isQuestion ? 'ga' : 'gaat';
      if (isHij) return 'gaat';
      return 'gaan';
    };

    if (tense === 'OTT') {
      let form = '';
      if (isIk) form = verb.forms.ik_ott;
      else if (isPlural) form = verb.forms.wij_ott;
      else form = verb.forms.hij_ott;

      let qForm = form;
      if (isJij) qForm = verb.forms.ik_ott;

      const parts = form.split(' ');
      const qParts = qForm.split(' ');

      if (parts.length > 1) {
        pos = `${pronoun} ${parts[0]}${rSpace} ${parts.slice(1).join(' ')}`;
        neg = `${pronoun} ${parts[0]}${rSpace} niet ${parts.slice(1).join(' ')}.`;
      } else {
        pos = `${pronoun} ${form}${rSpace}`;
        neg = `${pronoun} ${form}${rSpace} niet.`;
      }

      if (qParts.length > 1) {
        q = `${qParts[0]} ${pronoun}${rSpace} ${qParts.slice(1).join(' ')}?`;
      } else {
        q = `${qForm} ${pronoun}${rSpace}?`;
      }
    } 
    else if (tense === 'OVT') {
      let form = isPlural ? verb.forms.wij_ovt : verb.forms.ik_ovt;
      const parts = form.split(' ');
      
      if (parts.length > 1) {
        pos = `${pronoun} ${parts[0]}${rSpace} ${parts.slice(1).join(' ')}`;
        q = `${parts[0]} ${pronoun}${rSpace} ${parts.slice(1).join(' ')}?`;
        neg = `${pronoun} ${parts[0]}${rSpace} niet ${parts.slice(1).join(' ')}.`;
      } else {
        pos = `${pronoun} ${form}${rSpace}`;
        q = `${form} ${pronoun}${rSpace}?`;
        neg = `${pronoun} ${form}${rSpace} niet.`;
      }
    }
    else if (tense === 'VTT') {
      const parts = verb.forms.vtt.split(' ');
      const baseAux = parts[0];
      const rest = parts.slice(1).join(' ');
      const auxPos = getVttAux(baseAux, false);
      const auxQ = getVttAux(baseAux, true);

      pos = `${pronoun} ${auxPos}${rSpace} ${rest}`;
      q = `${auxQ} ${pronoun}${rSpace} ${rest}?`;
      neg = `${pronoun} ${auxPos}${rSpace} niet ${rest}.`;
    }
    else if (tense === 'Continuous') {
      const auxPos = getZijnAux(false);
      const auxQ = getZijnAux(true);
      const cleanInfinitive = verb.infinitive.replace(/^zich\s+/, '');
      const rest = `aan het ${cleanInfinitive}`;
      
      pos = `${pronoun} ${auxPos}${rSpace} ${rest}`;
      q = `${auxQ} ${pronoun}${rSpace} ${rest}?`;
      neg = `${pronoun} ${auxPos}${rSpace} niet ${rest}.`;
    }
    else if (tense === 'Future') {
      const auxPos = getGaanAux(false);
      const auxQ = getGaanAux(true);
      const cleanInfinitive = verb.infinitive.replace(/^zich\s+/, '');
      const rest = cleanInfinitive;
      
      pos = `${pronoun} ${auxPos}${rSpace} ${rest}`;
      q = `${auxQ} ${pronoun}${rSpace} ${rest}?`;
      neg = `${pronoun} ${auxPos}${rSpace} niet ${rest}.`;
    }

    return { pos, q, neg };
  };

  const handleInputChange = (pronoun: string, formType: FormType, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [pronoun]: {
        ...prev[pronoun],
        [formType]: value
      }
    }));
  };

  const normalize = (str: string) => str.toLowerCase().replace(/[.?]/g, '').trim();

  const checkAnswers = () => {
    const newResults: Record<string, Record<FormType, boolean>> = {};
    
    PRONOUNS.forEach(p => {
      const expected = getExpectedForms(currentVerb, currentTense, p);
      newResults[p] = {
        pos: normalize(answers[p]?.pos || '') === normalize(expected.pos),
        q: normalize(answers[p]?.q || '') === normalize(expected.q),
        neg: normalize(answers[p]?.neg || '') === normalize(expected.neg),
      };
    });
    
    setResults(newResults);
    setIsChecked(true);
  };

  const nextVerb = () => {
    if (currentVerbIndex < verbs.length - 1) {
      setCurrentVerbIndex(currentVerbIndex + 1);
    } else {
      setCurrentVerbIndex(0);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <CheatSheet currentTense={currentTense} />
      
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Settings2 className="w-6 h-6 text-blue-600" />
              Матрица Verbuga
            </h2>
            <p className="text-slate-600">Заполните все формы глагола. Пишите полные предложения.</p>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="text-3xl font-bold text-blue-600">{currentVerb.infinitive}</div>
            <div className="text-slate-500 font-medium mb-2">{currentVerb.translation}</div>
            <div className="flex gap-2 flex-wrap justify-end">
              {currentVerb.type.includes('separable') && (
                <span className="text-xs font-bold px-2 py-1 bg-orange-100 text-orange-800 rounded-md">
                  Отделяемый
                </span>
              )}
              {currentVerb.type.includes('reflexive') && (
                <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
                  Возвратный
                </span>
              )}
              {currentVerb.type.includes('irregular') && (
                <span className="text-xs font-bold px-2 py-1 bg-purple-100 text-purple-800 rounded-md">
                  Неправильный
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Tense and Type Selectors */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex flex-wrap gap-2 p-1 bg-slate-100 rounded-lg inline-flex">
            {TENSES.map(t => (
              <button
                key={t.id}
                onClick={() => setCurrentTense(t.id)}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  currentTense === t.id 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 p-1 bg-slate-100 rounded-lg inline-flex items-center">
            <span className="text-sm font-medium text-slate-600 px-2 hidden md:inline">Тип:</span>
            <select
              value={verbTypeFilter}
              onChange={(e) => setVerbTypeFilter(e.target.value as any)}
              className="px-3 py-2 rounded-md font-medium bg-white text-slate-800 shadow-sm border-none outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="all">Все глаголы</option>
              <option value="regular">Правильные</option>
              <option value="irregular">Неправильные</option>
              <option value="separable_regular">Отделяемые (правильные)</option>
              <option value="separable_irregular">Отделяемые (неправильные)</option>
              <option value="reflexive_regular">Возвратные (правильные)</option>
              <option value="reflexive_irregular">Возвратные (неправильные)</option>
              <option value="reflexive_separable_regular">Возвр. отделяемые (прав.)</option>
              <option value="reflexive_separable_irregular">Возвр. отделяемые (неправ.)</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="p-3 text-left w-24 bg-slate-50 border-b-2 border-slate-200 text-slate-700 font-bold">Местоим.</th>
                <th className="p-3 text-left bg-slate-50 border-b-2 border-slate-200 text-green-700 font-bold">[+] Утверждение</th>
                <th className="p-3 text-left bg-slate-50 border-b-2 border-slate-200 text-blue-700 font-bold">[?] Вопрос</th>
                <th className="p-3 text-left bg-slate-50 border-b-2 border-slate-200 text-red-700 font-bold">[-] Отрицание</th>
              </tr>
            </thead>
            <tbody>
              {PRONOUNS.map((pronoun) => {
                const expected = getExpectedForms(currentVerb, currentTense, pronoun);
                return (
                  <tr key={pronoun} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                    <td className="p-3 font-bold text-slate-700">{pronoun}</td>
                    
                    {/* Positive */}
                    <td className="p-3">
                      <div className="relative">
                        <input
                          type="text"
                          value={answers[pronoun]?.pos || ''}
                          onChange={(e) => handleInputChange(pronoun, 'pos', e.target.value)}
                          disabled={isChecked}
                          placeholder="Введите ответ..."
                          className={`w-full px-3 py-2 text-sm border rounded-md outline-none transition-colors ${
                            isChecked 
                              ? results[pronoun]?.pos ? 'border-green-500 bg-green-50 text-green-900' : 'border-red-500 bg-red-50 text-red-900'
                              : 'border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                          }`}
                        />
                        {isChecked && !results[pronoun]?.pos && (
                          <div className="text-xs text-red-600 mt-1 font-medium">{expected.pos}</div>
                        )}
                      </div>
                    </td>

                    {/* Question */}
                    <td className="p-3">
                      <div className="relative">
                        <input
                          type="text"
                          value={answers[pronoun]?.q || ''}
                          onChange={(e) => handleInputChange(pronoun, 'q', e.target.value)}
                          disabled={isChecked}
                          placeholder="Введите ответ..."
                          className={`w-full px-3 py-2 text-sm border rounded-md outline-none transition-colors ${
                            isChecked 
                              ? results[pronoun]?.q ? 'border-green-500 bg-green-50 text-green-900' : 'border-red-500 bg-red-50 text-red-900'
                              : 'border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                          }`}
                        />
                        {isChecked && !results[pronoun]?.q && (
                          <div className="text-xs text-red-600 mt-1 font-medium">{expected.q}</div>
                        )}
                      </div>
                    </td>

                    {/* Negative */}
                    <td className="p-3">
                      <div className="relative">
                        <input
                          type="text"
                          value={answers[pronoun]?.neg || ''}
                          onChange={(e) => handleInputChange(pronoun, 'neg', e.target.value)}
                          disabled={isChecked}
                          placeholder="Введите ответ..."
                          className={`w-full px-3 py-2 text-sm border rounded-md outline-none transition-colors ${
                            isChecked 
                              ? results[pronoun]?.neg ? 'border-green-500 bg-green-50 text-green-900' : 'border-red-500 bg-red-50 text-red-900'
                              : 'border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                          }`}
                        />
                        {isChecked && !results[pronoun]?.neg && (
                          <div className="text-xs text-red-600 mt-1 font-medium">{expected.neg}</div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
          <span className="text-sm text-slate-500 font-medium">
            Глагол {currentVerbIndex + 1} из {verbs.length}
          </span>
          <div className="flex gap-3">
            <button
              onClick={resetGrid}
              className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Очистить
            </button>
            
            {!isChecked ? (
              <button
                onClick={checkAnswers}
                className="flex items-center gap-2 px-8 py-2 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-colors"
              >
                Проверить всё
              </button>
            ) : (
              <button
                onClick={nextVerb}
                className="flex items-center gap-2 px-8 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Следующий глагол
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
