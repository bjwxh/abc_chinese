// Quiz 4 – 感觉与情绪 (Feelings and Emotions)
window.QUIZ_DATA = {
  id: 4,
  title: "Quiz 4 – 感觉与情绪 (Feelings and Emotions)",
  questions: [
    {
      id: 1,
      type: "listening",
      audioText: "今天不用去上学，我很高兴。",
      pinyin: "Jīn tiān bú yòng qù shàng xué, wǒ hěn gāo xìng.",
      question: "听(tīng)力(lì)里(lǐ)的(de)人(rén)觉(jué)得(de)怎(zěn)么(me)样(yàng)？",
      options: [
        { key: "A", text: "难过 (nán guò)" },
        { key: "B", text: "生气 (shēng qì)" },
        { key: "C", text: "高兴 (gāo xìng)" }
      ],
      answer: "C",
      explanation: "C - 解析：听力中提到“不用去上学，我很高兴” (happy)。"
    },
    {
      id: 2,
      type: "listening",
      audioText: "小狗不见了，妹妹很难过。",
      pinyin: "Xiǎo gǒu bú jiàn le, mèi mei hěn nán guò.",
      question: "妹(mèi)妹(mei)的(de)心(xīn)情(qíng)是(shì)什(shén)么(me)？",
      options: [
        { key: "A", text: "难过 (nán guò)" },
        { key: "B", text: "高兴 (gāo xìng)" },
        { key: "C", text: "累 (lèi)" }
      ],
      answer: "A",
      explanation: "A - 解析：小狗不见了，所以妹妹“很难过” (sad)。"
    },
    {
      id: 3,
      type: "listening",
      audioText: "爸爸昨天没有睡觉，他今天很累。",
      pinyin: "Bà ba zuó tiān méi yǒu shuì jiào, tā jīn tiān hěn lèi.",
      question: "爸(bà)爸(ba)今(jīn)天(tiān)怎(zěn)么(me)样(yàng)？",
      options: [
        { key: "A", text: "生气 (shēng qì)" },
        { key: "B", text: "累 (lèi)" },
        { key: "C", text: "漂亮 (piào liang)" }
      ],
      answer: "B",
      explanation: "B - 解析：爸爸昨天没有睡觉，所以他今天很“累” (tired)。"
    },
    {
      id: 4,
      type: "image-match",
      image: "assets/kids_laughing.png",
      question: "图(tú)片(piàn)里(lǐ)的(de)小(xiǎo)朋(péng)友(yǒu)很(hěn) _____。",
      options: [
        { key: "A", text: "生气 (shēng qì)" },
        { key: "B", text: "高兴 (gāo xìng)" },
        { key: "C", text: "难过 (nán guò)" }
      ],
      answer: "B",
      explanation: "B - 解析：在游乐场里笑，代表他们很“高兴” (happy)。"
    },
    {
      id: 5,
      type: "image-match",
      image: "assets/angry_person.png",
      question: "他(tā)看(kàn)起(qǐ)来(lái)很(hěn) _____。",
      options: [
        { key: "A", text: "漂亮 (piào liang)" },
        { key: "B", text: "生气 (shēng qì)" },
        { key: "C", text: "好玩 (hǎo wán)" }
      ],
      answer: "B",
      explanation: "B - 解析：皱眉和握紧拳头是“生气” (angry) 的表现。"
    },
    {
      id: 6,
      type: "image-match",
      image: "assets/elephant_mouse.png",
      question: "大(dà)象(xiàng)很(hěn)大(dà)，老(lǎo)鼠(shǔ)很(hěn) _____。",
      options: [
        { key: "A", text: "多 (duō)" },
        { key: "B", text: "少 (shǎo)" },
        { key: "C", text: "小 (xiǎo)" }
      ],
      answer: "C",
      explanation: "C - 解析：用来对比“大” (big) 的词是“小” (small)。"
    },
    {
      id: 7,
      type: "choice",
      question: "你(nǐ) _____ 不(bù)吃(chī)早(zǎo)餐(cān)？(Why don't you eat breakfast?)",
      options: [
        { key: "A", text: "为什么 (wèi shén me)" },
        { key: "B", text: "谁 (shuí)" },
        { key: "C", text: "哪里 (nǎ lǐ)" }
      ],
      answer: "A",
      explanation: "A - 解析：询问原因要用疑问词“为什么” (why)。"
    },
    {
      id: 8,
      type: "choice",
      question: "_____ 昨(zuó)天(tiān)晚(wǎn)上(shang)没(méi)有(yǒu)睡(shuì)好(hǎo)，_____ 我(wǒ)今(jīn)天(tiān)很(hěn)累(lèi)。",
      options: [
        { key: "A", text: "因为 (yīn wèi) / 所以 (suǒ yǐ)" },
        { key: "B", text: "为什么 (wèi shén me) / 因为 (yīn wèi)" },
        { key: "C", text: "什么 (shén me) / 对不起 (duì bu qǐ)" }
      ],
      answer: "A",
      explanation: "A - 解析：表达因果关系需要使用连词“因为...所以...” (because... so...)。"
    },
    {
      id: 9,
      type: "choice",
      question: "妈(mā)妈(ma)穿(chuān)了(le)一(yí)件(jiàn)新(xīn)衣(yī)服(fu)，她(tā)很(hěn) _____。",
      options: [
        { key: "A", text: "好玩 (hǎo wán)" },
        { key: "B", text: "难过 (nán guò)" },
        { key: "C", text: "漂亮 (piào liang)" }
      ],
      answer: "C",
      explanation: "C - 解析：形容穿了新衣服的妈妈，通常用“漂亮” (pretty/beautiful)。"
    },
    {
      id: 10,
      type: "choice",
      question: "盘(pán)子(zi)里(lǐ)有(yǒu)很(hěn) _____ 饺(jiǎo)子(zi)。(There are many dumplings on the plate.)",
      options: [
        { key: "A", text: "多 (duō)" },
        { key: "B", text: "少 (shǎo)" },
        { key: "C", text: "累 (lèi)" }
      ],
      answer: "A",
      explanation: "A - 解析：复习题，形容数量多用“多” (many)。"
    },
    {
      id: 11,
      type: "choice",
      question: "这(zhè)个(ge)中(zhōng)文(wén)游(yóu)戏(xì) (game) 真(zhēn) _____！(fun)",
      options: [
        { key: "A", text: "好玩 (hǎo wán)" },
        { key: "B", text: "难过 (nán guò)" },
        { key: "C", text: "生气 (shēng qì)" }
      ],
      answer: "A",
      explanation: "A - 解析：形容游戏带来乐趣，用“好玩” (fun)。"
    },
    {
      id: 12,
      type: "choice",
      question: "哥(gē)哥(ge)的(de)苹(píng)果(guǒ)很(hěn) _____ (few/little)，我(wǒ)的(de)苹(píng)果(guǒ)很(hěn)多(duō)。",
      options: [
        { key: "A", text: "大 (dà)" },
        { key: "B", text: "小 (xiǎo)" },
        { key: "C", text: "少 (shǎo)" }
      ],
      answer: "C",
      explanation: "C - 解析：用来对比“多” (many) 的词是“少” (few/little)。"
    },
    {
      id: 13,
      type: "choice",
      question: "我(wǒ)今(jīn)天(tiān)吃(chī)了(le)十(shí)个(gè)包(bāo)子(zi)，我(wǒ)很(hěn) _____。(full)",
      options: [
        { key: "A", text: "饿 (è)" },
        { key: "B", text: "饱 (bǎo)" },
        { key: "C", text: "高兴 (gāo xìng)" }
      ],
      answer: "B",
      explanation: "B - 解析：复习题，吃了十个包子肚子会觉得“饱” (full)。"
    },
    {
      id: 14,
      type: "choice",
      question: "找(zhǎo)出(chū)句(jù)子(zi)中(zhōng)的(de)错(cuò)字(zì)：“她(tā)有(yǒu)一(yì)只(zhī)漂(piào)完(wán)的(de)小(xiǎo)猫(māo)。” (Find the incorrect character)",
      options: [
        { key: "A", text: "有 (yǒu)" },
        { key: "B", text: "漂 (piào)" },
        { key: "C", text: "完 (wán)" }
      ],
      answer: "C",
      explanation: "C - 解析：“漂亮”的亮写成了错误的“完”。"
    },
    {
      id: 15,
      type: "choice",
      question: "找(zhǎo)出(chū)句(jù)子(zi)中(zhōng)的(de)错(cuò)字(zì)：“为(wèi)什(shén)公(gōng)你(nǐ)不(bù)高(gāo)兴(xìng)？” (Find the incorrect character)",
      options: [
        { key: "A", text: "什 (shén)" },
        { key: "B", text: "公 (gōng)" },
        { key: "C", text: "高 (gāo)" }
      ],
      answer: "B",
      explanation: "B - 解析：“为什么”的么写成了错误的“公”。"
    },
    {
      id: 16,
      type: "choice",
      question: "请(qǐng)把(bǎ)这(zhè)些(xiē)词(cí)排(pái)成(chéng)一(yí)个(gè)正(zhèng)确(què)的(de)句(jù)子(zi)：①你(nǐ) ②难(nán)过(guò) ③为(wèi)什(shén)么(me) ④很(hěn)",
      options: [
        { key: "A", text: "①③④② (你为什么很难过)" },
        { key: "B", text: "③①④② (为什么你很难过)" },
        { key: "C", text: "①④②③ (你很难过为什么)" }
      ],
      answer: "A",
      explanation: "A - 解析：正确的中文疑问句语序是：你(主) 为什么(疑问词) 很难过(谓)？"
    },
    {
      id: 17,
      type: "choice",
      question: "请(qǐng)把(bǎ)这(zhè)些(xiē)词(cí)排(pái)成(chéng)一(yí)个(gè)正(zhèng)确(què)的(de)句(jù)子(zi)：①星(xīng)期(qī)五(wǔ) ②因(yīn)为(wèi) ③很(hěn)高(gāo)兴(xìng) ④今(jīn)天(tiān)是(shì) ⑤所(suǒ)以(yǐ)我(wǒ)",
      options: [
        { key: "A", text: "②④①⑤③ (因为今天是星期五，所以我很高兴)" },
        { key: "B", text: "④①②⑤③ (今天是星期五因为，所以我很高兴)" },
        { key: "C", text: "⑤③②④① (所以我很高兴，因为今天是星期五)" }
      ],
      answer: "A",
      explanation: "A - 解析：因果复句的正确顺序：因为(原因连词) 今天是星期五(原因)，所以(结果连词) 我(主) 很高兴(结果)。"
    },
    {
      id: 18,
      type: "choice",
      question: "在(zài)中(zhōng)国(guó)文(wén)化(huà)里(lǐ)，红(hóng)色(sè) (red color) 通(tōng)常(cháng)代(dài)表(biǎo)着(zhe)“高(gāo)兴(xìng)”和(hé)好(hǎo)运(yùn)。",
      options: [
        { key: "A", text: "对 (duì)" },
        { key: "B", text: "不对 (bù duì)" }
      ],
      answer: "A",
      explanation: "A - 解析：对。在中国文化中，红色代表喜庆、高兴和好运，所以春节和婚礼经常使用红色。"
    },
    {
      id: 19,
      type: "text",
      question: "你(nǐ)今(jīn)天(tiān)觉(jué)得(de)高(gāo)兴(xìng)还(hái)是(shì)累(lèi)？为(wèi)什(shén)么(me)？(Are you happy or tired today? Why? 请(qǐng)写(xiě)一(yí)句(jù)话(huà))",
      referenceAnswer: "我今天很高兴，因为我吃了好吃的面包。（根据实际情况回答均可）",
      explanation: "参考答案： 我今天很高兴，因为我吃了好吃的面包。（根据实际情况回答均可） - 解析：考察对情绪词和“因为”的实际运用。"
    },
    {
      id: 20,
      type: "text",
      question: "请(qǐng)用(yòng)中(zhōng)文(wén)写(xiě) 2-3 句(jù)话(huà)，使(shǐ)用(yòng)“因(yīn)为(wèi)...所(suǒ)以(yǐ)...”的(de)句(jù)型(xíng)，描(miáo)述(shù)你(nǐ)或(huò)你(nǐ)的(de)家(jiā)人(rén)的(de)感(gǎn)觉(jué)（例(lì)如(rú)：高(gāo)兴(xìng)、生(shēng)气(qì)、累(lèi)）。",
      referenceAnswer: "因为昨天我玩了很久，所以我今天很累。因为妈妈有一只小狗，所以她很高兴。",
      explanation: "参考答案： 因为昨天我玩了很久，所以我今天很累。因为妈妈有一只小狗，所以她很高兴。 - 解析：综合运用因果逻辑句型以及本课的情绪词汇。"
    }
  ]
};
