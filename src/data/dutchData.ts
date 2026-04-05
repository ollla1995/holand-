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
,
  {
  id: 100,
  infinitive: "aandoen",
  translation: "надевать",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "doe aan",
    hij_ott: "doet aan",
    wij_ott: "doen aan",
    ik_ovt: "deed aan",
    wij_ovt: "deden aan",
    vtt: "heb aangedaan",
    ik_continuous: "ben aan het aandoen",
    hij_continuous: "is aan het aandoen",
    ik_future: "ga aandoen",
    hij_future: "gaat aandoen"
  }
},
  {
  id: 101,
  infinitive: "aankomen",
  translation: "прибывать",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "kom aan",
    hij_ott: "komt aan",
    wij_ott: "komen aan",
    ik_ovt: "kwam aan",
    wij_ovt: "kwamen aan",
    vtt: "ben aangekomen",
    ik_continuous: "ben aan het aankomen",
    hij_continuous: "is aan het aankomen",
    ik_future: "ga aankomen",
    hij_future: "gaat aankomen"
  }
},
  {
  id: 102,
  infinitive: "aannemen",
  translation: "принимать",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "neem aan",
    hij_ott: "neemt aan",
    wij_ott: "nemen aan",
    ik_ovt: "nam aan",
    wij_ovt: "namen aan",
    vtt: "heb aangenomen",
    ik_continuous: "ben aan het aannemen",
    hij_continuous: "is aan het aannemen",
    ik_future: "ga aannemen",
    hij_future: "gaat aannemen"
  }
},
  {
  id: 103,
  infinitive: "aanspreken",
  translation: "обращаться",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "spreek aan",
    hij_ott: "spreekt aan",
    wij_ott: "spreken aan",
    ik_ovt: "sprak aan",
    wij_ovt: "spraken aan",
    vtt: "heb aangesproken",
    ik_continuous: "ben aan het aanspreken",
    hij_continuous: "is aan het aanspreken",
    ik_future: "ga aanspreken",
    hij_future: "gaat aanspreken"
  }
},
  {
  id: 104,
  infinitive: "aantrekken",
  translation: "надевать/привлекать",
  type: "separable_irregular",
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
},
  {
  id: 105,
  infinitive: "aanvragen",
  translation: "запрашивать",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "vraag aan",
    hij_ott: "vraagt aan",
    wij_ott: "vragen aan",
    ik_ovt: "vroeg aan",
    wij_ovt: "vroegen aan",
    vtt: "heb aangevraagd",
    ik_continuous: "ben aan het aanvragen",
    hij_continuous: "is aan het aanvragen",
    ik_future: "ga aanvragen",
    hij_future: "gaat aanvragen"
  }
},
  {
  id: 106,
  infinitive: "aanwijzen",
  translation: "указывать",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "wijs aan",
    hij_ott: "wijst aan",
    wij_ott: "wijzen aan",
    ik_ovt: "wees aan",
    wij_ovt: "wezen aan",
    vtt: "heb aangewezen",
    ik_continuous: "ben aan het aanwijzen",
    hij_continuous: "is aan het aanwijzen",
    ik_future: "ga aanwijzen",
    hij_future: "gaat aanwijzen"
  }
},
  {
  id: 107,
  infinitive: "afhangen",
  translation: "зависеть",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "hang af",
    hij_ott: "hangt af",
    wij_ott: "hangen af",
    ik_ovt: "hing af",
    wij_ovt: "hingen af",
    vtt: "heb afgehangen",
    ik_continuous: "ben aan het afhangen",
    hij_continuous: "is aan het afhangen",
    ik_future: "ga afhangen",
    hij_future: "gaat afhangen"
  }
},
  {
  id: 108,
  infinitive: "afkomen",
  translation: "отделываться/спускаться",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "kom af",
    hij_ott: "komt af",
    wij_ott: "komen af",
    ik_ovt: "kwam af",
    wij_ovt: "kwamen af",
    vtt: "ben afgekomen",
    ik_continuous: "ben aan het afkomen",
    hij_continuous: "is aan het afkomen",
    ik_future: "ga afkomen",
    hij_future: "gaat afkomen"
  }
},
  {
  id: 109,
  infinitive: "aflopen",
  translation: "заканчиваться",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "zijn",
  forms: {
    ik_ott: "loop af",
    hij_ott: "loopt af",
    wij_ott: "lopen af",
    ik_ovt: "liep af",
    wij_ovt: "liepen af",
    vtt: "is afgelopen",
    ik_continuous: "ben aan het aflopen",
    hij_continuous: "is aan het aflopen",
    ik_future: "ga aflopen",
    hij_future: "gaat aflopen"
  }
},
  {
  id: 110,
  infinitive: "afnemen",
  translation: "уменьшаться",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "neem af",
    hij_ott: "neemt af",
    wij_ott: "nemen af",
    ik_ovt: "nam af",
    wij_ovt: "namen af",
    vtt: "heb/is afgenomen",
    ik_continuous: "ben aan het afnemen",
    hij_continuous: "is aan het afnemen",
    ik_future: "ga afnemen",
    hij_future: "gaat afnemen"
  }
},
  {
  id: 111,
  infinitive: "afsluiten",
  translation: "закрывать/завершать",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "sluit af",
    hij_ott: "sluit af",
    wij_ott: "sluiten af",
    ik_ovt: "sloot af",
    wij_ovt: "sloten af",
    vtt: "heb afgesloten",
    ik_continuous: "ben aan het afsluiten",
    hij_continuous: "is aan het afsluiten",
    ik_future: "ga afsluiten",
    hij_future: "gaat afsluiten"
  }
},
  {
  id: 112,
  infinitive: "afspreken",
  translation: "договариваться",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "spreek af",
    hij_ott: "spreekt af",
    wij_ott: "spreken af",
    ik_ovt: "sprak af",
    wij_ovt: "spraken af",
    vtt: "heb afgesproken",
    ik_continuous: "ben aan het afspreken",
    hij_continuous: "is aan het afspreken",
    ik_future: "ga afspreken",
    hij_future: "gaat afspreken"
  }
},
  {
  id: 113,
  infinitive: "aftrekken",
  translation: "вычитать",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "trek af",
    hij_ott: "trekt af",
    wij_ott: "trekken af",
    ik_ovt: "trok af",
    wij_ovt: "trokken af",
    vtt: "heb afgetrokken",
    ik_continuous: "ben aan het aftrekken",
    hij_continuous: "is aan het aftrekken",
    ik_future: "ga aftrekken",
    hij_future: "gaat aftrekken"
  }
},
  {
  id: 114,
  infinitive: "afvallen",
  translation: "худеть",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "val af",
    hij_ott: "valt af",
    wij_ott: "vallen af",
    ik_ovt: "viel af",
    wij_ovt: "vielen af",
    vtt: "ben afgevallen",
    ik_continuous: "ben aan het afvallen",
    hij_continuous: "is aan het afvallen",
    ik_future: "ga afvallen",
    hij_future: "gaat afvallen"
  }
},
  {
  id: 115,
  infinitive: "zich afvragen",
  translation: "задаваться вопросом",
  type: "reflexive_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "vraag me af",
    hij_ott: "vraagt zich af",
    wij_ott: "vragen zich af",
    ik_ovt: "vroeg me af",
    wij_ovt: "vroegen zich af",
    vtt: "heb me afgevraagd",
    ik_continuous: "ben aan het afvragen",
    hij_continuous: "is aan het afvragen",
    ik_future: "ga afvragen",
    hij_future: "gaat afvragen"
  }
},
  {
  id: 116,
  infinitive: "afwassen",
  translation: "мыть посуду",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "was af",
    hij_ott: "wast af",
    wij_ott: "wassen af",
    ik_ovt: "waste af",
    wij_ovt: "wasten af",
    vtt: "heb afgewassen",
    ik_continuous: "ben aan het afwassen",
    hij_continuous: "is aan het afwassen",
    ik_future: "ga afwassen",
    hij_future: "gaat afwassen"
  }
},
  {
  id: 117,
  infinitive: "afwijzen",
  translation: "отклонять",
  type: "separable_irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "wijs af",
    hij_ott: "wijst af",
    wij_ott: "wijzen af",
    ik_ovt: "wees af",
    wij_ovt: "wezen af",
    vtt: "heb afgewezen",
    ik_continuous: "ben aan het afwijzen",
    hij_continuous: "is aan het afwijzen",
    ik_future: "ga afwijzen",
    hij_future: "gaat afwijzen"
  }
},
  {
  id: 118,
  infinitive: "bakken",
  translation: "печь",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "bak",
    hij_ott: "bakt",
    wij_ott: "bakken",
    ik_ovt: "bakte",
    wij_ovt: "bakten",
    vtt: "heb gebakken",
    ik_continuous: "ben aan het bakken",
    hij_continuous: "is aan het bakken",
    ik_future: "ga bakken",
    hij_future: "gaat bakken"
  }
},
  {
  id: 119,
  infinitive: "bannen",
  translation: "изгонять",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "ban",
    hij_ott: "bant",
    wij_ott: "bannen",
    ik_ovt: "bande",
    wij_ovt: "banden",
    vtt: "heb gebannen",
    ik_continuous: "ben aan het bannen",
    hij_continuous: "is aan het bannen",
    ik_future: "ga bannen",
    hij_future: "gaat bannen"
  }
},
  {
  id: 120,
  infinitive: "barsten",
  translation: "трескаться",
  type: "irregular",
  ketchup: false,
  auxiliary: "zijn",
  forms: {
    ik_ott: "barst",
    hij_ott: "barst",
    wij_ott: "barsten",
    ik_ovt: "barstte",
    wij_ovt: "barstten",
    vtt: "is gebarsten",
    ik_continuous: "ben aan het barsten",
    hij_continuous: "is aan het barsten",
    ik_future: "ga barsten",
    hij_future: "gaat barsten"
  }
},
  {
  id: 121,
  infinitive: "bedenken",
  translation: "придумывать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "bedenk",
    hij_ott: "bedenkt",
    wij_ott: "bedenken",
    ik_ovt: "bedacht",
    wij_ovt: "bedachten",
    vtt: "heb bedacht",
    ik_continuous: "ben aan het bedenken",
    hij_continuous: "is aan het bedenken",
    ik_future: "ga bedenken",
    hij_future: "gaat bedenken"
  }
},
  {
  id: 122,
  infinitive: "bederven",
  translation: "портить",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "bederf",
    hij_ott: "bederft",
    wij_ott: "bederven",
    ik_ovt: "bedierf",
    wij_ovt: "bedierven",
    vtt: "heb/is bedorven",
    ik_continuous: "ben aan het bederven",
    hij_continuous: "is aan het bederven",
    ik_future: "ga bederven",
    hij_future: "gaat bederven"
  }
},
  {
  id: 123,
  infinitive: "bedriegen",
  translation: "обманывать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "bedrieg",
    hij_ott: "bedriegt",
    wij_ott: "bedriegen",
    ik_ovt: "bedroog",
    wij_ovt: "bedrogen",
    vtt: "heb bedrogen",
    ik_continuous: "ben aan het bedriegen",
    hij_continuous: "is aan het bedriegen",
    ik_future: "ga bedriegen",
    hij_future: "gaat bedriegen"
  }
},
  {
  id: 124,
  infinitive: "beginnen",
  translation: "начинать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "begin",
    hij_ott: "begint",
    wij_ott: "beginnen",
    ik_ovt: "begon",
    wij_ovt: "begonnen",
    vtt: "ben begonnen",
    ik_continuous: "ben aan het beginnen",
    hij_continuous: "is aan het beginnen",
    ik_future: "ga beginnen",
    hij_future: "gaat beginnen"
  }
},
  {
  id: 125,
  infinitive: "begrijpen",
  translation: "понимать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "begrijp",
    hij_ott: "begrijpt",
    wij_ott: "begrijpen",
    ik_ovt: "begreep",
    wij_ovt: "begrepen",
    vtt: "heb begrepen",
    ik_continuous: "ben aan het begrijpen",
    hij_continuous: "is aan het begrijpen",
    ik_future: "ga begrijpen",
    hij_future: "gaat begrijpen"
  }
},
  {
  id: 126,
  infinitive: "behangen",
  translation: "клеить обои",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "behang",
    hij_ott: "behangt",
    wij_ott: "behangen",
    ik_ovt: "behing",
    wij_ovt: "behingen",
    vtt: "heb behangen",
    ik_continuous: "ben aan het behangen",
    hij_continuous: "is aan het behangen",
    ik_future: "ga behangen",
    hij_future: "gaat behangen"
  }
},
  {
  id: 127,
  infinitive: "behouden",
  translation: "сохранять",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "behoud",
    hij_ott: "behoudt",
    wij_ott: "behouden",
    ik_ovt: "behield",
    wij_ovt: "behielden",
    vtt: "heb behouden",
    ik_continuous: "ben aan het behouden",
    hij_continuous: "is aan het behouden",
    ik_future: "ga behouden",
    hij_future: "gaat behouden"
  }
},
  {
  id: 128,
  infinitive: "bekijken",
  translation: "рассматривать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "bekijk",
    hij_ott: "bekijkt",
    wij_ott: "bekijken",
    ik_ovt: "bekeek",
    wij_ovt: "bekeken",
    vtt: "heb bekeken",
    ik_continuous: "ben aan het bekijken",
    hij_continuous: "is aan het bekijken",
    ik_future: "ga bekijken",
    hij_future: "gaat bekijken"
  }
},
  {
  id: 129,
  infinitive: "beschrijven",
  translation: "описывать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "beschrijf",
    hij_ott: "beschrijft",
    wij_ott: "beschrijven",
    ik_ovt: "beschreef",
    wij_ovt: "beschreven",
    vtt: "heb beschreven",
    ik_continuous: "ben aan het beschrijven",
    hij_continuous: "is aan het beschrijven",
    ik_future: "ga beschrijven",
    hij_future: "gaat beschrijven"
  }
},
  {
  id: 130,
  infinitive: "besluiten",
  translation: "решать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "besluit",
    hij_ott: "besluit",
    wij_ott: "besluiten",
    ik_ovt: "besloot",
    wij_ovt: "besloten",
    vtt: "heb besloten",
    ik_continuous: "ben aan het besluiten",
    hij_continuous: "is aan het besluiten",
    ik_future: "ga besluiten",
    hij_future: "gaat besluiten"
  }
},
  {
  id: 131,
  infinitive: "bespreken",
  translation: "обсуждать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "bespreek",
    hij_ott: "bespreekt",
    wij_ott: "bespreken",
    ik_ovt: "besprak",
    wij_ovt: "bespraken",
    vtt: "heb besproken",
    ik_continuous: "ben aan het bespreken",
    hij_continuous: "is aan het bespreken",
    ik_future: "ga bespreken",
    hij_future: "gaat bespreken"
  }
},
  {
  id: 132,
  infinitive: "bestaan",
  translation: "существовать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "besta",
    hij_ott: "bestaat",
    wij_ott: "bestaan",
    ik_ovt: "bestond",
    wij_ovt: "bestonden",
    vtt: "heb bestaan",
    ik_continuous: "ben aan het bestaan",
    hij_continuous: "is aan het bestaan",
    ik_future: "ga bestaan",
    hij_future: "gaat bestaan"
  }
},
  {
  id: 133,
  infinitive: "betreffen",
  translation: "касаться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "betref",
    hij_ott: "betreft",
    wij_ott: "betreffen",
    ik_ovt: "betrof",
    wij_ovt: "betroffen",
    vtt: "heb betroffen",
    ik_continuous: "ben aan het betreffen",
    hij_continuous: "is aan het betreffen",
    ik_future: "ga betreffen",
    hij_future: "gaat betreffen"
  }
},
  {
  id: 134,
  infinitive: "bevelen",
  translation: "приказывать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "beveel",
    hij_ott: "beveelt",
    wij_ott: "bevelen",
    ik_ovt: "beval",
    wij_ovt: "bevalen",
    vtt: "heb bevolen",
    ik_continuous: "ben aan het bevelen",
    hij_continuous: "is aan het bevelen",
    ik_future: "ga bevelen",
    hij_future: "gaat bevelen"
  }
},
  {
  id: 135,
  infinitive: "bewegen",
  translation: "двигаться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "beweeg",
    hij_ott: "beweegt",
    wij_ott: "bewegen",
    ik_ovt: "bewoog",
    wij_ovt: "bewogen",
    vtt: "heb bewogen",
    ik_continuous: "ben aan het bewegen",
    hij_continuous: "is aan het bewegen",
    ik_future: "ga bewegen",
    hij_future: "gaat bewegen"
  }
},
  {
  id: 136,
  infinitive: "bewijzen",
  translation: "доказывать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "bewijs",
    hij_ott: "bewijst",
    wij_ott: "bewijzen",
    ik_ovt: "bewees",
    wij_ovt: "bewezen",
    vtt: "heb bewezen",
    ik_continuous: "ben aan het bewijzen",
    hij_continuous: "is aan het bewijzen",
    ik_future: "ga bewijzen",
    hij_future: "gaat bewijzen"
  }
},
  {
  id: 137,
  infinitive: "bidden",
  translation: "молиться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "bid",
    hij_ott: "bidt",
    wij_ott: "bidden",
    ik_ovt: "bad",
    wij_ovt: "baden",
    vtt: "heb gebeden",
    ik_continuous: "ben aan het bidden",
    hij_continuous: "is aan het bidden",
    ik_future: "ga bidden",
    hij_future: "gaat bidden"
  }
},
  {
  id: 138,
  infinitive: "bieden",
  translation: "предлагать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "bied",
    hij_ott: "biedt",
    wij_ott: "bieden",
    ik_ovt: "bood",
    wij_ovt: "boden",
    vtt: "heb geboden",
    ik_continuous: "ben aan het bieden",
    hij_continuous: "is aan het bieden",
    ik_future: "ga bieden",
    hij_future: "gaat bieden"
  }
},
  {
  id: 139,
  infinitive: "bijten",
  translation: "кусать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "bijt",
    hij_ott: "bijt",
    wij_ott: "bijten",
    ik_ovt: "beet",
    wij_ovt: "beten",
    vtt: "heb gebeten",
    ik_continuous: "ben aan het bijten",
    hij_continuous: "is aan het bijten",
    ik_future: "ga bijten",
    hij_future: "gaat bijten"
  }
},
  {
  id: 140,
  infinitive: "binden",
  translation: "связывать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "bind",
    hij_ott: "bindt",
    wij_ott: "binden",
    ik_ovt: "bond",
    wij_ovt: "bonden",
    vtt: "heb gebonden",
    ik_continuous: "ben aan het binden",
    hij_continuous: "is aan het binden",
    ik_future: "ga binden",
    hij_future: "gaat binden"
  }
},
  {
  id: 141,
  infinitive: "blazen",
  translation: "дуть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "blaas",
    hij_ott: "blaast",
    wij_ott: "blazen",
    ik_ovt: "blies",
    wij_ovt: "bliezen",
    vtt: "heb geblazen",
    ik_continuous: "ben aan het blazen",
    hij_continuous: "is aan het blazen",
    ik_future: "ga blazen",
    hij_future: "gaat blazen"
  }
},
  {
  id: 142,
  infinitive: "blijken",
  translation: "оказываться",
  type: "irregular",
  ketchup: false,
  auxiliary: "zijn",
  forms: {
    ik_ott: "blijk",
    hij_ott: "blijkt",
    wij_ott: "blijken",
    ik_ovt: "bleek",
    wij_ovt: "bleken",
    vtt: "is gebleken",
    ik_continuous: "ben aan het blijken",
    hij_continuous: "is aan het blijken",
    ik_future: "ga blijken",
    hij_future: "gaat blijken"
  }
},
  {
  id: 143,
  infinitive: "blijven",
  translation: "оставаться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "blijf",
    hij_ott: "blijft",
    wij_ott: "blijven",
    ik_ovt: "bleef",
    wij_ovt: "bleven",
    vtt: "ben gebleven",
    ik_continuous: "ben aan het blijven",
    hij_continuous: "is aan het blijven",
    ik_future: "ga blijven",
    hij_future: "gaat blijven"
  }
},
  {
  id: 144,
  infinitive: "blinken",
  translation: "блестеть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "blink",
    hij_ott: "blinkt",
    wij_ott: "blinken",
    ik_ovt: "blonk",
    wij_ovt: "blonken",
    vtt: "heb geblonken",
    ik_continuous: "ben aan het blinken",
    hij_continuous: "is aan het blinken",
    ik_future: "ga blinken",
    hij_future: "gaat blinken"
  }
},
  {
  id: 145,
  infinitive: "braden",
  translation: "жарить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "braad",
    hij_ott: "braadt",
    wij_ott: "braden",
    ik_ovt: "braadde",
    wij_ovt: "braadden",
    vtt: "heb gebraden",
    ik_continuous: "ben aan het braden",
    hij_continuous: "is aan het braden",
    ik_future: "ga braden",
    hij_future: "gaat braden"
  }
},
  {
  id: 146,
  infinitive: "breken",
  translation: "ломать",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "breek",
    hij_ott: "breekt",
    wij_ott: "breken",
    ik_ovt: "brak",
    wij_ovt: "braken",
    vtt: "heb/is gebroken",
    ik_continuous: "ben aan het breken",
    hij_continuous: "is aan het breken",
    ik_future: "ga breken",
    hij_future: "gaat breken"
  }
},
  {
  id: 147,
  infinitive: "brengen",
  translation: "приносить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "breng",
    hij_ott: "brengt",
    wij_ott: "brengen",
    ik_ovt: "bracht",
    wij_ovt: "brachten",
    vtt: "heb gebracht",
    ik_continuous: "ben aan het brengen",
    hij_continuous: "is aan het brengen",
    ik_future: "ga brengen",
    hij_future: "gaat brengen"
  }
},
  {
  id: 148,
  infinitive: "brouwen",
  translation: "варить (пиво)",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "brouw",
    hij_ott: "brouwt",
    wij_ott: "brouwen",
    ik_ovt: "brouwde",
    wij_ovt: "brouwden",
    vtt: "heb gebrouwen",
    ik_continuous: "ben aan het brouwen",
    hij_continuous: "is aan het brouwen",
    ik_future: "ga brouwen",
    hij_future: "gaat brouwen"
  }
},
  {
  id: 149,
  infinitive: "buigen",
  translation: "гнуть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "buig",
    hij_ott: "buigt",
    wij_ott: "buigen",
    ik_ovt: "boog",
    wij_ovt: "bogen",
    vtt: "heb gebogen",
    ik_continuous: "ben aan het buigen",
    hij_continuous: "is aan het buigen",
    ik_future: "ga buigen",
    hij_future: "gaat buigen"
  }
},
  {
  id: 150,
  infinitive: "denken",
  translation: "думать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "denk",
    hij_ott: "denkt",
    wij_ott: "denken",
    ik_ovt: "dacht",
    wij_ovt: "dachten",
    vtt: "heb gedacht",
    ik_continuous: "ben aan het denken",
    hij_continuous: "is aan het denken",
    ik_future: "ga denken",
    hij_future: "gaat denken"
  }
},
  {
  id: 151,
  infinitive: "doen",
  translation: "делать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "doe",
    hij_ott: "doet",
    wij_ott: "doen",
    ik_ovt: "deed",
    wij_ovt: "deden",
    vtt: "heb gedaan",
    ik_continuous: "ben aan het doen",
    hij_continuous: "is aan het doen",
    ik_future: "ga doen",
    hij_future: "gaat doen"
  }
},
  {
  id: 152,
  infinitive: "dragen",
  translation: "носить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "draag",
    hij_ott: "draagt",
    wij_ott: "dragen",
    ik_ovt: "droeg",
    wij_ovt: "droegen",
    vtt: "heb gedragen",
    ik_continuous: "ben aan het dragen",
    hij_continuous: "is aan het dragen",
    ik_future: "ga dragen",
    hij_future: "gaat dragen"
  }
},
  {
  id: 153,
  infinitive: "drijven",
  translation: "плавать/гнать",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "drijf",
    hij_ott: "drijft",
    wij_ott: "drijven",
    ik_ovt: "dreef",
    wij_ovt: "dreven",
    vtt: "heb/is gedreven",
    ik_continuous: "ben aan het drijven",
    hij_continuous: "is aan het drijven",
    ik_future: "ga drijven",
    hij_future: "gaat drijven"
  }
},
  {
  id: 154,
  infinitive: "dringen",
  translation: "проникать/толкаться",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "dring",
    hij_ott: "dringt",
    wij_ott: "dringen",
    ik_ovt: "drong",
    wij_ovt: "drongen",
    vtt: "heb/is gedrongen",
    ik_continuous: "ben aan het dringen",
    hij_continuous: "is aan het dringen",
    ik_future: "ga dringen",
    hij_future: "gaat dringen"
  }
},
  {
  id: 155,
  infinitive: "drinken",
  translation: "пить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "drink",
    hij_ott: "drinkt",
    wij_ott: "drinken",
    ik_ovt: "dronk",
    wij_ovt: "dronken",
    vtt: "heb gedronken",
    ik_continuous: "ben aan het drinken",
    hij_continuous: "is aan het drinken",
    ik_future: "ga drinken",
    hij_future: "gaat drinken"
  }
},
  {
  id: 156,
  infinitive: "druipen",
  translation: "капать",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "druip",
    hij_ott: "druipt",
    wij_ott: "druipen",
    ik_ovt: "droop",
    wij_ovt: "dropen",
    vtt: "heb/is gedropen",
    ik_continuous: "ben aan het druipen",
    hij_continuous: "is aan het druipen",
    ik_future: "ga druipen",
    hij_future: "gaat druipen"
  }
},
  {
  id: 157,
  infinitive: "duiken",
  translation: "нырять",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "duik",
    hij_ott: "duikt",
    wij_ott: "duiken",
    ik_ovt: "dook",
    wij_ovt: "doken",
    vtt: "heb/is gedoken",
    ik_continuous: "ben aan het duiken",
    hij_continuous: "is aan het duiken",
    ik_future: "ga duiken",
    hij_future: "gaat duiken"
  }
},
  {
  id: 158,
  infinitive: "dwingen",
  translation: "принуждать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "dwing",
    hij_ott: "dwingt",
    wij_ott: "dwingen",
    ik_ovt: "dwong",
    wij_ovt: "dwongen",
    vtt: "heb gedwongen",
    ik_continuous: "ben aan het dwingen",
    hij_continuous: "is aan het dwingen",
    ik_future: "ga dwingen",
    hij_future: "gaat dwingen"
  }
},
  {
  id: 159,
  infinitive: "eten",
  translation: "есть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "eet",
    hij_ott: "eet",
    wij_ott: "eten",
    ik_ovt: "at",
    wij_ovt: "aten",
    vtt: "heb gegeten",
    ik_continuous: "ben aan het eten",
    hij_continuous: "is aan het eten",
    ik_future: "ga eten",
    hij_future: "gaat eten"
  }
},
  {
  id: 160,
  infinitive: "fluiten",
  translation: "свистеть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "fluit",
    hij_ott: "fluit",
    wij_ott: "fluiten",
    ik_ovt: "floot",
    wij_ovt: "floten",
    vtt: "heb gefloten",
    ik_continuous: "ben aan het fluiten",
    hij_continuous: "is aan het fluiten",
    ik_future: "ga fluiten",
    hij_future: "gaat fluiten"
  }
},
  {
  id: 162,
  infinitive: "gelden",
  translation: "действовать/иметь силу",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "geld",
    hij_ott: "geldt",
    wij_ott: "gelden",
    ik_ovt: "gold",
    wij_ovt: "golden",
    vtt: "heb gegolden",
    ik_continuous: "ben aan het gelden",
    hij_continuous: "is aan het gelden",
    ik_future: "ga gelden",
    hij_future: "gaat gelden"
  }
},
  {
  id: 163,
  infinitive: "genezen",
  translation: "лечить",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "genees",
    hij_ott: "geneest",
    wij_ott: "genezen",
    ik_ovt: "genas",
    wij_ovt: "genazen",
    vtt: "heb/is genezen",
    ik_continuous: "ben aan het genezen",
    hij_continuous: "is aan het genezen",
    ik_future: "ga genezen",
    hij_future: "gaat genezen"
  }
},
  {
  id: 164,
  infinitive: "genieten",
  translation: "наслаждаться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "geniet",
    hij_ott: "geniet",
    wij_ott: "genieten",
    ik_ovt: "genoot",
    wij_ovt: "genoten",
    vtt: "heb genoten",
    ik_continuous: "ben aan het genieten",
    hij_continuous: "is aan het genieten",
    ik_future: "ga genieten",
    hij_future: "gaat genieten"
  }
},
  {
  id: 165,
  infinitive: "geven",
  translation: "давать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "geef",
    hij_ott: "geeft",
    wij_ott: "geven",
    ik_ovt: "gaf",
    wij_ovt: "gaven",
    vtt: "heb gegeven",
    ik_continuous: "ben aan het geven",
    hij_continuous: "is aan het geven",
    ik_future: "ga geven",
    hij_future: "gaat geven"
  }
},
  {
  id: 166,
  infinitive: "gieten",
  translation: "лить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "giet",
    hij_ott: "giet",
    wij_ott: "gieten",
    ik_ovt: "goot",
    wij_ovt: "goten",
    vtt: "heb gegoten",
    ik_continuous: "ben aan het gieten",
    hij_continuous: "is aan het gieten",
    ik_future: "ga gieten",
    hij_future: "gaat gieten"
  }
},
  {
  id: 167,
  infinitive: "glijden",
  translation: "скользить",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "glijd",
    hij_ott: "glijdt",
    wij_ott: "glijden",
    ik_ovt: "gleed",
    wij_ovt: "gleden",
    vtt: "heb/is gegleden",
    ik_continuous: "ben aan het glijden",
    hij_continuous: "is aan het glijden",
    ik_future: "ga glijden",
    hij_future: "gaat glijden"
  }
},
  {
  id: 168,
  infinitive: "glimmen",
  translation: "блестеть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "glim",
    hij_ott: "glimt",
    wij_ott: "glimmen",
    ik_ovt: "glom",
    wij_ovt: "glommen",
    vtt: "heb geglommen",
    ik_continuous: "ben aan het glimmen",
    hij_continuous: "is aan het glimmen",
    ik_future: "ga glimmen",
    hij_future: "gaat glimmen"
  }
},
  {
  id: 169,
  infinitive: "graven",
  translation: "копать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "graaf",
    hij_ott: "graaft",
    wij_ott: "graven",
    ik_ovt: "groef",
    wij_ovt: "groeven",
    vtt: "heb gegraven",
    ik_continuous: "ben aan het graven",
    hij_continuous: "is aan het graven",
    ik_future: "ga graven",
    hij_future: "gaat graven"
  }
},
  {
  id: 170,
  infinitive: "grijpen",
  translation: "хватать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "grijp",
    hij_ott: "grijpt",
    wij_ott: "grijpen",
    ik_ovt: "greep",
    wij_ovt: "grepen",
    vtt: "heb gegrepen",
    ik_continuous: "ben aan het grijpen",
    hij_continuous: "is aan het grijpen",
    ik_future: "ga grijpen",
    hij_future: "gaat grijpen"
  }
},
  {
  id: 171,
  infinitive: "hangen",
  translation: "висеть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "hang",
    hij_ott: "hangt",
    wij_ott: "hangen",
    ik_ovt: "hing",
    wij_ovt: "hingen",
    vtt: "heb gehangen",
    ik_continuous: "ben aan het hangen",
    hij_continuous: "is aan het hangen",
    ik_future: "ga hangen",
    hij_future: "gaat hangen"
  }
},
  {
  id: 173,
  infinitive: "heffen",
  translation: "поднимать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "hef",
    hij_ott: "heft",
    wij_ott: "heffen",
    ik_ovt: "hief",
    wij_ovt: "hieven",
    vtt: "heb geheven",
    ik_continuous: "ben aan het heffen",
    hij_continuous: "is aan het heffen",
    ik_future: "ga heffen",
    hij_future: "gaat heffen"
  }
},
  {
  id: 174,
  infinitive: "helpen",
  translation: "помогать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "help",
    hij_ott: "helpt",
    wij_ott: "helpen",
    ik_ovt: "hielp",
    wij_ovt: "hielpen",
    vtt: "heb geholpen",
    ik_continuous: "ben aan het helpen",
    hij_continuous: "is aan het helpen",
    ik_future: "ga helpen",
    hij_future: "gaat helpen"
  }
},
  {
  id: 175,
  infinitive: "heten",
  translation: "называться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "heet",
    hij_ott: "heet",
    wij_ott: "heten",
    ik_ovt: "heette",
    wij_ovt: "heetten",
    vtt: "heb geheten",
    ik_continuous: "ben aan het heten",
    hij_continuous: "is aan het heten",
    ik_future: "ga heten",
    hij_future: "gaat heten"
  }
},
  {
  id: 176,
  infinitive: "houden",
  translation: "держать/любить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "houd",
    hij_ott: "houdt",
    wij_ott: "houden",
    ik_ovt: "hield",
    wij_ovt: "hielden",
    vtt: "heb gehouden",
    ik_continuous: "ben aan het houden",
    hij_continuous: "is aan het houden",
    ik_future: "ga houden",
    hij_future: "gaat houden"
  }
},
  {
  id: 177,
  infinitive: "houwen",
  translation: "рубить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "houw",
    hij_ott: "houwt",
    wij_ott: "houwen",
    ik_ovt: "hieuw",
    wij_ovt: "hieuwen",
    vtt: "heb gehouwen",
    ik_continuous: "ben aan het houwen",
    hij_continuous: "is aan het houwen",
    ik_future: "ga houwen",
    hij_future: "gaat houwen"
  }
},
  {
  id: 178,
  infinitive: "jagen",
  translation: "охотиться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "jaag",
    hij_ott: "jaagt",
    wij_ott: "jagen",
    ik_ovt: "joeg",
    wij_ovt: "joegen",
    vtt: "heb gejaagd",
    ik_continuous: "ben aan het jagen",
    hij_continuous: "is aan het jagen",
    ik_future: "ga jagen",
    hij_future: "gaat jagen"
  }
},
  {
  id: 179,
  infinitive: "kiezen",
  translation: "выбирать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "kies",
    hij_ott: "kiest",
    wij_ott: "kiezen",
    ik_ovt: "koos",
    wij_ovt: "kozen",
    vtt: "heb gekozen",
    ik_continuous: "ben aan het kiezen",
    hij_continuous: "is aan het kiezen",
    ik_future: "ga kiezen",
    hij_future: "gaat kiezen"
  }
},
  {
  id: 180,
  infinitive: "kijken",
  translation: "смотреть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "kijk",
    hij_ott: "kijkt",
    wij_ott: "kijken",
    ik_ovt: "keek",
    wij_ovt: "keken",
    vtt: "heb gekeken",
    ik_continuous: "ben aan het kijken",
    hij_continuous: "is aan het kijken",
    ik_future: "ga kijken",
    hij_future: "gaat kijken"
  }
},
  {
  id: 181,
  infinitive: "klimmen",
  translation: "лезть",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "klim",
    hij_ott: "klimt",
    wij_ott: "klimmen",
    ik_ovt: "klom",
    wij_ovt: "klommen",
    vtt: "heb/is geklommen",
    ik_continuous: "ben aan het klimmen",
    hij_continuous: "is aan het klimmen",
    ik_future: "ga klimmen",
    hij_future: "gaat klimmen"
  }
},
  {
  id: 182,
  infinitive: "klinken",
  translation: "звучать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "klink",
    hij_ott: "klinkt",
    wij_ott: "klinken",
    ik_ovt: "klonk",
    wij_ovt: "klonken",
    vtt: "heb geklonken",
    ik_continuous: "ben aan het klinken",
    hij_continuous: "is aan het klinken",
    ik_future: "ga klinken",
    hij_future: "gaat klinken"
  }
},
  {
  id: 183,
  infinitive: "kluiven",
  translation: "грызть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "kluif",
    hij_ott: "kluift",
    wij_ott: "kluiven",
    ik_ovt: "kloof",
    wij_ovt: "kloven",
    vtt: "heb gekloven",
    ik_continuous: "ben aan het kluiven",
    hij_continuous: "is aan het kluiven",
    ik_future: "ga kluiven",
    hij_future: "gaat kluiven"
  }
},
  {
  id: 184,
  infinitive: "knijpen",
  translation: "щипать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "knijp",
    hij_ott: "knijpt",
    wij_ott: "knijpen",
    ik_ovt: "kneep",
    wij_ovt: "knepen",
    vtt: "heb geknepen",
    ik_continuous: "ben aan het knijpen",
    hij_continuous: "is aan het knijpen",
    ik_future: "ga knijpen",
    hij_future: "gaat knijpen"
  }
},
  {
  id: 185,
  infinitive: "kopen",
  translation: "покупать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "koop",
    hij_ott: "koopt",
    wij_ott: "kopen",
    ik_ovt: "kocht",
    wij_ovt: "kochten",
    vtt: "heb gekocht",
    ik_continuous: "ben aan het kopen",
    hij_continuous: "is aan het kopen",
    ik_future: "ga kopen",
    hij_future: "gaat kopen"
  }
},
  {
  id: 186,
  infinitive: "krijgen",
  translation: "получать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "krijg",
    hij_ott: "krijgt",
    wij_ott: "krijgen",
    ik_ovt: "kreeg",
    wij_ovt: "kregen",
    vtt: "heb gekregen",
    ik_continuous: "ben aan het krijgen",
    hij_continuous: "is aan het krijgen",
    ik_future: "ga krijgen",
    hij_future: "gaat krijgen"
  }
},
  {
  id: 187,
  infinitive: "krimpen",
  translation: "садиться (о ткани)",
  type: "irregular",
  ketchup: false,
  auxiliary: "zijn",
  forms: {
    ik_ott: "krimp",
    hij_ott: "krimpt",
    wij_ott: "krimpen",
    ik_ovt: "kromp",
    wij_ovt: "krompen",
    vtt: "is gekrompen",
    ik_continuous: "ben aan het krimpen",
    hij_continuous: "is aan het krimpen",
    ik_future: "ga krimpen",
    hij_future: "gaat krimpen"
  }
},
  {
  id: 188,
  infinitive: "kruipen",
  translation: "ползать",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "kruip",
    hij_ott: "kruipt",
    wij_ott: "kruipen",
    ik_ovt: "kroop",
    wij_ovt: "kropen",
    vtt: "heb/is gekropen",
    ik_continuous: "ben aan het kruipen",
    hij_continuous: "is aan het kruipen",
    ik_future: "ga kruipen",
    hij_future: "gaat kruipen"
  }
},
  {
  id: 189,
  infinitive: "kunnen",
  translation: "мочь",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "kan",
    hij_ott: "kan",
    wij_ott: "kunnen",
    ik_ovt: "kon",
    wij_ovt: "konden",
    vtt: "heb gekund",
    ik_continuous: "ben aan het kunnen",
    hij_continuous: "is aan het kunnen",
    ik_future: "ga kunnen",
    hij_future: "gaat kunnen"
  }
},
  {
  id: 190,
  infinitive: "lachen",
  translation: "смеяться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "lach",
    hij_ott: "lacht",
    wij_ott: "lachen",
    ik_ovt: "lachte",
    wij_ovt: "lachten",
    vtt: "heb gelachen",
    ik_continuous: "ben aan het lachen",
    hij_continuous: "is aan het lachen",
    ik_future: "ga lachen",
    hij_future: "gaat lachen"
  }
},
  {
  id: 191,
  infinitive: "laden",
  translation: "грузить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "laad",
    hij_ott: "laadt",
    wij_ott: "laden",
    ik_ovt: "laadde",
    wij_ovt: "laadden",
    vtt: "heb geladen",
    ik_continuous: "ben aan het laden",
    hij_continuous: "is aan het laden",
    ik_future: "ga laden",
    hij_future: "gaat laden"
  }
},
  {
  id: 192,
  infinitive: "laten",
  translation: "позволять/оставлять",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "laat",
    hij_ott: "laat",
    wij_ott: "laten",
    ik_ovt: "liet",
    wij_ovt: "lieten",
    vtt: "heb gelaten",
    ik_continuous: "ben aan het laten",
    hij_continuous: "is aan het laten",
    ik_future: "ga laten",
    hij_future: "gaat laten"
  }
},
  {
  id: 193,
  infinitive: "lezen",
  translation: "читать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "lees",
    hij_ott: "leest",
    wij_ott: "lezen",
    ik_ovt: "las",
    wij_ovt: "lazen",
    vtt: "heb gelezen",
    ik_continuous: "ben aan het lezen",
    hij_continuous: "is aan het lezen",
    ik_future: "ga lezen",
    hij_future: "gaat lezen"
  }
},
  {
  id: 194,
  infinitive: "liegen",
  translation: "лгать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "lieg",
    hij_ott: "liegt",
    wij_ott: "liegen",
    ik_ovt: "loog",
    wij_ovt: "logen",
    vtt: "heb gelogen",
    ik_continuous: "ben aan het liegen",
    hij_continuous: "is aan het liegen",
    ik_future: "ga liegen",
    hij_future: "gaat liegen"
  }
},
  {
  id: 195,
  infinitive: "liggen",
  translation: "лежать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "lig",
    hij_ott: "ligt",
    wij_ott: "liggen",
    ik_ovt: "lag",
    wij_ovt: "lagen",
    vtt: "heb gelegen",
    ik_continuous: "ben aan het liggen",
    hij_continuous: "is aan het liggen",
    ik_future: "ga liggen",
    hij_future: "gaat liggen"
  }
},
  {
  id: 196,
  infinitive: "lijden",
  translation: "страдать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "lijd",
    hij_ott: "lijdt",
    wij_ott: "lijden",
    ik_ovt: "leed",
    wij_ovt: "leden",
    vtt: "heb geleden",
    ik_continuous: "ben aan het lijden",
    hij_continuous: "is aan het lijden",
    ik_future: "ga lijden",
    hij_future: "gaat lijden"
  }
},
  {
  id: 197,
  infinitive: "lijken",
  translation: "казаться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "lijk",
    hij_ott: "lijkt",
    wij_ott: "lijken",
    ik_ovt: "leek",
    wij_ovt: "leken",
    vtt: "heb geleken",
    ik_continuous: "ben aan het lijken",
    hij_continuous: "is aan het lijken",
    ik_future: "ga lijken",
    hij_future: "gaat lijken"
  }
},
  {
  id: 198,
  infinitive: "lopen",
  translation: "идти/бежать",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "loop",
    hij_ott: "loopt",
    wij_ott: "lopen",
    ik_ovt: "liep",
    wij_ovt: "liepen",
    vtt: "heb/is gelopen",
    ik_continuous: "ben aan het lopen",
    hij_continuous: "is aan het lopen",
    ik_future: "ga lopen",
    hij_future: "gaat lopen"
  }
},
  {
  id: 199,
  infinitive: "meten",
  translation: "измерять",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "meet",
    hij_ott: "meet",
    wij_ott: "meten",
    ik_ovt: "mat",
    wij_ovt: "maten",
    vtt: "heb gemeten",
    ik_continuous: "ben aan het meten",
    hij_continuous: "is aan het meten",
    ik_future: "ga meten",
    hij_future: "gaat meten"
  }
},
  {
  id: 200,
  infinitive: "mijden",
  translation: "избегать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "mijd",
    hij_ott: "mijdt",
    wij_ott: "mijden",
    ik_ovt: "meed",
    wij_ovt: "meden",
    vtt: "heb gemeden",
    ik_continuous: "ben aan het mijden",
    hij_continuous: "is aan het mijden",
    ik_future: "ga mijden",
    hij_future: "gaat mijden"
  }
},
  {
  id: 201,
  infinitive: "moeten",
  translation: "быть должным",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "moet",
    hij_ott: "moet",
    wij_ott: "moeten",
    ik_ovt: "moest",
    wij_ovt: "moesten",
    vtt: "heb gemoeten",
    ik_continuous: "ben aan het moeten",
    hij_continuous: "is aan het moeten",
    ik_future: "ga moeten",
    hij_future: "gaat moeten"
  }
},
  {
  id: 202,
  infinitive: "mogen",
  translation: "иметь разрешение",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "mag",
    hij_ott: "mag",
    wij_ott: "mogen",
    ik_ovt: "mocht",
    wij_ovt: "mochten",
    vtt: "heb gemogen",
    ik_continuous: "ben aan het mogen",
    hij_continuous: "is aan het mogen",
    ik_future: "ga mogen",
    hij_future: "gaat mogen"
  }
},
  {
  id: 203,
  infinitive: "nemen",
  translation: "брать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "neem",
    hij_ott: "neemt",
    wij_ott: "nemen",
    ik_ovt: "nam",
    wij_ovt: "namen",
    vtt: "heb genomen",
    ik_continuous: "ben aan het nemen",
    hij_continuous: "is aan het nemen",
    ik_future: "ga nemen",
    hij_future: "gaat nemen"
  }
},
  {
  id: 204,
  infinitive: "ontvangen",
  translation: "получать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "ontvang",
    hij_ott: "ontvangt",
    wij_ott: "ontvangen",
    ik_ovt: "ontving",
    wij_ovt: "ontvingen",
    vtt: "heb ontvangen",
    ik_continuous: "ben aan het ontvangen",
    hij_continuous: "is aan het ontvangen",
    ik_future: "ga ontvangen",
    hij_future: "gaat ontvangen"
  }
},
  {
  id: 205,
  infinitive: "prijzen",
  translation: "хвалить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "prijs",
    hij_ott: "prijst",
    wij_ott: "prijzen",
    ik_ovt: "prees",
    wij_ovt: "prezen",
    vtt: "heb geprezen",
    ik_continuous: "ben aan het prijzen",
    hij_continuous: "is aan het prijzen",
    ik_future: "ga prijzen",
    hij_future: "gaat prijzen"
  }
},
  {
  id: 206,
  infinitive: "raden",
  translation: "советовать/угадывать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "raad",
    hij_ott: "raadt",
    wij_ott: "raden",
    ik_ovt: "raadde",
    wij_ovt: "raadden",
    vtt: "heb geraden",
    ik_continuous: "ben aan het raden",
    hij_continuous: "is aan het raden",
    ik_future: "ga raden",
    hij_future: "gaat raden"
  }
},
  {
  id: 207,
  infinitive: "rijden",
  translation: "ехать",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "rijd",
    hij_ott: "rijdt",
    wij_ott: "rijden",
    ik_ovt: "reed",
    wij_ovt: "reden",
    vtt: "heb/is gereden",
    ik_continuous: "ben aan het rijden",
    hij_continuous: "is aan het rijden",
    ik_future: "ga rijden",
    hij_future: "gaat rijden"
  }
},
  {
  id: 208,
  infinitive: "roepen",
  translation: "звать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "roep",
    hij_ott: "roept",
    wij_ott: "roepen",
    ik_ovt: "riep",
    wij_ovt: "riepen",
    vtt: "heb geroepen",
    ik_continuous: "ben aan het roepen",
    hij_continuous: "is aan het roepen",
    ik_future: "ga roepen",
    hij_future: "gaat roepen"
  }
},
  {
  id: 209,
  infinitive: "ruiken",
  translation: "нюхать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "ruik",
    hij_ott: "ruikt",
    wij_ott: "ruiken",
    ik_ovt: "rook",
    wij_ovt: "roken",
    vtt: "heb geroken",
    ik_continuous: "ben aan het ruiken",
    hij_continuous: "is aan het ruiken",
    ik_future: "ga ruiken",
    hij_future: "gaat ruiken"
  }
},
  {
  id: 210,
  infinitive: "scheiden",
  translation: "разделять",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "scheid",
    hij_ott: "scheidt",
    wij_ott: "scheiden",
    ik_ovt: "scheidde",
    wij_ovt: "scheidden",
    vtt: "heb/is gescheiden",
    ik_continuous: "ben aan het scheiden",
    hij_continuous: "is aan het scheiden",
    ik_future: "ga scheiden",
    hij_future: "gaat scheiden"
  }
},
  {
  id: 211,
  infinitive: "schelden",
  translation: "ругать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "scheld",
    hij_ott: "scheldt",
    wij_ott: "schelden",
    ik_ovt: "schold",
    wij_ovt: "scholden",
    vtt: "heb gescholden",
    ik_continuous: "ben aan het schelden",
    hij_continuous: "is aan het schelden",
    ik_future: "ga schelden",
    hij_future: "gaat schelden"
  }
},
  {
  id: 212,
  infinitive: "schenden",
  translation: "нарушать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "schend",
    hij_ott: "schendt",
    wij_ott: "schenden",
    ik_ovt: "schond",
    wij_ovt: "schonden",
    vtt: "heb geschonden",
    ik_continuous: "ben aan het schenden",
    hij_continuous: "is aan het schenden",
    ik_future: "ga schenden",
    hij_future: "gaat schenden"
  }
},
  {
  id: 213,
  infinitive: "schenken",
  translation: "дарить/наливать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "schenk",
    hij_ott: "schenkt",
    wij_ott: "schenken",
    ik_ovt: "schonk",
    wij_ovt: "schonken",
    vtt: "heb geschonken",
    ik_continuous: "ben aan het schenken",
    hij_continuous: "is aan het schenken",
    ik_future: "ga schenken",
    hij_future: "gaat schenken"
  }
},
  {
  id: 214,
  infinitive: "scheppen",
  translation: "создавать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "schep",
    hij_ott: "schept",
    wij_ott: "scheppen",
    ik_ovt: "schiep",
    wij_ovt: "schiepen",
    vtt: "heb geschapen",
    ik_continuous: "ben aan het scheppen",
    hij_continuous: "is aan het scheppen",
    ik_future: "ga scheppen",
    hij_future: "gaat scheppen"
  }
},
  {
  id: 215,
  infinitive: "scheren",
  translation: "брить",
  type: "irregular",
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
  id: 216,
  infinitive: "schieten",
  translation: "стрелять",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "schiet",
    hij_ott: "schiet",
    wij_ott: "schieten",
    ik_ovt: "schoot",
    wij_ovt: "schoten",
    vtt: "heb geschoten",
    ik_continuous: "ben aan het schieten",
    hij_continuous: "is aan het schieten",
    ik_future: "ga schieten",
    hij_future: "gaat schieten"
  }
},
  {
  id: 217,
  infinitive: "schijnen",
  translation: "светить/казаться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "schijn",
    hij_ott: "schijnt",
    wij_ott: "schijnen",
    ik_ovt: "scheen",
    wij_ovt: "schenen",
    vtt: "heb geschenen",
    ik_continuous: "ben aan het schijnen",
    hij_continuous: "is aan het schijnen",
    ik_future: "ga schijnen",
    hij_future: "gaat schijnen"
  }
},
  {
  id: 218,
  infinitive: "schrijven",
  translation: "писать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "schrijf",
    hij_ott: "schrijft",
    wij_ott: "schrijven",
    ik_ovt: "schreef",
    wij_ovt: "schreven",
    vtt: "heb geschreven",
    ik_continuous: "ben aan het schrijven",
    hij_continuous: "is aan het schrijven",
    ik_future: "ga schrijven",
    hij_future: "gaat schrijven"
  }
},
  {
  id: 219,
  infinitive: "schrikken",
  translation: "пугаться",
  type: "irregular",
  ketchup: false,
  auxiliary: "zijn",
  forms: {
    ik_ott: "schrik",
    hij_ott: "schrikt",
    wij_ott: "schrikken",
    ik_ovt: "schrok",
    wij_ovt: "schrokken",
    vtt: "is geschrokken",
    ik_continuous: "ben aan het schrikken",
    hij_continuous: "is aan het schrikken",
    ik_future: "ga schrikken",
    hij_future: "gaat schrikken"
  }
},
  {
  id: 220,
  infinitive: "schuiven",
  translation: "двигать",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "schuif",
    hij_ott: "schuift",
    wij_ott: "schuiven",
    ik_ovt: "schoof",
    wij_ovt: "schoven",
    vtt: "heb/is geschoven",
    ik_continuous: "ben aan het schuiven",
    hij_continuous: "is aan het schuiven",
    ik_future: "ga schuiven",
    hij_future: "gaat schuiven"
  }
},
  {
  id: 221,
  infinitive: "slaan",
  translation: "бить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "sla",
    hij_ott: "slaat",
    wij_ott: "slaan",
    ik_ovt: "sloeg",
    wij_ovt: "sloegen",
    vtt: "heb geslagen",
    ik_continuous: "ben aan het slaan",
    hij_continuous: "is aan het slaan",
    ik_future: "ga slaan",
    hij_future: "gaat slaan"
  }
},
  {
  id: 222,
  infinitive: "slapen",
  translation: "спать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "slaap",
    hij_ott: "slaapt",
    wij_ott: "slapen",
    ik_ovt: "sliep",
    wij_ovt: "sliepen",
    vtt: "heb geslapen",
    ik_continuous: "ben aan het slapen",
    hij_continuous: "is aan het slapen",
    ik_future: "ga slapen",
    hij_future: "gaat slapen"
  }
},
  {
  id: 223,
  infinitive: "slijpen",
  translation: "точить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "slijp",
    hij_ott: "slijpt",
    wij_ott: "slijpen",
    ik_ovt: "sleep",
    wij_ovt: "slepen",
    vtt: "heb geslepen",
    ik_continuous: "ben aan het slijpen",
    hij_continuous: "is aan het slijpen",
    ik_future: "ga slijpen",
    hij_future: "gaat slijpen"
  }
},
  {
  id: 224,
  infinitive: "slijten",
  translation: "изнашиваться",
  type: "irregular",
  ketchup: false,
  auxiliary: "zijn",
  forms: {
    ik_ott: "slijt",
    hij_ott: "slijt",
    wij_ott: "slijten",
    ik_ovt: "sleet",
    wij_ovt: "sleten",
    vtt: "is gesleten",
    ik_continuous: "ben aan het slijten",
    hij_continuous: "is aan het slijten",
    ik_future: "ga slijten",
    hij_future: "gaat slijten"
  }
},
  {
  id: 225,
  infinitive: "sluipen",
  translation: "красться",
  type: "irregular",
  ketchup: false,
  auxiliary: "zijn",
  forms: {
    ik_ott: "sluip",
    hij_ott: "sluipt",
    wij_ott: "sluipen",
    ik_ovt: "sloop",
    wij_ovt: "slopen",
    vtt: "is geslopen",
    ik_continuous: "ben aan het sluipen",
    hij_continuous: "is aan het sluipen",
    ik_future: "ga sluipen",
    hij_future: "gaat sluipen"
  }
},
  {
  id: 226,
  infinitive: "sluiten",
  translation: "закрывать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "sluit",
    hij_ott: "sluit",
    wij_ott: "sluiten",
    ik_ovt: "sloot",
    wij_ovt: "sloten",
    vtt: "heb gesloten",
    ik_continuous: "ben aan het sluiten",
    hij_continuous: "is aan het sluiten",
    ik_future: "ga sluiten",
    hij_future: "gaat sluiten"
  }
},
  {
  id: 227,
  infinitive: "smelten",
  translation: "таять",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "smelt",
    hij_ott: "smelt",
    wij_ott: "smelten",
    ik_ovt: "smolt",
    wij_ovt: "smolten",
    vtt: "heb/is gesmolten",
    ik_continuous: "ben aan het smelten",
    hij_continuous: "is aan het smelten",
    ik_future: "ga smelten",
    hij_future: "gaat smelten"
  }
},
  {
  id: 228,
  infinitive: "smijten",
  translation: "швырять",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "smijt",
    hij_ott: "smijt",
    wij_ott: "smijten",
    ik_ovt: "smeet",
    wij_ovt: "smeten",
    vtt: "heb gesmeten",
    ik_continuous: "ben aan het smijten",
    hij_continuous: "is aan het smijten",
    ik_future: "ga smijten",
    hij_future: "gaat smijten"
  }
},
  {
  id: 229,
  infinitive: "snijden",
  translation: "резать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "snijd",
    hij_ott: "snijdt",
    wij_ott: "snijden",
    ik_ovt: "sneed",
    wij_ovt: "sneden",
    vtt: "heb gesneden",
    ik_continuous: "ben aan het snijden",
    hij_continuous: "is aan het snijden",
    ik_future: "ga snijden",
    hij_future: "gaat snijden"
  }
},
  {
  id: 230,
  infinitive: "snuiten",
  translation: "сморкаться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "snuit",
    hij_ott: "snuit",
    wij_ott: "snuiten",
    ik_ovt: "snoot",
    wij_ovt: "snoten",
    vtt: "heb gesnoten",
    ik_continuous: "ben aan het snuiten",
    hij_continuous: "is aan het snuiten",
    ik_future: "ga snuiten",
    hij_future: "gaat snuiten"
  }
},
  {
  id: 231,
  infinitive: "snuiven",
  translation: "нюхать/сопеть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "snuif",
    hij_ott: "snuift",
    wij_ott: "snuiven",
    ik_ovt: "snoof",
    wij_ovt: "snoven",
    vtt: "heb gesnoven",
    ik_continuous: "ben aan het snuiven",
    hij_continuous: "is aan het snuiven",
    ik_future: "ga snuiven",
    hij_future: "gaat snuiven"
  }
},
  {
  id: 232,
  infinitive: "spannen",
  translation: "натягивать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "span",
    hij_ott: "spant",
    wij_ott: "spannen",
    ik_ovt: "spande",
    wij_ovt: "spanden",
    vtt: "heb gespannen",
    ik_continuous: "ben aan het spannen",
    hij_continuous: "is aan het spannen",
    ik_future: "ga spannen",
    hij_future: "gaat spannen"
  }
},
  {
  id: 233,
  infinitive: "spijten",
  translation: "сожалеть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "spijt",
    hij_ott: "spijt",
    wij_ott: "spijten",
    ik_ovt: "speet",
    wij_ovt: "speten",
    vtt: "heeft gespeten",
    ik_continuous: "ben aan het spijten",
    hij_continuous: "is aan het spijten",
    ik_future: "ga spijten",
    hij_future: "gaat spijten"
  }
},
  {
  id: 234,
  infinitive: "spreken",
  translation: "говорить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "spreek",
    hij_ott: "spreekt",
    wij_ott: "spreken",
    ik_ovt: "sprak",
    wij_ovt: "spraken",
    vtt: "heb gesproken",
    ik_continuous: "ben aan het spreken",
    hij_continuous: "is aan het spreken",
    ik_future: "ga spreken",
    hij_future: "gaat spreken"
  }
},
  {
  id: 235,
  infinitive: "springen",
  translation: "прыгать",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "spring",
    hij_ott: "springt",
    wij_ott: "springen",
    ik_ovt: "sprong",
    wij_ovt: "sprongen",
    vtt: "heb/is gesprongen",
    ik_continuous: "ben aan het springen",
    hij_continuous: "is aan het springen",
    ik_future: "ga springen",
    hij_future: "gaat springen"
  }
},
  {
  id: 236,
  infinitive: "spuiten",
  translation: "брызгать",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "spuit",
    hij_ott: "spuit",
    wij_ott: "spuiten",
    ik_ovt: "spoot",
    wij_ovt: "spoten",
    vtt: "heb/is gespoten",
    ik_continuous: "ben aan het spuiten",
    hij_continuous: "is aan het spuiten",
    ik_future: "ga spuiten",
    hij_future: "gaat spuiten"
  }
},
  {
  id: 237,
  infinitive: "staan",
  translation: "стоять",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "sta",
    hij_ott: "staat",
    wij_ott: "staan",
    ik_ovt: "stond",
    wij_ovt: "stonden",
    vtt: "heb gestaan",
    ik_continuous: "ben aan het staan",
    hij_continuous: "is aan het staan",
    ik_future: "ga staan",
    hij_future: "gaat staan"
  }
},
  {
  id: 238,
  infinitive: "steken",
  translation: "колоть/совать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "steek",
    hij_ott: "steekt",
    wij_ott: "steken",
    ik_ovt: "stak",
    wij_ovt: "staken",
    vtt: "heb gestoken",
    ik_continuous: "ben aan het steken",
    hij_continuous: "is aan het steken",
    ik_future: "ga steken",
    hij_future: "gaat steken"
  }
},
  {
  id: 239,
  infinitive: "stelen",
  translation: "красть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "steel",
    hij_ott: "steelt",
    wij_ott: "stelen",
    ik_ovt: "stal",
    wij_ovt: "stalen",
    vtt: "heb gestolen",
    ik_continuous: "ben aan het stelen",
    hij_continuous: "is aan het stelen",
    ik_future: "ga stelen",
    hij_future: "gaat stelen"
  }
},
  {
  id: 240,
  infinitive: "sterven",
  translation: "умирать",
  type: "irregular",
  ketchup: false,
  auxiliary: "zijn",
  forms: {
    ik_ott: "sterf",
    hij_ott: "sterft",
    wij_ott: "sterven",
    ik_ovt: "stierf",
    wij_ovt: "stierven",
    vtt: "is gestorven",
    ik_continuous: "ben aan het sterven",
    hij_continuous: "is aan het sterven",
    ik_future: "ga sterven",
    hij_future: "gaat sterven"
  }
},
  {
  id: 241,
  infinitive: "stijgen",
  translation: "подниматься",
  type: "irregular",
  ketchup: false,
  auxiliary: "zijn",
  forms: {
    ik_ott: "stijg",
    hij_ott: "stijgt",
    wij_ott: "stijgen",
    ik_ovt: "steeg",
    wij_ovt: "stegen",
    vtt: "is gestegen",
    ik_continuous: "ben aan het stijgen",
    hij_continuous: "is aan het stijgen",
    ik_future: "ga stijgen",
    hij_future: "gaat stijgen"
  }
},
  {
  id: 242,
  infinitive: "stinken",
  translation: "вонять",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "stink",
    hij_ott: "stinkt",
    wij_ott: "stinken",
    ik_ovt: "stonk",
    wij_ovt: "stonken",
    vtt: "heb gestonken",
    ik_continuous: "ben aan het stinken",
    hij_continuous: "is aan het stinken",
    ik_future: "ga stinken",
    hij_future: "gaat stinken"
  }
},
  {
  id: 243,
  infinitive: "stoten",
  translation: "толкать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "stoot",
    hij_ott: "stoot",
    wij_ott: "stoten",
    ik_ovt: "stootte",
    wij_ovt: "stootten",
    vtt: "heb gestoten",
    ik_continuous: "ben aan het stoten",
    hij_continuous: "is aan het stoten",
    ik_future: "ga stoten",
    hij_future: "gaat stoten"
  }
},
  {
  id: 244,
  infinitive: "strijden",
  translation: "бороться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "strijd",
    hij_ott: "strijdt",
    wij_ott: "strijden",
    ik_ovt: "streed",
    wij_ovt: "streden",
    vtt: "heb gestreden",
    ik_continuous: "ben aan het strijden",
    hij_continuous: "is aan het strijden",
    ik_future: "ga strijden",
    hij_future: "gaat strijden"
  }
},
  {
  id: 245,
  infinitive: "strijken",
  translation: "гладить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "strijk",
    hij_ott: "strijkt",
    wij_ott: "strijken",
    ik_ovt: "streek",
    wij_ovt: "streken",
    vtt: "heb gestreken",
    ik_continuous: "ben aan het strijken",
    hij_continuous: "is aan het strijken",
    ik_future: "ga strijken",
    hij_future: "gaat strijken"
  }
},
  {
  id: 246,
  infinitive: "treden",
  translation: "ступать",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "treed",
    hij_ott: "treedt",
    wij_ott: "treden",
    ik_ovt: "trad",
    wij_ovt: "traden",
    vtt: "heb/is getreden",
    ik_continuous: "ben aan het treden",
    hij_continuous: "is aan het treden",
    ik_future: "ga treden",
    hij_future: "gaat treden"
  }
},
  {
  id: 247,
  infinitive: "treffen",
  translation: "попадать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "tref",
    hij_ott: "treft",
    wij_ott: "treffen",
    ik_ovt: "trof",
    wij_ovt: "troffen",
    vtt: "heb getroffen",
    ik_continuous: "ben aan het treffen",
    hij_continuous: "is aan het treffen",
    ik_future: "ga treffen",
    hij_future: "gaat treffen"
  }
},
  {
  id: 248,
  infinitive: "trekken",
  translation: "тянуть",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "trek",
    hij_ott: "trekt",
    wij_ott: "trekken",
    ik_ovt: "trok",
    wij_ovt: "trokken",
    vtt: "heb/is getrokken",
    ik_continuous: "ben aan het trekken",
    hij_continuous: "is aan het trekken",
    ik_future: "ga trekken",
    hij_future: "gaat trekken"
  }
},
  {
  id: 249,
  infinitive: "vallen",
  translation: "падать",
  type: "irregular",
  ketchup: false,
  auxiliary: "zijn",
  forms: {
    ik_ott: "val",
    hij_ott: "valt",
    wij_ott: "vallen",
    ik_ovt: "viel",
    wij_ovt: "vielen",
    vtt: "is gevallen",
    ik_continuous: "ben aan het vallen",
    hij_continuous: "is aan het vallen",
    ik_future: "ga vallen",
    hij_future: "gaat vallen"
  }
},
  {
  id: 250,
  infinitive: "vangen",
  translation: "ловить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "vang",
    hij_ott: "vangt",
    wij_ott: "vangen",
    ik_ovt: "ving",
    wij_ovt: "vingen",
    vtt: "heb gevangen",
    ik_continuous: "ben aan het vangen",
    hij_continuous: "is aan het vangen",
    ik_future: "ga vangen",
    hij_future: "gaat vangen"
  }
},
  {
  id: 251,
  infinitive: "varen",
  translation: "плыть",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "vaar",
    hij_ott: "vaart",
    wij_ott: "varen",
    ik_ovt: "voer",
    wij_ovt: "voeren",
    vtt: "heb/is gevaren",
    ik_continuous: "ben aan het varen",
    hij_continuous: "is aan het varen",
    ik_future: "ga varen",
    hij_future: "gaat varen"
  }
},
  {
  id: 252,
  infinitive: "vechten",
  translation: "драться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "vecht",
    hij_ott: "vecht",
    wij_ott: "vechten",
    ik_ovt: "vocht",
    wij_ovt: "vochten",
    vtt: "heb gevochten",
    ik_continuous: "ben aan het vechten",
    hij_continuous: "is aan het vechten",
    ik_future: "ga vechten",
    hij_future: "gaat vechten"
  }
},
  {
  id: 253,
  infinitive: "verbieden",
  translation: "запрещать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "verbied",
    hij_ott: "verbiedt",
    wij_ott: "verbieden",
    ik_ovt: "verbood",
    wij_ovt: "verboden",
    vtt: "heb verboden",
    ik_continuous: "ben aan het verbieden",
    hij_continuous: "is aan het verbieden",
    ik_future: "ga verbieden",
    hij_future: "gaat verbieden"
  }
},
  {
  id: 254,
  infinitive: "verdwijnen",
  translation: "исчезать",
  type: "irregular",
  ketchup: false,
  auxiliary: "zijn",
  forms: {
    ik_ott: "verdwijn",
    hij_ott: "verdwijnt",
    wij_ott: "verdwijnen",
    ik_ovt: "verdween",
    wij_ovt: "verdwenen",
    vtt: "is verdwenen",
    ik_continuous: "ben aan het verdwijnen",
    hij_continuous: "is aan het verdwijnen",
    ik_future: "ga verdwijnen",
    hij_future: "gaat verdwijnen"
  }
},
  {
  id: 255,
  infinitive: "vergelijken",
  translation: "сравнивать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "vergelijk",
    hij_ott: "vergelijkt",
    wij_ott: "vergelijken",
    ik_ovt: "vergeleek",
    wij_ovt: "vergeleken",
    vtt: "heb vergeleken",
    ik_continuous: "ben aan het vergelijken",
    hij_continuous: "is aan het vergelijken",
    ik_future: "ga vergelijken",
    hij_future: "gaat vergelijken"
  }
},
  {
  id: 256,
  infinitive: "vergeten",
  translation: "забывать",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "vergeet",
    hij_ott: "vergeet",
    wij_ott: "vergeten",
    ik_ovt: "vergat",
    wij_ovt: "vergaten",
    vtt: "heb/is vergeten",
    ik_continuous: "ben aan het vergeten",
    hij_continuous: "is aan het vergeten",
    ik_future: "ga vergeten",
    hij_future: "gaat vergeten"
  }
},
  {
  id: 257,
  infinitive: "verliezen",
  translation: "терять",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "verlies",
    hij_ott: "verliest",
    wij_ott: "verliezen",
    ik_ovt: "verloor",
    wij_ovt: "verloren",
    vtt: "heb/is verloren",
    ik_continuous: "ben aan het verliezen",
    hij_continuous: "is aan het verliezen",
    ik_future: "ga verliezen",
    hij_future: "gaat verliezen"
  }
},
  {
  id: 258,
  infinitive: "vermijden",
  translation: "избегать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "vermijd",
    hij_ott: "vermijdt",
    wij_ott: "vermijden",
    ik_ovt: "vermeed",
    wij_ovt: "vermeden",
    vtt: "heb vermeden",
    ik_continuous: "ben aan het vermijden",
    hij_continuous: "is aan het vermijden",
    ik_future: "ga vermijden",
    hij_future: "gaat vermijden"
  }
},
  {
  id: 259,
  infinitive: "verstaan",
  translation: "понимать (на слух)",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "versta",
    hij_ott: "verstaat",
    wij_ott: "verstaan",
    ik_ovt: "verstond",
    wij_ovt: "verstonden",
    vtt: "heb verstaan",
    ik_continuous: "ben aan het verstaan",
    hij_continuous: "is aan het verstaan",
    ik_future: "ga verstaan",
    hij_future: "gaat verstaan"
  }
},
  {
  id: 260,
  infinitive: "vertrekken",
  translation: "отправляться",
  type: "irregular",
  ketchup: false,
  auxiliary: "zijn",
  forms: {
    ik_ott: "vertrek",
    hij_ott: "vertrekt",
    wij_ott: "vertrekken",
    ik_ovt: "vertrok",
    wij_ovt: "vertrokken",
    vtt: "is vertrokken",
    ik_continuous: "ben aan het vertrekken",
    hij_continuous: "is aan het vertrekken",
    ik_future: "ga vertrekken",
    hij_future: "gaat vertrekken"
  }
},
  {
  id: 261,
  infinitive: "vervangen",
  translation: "заменять",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "vervang",
    hij_ott: "vervangt",
    wij_ott: "vervangen",
    ik_ovt: "verving",
    wij_ovt: "vervingen",
    vtt: "heb vervangen",
    ik_continuous: "ben aan het vervangen",
    hij_continuous: "is aan het vervangen",
    ik_future: "ga vervangen",
    hij_future: "gaat vervangen"
  }
},
  {
  id: 262,
  infinitive: "vinden",
  translation: "находить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "vind",
    hij_ott: "vindt",
    wij_ott: "vinden",
    ik_ovt: "vond",
    wij_ovt: "vonden",
    vtt: "heb gevonden",
    ik_continuous: "ben aan het vinden",
    hij_continuous: "is aan het vinden",
    ik_future: "ga vinden",
    hij_future: "gaat vinden"
  }
},
  {
  id: 263,
  infinitive: "vliegen",
  translation: "летать",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "vlieg",
    hij_ott: "vliegt",
    wij_ott: "vliegen",
    ik_ovt: "vloog",
    wij_ovt: "vlogen",
    vtt: "heb/is gevlogen",
    ik_continuous: "ben aan het vliegen",
    hij_continuous: "is aan het vliegen",
    ik_future: "ga vliegen",
    hij_future: "gaat vliegen"
  }
},
  {
  id: 264,
  infinitive: "vragen",
  translation: "спрашивать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "vraag",
    hij_ott: "vraagt",
    wij_ott: "vragen",
    ik_ovt: "vroeg",
    wij_ovt: "vroegen",
    vtt: "heb gevraagd",
    ik_continuous: "ben aan het vragen",
    hij_continuous: "is aan het vragen",
    ik_future: "ga vragen",
    hij_future: "gaat vragen"
  }
},
  {
  id: 265,
  infinitive: "vriezen",
  translation: "мерзнуть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "vries",
    hij_ott: "vriest",
    wij_ott: "vriezen",
    ik_ovt: "vroor",
    wij_ovt: "vroren",
    vtt: "heeft gevroren",
    ik_continuous: "ben aan het vriezen",
    hij_continuous: "is aan het vriezen",
    ik_future: "ga vriezen",
    hij_future: "gaat vriezen"
  }
},
  {
  id: 266,
  infinitive: "wassen",
  translation: "мыть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "was",
    hij_ott: "wast",
    wij_ott: "wassen",
    ik_ovt: "waste",
    wij_ovt: "wasten",
    vtt: "heb gewassen",
    ik_continuous: "ben aan het wassen",
    hij_continuous: "is aan het wassen",
    ik_future: "ga wassen",
    hij_future: "gaat wassen"
  }
},
  {
  id: 267,
  infinitive: "wegen",
  translation: "весить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "weeg",
    hij_ott: "weegt",
    wij_ott: "wegen",
    ik_ovt: "woog",
    wij_ovt: "wogen",
    vtt: "heb gewogen",
    ik_continuous: "ben aan het wegen",
    hij_continuous: "is aan het wegen",
    ik_future: "ga wegen",
    hij_future: "gaat wegen"
  }
},
  {
  id: 268,
  infinitive: "werpen",
  translation: "бросать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "werp",
    hij_ott: "werpt",
    wij_ott: "werpen",
    ik_ovt: "wierp",
    wij_ovt: "wierpen",
    vtt: "heb geworpen",
    ik_continuous: "ben aan het werpen",
    hij_continuous: "is aan het werpen",
    ik_future: "ga werpen",
    hij_future: "gaat werpen"
  }
},
  {
  id: 269,
  infinitive: "weten",
  translation: "знать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "weet",
    hij_ott: "weet",
    wij_ott: "weten",
    ik_ovt: "wist",
    wij_ovt: "wisten",
    vtt: "heb geweten",
    ik_continuous: "ben aan het weten",
    hij_continuous: "is aan het weten",
    ik_future: "ga weten",
    hij_future: "gaat weten"
  }
},
  {
  id: 270,
  infinitive: "wezen",
  translation: "быть (устар.)",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "ben",
    hij_ott: "is",
    wij_ott: "zijn",
    ik_ovt: "was",
    wij_ovt: "waren",
    vtt: "ben geweest",
    ik_continuous: "ben aan het wezen",
    hij_continuous: "is aan het wezen",
    ik_future: "ga wezen",
    hij_future: "gaat wezen"
  }
},
  {
  id: 271,
  infinitive: "wijzen",
  translation: "указывать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "wijs",
    hij_ott: "wijst",
    wij_ott: "wijzen",
    ik_ovt: "wees",
    wij_ovt: "wezen",
    vtt: "heb gewezen",
    ik_continuous: "ben aan het wijzen",
    hij_continuous: "is aan het wijzen",
    ik_future: "ga wijzen",
    hij_future: "gaat wijzen"
  }
},
  {
  id: 272,
  infinitive: "willen",
  translation: "хотеть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "wil",
    hij_ott: "wil",
    wij_ott: "willen",
    ik_ovt: "wilde",
    wij_ovt: "wilden",
    vtt: "heb gewild",
    ik_continuous: "ben aan het willen",
    hij_continuous: "is aan het willen",
    ik_future: "ga willen",
    hij_future: "gaat willen"
  }
},
  {
  id: 273,
  infinitive: "winnen",
  translation: "выигрывать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "win",
    hij_ott: "wint",
    wij_ott: "winnen",
    ik_ovt: "won",
    wij_ovt: "wonnen",
    vtt: "heb gewonnen",
    ik_continuous: "ben aan het winnen",
    hij_continuous: "is aan het winnen",
    ik_future: "ga winnen",
    hij_future: "gaat winnen"
  }
},
  {
  id: 274,
  infinitive: "worden",
  translation: "становиться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "word",
    hij_ott: "wordt",
    wij_ott: "worden",
    ik_ovt: "werd",
    wij_ovt: "werden",
    vtt: "ben geworden",
    ik_continuous: "ben aan het worden",
    hij_continuous: "is aan het worden",
    ik_future: "ga worden",
    hij_future: "gaat worden"
  }
},
  {
  id: 275,
  infinitive: "wrijven",
  translation: "тереть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "wrijf",
    hij_ott: "wrijft",
    wij_ott: "wrijven",
    ik_ovt: "wreef",
    wij_ovt: "wreven",
    vtt: "heb gewreven",
    ik_continuous: "ben aan het wrijven",
    hij_continuous: "is aan het wrijven",
    ik_future: "ga wrijven",
    hij_future: "gaat wrijven"
  }
},
  {
  id: 276,
  infinitive: "zeggen",
  translation: "сказать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "zeg",
    hij_ott: "zegt",
    wij_ott: "zeggen",
    ik_ovt: "zei",
    wij_ovt: "zeiden",
    vtt: "heb gezegd",
    ik_continuous: "ben aan het zeggen",
    hij_continuous: "is aan het zeggen",
    ik_future: "ga zeggen",
    hij_future: "gaat zeggen"
  }
},
  {
  id: 277,
  infinitive: "zenden",
  translation: "посылать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "zend",
    hij_ott: "zendt",
    wij_ott: "zenden",
    ik_ovt: "zond",
    wij_ovt: "zonden",
    vtt: "heb gezonden",
    ik_continuous: "ben aan het zenden",
    hij_continuous: "is aan het zenden",
    ik_future: "ga zenden",
    hij_future: "gaat zenden"
  }
},
  {
  id: 278,
  infinitive: "zien",
  translation: "видеть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "zie",
    hij_ott: "ziet",
    wij_ott: "zien",
    ik_ovt: "zag",
    wij_ovt: "zagen",
    vtt: "heb gezien",
    ik_continuous: "ben aan het zien",
    hij_continuous: "is aan het zien",
    ik_future: "ga zien",
    hij_future: "gaat zien"
  }
},
  {
  id: 279,
  infinitive: "zingen",
  translation: "петь",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "zing",
    hij_ott: "zingt",
    wij_ott: "zingen",
    ik_ovt: "zong",
    wij_ovt: "zongen",
    vtt: "heb gezongen",
    ik_continuous: "ben aan het zingen",
    hij_continuous: "is aan het zingen",
    ik_future: "ga zingen",
    hij_future: "gaat zingen"
  }
},
  {
  id: 280,
  infinitive: "zinken",
  translation: "тонуть",
  type: "irregular",
  ketchup: false,
  auxiliary: "zijn",
  forms: {
    ik_ott: "zink",
    hij_ott: "zinkt",
    wij_ott: "zinken",
    ik_ovt: "zonk",
    wij_ovt: "zonken",
    vtt: "is gezonken",
    ik_continuous: "ben aan het zinken",
    hij_continuous: "is aan het zinken",
    ik_future: "ga zinken",
    hij_future: "gaat zinken"
  }
},
  {
  id: 281,
  infinitive: "zitten",
  translation: "сидеть",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "zit",
    hij_ott: "zit",
    wij_ott: "zitten",
    ik_ovt: "zat",
    wij_ovt: "zaten",
    vtt: "heb gezeten",
    ik_continuous: "ben aan het zitten",
    hij_continuous: "is aan het zitten",
    ik_future: "ga zitten",
    hij_future: "gaat zitten"
  }
},
  {
  id: 282,
  infinitive: "zoeken",
  translation: "искать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "zoek",
    hij_ott: "zoekt",
    wij_ott: "zoeken",
    ik_ovt: "zocht",
    wij_ovt: "zochten",
    vtt: "heb gezocht",
    ik_continuous: "ben aan het zoeken",
    hij_continuous: "is aan het zoeken",
    ik_future: "ga zoeken",
    hij_future: "gaat zoeken"
  }
},
  {
  id: 283,
  infinitive: "zuigen",
  translation: "сосать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "zuig",
    hij_ott: "zuigt",
    wij_ott: "zuigen",
    ik_ovt: "zoog",
    wij_ovt: "zogen",
    vtt: "heb gezogen",
    ik_continuous: "ben aan het zuigen",
    hij_continuous: "is aan het zuigen",
    ik_future: "ga zuigen",
    hij_future: "gaat zuigen"
  }
},
  {
  id: 284,
  infinitive: "zuipen",
  translation: "бухать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "zuip",
    hij_ott: "zuipt",
    wij_ott: "zuipen",
    ik_ovt: "zoop",
    wij_ovt: "zopen",
    vtt: "heb gezopen",
    ik_continuous: "ben aan het zuipen",
    hij_continuous: "is aan het zuipen",
    ik_future: "ga zuipen",
    hij_future: "gaat zuipen"
  }
},
  {
  id: 285,
  infinitive: "zullen",
  translation: "буду (вспом.)",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "zal",
    hij_ott: "zal",
    wij_ott: "zullen",
    ik_ovt: "zou",
    wij_ovt: "zouden",
    vtt: "-",
    ik_continuous: "ben aan het zullen",
    hij_continuous: "is aan het zullen",
    ik_future: "ga zullen",
    hij_future: "gaat zullen"
  }
},
  {
  id: 286,
  infinitive: "zwelgen",
  translation: "упиваться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "zwelg",
    hij_ott: "zwelgt",
    wij_ott: "zwelgen",
    ik_ovt: "zwolg",
    wij_ovt: "zwolgen",
    vtt: "heb gezwolgen",
    ik_continuous: "ben aan het zwelgen",
    hij_continuous: "is aan het zwelgen",
    ik_future: "ga zwelgen",
    hij_future: "gaat zwelgen"
  }
},
  {
  id: 287,
  infinitive: "zwellen",
  translation: "опухать",
  type: "irregular",
  ketchup: false,
  auxiliary: "zijn",
  forms: {
    ik_ott: "zwel",
    hij_ott: "zwelt",
    wij_ott: "zwellen",
    ik_ovt: "zwol",
    wij_ovt: "zwollen",
    vtt: "is gezwollen",
    ik_continuous: "ben aan het zwellen",
    hij_continuous: "is aan het zwellen",
    ik_future: "ga zwellen",
    hij_future: "gaat zwellen"
  }
},
  {
  id: 288,
  infinitive: "zwemmen",
  translation: "плавать",
  type: "irregular",
  ketchup: false,
  auxiliary: "both",
  forms: {
    ik_ott: "zwem",
    hij_ott: "zwemt",
    wij_ott: "zwemmen",
    ik_ovt: "zwom",
    wij_ovt: "zwommen",
    vtt: "heb/is gezwommen",
    ik_continuous: "ben aan het zwemmen",
    hij_continuous: "is aan het zwemmen",
    ik_future: "ga zwemmen",
    hij_future: "gaat zwemmen"
  }
},
  {
  id: 289,
  infinitive: "zweren",
  translation: "клясться",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "zweer",
    hij_ott: "zweert",
    wij_ott: "zweren",
    ik_ovt: "zwoer",
    wij_ovt: "zwoeren",
    vtt: "heb gezworen",
    ik_continuous: "ben aan het zweren",
    hij_continuous: "is aan het zweren",
    ik_future: "ga zweren",
    hij_future: "gaat zweren"
  }
},
  {
  id: 290,
  infinitive: "zwerven",
  translation: "бродить",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "zwerf",
    hij_ott: "zwerft",
    wij_ott: "zwerven",
    ik_ovt: "zwierf",
    wij_ovt: "zwierven",
    vtt: "heb gezworven",
    ik_continuous: "ben aan het zwerven",
    hij_continuous: "is aan het zwerven",
    ik_future: "ga zwerven",
    hij_future: "gaat zwerven"
  }
},
  {
  id: 291,
  infinitive: "zwijgen",
  translation: "молчать",
  type: "irregular",
  ketchup: false,
  auxiliary: "hebben",
  forms: {
    ik_ott: "zwijg",
    hij_ott: "zwijgt",
    wij_ott: "zwijgen",
    ik_ovt: "zweeg",
    wij_ovt: "zwegen",
    vtt: "heb gezwegen",
    ik_continuous: "ben aan het zwijgen",
    hij_continuous: "is aan het zwijgen",
    ik_future: "ga zwijgen",
    hij_future: "gaat zwijgen"
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

export type ComprehensiveExercise = {
  id: number;
  russian: string;
  infinitive: string;
  verbOptions: string[];
  correctVerbForm: string;
  otherWords: string[];
  correctOrder: string[];
  explanation: string;
  tenseHint: string;
};

export const comprehensiveExercises: ComprehensiveExercise[] = [
  {
    id: 1,
    russian: "Я хочу сейчас одеться.",
    infinitive: "willen (хотеть, OTT)",
    verbOptions: ["wil", "wilt", "willen", "wilde", "wilden"],
    correctVerbForm: "wil",
    otherWords: ["Ik", "nu", "me", "aankleden"],
    correctOrder: ["Ik", "wil", "me", "nu", "aankleden"],
    explanation: "Прямой порядок: Подлежащее (Ik) + Модальный глагол (wil) + Возвратное местоимение (me) + Время (nu) + Инфинитив (aankleden).",
    tenseHint: "OTT (Настоящее время). Образуется от основы глагола + окончания (-t, -en). Для модальных глаголов (willen, kunnen, mogen, moeten) формы часто неправильные."
  },
  {
    id: 2,
    russian: "Вчера он убрал комнату.",
    infinitive: "opruimen (убирать, OVT)",
    verbOptions: ["ruimt", "ruimen", "ruimde", "ruimden"],
    correctVerbForm: "ruimde",
    otherWords: ["Gisteren", "hij", "de", "kamer", "op"],
    correctOrder: ["Gisteren", "ruimde", "hij", "de", "kamer", "op"],
    explanation: "Обратный порядок (начинается со времени 'Gisteren'). Спрягаемый глагол 'ruimde' на втором месте, подлежащее 'hij' на третьем. Отделяемая приставка 'op' идет в самый конец.",
    tenseHint: "OVT (Прошедшее простое время). Правильные глаголы: основа + -te(n) / -de(n) (правило 't kofschip). Неправильные меняют корневую гласную."
  },
  {
    id: 3,
    russian: "Мы умываемся каждое утро.",
    infinitive: "zich wassen (умываться, OTT)",
    verbOptions: ["was", "wast", "wassen", "wasten"],
    correctVerbForm: "wassen",
    otherWords: ["Wij", "ons", "elke", "ochchnd"],
    correctOrder: ["Wij", "wassen", "ons", "elke", "ochtend"],
    explanation: "Прямой порядок. Возвратное местоимение для 'wij' — это 'ons'. Оно ставится сразу после спрягаемого глагола.",
    tenseHint: "OTT (Настоящее время). Образуется: основа + окончания (-t, -en). Возвратные глаголы требуют возвратного местоимения (me, je, zich, ons, jullie, zich)."
  },
  {
    id: 4,
    russian: "Ты не читаешь эту книгу?",
    infinitive: "lezen (читать, OTT)",
    verbOptions: ["lees", "leest", "lezen", "las", "lazen"],
    correctVerbForm: "lees",
    otherWords: ["jij", "dit", "boek", "niet"],
    correctOrder: ["Lees", "jij", "dit", "boek", "niet"],
    explanation: "Вопросительное предложение начинается с глагола. При инверсии с 'jij' окончание '-t' у глагола отпадает (lees, а не leest). 'Niet' ставится в конец, так как отрицает все действие.",
    tenseHint: "OTT (Настоящее время). В вопросах с 'jij/je' после глагола окончание '-t' отпадает (lees jij, а не leest jij)."
  },
  {
    id: 5,
    russian: "Я не купил машину.",
    infinitive: "kopen (покупать, VTT - вспомогательный глагол)",
    verbOptions: ["heb", "heeft", "ben", "is"],
    correctVerbForm: "heb",
    otherWords: ["Ik", "geen", "auto", "gekocht"],
    correctOrder: ["Ik", "heb", "geen", "auto", "gekocht"],
    explanation: "Перфект (VTT). Вспомогательный глагол 'hebben'. Отрицание существительного 'auto' (неопределенного) делается с помощью 'geen', а не 'niet'. Причастие 'gekocht' идет в конец.",
    tenseHint: "VTT (Перфект / Прошедшее завершенное). Образуется: вспомогательный глагол hebben/zijn (в настоящем времени) + причастие прошедшего времени (ge + корень + t/d/en) в конце предложения."
  },
  {
    id: 6,
    russian: "Она позвонит мне завтра.",
    infinitive: "opbellen (звонить, Future)",
    verbOptions: ["zal", "zullen", "gaat", "gaan"],
    correctVerbForm: "zal",
    otherWords: ["Zij", "mij", "morgen", "opbellen"],
    correctOrder: ["Zij", "zal", "mij", "morgen", "opbellen"],
    explanation: "Будущее время с 'zullen'. Спрягаемый глагол 'zal' на втором месте, смысловой глагол с приставкой 'opbellen' идет в конец целиком (не разделяется).",
    tenseHint: "Future (Будущее время). Образуется: вспомогательный глагол zullen/gaan (на втором месте) + инфинитив смыслового глагола (в самом конце)."
  },
  {
    id: 7,
    russian: "Вы (вежл.) интересуетесь искусством?",
    infinitive: "zich interesseren (интересоваться, OTT)",
    verbOptions: ["interesseer", "interesseert", "interesseren"],
    correctVerbForm: "interesseert",
    otherWords: ["U", "zich", "voor", "kunst"],
    correctOrder: ["Interesseert", "U", "zich", "voor", "kunst"],
    explanation: "Вопрос начинается с глагола. Возвратное местоимение для 'U' — это 'zich' (или 'U'). Предлог 'voor' используется с этим глаголом.",
    tenseHint: "OTT (Настоящее время). При вежливом обращении 'U' глагол получает окончание '-t', а возвратное местоимение — 'zich' (или 'u')."
  },
  {
    id: 8,
    russian: "Он пригласил своих друзей.",
    infinitive: "uitnodigen (приглашать, VTT - вспомогательный глагол)",
    verbOptions: ["heb", "heeft", "ben", "is"],
    correctVerbForm: "heeft",
    otherWords: ["Hij", "zijn", "vrienden", "uitgenodigd"],
    correctOrder: ["Hij", "heeft", "zijn", "vrienden", "uitgenodigd"],
    explanation: "Перфект (VTT). Вспомогательный глагол 'heeft' на втором месте. Причастие от отделяемого глагола 'uitgenodigd' (приставка uit- + ge- + корень + d) идет в конец.",
    tenseHint: "VTT (Перфект / Прошедшее завершенное). Образуется: hebben/zijn + причастие. У отделяемых глаголов приставка 'ge-' встает между отделяемой приставкой и корнем (uit-ge-nodigd)."
  },
  {
    id: 9,
    russian: "Мы должны сейчас сделать пересадку.",
    infinitive: "moeten (быть должным, OTT)",
    verbOptions: ["moet", "moeten", "moest", "moesten"],
    correctVerbForm: "moeten",
    otherWords: ["Wij", "nu", "overstappen"],
    correctOrder: ["Wij", "moeten", "nu", "overstappen"],
    explanation: "Модальный глагол 'moeten' на втором месте. Смысловой отделяемый глагол 'overstappen' идет в конец в форме инфинитива (не разделяется).",
    tenseHint: "OTT (Настоящее время). Модальный глагол (moeten) стоит на втором месте и спрягается, а второй (смысловой) глагол идет в конец в форме инфинитива."
  },
  {
    id: 10,
    russian: "Я вчера работал (длительное действие).",
    infinitive: "zijn (быть, OVT - для Continuous)",
    verbOptions: ["was", "waren", "ben", "zijn"],
    correctVerbForm: "was",
    otherWords: ["Ik", "gisteren", "aan", "het", "werken"],
    correctOrder: ["Ik", "was", "gisteren", "aan", "het", "werken"],
    explanation: "Прошедшее длительное время (OVT Continuous). Конструкция: zijn (в OVT) + aan het + инфинитив. Глагол 'was' на втором месте.",
    tenseHint: "OVT Continuous (Прошедшее длительное). Образуется: глагол 'zijn' в прошедшем времени (was/waren) + 'aan het' + инфинитив смыслового глагола."
  }
];