// Quiz 3 – 数字与星期 (Numbers and Days of the Week)
window.QUIZ_DATA = {
  id: 3,
  title: "Quiz 3 – 数字与星期 (Numbers and Days of the Week)",
  questions: [
    {
      id: 1,
      type: "listening",
      audioText: "我有三个苹果。",
      pinyin: "Wǒ yǒu sān gè píng guǒ.",
      question: "听(tīng)力(lì)中(zhōng)提(tí)到(dào)了(le)几(jǐ)个(gè)苹(píng)果(guǒ)？",
      options: [
        { key: "A", text: "二 (èr)" },
        { key: "B", text: "三 (sān)" },
        { key: "C", text: "四 (sì)" }
      ],
      answer: "B",
      explanation: "B - 解析：听力提到的是“三”(three) 个苹果。"
    },
    {
      id: 2,
      type: "listening",
      audioText: "明天是星期五。",
      pinyin: "Míng tiān shì xīng qī wǔ.",
      question: "明(míng)天(tiān)星(xīng)期(qī)几(jǐ)？",
      options: [
        { key: "A", text: "星期四 (xīng qī sì)" },
        { key: "B", text: "星期五 (xīng qī wǔ)" },
        { key: "C", text: "星期六 (xīng qī liù)" }
      ],
      answer: "B",
      explanation: "B - 解析：听力中说明天是“星期五”(Friday)。"
    },
    {
      id: 3,
      type: "listening",
      audioText: "我的弟弟今年八岁。",
      pinyin: "Wǒ de dì di jīn nián bā suì.",
      question: "弟(dì)弟(di)几(jǐ)岁(suì)？",
      options: [
        { key: "A", text: "七岁 (qī suì)" },
        { key: "B", text: "八岁 (bā suì)" },
        { key: "C", text: "九岁 (jiǔ suì)" }
      ],
      answer: "B",
      explanation: "B - 解析：听力提到弟弟今年“八岁”(eight years old)。"
    },
    {
      id: 4,
      type: "image-match",
      image: "assets/calendar_thursday.png",
      question: "图(tú)片(piàn)里(lǐ)是(shì)星(xīng)期(qī)几(jǐ)？",
      options: [
        { key: "A", text: "星期三 (xīng qī sān)" },
        { key: "B", text: "星期四 (xīng qī sì)" },
        { key: "C", text: "星期五 (xīng qī wǔ)" }
      ],
      answer: "B",
      explanation: "B - 解析：图片圈出的是Thursday，即“星期四”。"
    },
    {
      id: 5,
      type: "image-match",
      image: "assets/test_paper_100.png",
      question: "这(zhè)是(shì)哪(nǎ)个(gè)数(shù)字(zì)？",
      options: [
        { key: "A", text: "十 (shí)" },
        { key: "B", text: "百 (bǎi)" },
        { key: "C", text: "一 (yī)" }
      ],
      answer: "B",
      explanation: "B - 解析：100在中文里是“百”。"
    },
    {
      id: 6,
      type: "image-match",
      image: "assets/seven_cats.png",
      question: "图(tú)片(piàn)里(lǐ)有(yǒu) _____ 只(zhī)猫(māo)？",
      options: [
        { key: "A", text: "六 (liù)" },
        { key: "B", text: "七 (qī)" },
        { key: "C", text: "八 (bā)" }
      ],
      answer: "B",
      explanation: "B - 解析：图片里有七只猫，数字是“七”(seven)。"
    },
    {
      id: 7,
      type: "choice",
      question: "昨(zuó)天(tiān)星(xīng)期(qī)二(èr)，今(jīn)天(tiān)星(xīng)期(qī) _____。",
      options: [
        { key: "A", text: "一 (yī)" },
        { key: "B", text: "三 (sān)" },
        { key: "C", text: "四 (sì)" }
      ],
      answer: "B",
      explanation: "B - 解析：昨天星期二，按照顺序今天应该是“星期三”。"
    },
    {
      id: 8,
      type: "choice",
      question: "哥(gē)哥(ge)今(jīn)年(nián) _____ 岁(suì)？",
      options: [
        { key: "A", text: "几 (jǐ)" },
        { key: "B", text: "谁 (shuí)" },
        { key: "C", text: "什么 (shén me)" }
      ],
      answer: "A",
      explanation: "A - 解析：询问年龄要用疑问词“几”(how many) 岁。"
    },
    {
      id: 9,
      type: "choice",
      question: "一(yī)个(gè)星(xīng)期(qī)的(de)最(zuì)后(hòu)一(yì)天(tiān)是(shì)星(xīng)期(qī) _____。",
      options: [
        { key: "A", text: "七 (qī)" },
        { key: "B", text: "日 (rì)" },
        { key: "C", text: "百 (bǎi)" }
      ],
      answer: "B",
      explanation: "B - 解析：一个星期有七天，最后一天 Sunday 叫“星期日”或“星期天”。"
    },
    {
      id: 10,
      type: "choice",
      question: "妈(mā)妈(ma)做(zuò)的(de)早(zǎo)餐(cān)很(hěn) _____。",
      options: [
        { key: "A", text: "漂亮 (piào liang)" },
        { key: "B", text: "高兴 (gāo xìng)" },
        { key: "C", text: "好吃 (hǎo chī)" }
      ],
      answer: "C",
      explanation: "C - 解析：复习题，形容早餐的味道用“好吃”(delicious)。"
    },
    {
      id: 11,
      type: "choice",
      question: "一(yī)、二(èr)、三(sān)、_____、五(wǔ)。",
      options: [
        { key: "A", text: "六 (liù)" },
        { key: "B", text: "四 (sì)" },
        { key: "C", text: "十 (shí)" }
      ],
      answer: "B",
      explanation: "B - 解析：数字的顺序是一、二、三、“四”(four)、五。"
    },
    {
      id: 12,
      type: "choice",
      question: "_____ 天(tiān)是(shì)星(xīng)期(qī)一(yī)，今(jīn)天(tiān)是(shì)星(xīng)期(qī)二(èr)。(Yesterday)",
      options: [
        { key: "A", text: "昨 (zuó)" },
        { key: "B", text: "今 (jīn)" },
        { key: "C", text: "明 (míng)" }
      ],
      answer: "A",
      explanation: "A - 解析：表达Yesterday用“昨天”的“昨”。"
    },
    {
      id: 13,
      type: "choice",
      question: "我(wǒ)很(hěn) _____，我(wǒ)想(xiǎng)喝(hē)果(guǒ)汁(zhī)。",
      options: [
        { key: "A", text: "饿 (è)" },
        { key: "B", text: "饱 (bǎo)" },
        { key: "C", text: "喜欢 (xǐ huan)" }
      ],
      answer: "A",
      explanation: "A - 解析：想吃东西/喝东西通常是因为“饿”(hungry) 了或渴了。"
    },
    {
      id: 14,
      type: "choice",
      question: "找(zhǎo)出(chū)句(jù)子(zi)中(zhōng)的(de)错(cuò)字(zì)：“今(jīn)天(tiān)是(shì)星(xīng)其(qí)三(sān)。”",
      options: [
        { key: "A", text: "今 (jīn)" },
        { key: "B", text: "其 (qí)" },
        { key: "C", text: "三 (sān)" }
      ],
      answer: "B",
      explanation: "B - 解析：“星期”的期应该是带月字旁的“期”，而不是“其”。"
    },
    {
      id: 15,
      type: "choice",
      question: "找(zhǎo)出(chū)句(jù)子(zi)中(zhōng)的(de)错(cuò)字(zì)：“作(zuò)天(tiān)我(wǒ)吃(chī)饺(jiǎo)子(zi)。” (Find the incorrect character)",
      options: [
        { key: "A", text: "作 (zuò)" },
        { key: "B", text: "吃 (chī)" },
        { key: "C", text: "饺 (jiǎo)" }
      ],
      answer: "A",
      explanation: "A - 解析：“昨天”的昨应该是日字旁的“昨”，而不是单立人的“作”。"
    },
    {
      id: 16,
      type: "choice",
      question: "请(qǐng)把(bǎ)这(zhè)些(xiē)词(cí)排(pái)成(chéng)一(yí)个(gè)正(zhèng)确(què)的(de)句(jù)子(zi)：①是(shì) ②今(jīn)天(tiān) ③星(xīng)期(qī)五(wǔ)",
      options: [
        { key: "A", text: "②①③ (今天是星期五)" },
        { key: "B", text: "①②③ (是今天星期五)" },
        { key: "C", text: "③②① (星期五今天是)" }
      ],
      answer: "A",
      explanation: "A - 解析：正确的中文语序是：今天(主语) 是(动词) 星期五(宾语)。"
    },
    {
      id: 17,
      type: "choice",
      question: "请(qǐng)把(bǎ)这(zhè)些(xiē)词(cí)排(pái)成(chéng)一(yí)个(gè)正(zhèng)确(què)的(de)句(jù)子(zi)：①我(wǒ) ②吃(chī) ③喜(xǐ)欢(huan) ④苹(píng)果(guǒ) ⑤十(shí)个(gè)",
      options: [
        { key: "A", text: "①②③④⑤ (我吃喜欢苹果十个)" },
        { key: "B", text: "①③②⑤④ (我喜欢吃十个苹果)" },
        { key: "C", text: "③①②⑤④ (喜欢我吃十个苹果)" }
      ],
      answer: "B",
      explanation: "B - 解析：正确的语序是：我(主) 喜欢(助动词) 吃(谓) 十个(数量) 苹果(宾)。"
    },
    {
      id: 18,
      type: "choice",
      question: "在(zài)中(zhōng)文(wén)里(lǐ)，Sunday 叫(jiào)做(zuò)“星(xīng)期(qī)七(qī)”。",
      options: [
        { key: "A", text: "对 (duì)" },
        { key: "B", text: "不对 (bù duì)" }
      ],
      answer: "B",
      explanation: "B - 解析：不对，中文里Monday到Saturday是星期一到星期六，但Sunday是“星期日”或“星期天”，没有“星期七”。"
    },
    {
      id: 19,
      type: "text",
      question: "今(jīn)天(tiān)是(shì)星(xīng)期(qī)几(jǐ)？(What day is today? 请(qǐng)写(xiě)一(yí)句(jù)话(huà)回(huí)答(dá))",
      referenceAnswer: "今天是星期一。（根据实际情况回答均可）",
      explanation: "参考答案： 今天是星期一。（根据实际情况回答均可）- 解析：考察“今天是星期……”的时间句型表达。"
    },
    {
      id: 20,
      type: "text",
      question: "请(qǐng)用(yòng)中(zhōng)文(wén)写(xiě) 2-3 句(jù)话(huà)，说(shuō)说(shuō)今(jīn)天(tiān)是(shì)星(xīng)期(qī)几(jǐ)，你(nǐ)几(jǐ)岁(suì)，以(yǐ)及(jí)你(nǐ)有(yǒu)几(jǐ)只(zhī)宠(chǒng)物(wù)（猫(māo)/狗(gǒu)）。你(nǐ)可(kě)以(yǐ)用(yòng)这(zhè)些(xiē)词(cí)：星(xīng)期(qī)、岁(suì)、有(yǒu)。",
      referenceAnswer: "今天是星期三。我十岁。我有一只猫和两只狗。",
      explanation: "参考答案： 今天是星期三。我十岁。我有一只猫和两只狗。- 解析：综合运用本课 the 数字/时间词汇以及前两课的家庭和宠物词汇。"
    }
  ]
};
