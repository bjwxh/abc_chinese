// Quiz 6 – 综合复习 (Comprehensive Review: Family, Food, Feelings & Time)
window.QUIZ_DATA = {
  id: 6,
  title: "Quiz 6 – 综合复习 (Comprehensive Review: Family, Food, Feelings & Time)",
  questions: [
    {
      id: 1,
      type: "listening",
      audioText: "昨天晚上，爷爷和奶奶在看狗。",
      pinyin: "Zuó tiān wǎn shang, yé ye hé nǎi nai zài kàn gǒu.",
      question: "昨(zuó)天(tiān)晚(wǎn)上(shang)谁(shuí)在(zài)看(kàn)狗(gǒu)？",
      options: [
        { key: "A", text: "爸爸和妈妈 (bà ba hé mā ma)" },
        { key: "B", text: "哥哥和姐姐 (gē ge hé jiě jie)" },
        { key: "C", text: "爷爷和奶奶 (yé ye hé nǎi nai)" }
      ],
      answer: "C",
      explanation: "C - 解析：听力提到昨天晚上“爷爷和奶奶”在看狗。"
    },
    {
      id: 2,
      type: "listening",
      audioText: "我很生气，因为弟弟吃了我的苹果。",
      pinyin: "Wǒ hěn shēng qì, yīn wèi dì di chī le wǒ de píng guǒ.",
      question: "听(tīng)力(lì)里(lǐ)的(de)人(rén)为(wèi)什(shén)么(me)生(shēng)气(qì)？",
      options: [
        { key: "A", text: "弟弟吃了他(tā)的苹果 (dì di chī le tā de píng guǒ)" },
        { key: "B", text: "妹妹没有喝水 (mèi mei méi yǒu hē shuǐ)" },
        { key: "C", text: "哥哥去玩了 (gē ge qù wán le)" }
      ],
      answer: "A",
      explanation: "A - 解析：生气的“因为”(because) 是弟弟吃了他的苹果。"
    },
    {
      id: 3,
      type: "listening",
      audioText: "明天是星期六，我们不去上学。",
      pinyin: "Míng tiān shì xīng qī liù, wǒ men bù qù shàng xué.",
      question: "明(míng)天(tiān)是(shì)星(xīng)期(qī)几(jǐ)？",
      options: [
        { key: "A", text: "星期五 (xīng qī wǔ)" },
        { key: "B", text: "星期六 (xīng qī liù)" },
        { key: "C", text: "星期日 (xīng qī rì)" }
      ],
      answer: "B",
      explanation: "B - 解析：听力中说明天是“星期六”。"
    },
    {
      id: 4,
      type: "image-match",
      image: "assets/crying_girl_bird.png",
      question: "图(tú)片(piàn)里(lǐ)的(de)妹(mèi)妹(mei)很(hěn) _____。",
      options: [
        { key: "A", text: "难过 (nán guò)" },
        { key: "B", text: "高兴 (gāo xìng)" },
        { key: "C", text: "饱 (bǎo)" }
      ],
      answer: "A",
      explanation: "A - 解析：小鸟飞走了而且在哭，说明妹妹很“难过” (sad)。"
    },
    {
      id: 5,
      type: "image-match",
      image: "assets/breakfast_clock.png",
      question: "这(zhè)是(shì)一(yì)顿(dùn) _____。",
      options: [
        { key: "A", text: "午餐 (wǔ cān)" },
        { key: "B", text: "晚餐 (wǎn cān)" },
        { key: "C", text: "早餐 (zǎo cān)" }
      ],
      answer: "C",
      explanation: "C - 解析：早上7:00吃的饭是“早餐” (breakfast)。"
    },
    {
      id: 6,
      type: "image-match",
      image: "assets/big_rabbit_small_fish.png",
      question: "兔(tù)子(zi)很(hěn)大(dà)，鱼(yú)很(hěn) _____。",
      options: [
        { key: "A", text: "多 (duō)" },
        { key: "B", text: "少 (shǎo)" },
        { key: "C", text: "小 (xiǎo)" }
      ],
      answer: "C",
      explanation: "C - 解析：大(big)的反义词是“小” (small)。"
    },
    {
      id: 7,
      type: "choice",
      question: "我(wǒ)喜(xǐ)欢(huan)吃(chī)面(miàn)包(bāo)，也(yě)喜(xǐ)欢(huan) _____ 果(guǒ)汁(zhī)。",
      options: [
        { key: "A", text: "吃 (chī)" },
        { key: "B", text: "喝 (hē)" },
        { key: "C", text: "看 (kàn)" }
      ],
      answer: "B",
      explanation: "B - 解析：果汁是液体，需要用动词“喝” (drink)。"
    },
    {
      id: 8,
      type: "choice",
      question: "当(dāng)你(nǐ)做(zuò)错(cuò)了(le)事(shì)情(qing)，你(nǐ)应(yīng)该(gāi)说(shuō) _____。",
      options: [
        { key: "A", text: "谢谢 (xiè xie)" },
        { key: "B", text: "没关系 (méi guān xi)" },
        { key: "C", text: "对不起 (duì bu qǐ)" }
      ],
      answer: "C",
      explanation: "C - 解析：做错事情时应该道歉，说“对不起” (sorry)。"
    },
    {
      id: 9,
      type: "choice",
      question: "_____ 今(jīn)天(tiān)是(shì)星(xīng)期(qī)日(rì)，_____ 爸(bà)爸(ba)不(bú)用(yòng)去(qù)上(shàng)班(bān) (work)。",
      options: [
        { key: "A", text: "因为 (yīn wèi) / 所以 (suǒ yǐ)" },
        { key: "B", text: "为什么 (wèi shén me) / 因为 (yīn wèi)" },
        { key: "C", text: "谁 (shuí) / 什么 (shén me)" }
      ],
      answer: "A",
      explanation: "A - 解析：表达因果逻辑需要用“因为...所以...” (because... so...)。"
    },
    {
      id: 10,
      type: "choice",
      question: "你(nǐ)的(de)狗(gǒu)今(jīn)年(nián) _____ 岁(suì)了(le)？",
      options: [
        { key: "A", text: "几 (jǐ)" },
        { key: "B", text: "哪里 (nǎ lǐ)" },
        { key: "C", text: "谁 (shuí)" }
      ],
      answer: "A",
      explanation: "A - 解析：询问年龄时，要使用疑问词“几” (how many) 岁。"
    },
    {
      id: 11,
      type: "choice",
      question: "今(jīn)天(tiān)是(shì)星(xīng)期(qī)三(sān)，明(míng)天(tiān)是(shì)星(xīng)期(qī) _____。",
      options: [
        { key: "A", text: "一 (yī)" },
        { key: "B", text: "四 (sì)" },
        { key: "C", text: "五 (wǔ)" }
      ],
      answer: "B",
      explanation: "B - 解析：星期三的下一天是“星期四”。"
    },
    {
      id: 12,
      type: "choice",
      question: "奶(nǎi)奶(nai)做(zuò)的(de)汤(tāng) (soup) 真(zhēn) _____！(delicious)",
      options: [
        { key: "A", text: "好玩 (hǎo wán)" },
        { key: "B", text: "漂亮 (piào liang)" },
        { key: "C", text: "好吃 (hǎo chī)" }
      ],
      answer: "C",
      explanation: "C - 解析：形容食物味道好，用“好吃” (delicious)。"
    },
    {
      id: 13,
      type: "choice",
      question: "你(nǐ)好(hǎo)，请(qǐng)问(wèn)你(nǐ) _____ 什(shén)么(me)名(míng)字(zì)？",
      options: [
        { key: "A", text: "是 (shì)" },
        { key: "B", text: "叫 (jiào)" },
        { key: "C", text: "有 (yǒu)" }
      ],
      answer: "B",
      explanation: "B - 解析：询问名字的固定搭配是“叫”什么名字。"
    },
    {
      id: 14,
      type: "choice",
      question: "找(zhǎo)出(chū)句(jù)子(zi)中(zhōng)的(de)错(cuò)字(zì)：“我(wǒ)们(men)去(qù)玩(wán)，妈(mā)妈(ma)很(hěn)高(gāo)心(xīn)。”",
      options: [
        { key: "A", text: "玩 (wán)" },
        { key: "B", text: "妈 (mā)" },
        { key: "C", text: "心 (xīn)" }
      ],
      answer: "C",
      explanation: "C - 解析：高兴的“兴”错写成了心情的“心”。"
    },
    {
      id: 15,
      type: "choice",
      question: "找(zhǎo)出(chū)句(jù)子(zi)中(zhōng)的(de)错(cuò)字(zì)：“我(wǒ)有(yǒu)一(yì)只(zhī)猫(māo)，两(liǎng)只(zhī)小(xiǎo)乌(wū)。” (Find the incorrect character for bird)",
      options: [
        { key: "A", text: "有 (yǒu)" },
        { key: "B", text: "乌 (wū)" },
        { key: "C", text: "猫 (māo)" }
      ],
      answer: "B",
      explanation: "B - 解析：小鸟的“鸟”错写成了乌鸦的“乌” (少了一点)。"
    },
    {
      id: 16,
      type: "choice",
      question: "请(qǐng)把(bǎ)这(zhè)些(xiē)词(cí)排(pái)成(chéng)一(yí)个(gè)正(zhèng)确(què)的(de)句(jù)子(zi)：①早(zǎo)上(shang) ②面(miàn)包(bāo) ③吃(chī) ④哥(gē)哥(ge)",
      options: [
        { key: "A", text: "④①③② (哥哥早上吃面包)" },
        { key: "B", text: "①④②③ (早上哥哥面包吃)" },
        { key: "C", text: "④③②① (哥哥吃面包早上)" }
      ],
      answer: "A",
      explanation: "A - 解析：正确的中文语序：哥哥(主) 早上(时间状语) 吃(谓) 面包(宾)。"
    },
    {
      id: 17,
      type: "choice",
      question: "请(qǐng)把(bǎ)这(zhè)些(xiē)词(cí)排(pái)成(chéng)一(yí)个(gè)正(zhèng)确(què)的(de)句(jù)子(zi)：①去(qù)玩(wán) ②我(wǒ)们(men) ③下(xià)午(wǔ)",
      options: [
        { key: "A", text: "③②① (下午我们去玩)" },
        { key: "B", text: "②③① (我们下午去玩)" },
        { key: "C", text: "①②③ (去玩我们下午)" }
      ],
      answer: "B",
      explanation: "B - 解析：正确的语序：我们(主) 下午(时间) 去玩(动词)。（注：A 也可以接受，但 B 是最标准的陈述语序）"
    },
    {
      id: 18,
      type: "choice",
      question: "在(zài)中(zhōng)国(guó)文(wén)化(huà)里(lǐ)，过(guò)生(shēng)日(rì) (birthday) 的(de)时(shí)候(hou)吃(chī)“面(miàn)条(tiáo)”代(dài)表(biǎo)着(zhe)“长(cháng)寿(shòu)”(long life)。",
      options: [
        { key: "A", text: "对 (duì)" },
        { key: "B", text: "不对 (bù duì)" }
      ],
      answer: "A",
      explanation: "A - 解析：对。长长的面条在中国传统中象征着健康和长寿，这叫“长寿面”。"
    },
    {
      id: 19,
      type: "text",
      question: "你(nǐ)最(zuì)喜(xǐ)欢(huan)你(nǐ)家(jiā)里(lǐ)的(de)谁(shuí)？为(wèi)什(shén)么(me)？(Who is your favorite person in your family? Why? 请写一句话)",
      referenceAnswer: "我最喜欢妈妈，因为妈妈做饭很好吃。（根据实际情况回答即可）",
      explanation: "参考答案： 我最喜欢妈妈，因为妈妈做饭很好吃。（根据实际情况回答即可） - 解析：综合考察人物词汇、因果关系“因为”以及形容词。"
    },
    {
      id: 20,
      type: "text",
      question: "请(qǐng)用(yòng)中(zhōng)文(wén)写(xiě) 3-4 句(jù)话(huà)，描(miáo)述(shù)你(nǐ)周(zhōu)末(mò) (星(xīng)期(qī)六(liù)或(huò)星(xīng)期(qī)日(rì)) 的(de)生(shēng)活(huó)。你(nǐ)可(kě)以(yǐ)写(xiě)：你(nǐ)几(jǐ)点(diǎn)起(qǐ)床(chuáng)、你(nǐ)吃(chī)了(le)什(shén)么(me)、你(nǐ)和(hé)谁(shuí)去(qù)玩(wán)、你(nǐ)的(de)心(xīn)情(qíng)怎(zěn)么(me)样(yàng)。",
      referenceAnswer: "星期六上午，我起床吃早餐。下午我和哥哥去玩。我很高兴。",
      explanation: "参考答案： 星期六上午，我起床吃早餐。下午我和哥哥去玩。我很高兴。 - 解析：全面考察时间、家庭、动作和情绪词汇的综合写作能力。"
    }
  ]
};
