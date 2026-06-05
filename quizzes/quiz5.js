// Quiz 5 – 一天的作息 (Daily Routine)
window.QUIZ_DATA = {
  id: 5,
  title: "Quiz 5 – 一天的作息 (Daily Routine)",
  questions: [
    {
      id: 1,
      type: "listening",
      audioText: "上午，我吃面包。",
      pinyin: "Shàng wǔ, wǒ chī miàn bāo.",
      question: "他(tā)在(zài)什(shén)么(me)时(shí)候(hou)吃(chī)面(miàn)包(bāo)？",
      options: [
        { key: "A", text: "上午 (shàng wǔ)" },
        { key: "B", text: "中午 (zhōng wǔ)" },
        { key: "C", text: "下午 (xià wǔ)" }
      ],
      answer: "A",
      explanation: "A - 解析：听力中提到的是“上午” (morning)。"
    },
    {
      id: 2,
      type: "listening",
      audioText: "下午，我和弟弟去玩。",
      pinyin: "Xià wǔ, wǒ hé dì di qù wán.",
      question: "弟(dì)弟(di)下(xià)午(wǔ)去(qù)做(zuò)什(shén)么(me)？",
      options: [
        { key: "A", text: "睡觉 (shuì jiào)" },
        { key: "B", text: "玩 (wán)" },
        { key: "C", text: "起床 (qǐ chuáng)" }
      ],
      answer: "B",
      explanation: "B - 解析：听力说下午和弟弟去“玩” (play)。"
    },
    {
      id: 3,
      type: "listening",
      audioText: "晚上，爸爸在家吃晚餐。",
      pinyin: "Wǎn shang, bà ba zài jiā chī wǎn cān.",
      question: "爸(bà)爸(ba)在(zài)哪(nǎ)里(lǐ)吃(chī)饭(fàn)？",
      options: [
        { key: "A", text: "在家 (zài jiā)" },
        { key: "B", text: "睡觉 (shuì jiào)" },
        { key: "C", text: "上午 (shàng wǔ)" }
      ],
      answer: "A",
      explanation: "A - 解析：听力说爸爸在“家” (at home) 吃晚餐。"
    },
    {
      id: 4,
      type: "image-match",
      image: "assets/wake_up.png",
      question: "图(tú)片(piàn)里(lǐ)的(de)人(rén)在(zài)做(zuò)什(shén)么(me)？",
      options: [
        { key: "A", text: "吃饭 (chī fàn)" },
        { key: "B", text: "睡觉 (shuì jiào)" },
        { key: "C", text: "起床 (qǐ chuáng)" }
      ],
      answer: "C",
      explanation: "C - 解析：图片里早上从床上坐起来是“起床” (wake up/get up)。"
    },
    {
      id: 5,
      type: "image-match",
      image: "assets/noon_sun.png",
      question: "这(zhè)是(shì)一(yì)天(tiān)中(zhōng)的(de)哪(nǎ)个(ge)时(shí)间(jiān)？",
      options: [
        { key: "A", text: "上午 (shàng wǔ)" },
        { key: "B", text: "中午 (zhōng wǔ)" },
        { key: "C", text: "晚上 (wǎn shang)" }
      ],
      answer: "B",
      explanation: "B - 解析：太阳在正上方且时间是12:00，代表“中午” (noon)。"
    },
    {
      id: 6,
      type: "image-match",
      image: "assets/night_sky.png",
      question: "这(zhè)是(shì)什(shén)么(me)时(shí)候(hou)？",
      options: [
        { key: "A", text: "晚上 (wǎn shang)" },
        { key: "B", text: "中午 (zhōng wǔ)" },
        { key: "C", text: "下午 (xià wǔ)" }
      ],
      answer: "A",
      explanation: "A - 解析：有月亮和星星的黑夜是“晚上” (evening/night)。"
    },
    {
      id: 7,
      type: "choice",
      question: "晚(wǎn)上(shang)十(shí)点(diǎn)，我(wǒ)很(hěn)累(lèi)，我(wǒ)要(yào)去(qù) _____。",
      options: [
        { key: "A", text: "起床 (qǐ chuáng)" },
        { key: "B", text: "玩 (wán)" },
        { key: "C", text: "睡觉 (shuì jiào)" }
      ],
      answer: "C",
      explanation: "C - 解析：晚上很累的时候需要去“睡觉” (sleep)。"
    },
    {
      id: 8,
      type: "choice",
      question: "妈(mā)妈(ma) _____ 家(jiā)里(lǐ)做(zuò)饭(fàn)。(Mom is AT home cooking.)",
      options: [
        { key: "A", text: "在 (zài)" },
        { key: "B", text: "去 (qù)" },
        { key: "C", text: "有 (yǒu)" }
      ],
      answer: "A",
      explanation: "A - 解析：表示在某个地点做某事，用介词“在” (at/in)。"
    },
    {
      id: 9,
      type: "choice",
      question: "12:00 中(zhōng)午(wǔ)的(de)时(shí)候(hou)，我(wǒ)们(men)吃(chī) _____。",
      options: [
        { key: "A", text: "早餐 (zǎo cān)" },
        { key: "B", text: "午餐 (wǔ cān)" },
        { key: "C", text: "晚餐 (wǎn cān)" }
      ],
      answer: "B",
      explanation: "B - 解析：中午吃的饭叫“午餐” (lunch)。"
    },
    {
      id: 10,
      type: "choice",
      question: "昨(zuó)天(tiān)下(xià)午(wǔ)，你(nǐ) _____ 哪(nǎ)里(lǐ)？(Where did you GO yesterday afternoon?)",
      options: [
        { key: "A", text: "在 (zài)" },
        { key: "B", text: "去 (qù)" },
        { key: "C", text: "是 (shì)" }
      ],
      answer: "B",
      explanation: "B - 解析：表示前往某个地方，用动词“去” (go)。"
    },
    {
      id: 11,
      type: "choice",
      question: "今(jīn)天(tiān) _____ (afternoon)，我(wǒ)想(xiǎng)吃(chī)苹(píng)果(guǒ)。",
      options: [
        { key: "A", text: "上午 (shàng wǔ)" },
        { key: "B", text: "下午 (xià wǔ)" },
        { key: "C", text: "晚上 (wǎn shang)" }
      ],
      answer: "B",
      explanation: "B - 解析：根据英文提示 afternoon，应该选“下午”。"
    },
    {
      id: 12,
      type: "choice",
      question: "周(zhōu)末(mò) (Weekend) 哥(gē)哥(ge)和(hé)我(wǒ)一(yì)起(qǐ)去(qù) _____ (play)。",
      options: [
        { key: "A", text: "看 (kàn)" },
        { key: "B", text: "玩 (wán)" },
        { key: "C", text: "叫 (jiào)" }
      ],
      answer: "B",
      explanation: "B - 解析：根据英文提示 play，应该选“玩”。"
    },
    {
      id: 13,
      type: "choice",
      question: "早(zǎo)上(shang) _____ (wake up) 以(yǐ)后(hòu)，我(wǒ)喜(xǐ)欢(huan)喝(hē)果(guǒ)汁(zhī)。",
      options: [
        { key: "A", text: "睡觉 (shuì jiào)" },
        { key: "B", text: "起床 (qǐ chuáng)" },
        { key: "C", text: "难过 (nán guò)" }
      ],
      answer: "B",
      explanation: "B - 解析：早上首先要做的事情是“起床” (wake up)。"
    },
    {
      id: 14,
      type: "choice",
      question: "找(zhǎo)出(chū)句(jù)子(zi)中(zhōng)的(de)错(cuò)字(zì)：“今(jīn)天(tiān)下(xià)牛(niú)，我(wǒ)和(hé)妹(mèi)妹(mei)去(qù)玩(wán)。” (Find the incorrect character)",
      options: [
        { key: "A", text: "今 (jīn)" },
        { key: "B", text: "牛 (niú)" },
        { key: "C", text: "去 (qù)" }
      ],
      answer: "B",
      explanation: "B - 解析：“下午”的午错写成了长相相似的“牛” (cow)。"
    },
    {
      id: 15,
      type: "choice",
      question: "找(zhǎo)出(chū)句(jù)子(zi)中(zhōng)的(de)错(cuò)字(zì)：“晚(wǎn)上(shang)，爷(yé)爷(ye)和(hé)奶(nǎi)奶(nai)再(zài)家(jiā)睡(shuì)觉(jiào)。” (Find the incorrect character)",
      options: [
        { key: "A", text: "晚 (wǎn)" },
        { key: "B", text: "再 (zài)" },
        { key: "C", text: "觉 (jué)" }
      ],
      answer: "B",
      explanation: "B - 解析：表示地点“在家”的在，错写成了“再见”的“再”。"
    },
    {
      id: 16,
      type: "choice",
      question: "请(qǐng)把(bǎ)这(zhè)些(xiē)词(cí)排(pái)成(chéng)一(yí)个(gè)正(zhèng)确(què)的(de)句(jù)子(zi)：①去(qù) ②下(xià)午(wǔ) ③玩(wán) ④我(wǒ)们(men)",
      options: [
        { key: "A", text: "④②①③ (我们下午去玩)" },
        { key: "B", text: "①③②④ (去玩下午我们)" },
        { key: "C", text: "③②①④ (玩下午去我们)" }
      ],
      answer: "A",
      explanation: "A - 解析：时间词可以放在主语之后。正确语序：我们(主) 下午(时间) 去(动词) 玩(动词)。"
    },
    {
      id: 17,
      type: "choice",
      question: "请(qǐng)把(bǎ)这(zhè)些(xiē)词(cí)排(pái)成(chéng)一(yí)个(gè)正(zhèng)确(què)的(de)句(jù)子(zi)：①晚(wǎn)餐(cān) ②在(zài) ③吃(chī) ④家(jiā) ⑤他(tā)",
      options: [
        { key: "A", text: "⑤②④③① (他在家吃晚餐)" },
        { key: "B", text: "⑤③②④① (他吃在家晚餐)" },
        { key: "C", text: "②④⑤③① (在家他吃晚餐)" }
      ],
      answer: "A",
      explanation: "A - 解析：正确的中文语序：他(主) 在家(地点状语) 吃(谓) 晚餐(宾)。"
    },
    {
      id: 18,
      type: "choice",
      question: "在(zài)中(zhōng)国(guó)，很(hěn)多(duō)学(xué)校(xiào)和(hé)公(gōng)司(sī)会(huì)有(yǒu)“中(zhōng)午(wǔ)”休(xiū)息(xī)和(hé)睡(shuì)觉(jiào)的(de)时(shí)间(jiān)，叫(jiào)做(zuò)午(wǔ)休(xiū) (wǔ xiū/noon nap)。",
      options: [
        { key: "A", text: "对 (duì)" },
        { key: "B", text: "不对 (bù duì)" }
      ],
      answer: "A",
      explanation: "A - 解析：对。中国学校和很多单位都有“午休”习惯，让大家在中午吃饭后睡个午觉以保持下午的精力。"
    },
    {
      id: 19,
      type: "text",
      question: "你(nǐ)今(jīn)天(tiān)上(shàng)午(wǔ)做(zuò)了(le)什(shén)么(me)？(What did you do this morning? 请(qǐng)写(xiě)一(yí)句(jù)话(huà))",
      referenceAnswer: "我今天上午在吃早餐。（或：我上午去玩。）",
      explanation: "参考答案： 我今天上午在吃早餐。（或：我上午去玩。） - 解析：考察“时间+动作”句型的运用。"
    },
    {
      id: 20,
      type: "text",
      question: "请(qǐng)用(yòng)中(zhōng)文(wén)写(xiě) 2-3 句(jù)话(huà)介(jiè)绍(shào)你(nǐ)一(yì)天(tiān)的(de)作(zuò)息(xī)。你(nǐ)可(kě)以(yǐ)用(yòng)这(zhè)些(xiē)词(cí)：上(shàng)午(wǔ)、下(xià)午(wǔ)、晚(wǎn)上(shang)、起(qǐ)床(chuáng)、睡(shuì)觉(jiào)。",
      referenceAnswer: "我上午起床。我下午去玩。我晚上睡觉。",
      explanation: "参考答案： 我上午起床。我下午去玩。我晚上睡觉。 - 解析：综合运用本课学到的时间段 and 日常作息动词。"
    }
  ]
};
