// ABC Chinese Learning Portal JS Logic

// Global questions database
const QUIZ_DATA = {
  id: 1,
  title: "Quiz 1 – 我和家人 (Me and My Family)",
  questions: [
    {
      id: 1,
      type: "listening",
      audioText: "他是我的哥哥。",
      pinyin: "Tā shì wǒ de gēge.",
      question: "他(tā)是(shì)谁(shuí)？",
      options: [
        { key: "A", text: "弟弟 (dìdi)" },
        { key: "B", text: "哥哥 (gēge)" },
        { key: "C", text: "爸爸 (bàba)" }
      ],
      answer: "B",
      explanation: "B - 解析：听力说是“哥哥” (older brother)."
    },
    {
      id: 2,
      type: "listening",
      audioText: "爷爷和奶奶在睡觉。",
      pinyin: "Yéye hé nǎinai zài shuìjiào.",
      question: "谁(shuí)在(zài)睡(shuì)觉(jiào)？",
      options: [
        { key: "A", text: "爸爸和妈妈 (bàba hé māma)" },
        { key: "B", text: "哥哥和姐姐 (gēge hé jiějie)" },
        { key: "C", text: "爷爷和奶奶 (yéye hé nǎinai)" }
      ],
      answer: "C",
      explanation: "C - 解析：听力提到爷爷(grandpa)和奶奶(grandma)在睡觉。"
    },
    {
      id: 3,
      type: "listening",
      audioText: "我有一只猫和一条鱼。",
      pinyin: "Wǒ yǒu yì zhī māo hé yì tiáo yú.",
      question: "我(wǒ)有(yǒu)什(shén)么(me)？",
      options: [
        { key: "A", text: "猫和鱼 (māo hé yú)" },
        { key: "B", text: "狗和鸟 (gǒu hé niǎo)" },
        { key: "C", text: "兔子和猫 (tùzi hé māo)" }
      ],
      answer: "A",
      explanation: "A - 解析：听力中提到的是猫(cat)和鱼(fish)。"
    },
    {
      id: 4,
      type: "image-match",
      image: "assets/grandfather_newspaper.png",
      question: "图(tú)片(piàn)里(lǐ)是(shì)谁(shuí)？",
      options: [
        { key: "A", text: "爸爸 (bàba)" },
        { key: "B", text: "爷爷 (yéye)" },
        { key: "C", text: "哥哥 (gēge)" }
      ],
      answer: "B",
      explanation: "B - 解析：图片是爷爷(grandfather)。"
    },
    {
      id: 5,
      type: "image-match",
      image: "assets/cute_bunny.png",
      question: "这(zhè)是(shì)什(shén)么(me)动(dòng)物(wù)？",
      options: [
        { key: "A", text: "狗 (gǒu)" },
        { key: "B", text: "鸟 (niǎo)" },
        { key: "C", text: "兔子 (tùzi)" }
      ],
      answer: "C",
      explanation: "C - 解析：图片是小兔子(bunny)。"
    },
    {
      id: 6,
      type: "image-match",
      image: "assets/three_girls.png",
      question: "应(yīng)该(gāi)用(yòng)哪(nǎ)个(gè)词(cí)？",
      options: [
        { key: "A", text: "她们 (tāmen)" },
        { key: "B", text: "他们 (tāmen)" },
        { key: "C", text: "我们 (wǒmen)" }
      ],
      answer: "A",
      explanation: "A - 解析：“她们”(they) 专门用来指代全都是女性的群体。"
    },
    {
      id: 7,
      type: "choice",
      question: "你(nǐ) _____ 什(shén)么(me)名(míng)字(zì)？",
      options: [
        { key: "A", text: "叫" },
        { key: "B", text: "是" },
        { key: "C", text: "有" }
      ],
      answer: "A",
      explanation: "A - 解析：问名字时用动词“叫”(called/named)。"
    },
    {
      id: 8,
      type: "choice",
      question: "我(wǒ)家(jiā) _____ 四(sì)口(kǒu)人(rén)。",
      options: [
        { key: "A", text: "在" },
        { key: "B", text: "去" },
        { key: "C", text: "有" }
      ],
      answer: "C",
      explanation: "C - 解析：表达家里有几口人用动词“有”(have)。"
    },
    {
      id: 9,
      type: "choice",
      question: "她(tā) _____ 我(wǒ)的(de)妹(mèi)妹(mei)。",
      options: [
        { key: "A", text: "叫" },
        { key: "B", text: "是" },
        { key: "C", text: "看" }
      ],
      answer: "B",
      explanation: "B - 解析：表达“A是B”的关系用动词“是”(is/are)。"
    },
    {
      id: 10,
      type: "choice",
      question: "你(nǐ)的(de)狗(gǒu) _____ 岁(suì)？",
      options: [
        { key: "A", text: "几" },
        { key: "B", text: "谁" },
        { key: "C", text: "为什么" }
      ],
      answer: "A",
      explanation: "A - 解析：问年龄用疑问词“几”(how many) 岁。"
    },
    {
      id: 11,
      type: "choice",
      question: "我(wǒ)很(hěn) _____ 我(wǒ)的(de)爸(bà)爸(ba)和(hé)妈(mā)妈(ma)。(love)",
      options: [
        { key: "A", text: "叫" },
        { key: "B", text: "是" },
        { key: "C", text: "爱" }
      ],
      answer: "C",
      explanation: "C - 解析：表达喜欢和感情用动词“爱”(love)。"
    },
    {
      id: 12,
      type: "choice",
      question: "他(tā)们(men)是(shì) _____ ？(Who are they?)",
      options: [
        { key: "A", text: "谁" },
        { key: "B", text: "哪里" },
        { key: "C", text: "什么" }
      ],
      answer: "A",
      explanation: "A - 解析：问“是谁”用疑问词“谁”(who)。"
    },
    {
      id: 13,
      type: "choice",
      question: "我(wǒ)有(yǒu)一(yì)只(zhī)大(dà) _____。(dog)",
      options: [
        { key: "A", text: "猫" },
        { key: "B", text: "狗" },
        { key: "C", text: "鱼" }
      ],
      answer: "B",
      explanation: "B - 解析：根据英文提示 dog 选“狗”。"
    },
    {
      id: 14,
      type: "choice",
      question: "找出句子中的错字：“这是我妹妹，他今年八岁。”",
      options: [
        { key: "A", text: "是" },
        { key: "B", text: "妹" },
        { key: "C", text: "他" }
      ],
      answer: "C",
      explanation: "C - 解析：妹妹是女孩，应该用女字旁的“她”(she) 而不是“他”。"
    },
    {
      id: 15,
      type: "choice",
      question: "找出句子中的错字：“她有一只小猫，两只小兔孑。”",
      options: [
        { key: "A", text: "有" },
        { key: "B", text: "只" },
        { key: "C", text: "孑" }
      ],
      answer: "C",
      explanation: "C - 解析：兔子(rabbit) 的“子”写成了错误的“孑”。"
    },
    {
      id: 16,
      type: "choice",
      question: "请把这些词排成一个正确的句子：①是 ②爷(yé)爷(ye) ③他(tā) ④我(wǒ)的(de)",
      options: [
        { key: "A", text: "③①④② (他是我的爷爷)" },
        { key: "B", text: "①③②④ (是他爷爷我的)" },
        { key: "C", text: "④②①③ (我的爷爷是他)" }
      ],
      answer: "A",
      explanation: "A - 解析：正确的中文语序是：他(主)是(谓)我的爷爷(宾)。"
    },
    {
      id: 17,
      type: "choice",
      question: "请把这些词排成一个正确的句子：①鸟(niǎo) ②两(liǎng)只(zhī) ③家(jiā) ④有(yǒu) ⑤我(wǒ)",
      options: [
        { key: "A", text: "⑤③④②① (我家有两只鸟)" },
        { key: "B", text: "⑤④②①③ (我有两只鸟家)" },
        { key: "C", text: "⑤③②①④ (我家两只鸟有)" }
      ],
      answer: "A",
      explanation: "A - 解析：正确的中文语序是：我家(主)有(谓)两只鸟(宾)。"
    },
    {
      id: 18,
      type: "choice",
      question: "在(zài)中(zhōng)国(guó)家(jiā)庭(tíng)里(lǐ)，称(chēng)呼(hu)妈(mā)妈(ma)的(de)妈(mā)妈(ma)叫(jiào)“奶(nǎi)奶(nai)”。",
      options: [
        { key: "A", text: "对 (True)" },
        { key: "B", text: "不对 (False)" }
      ],
      answer: "B",
      explanation: "B - 解析：不对，妈妈的妈妈叫“外婆”(maternal grandmother)，爸爸的妈妈才叫“奶奶”(paternal grandmother)。"
    },
    {
      id: 19,
      type: "text",
      question: "你(nǐ)家(jiā)有(yǒu)什(shén)么(me)小(xiǎo)动(dòng)物(wù) (pets)？(请写一句话)",
      referenceAnswer: "我家有一只狗。 / 我家没有小动物。",
      explanation: "参考答案： 我家有一只狗。/ 我家没有小动物。- 解析：考察“我家有……”的句型及动物词汇的实际运用。"
    },
    {
      id: 20,
      type: "text",
      question: "请(qǐng)用(yòng)中(zh文)写(xiě) 3 句(jù)话(huà)介(jiè)绍(shào)你(nǐ)的(de)家(jiā)人(rén)。你可以用这些词：家 (family)、有 (have)、爱 (love)。",
      referenceAnswer: "我家有四个人。他们是爸爸、妈妈、哥哥和我。我爱我的家。",
      explanation: "参考答案： 我家有四个人。他们是爸爸、妈妈、哥哥和我。我爱我的家。- 解析：综合运用关于人称、家庭和基础动词的能力。"
    }
  ]
};

// State Management
const STATE = {
  currentKid: null,
  allKids: {}, // registry matching id -> { id, nickname, progress: { quiz1: { score, answers, date } }, badges: [] }
};

// Initialize State from LocalStorage
function initAppState() {
  const data = localStorage.getItem("abc_chinese_kids");
  if (data) {
    STATE.allKids = JSON.parse(data);
  }
  const sessionKid = sessionStorage.getItem("abc_chinese_current_kid");
  if (sessionKid && STATE.allKids[sessionKid]) {
    STATE.currentKid = STATE.allKids[sessionKid];
  }
}

// Register or Login Kid
function loginKid(id, nickname) {
  const normalizedId = id.trim().toLowerCase();
  if (!normalizedId) return false;

  if (!STATE.allKids[normalizedId]) {
    // New registration
    STATE.allKids[normalizedId] = {
      id: normalizedId,
      nickname: nickname.trim() || id,
      progress: {},
      badges: []
    };
  } else if (nickname.trim()) {
    // Update nickname if provided
    STATE.allKids[normalizedId].nickname = nickname.trim();
  }

  STATE.currentKid = STATE.allKids[normalizedId];
  saveData();
  sessionStorage.setItem("abc_chinese_current_kid", normalizedId);
  return STATE.currentKid;
}

// Log out
function logoutKid() {
  STATE.currentKid = null;
  sessionStorage.removeItem("abc_chinese_current_kid");
}

// Save Data to Local Storage
function saveData() {
  localStorage.setItem("abc_chinese_kids", JSON.stringify(STATE.allKids));
}

// Play TTS Audio
function playTTS(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Cancel any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    
    const selectVoiceAndSpeak = () => {
      const voices = window.speechSynthesis.getVoices();
      
      // Filter for Chinese voices
      const zhVoices = voices.filter(v => v.lang.startsWith('zh') || v.lang.includes('CN') || v.lang.includes('HK') || v.lang.includes('TW'));
      
      // Priority sorting: Tingting (premium macOS) -> Siri -> Google -> Others
      let chosenVoice = null;
      
      const tingting = zhVoices.find(v => v.name.includes('Tingting') || v.name.includes('婷婷'));
      const siri = zhVoices.find(v => v.name.includes('Siri') && (v.lang.includes('CN') || v.lang.includes('zh')));
      const google = zhVoices.find(v => v.name.includes('Google') && (v.lang.includes('CN') || v.lang.includes('zh')));
      const anyZh = zhVoices.find(v => v.lang.includes('CN') || v.lang.includes('zh-CN'));
      
      chosenVoice = tingting || siri || google || anyZh || zhVoices[0];
      
      if (chosenVoice) {
        utterance.voice = chosenVoice;
      }
      
      utterance.rate = 0.75; // Speak slowly and clearly for kids
      utterance.pitch = 1.1; // Slightly higher pitch for child-friendly tone
      window.speechSynthesis.speak(utterance);
    };

    // Chrome/Safari voice list load asynchronously
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = selectVoiceAndSpeak;
    } else {
      selectVoiceAndSpeak();
    }
  } else {
    alert("Speech Synthesis is not supported in your browser.");
  }
}

// Grade Quiz and Save
function gradeQuiz(quizId, userAnswers) {
  if (!STATE.currentKid) return null;

  const quiz = QUIZ_DATA; // For now only Quiz 1 exists
  let score = 0;
  const results = [];

  quiz.questions.forEach((q) => {
    const userAnswer = userAnswers[q.id];
    let isCorrect = false;

    if (q.type === "text") {
      // Manual/semi-automated grading for text questions
      // Kids' answers can vary, so we score them true/correct if they write a response of length > 2
      // and show the self-grade comparison. For score calculations, if they filled it out, we give them points.
      isCorrect = userAnswer && userAnswer.trim().length > 2;
    } else {
      isCorrect = (userAnswer === q.answer);
    }

    if (isCorrect) {
      score++;
    }

    results.push({
      questionId: q.id,
      userAnswer: userAnswer || "",
      isCorrect: isCorrect,
      correctAnswer: q.answer || q.referenceAnswer,
      explanation: q.explanation
    });
  });

  const percent = Math.round((score / quiz.questions.length) * 100);
  
  // Award badges
  const badges = [...(STATE.currentKid.badges || [])];
  if (percent === 100 && !badges.includes("Perfect Score 🌟")) {
    badges.push("Perfect Score 🌟");
  } else if (percent >= 80 && !badges.includes("Super Scholar 🎓")) {
    badges.push("Super Scholar 🎓");
  } else if (percent > 0 && !badges.includes("First Step 🚀")) {
    badges.push("First Step 🚀");
  }

  STATE.currentKid.progress[`quiz_${quizId}`] = {
    score: score,
    total: quiz.questions.length,
    percentage: percent,
    results: results,
    date: new Date().toLocaleDateString()
  };
  
  STATE.currentKid.badges = badges;
  STATE.allKids[STATE.currentKid.id] = STATE.currentKid;
  saveData();

  return STATE.currentKid.progress[`quiz_${quizId}`];
}
