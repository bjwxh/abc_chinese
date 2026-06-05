// ABC Chinese Learning Portal JS Logic

// Central index of all available quizzes
const QUIZ_INDEX = [
  {
    id: 1,
    title: "Quiz 1 – 我和家人 (Me and My Family)",
    meta: "📝 20 Questions | 🗣️ Listening & Text matching",
    active: true
  },
  {
    id: 2,
    title: "Quiz 2 – 数字和颜色 (Numbers & Colors)",
    meta: "📝 15 Questions | 🎨 Audio matches & colors",
    active: false
  }
];

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

  const quiz = window.QUIZ_DATA; // Loaded dynamically from quizzes/quizX.js
  if (!quiz) return null;

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
