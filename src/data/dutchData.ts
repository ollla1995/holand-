export type SentenceExercise = {
  id: number;
  russian: string;
  words: string[];
  correctOrder: string[];
  explanation: string;
};

export const sentences: SentenceExercise[] = [
  {
    id: 1,
    russian: "Я хочу сейчас одеться.",
    words: ["aankleden", "Ik", "nu", "me", "wil"],
    correctOrder: ["Ik", "wil", "me", "nu", "aankleden"],
    explanation: "Прямой порядок: Подлежащее (Ik) + Модальный глагол (wil) + Возвратное местоимение (me) + Время (nu) + Инфинитив (aankleden)."
  },
  {
    id: 2,
    russian: "Он должен был вчера одеться.",
    words: ["gisteren", "zich", "moest", "Hij", "aankleden"],
    correctOrder: ["Hij", "moest", "zich", "gisteren", "aankleden"],
    explanation: "Прошедшее время (OVT): Глагольная рамка сохраняется, меняется только форма модального глагола (moeten -> moest)."
  },
  {
    id: 3,
    russian: "Мы должны были вчера одеться.",
    words: ["moeten", "gisteren", "hebben", "Wij", "ons", "aankleden"],
    correctOrder: ["Wij", "hebben", "ons", "gisteren", "moeten", "aankleden"],
    explanation: "Правило двух инфинитивов (VTT): Вспомогательный hebben на 2-м месте, а модальный и смысловой глаголы уходят в конец в форме инфинитива."
  },
  {
    id: 4,
    russian: "Я собираюсь завтра зарегистрироваться.",
    words: ["me", "ga", "inschrijven", "morgen", "Ik"],
    correctOrder: ["Ik", "ga", "me", "morgen", "inschrijven"],
    explanation: "Конструкция с Gaan (Будущее): 'gaan' работает как модальный глагол, создавая рамку с инфинитивом в конце."
  },
  {
    id: 5,
    russian: "Я сейчас одеваюсь (в процессе).",
    words: ["aan het", "ben", "aankleden", "Ik", "me", "nu"],
    correctOrder: ["Ik", "ben", "me", "nu", "aan het", "aankleden"],
    explanation: "Континиус (Aan het): zijn + aan het + инфинитив. Возвратное местоимение стоит сразу после 'zijn'."
  },
  {
    id: 6,
    russian: "Ты хочешь сегодня одеться?",
    words: ["vandaag", "je", "Wil", "aankleden", "jij"],
    correctOrder: ["Wil", "jij", "je", "vandaag", "aankleden"],
    explanation: "Вопрос (Да/Нет): Инверсия. Модальный глагол на 1-м месте. При обращении на 'jij' глагол теряет окончание '-t' (wil, а не wilt)."
  },
  {
    id: 7,
    russian: "Почему он должен сейчас одеваться?",
    words: ["nu", "moet", "zich", "Waarom", "hij", "aankleden"],
    correctOrder: ["Waarom", "moet", "hij", "zich", "nu", "aankleden"],
    explanation: "Вопрос с вопросительным словом: Вопросительное слово + Глагол + Подлежащее + ..."
  },
  {
    id: 8,
    russian: "Я не могу сегодня сосредоточиться.",
    words: ["vandaag", "me", "concentreren", "kan", "niet", "Ik"],
    correctOrder: ["Ik", "kan", "me", "vandaag", "niet", "concentreren"],
    explanation: "Позиция 'niet': ставится ПОСЛЕ возвратного местоимения и времени, но ПЕРЕД инфинитивом в конце."
  },
  {
    id: 9,
    russian: "Я остаюсь дома, потому что я должен сейчас одеться.",
    words: ["omdat", "Ik blijf thuis,", "nu", "ik", "moet", "me", "aankleden"],
    correctOrder: ["Ik blijf thuis,", "omdat", "ik", "me", "nu", "aankleden", "moet"],
    explanation: "Сложноподчиненное предложение (omdat): Глагольная рамка 'схлопывается'. Спрягаемый глагол (moet) отправляется в самый конец."
  },
  {
    id: 10,
    russian: "Я позвоню тебе!",
    words: ["op", "bel", "je", "Ik"],
    correctOrder: ["Ik", "bel", "je", "op"],
    explanation: "Отделяемые глаголы (OTT): Приставка (op) отрывается от основы (bel) и убегает в самый конец предложения."
  },
  {
    id: 11,
    russian: "Я позвонил тебе.",
    words: ["opgebeld", "heb", "Ik", "je"],
    correctOrder: ["Ik", "heb", "je", "opgebeld"],
    explanation: "Перфект (VTT) отделяемых глаголов: Приставка + ge + основа сливаются в конце."
  },
  {
    id: 12,
    russian: "Завтра я уезжаю.",
    words: ["vertrek", "Morgen", "ik"],
    correctOrder: ["Morgen", "vertrek", "ik"],
    explanation: "Инверсия: Если на 1-м месте Время (Morgen), то глагол остается на 2-м месте, а подлежащее (ik) уходит на 3-е."
  }
];

export type VerbType = 
  | 'regular' 
  | 'irregular' 
  | 'separable_regular' 
  | 'separable_irregular' 
  | 'reflexive_regular' 
  | 'reflexive_irregular' 
  | 'reflexive_separable_regular' 
  | 'reflexive_separable_irregular';

export type VerbExercise = {
  id: number;
  infinitive: string;
  translation: string;
  type: VerbType;
  ketchup: boolean;
  auxiliary: 'hebben' | 'zijn' | 'both';
  forms: {
    ik_ott: string;
    hij_ott: string;
    wij_ott: string;
    ik_ovt: string;
    wij_ovt: string;
    vtt: string;
    ik_continuous: string;
    hij_continuous: string;
    ik_future: string;
    hij_future: string;
  };
};

export const verbs: VerbExercise[] = [
  {
    id: 1,
    infinitive: "werken",
    translation: "работать",
    type: "regular",
    ketchup: true,
    auxiliary: "hebben",
    forms: {
      ik_ott: "werk",
      hij_ott: "werkt",
      wij_ott: "werken",
      ik_ovt: "werkte",
      wij_ovt: "werkten",
      vtt: "heb gewerkt",
      ik_continuous: "ben aan het werken",
      hij_continuous: "is aan het werken",
      ik_future: "ga werken",
      hij_future: "gaat werken"
    }
  },
  {
    id: 2,
    infinitive: "horen",
    translation: "слышать",
    type: "regular",
    ketchup: false,
    auxiliary: "hebben",
    forms: {
      ik_ott: "hoor",
      hij_ott: "hoort",
      wij_ott: "horen",
      ik_ovt: "hoorde",
      wij_ovt: "hoorden",
      vtt: "heb gehoord",
      ik_continuous: "ben aan het horen",
      hij_continuous: "is aan het horen",
      ik_future: "ga horen",
      hij_future: "gaat horen"
    }
  },
  {
    id: 3,
    infinitive: "zijn",
    translation: "быть",
    type: "irregular",
    ketchup: false,
    auxiliary: "zijn",
    forms: {
      ik_ott: "ben",
      hij_ott: "is",
      wij_ott: "zijn",
      ik_ovt: "was",
      wij_ovt: "waren",
      vtt: "ben geweest",
      ik_continuous: "ben aan het zijn",
      hij_continuous: "is aan het zijn",
      ik_future: "ga zijn",
      hij_future: "gaat zijn"
    }
  },
  {
    id: 4,
    infinitive: "hebben",
    translation: "иметь",
    type: "irregular",
    ketchup: false,
    auxiliary: "hebben",
    forms: {
      ik_ott: "heb",
      hij_ott: "heeft",
      wij_ott: "hebben",
      ik_ovt: "had",
      wij_ovt: "hadden",
      vtt: "heb gehad",
      ik_continuous: "ben aan het hebben",
      hij_continuous: "is aan het hebben",
      ik_future: "ga hebben",
      hij_future: "gaat hebben"
    }
  },
  {
    id: 5,
    infinitive: "gaan",
    translation: "идти",
    type: "irregular",
    ketchup: false,
    auxiliary: "zijn",
    forms: {
      ik_ott: "ga",
      hij_ott: "gaat",
      wij_ott: "gaan",
      ik_ovt: "ging",
      wij_ovt: "gingen",
      vtt: "ben gegaan",
      ik_continuous: "ben aan het gaan",
      hij_continuous: "is aan het gaan",
      ik_future: "ga gaan",
      hij_future: "gaat gaan"
    }
  },
  {
    id: 6,
    infinitive: "opbellen",
    translation: "звонить (отделяемый)",
    type: "separable_regular",
    ketchup: false,
    auxiliary: "hebben",
    forms: {
      ik_ott: "bel op",
      hij_ott: "belt op",
      wij_ott: "bellen op",
      ik_ovt: "belde op",
      wij_ovt: "belden op",
      vtt: "heb opgebeld",
      ik_continuous: "ben aan het opbellen",
      hij_continuous: "is aan het opbellen",
      ik_future: "ga opbellen",
      hij_future: "gaat opbellen"
    }
  },
  {
    id: 7,
    infinitive: "zich voelen",
    translation: "чувствовать себя",
    type: "reflexive_regular",
    ketchup: false,
    auxiliary: "hebben",
    forms: {
      ik_ott: "voel",
      hij_ott: "voelt",
      wij_ott: "voelen",
      ik_ovt: "voelde",
      wij_ovt: "voelden",
      vtt: "heb gevoeld",
      ik_continuous: "ben aan het voelen",
      hij_continuous: "is aan het voelen",
      ik_future: "ga voelen",
      hij_future: "gaat voelen"
    }
  },
  {
    id: 8,
    infinitive: "zich scheren",
    translation: "бриться",
    type: "reflexive_irregular",
    ketchup: false,
    auxiliary: "hebben",
    forms: {
      ik_ott: "scheer",
      hij_ott: "scheert",
      wij_ott: "scheren",
      ik_ovt: "schoor",
      wij_ovt: "schoren",
      vtt: "heb geschoren",
      ik_continuous: "ben aan het scheren",
      hij_continuous: "is aan het scheren",
      ik_future: "ga scheren",
      hij_future: "gaat scheren"
    }
  },
  {
    id: 9,
    infinitive: "zich aankleden",
    translation: "одеваться",
    type: "reflexive_separable_regular",
    ketchup: false,
    auxiliary: "hebben",
    forms: {
      ik_ott: "kleed aan",
      hij_ott: "kleedt aan",
      wij_ott: "kleden aan",
      ik_ovt: "kleedde aan",
      wij_ovt: "kleedden aan",
      vtt: "heb aangekleed",
      ik_continuous: "ben aan het aankleden",
      hij_continuous: "is aan het aankleden",
      ik_future: "ga aankleden",
      hij_future: "gaat aankleden"
    }
  },
  {
    id: 10,
    infinitive: "zich aantrekken",
    translation: "надевать (на себя)",
    type: "reflexive_separable_irregular",
    ketchup: false,
    auxiliary: "hebben",
    forms: {
      ik_ott: "trek aan",
      hij_ott: "trekt aan",
      wij_ott: "trekken aan",
      ik_ovt: "trok aan",
      wij_ovt: "trokken aan",
      vtt: "heb aangetrokken",
      ik_continuous: "ben aan het aantrekken",
      hij_continuous: "is aan het aantrekken",
      ik_future: "ga aantrekken",
      hij_future: "gaat aantrekken"
    }
  }
];

export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Какой вспомогательный глагол используется для глаголов направленного движения (gaan, komen)?",
    options: ["hebben", "zijn", "worden", "blijven"],
    correctAnswer: 1,
    explanation: "Глаголы направленного движения и смены состояния образуют перфект с глаголом 'zijn'."
  },
  {
    id: 2,
    question: "Что происходит с порядком слов после союза 'omdat' (потому что)?",
    options: ["Ничего не меняется", "Глагол выходит на первое место", "Все глаголы уходят в самый конец предложения", "Подлежащее уходит в конец"],
    correctAnswer: 2,
    explanation: "Союз 'omdat' работает как магнит, выталкивая все глаголы в самый конец придаточного предложения."
  },
  {
    id: 3,
    question: "Где ставится отрицание 'niet' в предложении с модальным глаголом?",
    options: ["Сразу после модального глагола", "В самом конце предложения", "Перед инфинитивом в конце", "Перед подлежащим"],
    correctAnswer: 2,
    explanation: "'Niet' стремится в конец, но всегда ставится ПЕРЕД вторым глаголом (инфинитивом)."
  },
  {
    id: 4,
    question: "Как правильно задать вопрос: 'Ты работаешь в Амстердаме?'",
    options: ["Werk jij in Amsterdam?", "Werkt jij in Amsterdam?", "Jij werk in Amsterdam?", "Werk je in Amsterdamt?"],
    correctAnswer: 0,
    explanation: "При инверсии с местоимением 'jij/je' глагол теряет окончание '-t'. Правильно: Werk jij."
  },
  {
    id: 5,
    question: "Какое окончание в прошедшем времени (OVT) получит глагол 'werken' (основа werk)?",
    options: ["-de", "-te", "-en", "-t"],
    correctAnswer: 1,
    explanation: "Основа 'werk' заканчивается на 'k'. Эта буква есть в 'Sexy Soft Ketchup', значит добавляем глухое окончание '-te'."
  }
];

export type NietExercise = {
  id: number;
  russian: string;
  parts: string[];
  correctGapIndex: number;
  explanation: string;
};

export const nietExercises: NietExercise[] = [
  {
    id: 1,
    russian: "Я вас не слышу.",
    parts: ["Ik", "kan", "u", "horen."],
    correctGapIndex: 3,
    explanation: "Перед инфинитивом (horen) в конце предложения."
  },
  {
    id: 2,
    russian: "Кондиционер не работает хорошо.",
    parts: ["De airco", "werkt", "goed."],
    correctGapIndex: 2,
    explanation: "Перед прилагательным/наречием (goed)."
  },
  {
    id: 3,
    russian: "Я не могу сегодня сосредоточиться.",
    parts: ["Ik", "kan", "me", "vandaag", "concentreren."],
    correctGapIndex: 4,
    explanation: "После возвратного местоимения (me) и времени (vandaag), но перед инфинитивом (concentreren)."
  },
  {
    id: 4,
    russian: "Я тебе не позвоню.",
    parts: ["Ik", "bel", "je", "op."],
    correctGapIndex: 3,
    explanation: "Перед отделяемой приставкой (op) в конце предложения."
  },
  {
    id: 5,
    russian: "Он не идет домой.",
    parts: ["Hij", "gaat", "naar huis."],
    correctGapIndex: 2,
    explanation: "Перед предлогом направления (naar)."
  }
];

export type SeparableExercise = {
  id: number;
  infinitive: string;
  russian: string;
  tense: string;
  segments: { type: 'text' | 'gap'; value: string }[];
  explanation: string;
};

export const separableExercises: SeparableExercise[] = [
  {
    id: 1,
    infinitive: "opbellen",
    russian: "Я позвоню тебе сегодня.",
    tense: "Настоящее (OTT)",
    segments: [
      { type: 'text', value: 'Ik ' },
      { type: 'gap', value: 'bel' },
      { type: 'text', value: ' je vandaag ' },
      { type: 'gap', value: 'op' },
      { type: 'text', value: '.' }
    ],
    explanation: "В настоящем времени приставка (op) отрывается от основы (bel) и уходит в самый конец."
  },
  {
    id: 2,
    infinitive: "meenemen",
    russian: "Я взял свою сумку с собой.",
    tense: "Перфект (VTT)",
    segments: [
      { type: 'text', value: 'Ik heb mijn tas ' },
      { type: 'gap', value: 'meegenomen' },
      { type: 'text', value: '.' }
    ],
    explanation: "В перфекте приставка (mee), частица 'ge' и основа (nomen) сливаются в одно слово в конце предложения."
  },
  {
    id: 3,
    infinitive: "inchecken",
    russian: "Мы собираемся заселиться в отель.",
    tense: "Будущее (Gaan)",
    segments: [
      { type: 'text', value: 'Wij gaan in het hotel ' },
      { type: 'gap', value: 'inchecken' },
      { type: 'text', value: '.' }
    ],
    explanation: "С глаголом 'gaan' инфинитив (inchecken) остается целым и ставится в самый конец."
  },
  {
    id: 4,
    infinitive: "aankleden",
    russian: "Он сейчас одевается (в процессе).",
    tense: "Континиус (Aan het)",
    segments: [
      { type: 'text', value: 'Hij is zich nu aan het ' },
      { type: 'gap', value: 'aankleden' },
      { type: 'text', value: '.' }
    ],
    explanation: "После конструкции 'aan het' используется целый инфинитив."
  },
  {
    id: 5,
    infinitive: "opmerken",
    russian: "..., потому что он это замечает.",
    tense: "Подчинение (Omdat)",
    segments: [
      { type: 'text', value: '..., omdat hij het ' },
      { type: 'gap', value: 'opmerkt' },
      { type: 'text', value: '.' }
    ],
    explanation: "После 'omdat' глагол уходит в конец, и приставка снова сливается с основой (op + merkt)."
  },
  {
    id: 6,
    infinitive: "uitchecken",
    russian: "Во сколько вы выезжаете?",
    tense: "Вопрос (OTT)",
    segments: [
      { type: 'text', value: 'Hoe laat ' },
      { type: 'gap', value: 'checken' },
      { type: 'text', value: ' jullie ' },
      { type: 'gap', value: 'uit' },
      { type: 'text', value: '?' }
    ],
    explanation: "В вопросе глагол идет на первое место (или после вопросительного слова), а приставка улетает в конец."
  }
];