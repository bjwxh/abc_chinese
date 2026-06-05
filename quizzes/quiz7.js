// Quiz 7 – 提问与礼貌对话 (Questions and Polite Conversations)
window.QUIZ_DATA = {
  id: 7,
  title: "Quiz 7 – 提问与礼貌对话 (Questions and Polite Conversations)",
  questions: [
    {
      id: 1,
      type: "listening",
      audioText: "哥哥给我一个苹果，我说：“谢谢！”",
      pinyin: "Gē ge gěi wǒ yī gè píng guǒ, wǒ shuō: 'Xiè xie!'",
      question: "我(wǒ)对(duì)哥(gē)哥(ge)说(shuō)了(le)什(shén)么(me)？",
      options: [
        { key: "A", text: "对不起 (duì bu qǐ)" },
        { key: "B", text: "谢谢 (xiè xie)" },
        { key: "C", text: "没关系 (méi guān xi)" }
      ],
      answer: "B",
      explanation: "B - 解析：听力提到我对哥哥说的是“谢谢” (Thank you)。"
    },
    {
      id: 2,
      type: "listening",
      audioText: "我不小心把牛奶洒了，妈妈说：“没关系”。",
      pinyin: "Wǒ bù xiǎo xīn bǎ niú nǎi sǎ le, mā ma shuō: 'Méi guān xi'.",
      question: "妈(mā)妈(ma)说(shuō)了(le)什(shén)么(me)？",
      options: [
        { key: "A", text: "没关系 (méi guān xi)" },
        { key: "B", text: "谢谢 (xiè xie)" },
        { key: "C", text: "不对 (bú duì)" }
      ],
      answer: "A",
      explanation: "A - 解析：听力提到妈妈宽慰我说的是“没关系” (It's okay)。"
    },
    {
      id: 3,
      type: "listening",
      audioText: "爸爸在家里看书。",
      pinyin: "Bà ba zài jiā lǐ kàn shū.",
      question: "爸(bà)爸(ba)在(zài)哪(nǎ)里(lǐ)？",
      options: [
        { key: "A", text: "睡觉 (shuì jiào)" },
        { key: "B", text: "哪里 (nǎ lǐ)" },
        { key: "C", text: "家 (jiā)" }
      ],
      answer: "C",
      explanation: "C - 解析：听力提到爸爸在“家” (home) 里看书。"
    },
    {
      id: 4,
      type: "image-match",
      image: "assets/broke_bowl_sorry.png",
      question: "他(tā)应(yīng)该(gāi)说(shuō)什(shén)么(me)？",
      options: [
        { key: "A", text: "没关系 (méi guān xi)" },
        { key: "B", text: "对不起 (duì bu qǐ)" },
        { key: "C", text: "谢谢 (xiè xie)" }
      ],
      answer: "B",
      explanation: "B - 解析：打破碗做错了事情，应该道歉说“对不起” (Sorry)。"
    },
    {
      id: 5,
      type: "image-match",
      image: "assets/red_checkmark_board.png",
      question: "这(zhè)个(ge)符(fú)号(hào)代(dài)表(biǎo) _____。",
      options: [
        { key: "A", text: "对 (duì)" },
        { key: "B", text: "不对 (bú duì)" },
        { key: "C", text: "谁 (shuí)" }
      ],
      answer: "A",
      explanation: "A - 解析：红色的勾（✓）在中文里代表正确，也就是“对” (Correct/True)。"
    },
    {
      id: 6,
      type: "image-match",
      image: "assets/kids_watching_tv.png",
      question: "他(tā)们(men)在(zài) _____ 电(diàn)视(shì) (TV)。",
      options: [
        { key: "A", text: "看 (kàn)" },
        { key: "B", text: "吃 (chī)" },
        { key: "C", text: "喝 (hē)" }
      ],
      answer: "A",
      explanation: "A - 解析：看电视要用表示视觉动作的词“看” (watch/look)。"
    },
    {
      id: 7,
      type: "choice",
      question: "你(nǐ)的(de)猫(māo)在(zài) _____ ？",
      options: [
        { key: "A", text: "什么 (shén me)" },
        { key: "B", text: "谁 (shuí)" },
        { key: "C", text: "哪里 (nǎ lǐ)" }
      ],
      answer: "C",
      explanation: "C - 解析：询问猫在什么地方，用疑问词“哪里” (where)。"
    },
    {
      id: 8,
      type: "choice",
      question: "A说(shuō)：“对(duì)不(bu)起(qǐ)！” B应(yīng)该(gāi)回(huí)答(dá)：“_____”。",
      options: [
        { key: "A", text: "谢谢 (xiè xie)" },
        { key: "B", text: "没关系 (méi guān xi)" },
        { key: "C", text: "对 (duì)" }
      ],
      answer: "B",
      explanation: "B - 解析：“对不起”和“没关系”是中文里道歉和原谅的固定搭配。"
    },
    {
      id: 9,
      type: "choice",
      question: "你(nǐ)明(míng)天(tiān) _____ 不(bú)去(qù)上(shàng)学(xué)？",
      options: [
        { key: "A", text: "为什么 (wèi shén me)" },
        { key: "B", text: "谁 (shuí)" },
        { key: "C", text: "几岁 (jǐ suì)" }
      ],
      answer: "A",
      explanation: "A - 解析：复习题，询问原因要用“为什么” (why)。"
    },
    {
      id: 10,
      type: "choice",
      question: "A: _____ 吃(chī)了(le)我(wǒ)的(de)面(miàn)包(bāo)？ B: 是(shì)弟(dì)弟(di)吃(chī)的(de)。",
      options: [
        { key: "A", text: "谁 (shuí)" },
        { key: "B", text: "哪里 (nǎ lǐ)" },
        { key: "C", text: "什么 (shén me)" }
      ],
      answer: "A",
      explanation: "A - 解析：回答是“弟弟”，说明问的是人，所以用疑问词“谁” (who)。"
    },
    {
      id: 11,
      type: "choice",
      question: "他(tā)说(shuō)今(jīn)天(tiān)是(shì)星(xīng)期(qī)八(bā)，他(tā)说(shuō)得(de) _____。",
      options: [
        { key: "A", text: "对 (duì)" },
        { key: "B", text: "不对 (bú duì)" },
        { key: "C", text: "好吃 (hǎo chī)" }
      ],
      answer: "B",
      explanation: "B - 解析：一个星期只有七天，说有星期八是“不对” (incorrect) 的。"
    },
    {
      id: 12,
      type: "choice",
      question: "奶(nǎi)奶(nai)给(gěi)我(wǒ)果(guǒ)汁(zhī)，我(wǒ)说(shuō)：“_____ 奶(nǎi)奶(nai)！”",
      options: [
        { key: "A", text: "对不起 (duì bu qǐ)" },
        { key: "B", text: "没关系 (méi guān xi)" },
        { key: "C", text: "谢谢 (xiè xie)" }
      ],
      answer: "C",
      explanation: "C - 解析：别人给你东西时，要有礼貌地说“谢谢” (Thank you)。"
    },
    {
      id: 13,
      type: "choice",
      question: "你(nǐ)晚(wǎn)上(shang)想(xiǎng) _____ 什(shén)么(me)？",
      options: [
        { key: "A", text: "玩 (wán)" },
        { key: "B", text: "看 (kàn)" },
        { key: "C", text: "叫 (jiào)" }
      ],
      answer: "B",
      explanation: "B - 解析：复习题，询问晚上想观看什么，用动词“看”。"
    },
    {
      id: 14,
      type: "choice",
      question: "找(zhǎo)出(chū)句(jù)子(zi)中(zhōng)的(de)错(cuò)字(zì)：“射(shè)射(shè)你(nǐ)给(gěi)我(wǒ)苹(píng)果(guǒ)。”",
      options: [
        { key: "A", text: "射 (shè)" },
        { key: "B", text: "给 (gěi)" },
        { key: "C", text: "果 (guǒ)" }
      ],
      answer: "A",
      explanation: "A - 解析：“谢谢”的谢字错写成了发音相近的“射”。"
    },
    {
      id: 15,
      type: "choice",
      question: "找(zhǎo)出(chū)句(jù)子(zi)中(zhōng)的(de)错(cuò)字(zì)：“小(xiǎo)狗(gǒu)在(zài)哪(nǎ)果(guǒ)？”",
      options: [
        { key: "A", text: "狗 (gǒu)" },
        { key: "B", text: "哪 (nǎ)" },
        { key: "C", text: "果 (guǒ)" }
      ],
      answer: "C",
      explanation: "C - 解析：“哪里”的里字错写成了长得很像的“果”。"
    },
    {
      id: 16,
      type: "choice",
      question: "请(qǐng)把(bǎ)这(zhè)些(xiē)词(cí)排(pái)成(chéng)一(yí)个(gè)正(zhèng)确(què)的(de)句(jù)子(zi)：①没(méi)关(guān)系(xi) ②说(shuō) ③妈(mā)妈(ma)",
      options: [
        { key: "A", text: "③②① (妈妈说没关系)" },
        { key: "B", text: "①②③ (没关系说妈妈)" },
        { key: "C", text: "②③① (说妈妈没关系)" }
      ],
      answer: "A",
      explanation: "A - 解析：正确的中文语序：妈妈(主) 说(谓) 没关系(宾)。"
    },
    {
      id: 17,
      type: "choice",
      question: "请(qǐng)把(bǎ)这(zhè)些(xiē)词(cí)排(pái)成(chéng)一(yí)个(gè)正(zhèng)确(què)的(de)句(jù)子(zi)：①在(zài) ②哥(gē)哥(ge) ③哪(nǎ)里(lǐ)",
      options: [
        { key: "A", text: "①②③ (在哥哥哪里)" },
        { key: "B", text: "②①③ (哥哥在哪里)" },
        { key: "C", text: "③②① (哪里哥哥在)" }
      ],
      answer: "B",
      explanation: "B - 解析：询问位置的正确语序：哥哥(主语) 在(介词) 哪里(疑问词)。"
    },
    {
      id: 18,
      type: "choice",
      question: "在(zài)中(zhōng)文(wén)里(lǐ)，当(dāng)别(bié)人(rén)对(duì)你(nǐ)说(shuō)“对(duì)不(bu)起(qǐ)” (Sorry) 的(de)时(shí)候(hou)，你(nǐ)应(yīng)该(gāi)回(huí)答(dá)“谢(xiè)谢(xiè)” (Thank you)。",
      options: [
        { key: "A", text: "对 (duì)" },
        { key: "B", text: "不对 (bù duì)" }
      ],
      answer: "B",
      explanation: "B - 解析：不对。别人说“对不起”(Sorry) 时，应该回答“没关系”(It's okay/It doesn't matter)，而不是“谢谢”。"
    },
    {
      id: 19,
      type: "text",
      question: "如(rú)果(guǒ)你(nǐ)不(bù)小(xiǎo)心(xīn)吃(chī)了(le)弟(dì)弟(di)的(de)香(xiāng)蕉(jiāo)，你(nǐ)应(yīng)该(gāi)对(duì)他(tā)说(shuō)什(shén)么(me)？(What should you say? 请写一句话回答)",
      referenceAnswer: "弟弟，对不起。（或者：对不起，我吃了你的香蕉。）",
      explanation: "参考答案： 弟弟，对不起。（或者：对不起，我吃了你的香蕉。） - 解析：考察在实际情境中运用道歉词汇“对不起”的能力。"
    },
    {
      id: 20,
      type: "text",
      question: "请(qǐng)用(yòng)中(zhōng)文(wén)写(xiě) 2-3 句(jù)话(huà)，编(biān)一(yí)个(gè)简(jiǎn)短(duǎn)的(de)对(duì)话(huà) (conversation)。你(nǐ)需(xū)要(yào)用(yòng)到(dào)“对(duì)不(bu)起(qǐ)”和(hé)“没(méi)关(guān)系(xi)”，或(huò)者(zhě)“谢(xiè)谢(xiè)”和(hé)“好(hǎo)吃(chī)”。",
      referenceAnswer: "我：“对不起，我弄坏了你的书。” 哥哥：“没关系。”（或者：我：“妈妈，谢谢你的晚餐，很好吃。”）",
      explanation: "参考答案： 我：“对不起，我弄坏了你的书。” 哥哥：“没关系。”（或者：我：“妈妈，谢谢你的晚餐，很好吃。”） - 解析：综合考察礼貌用语在对话中的成对运用能力。"
    }
  ]
};
