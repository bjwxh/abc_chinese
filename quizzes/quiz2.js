// Quiz 2 – 我喜欢吃什么 (What I Like to Eat)
window.QUIZ_DATA = {
  id: 2,
  title: "Quiz 2 – 我喜欢吃什么 (What I Like to Eat)",
  questions: [
    {
      id: 1,
      type: "listening",
      audioText: "我喜欢吃苹果。",
      pinyin: "Wǒ xǐ huan chī píng guǒ.",
      question: "听(tīng)力(lì)里(lǐ)提(tí)到(dào)了(le)什(shén)么(me)水(shuǐ)果(guǒ)？",
      options: [
        { key: "A", text: "苹果 (píng guǒ)" },
        { key: "B", text: "香蕉 (xiāng jiāo)" },
        { key: "C", text: "鸡蛋 (jī dàn)" }
      ],
      answer: "A",
      explanation: "A - 解析：听力提到的是“苹果” (apple)。"
    },
    {
      id: 2,
      type: "listening",
      audioText: "妹妹在喝牛奶。",
      pinyin: "Mèi mei zài hē niú nǎi.",
      question: "妹(mèi)妹(mei)在(zài)喝(hē)什(shén)么(me)？",
      options: [
        { key: "A", text: "水 (shuǐ)" },
        { key: "B", text: "牛奶 (niú nǎi)" },
        { key: "C", text: "果汁 (guǒ zhī)" }
      ],
      answer: "B",
      explanation: "B - 解析：听力中提到妹妹在喝“牛奶” (milk)。"
    },
    {
      id: 3,
      type: "listening",
      audioText: "爸爸说：“我很饿，我想吃炒饭。”",
      pinyin: "Bà ba shuō: 'Wǒ hěn è, wǒ xiǎng chī chǎo fàn.'",
      question: "爸(bà)爸(ba)想(xiǎng)吃(chī)什(shén)么(me)？",
      options: [
        { key: "A", text: "面 (miàn)" },
        { key: "B", text: "饺子 (jiǎo zi)" },
        { key: "C", text: "炒饭 (chǎo fàn)" }
      ],
      answer: "C",
      explanation: "C - 解析：爸爸说他想吃“炒饭” (fried rice)。"
    },
    {
      id: 4,
      type: "image-match",
      image: "assets/bowl_of_noodles.png",
      question: "哪(nǎ)一(yí)个(gè)字(zì)是(shì)图(tú)片(piàn)里(lǐ)的(de)东(dōng)西(xī)？",
      options: [
        { key: "A", text: "饭 (fàn)" },
        { key: "B", text: "面 (miàn)" },
        { key: "C", text: "汤 (tāng)" }
      ],
      answer: "B",
      explanation: "B - 解析：图片里是“面” (noodles)。"
    },
    {
      id: 5,
      type: "image-match",
      image: "assets/family_eating_dumplings.png",
      question: "他(tā)们(men)在(zài)吃(chī)什(shén)么(me)？",
      options: [
        { key: "A", text: "饺子 (jiǎo zi)" },
        { key: "B", text: "面包 (miàn bāo)" },
        { key: "C", text: "鸡蛋 (jī dàn)" }
      ],
      answer: "A",
      explanation: "A - 解析：图片里一家人正在吃“饺子” (dumplings)。"
    },
    {
      id: 6,
      type: "image-match",
      image: "assets/glass_of_orange_drink.png",
      question: "这(zhè)是(shì)什(shén)么(me)？",
      options: [
        { key: "A", text: "水 (shuǐ)" },
        { key: "B", text: "果汁 (guǒ zhī)" },
        { key: "C", text: "牛奶 (niú nǎi)" }
      ],
      answer: "B",
      explanation: "B - 解析：橙色的饮料是“果汁” (juice)。"
    },
    {
      id: 7,
      type: "choice",
      question: "汉(hàn)堡(bǎo)、面(miàn)包(bāo)和(hé)饭(fàn)，我(wǒ)们(men)要(yào)用(yòng)哪(nǎ)个(gè)动(dòng)词(cí)？",
      options: [
        { key: "A", text: "喝 (hē)" },
        { key: "B", text: "吃 (chī)" },
        { key: "C", text: "看 (kàn)" }
      ],
      answer: "B",
      explanation: "B - 解析：汉堡、面包和饭是固体食物，需要用动词“吃” (eat)。"
    },
    {
      id: 8,
      type: "choice",
      question: "果(guǒ)汁(zhī)和(水)(shuǐ)，我(wǒ)们(men)要(yào)用(yòng)哪(nǎ)个(gè)动(dòng)词(cí)？",
      options: [
        { key: "A", text: "吃 (chī)" },
        { key: "B", text: "喝 (hē)" },
        { key: "C", text: "有 (yǒu)" }
      ],
      answer: "B",
      explanation: "B - 解析：果汁和水是液体，需要用动词“喝” (drink)。"
    },
    {
      id: 9,
      type: "choice",
      question: "妈(mā)妈(ma)做(zuò)的(de)饭(fàn)很(hěn) _____！",
      options: [
        { key: "A", text: "好吃 (hǎo chī)" },
        { key: "B", text: "大 (dà)" },
        { key: "C", text: "叫 (jiào)" }
      ],
      answer: "A",
      explanation: "A - 解析：形容食物味道好，用“好吃” (delicious)。"
    },
    {
      id: 10,
      type: "choice",
      question: "我(wǒ) _____ 狗(gǒu)，哥(gē)哥(ge) _____ 猫(māo)。",
      options: [
        { key: "A", text: "去 (qù) / 去 (qù)" },
        { key: "B", text: "有 (yǒu) / 有 (yǒu)" },
        { key: "C", text: "是 (shì) / 是 (shì)" }
      ],
      answer: "B",
      explanation: "B - 解析：复习题，表达拥有宠物用动词“有” (have)。"
    },
    {
      id: 11,
      type: "choice",
      question: "我(wǒ)吃(chī)了(le)很(hěn)多(duō)饭(fàn)，我(wǒ)很(hěn) _____。(full)",
      options: [
        { key: "A", text: "饿 (è)" },
        { key: "B", text: "饱 (bǎo)" },
        { key: "C", text: "喜欢 (xǐ huan)" }
      ],
      answer: "B",
      explanation: "B - 解析：吃了很多饭之后，感觉会是“饱” (full)。"
    },
    {
      id: 12,
      type: "choice",
      question: "今(jīn)天(tiān)早(zǎo)上(shang)，我(wǒ)吃(chī)了(le)一(yí)个(gè) _____。(egg)",
      options: [
        { key: "A", text: "鸡蛋 (jī dàn)" },
        { key: "B", text: "面包 (miàn bāo)" },
        { key: "C", text: "香蕉 (xiāng jiāo)" }
      ],
      answer: "A",
      explanation: "A - 解析：根据英文提示 egg，应该选“鸡蛋”。"
    },
    {
      id: 13,
      type: "choice",
      question: "早(zǎo)上(shang)吃(chī)的(de)饭(fàn)叫(jiào) _____。(breakfast)",
      options: [
        { key: "A", text: "午餐 (wǔ cān)" },
        { key: "B", text: "晚餐 (wǎn cān)" },
        { key: "C", text: "早餐 (zǎo cān)" }
      ],
      answer: "C",
      explanation: "C - 解析：早上吃的饭叫做“早餐” (breakfast)。"
    },
    {
      id: 14,
      type: "choice",
      question: "找(zhǎo)出(chū)句(jù)子(zi)中(zhōng)的(de)错(cuò)字(zì)：“我喜欢吃面句。” (Find the incorrect character in the sentence.)",
      options: [
        { key: "A", text: "喜 (xǐ)" },
        { key: "B", text: "吃 (chī)" },
        { key: "C", text: "句 (jù)" }
      ],
      answer: "C",
      explanation: "C - 解析：“面包” (bread) 的“包”错误地写成了标点符号的“句”。"
    },
    {
      id: 15,
      type: "choice",
      question: "找(zhǎo)出(chū)句(jù)子(zi)中(zhōng)的(de)错(cuò)字(zì)：“我想喝汤，哥哥想渴水。” (Find the incorrect character in the sentence.)",
      options: [
        { key: "A", text: "喝 (hē)" },
        { key: "B", text: "渴 (kě)" },
        { key: "C", text: "水 (shuǐ)" }
      ],
      answer: "B",
      explanation: "B - 解析：“喝水” (drink water) 应该用口字旁的“喝”，不是三点水的“渴” (thirsty)。"
    },
    {
      id: 16,
      type: "choice",
      question: "请(qǐng)把(bǎ)这(zhè)些(xiē)词(cí)排(pái)成(chéng)一(yí)个(gè)正(zhèng)确(què)的(de)句(jù)子(zi)：①喜(xǐ)欢(huan) ②吃(chī) ③我(wǒ) ④面(miàn)",
      options: [
        { key: "A", text: "③①②④ (我喜欢吃面)" },
        { key: "B", text: "①③②④ (喜欢我吃面)" },
        { key: "C", text: "③②①④ (我吃喜欢面)" }
      ],
      answer: "A",
      explanation: "A - 解析：正确的语序是：我(主)喜欢(助动词)吃(谓)面(宾)。"
    },
    {
      id: 17,
      type: "choice",
      question: "请(qǐng)把(bǎ)这(zhè)些(xiē)词(cí)排(pái)成(chéng)一(yí)个(gè)正(zhèng)确(què)的(de)句(jù)子(zi)：①妹(mèi)妹(mei) ②水(shuǐ) ③喜(xǐ)欢(huan) ④喝(hē)",
      options: [
        { key: "A", text: "①③④② (妹妹喜欢喝水)" },
        { key: "B", text: "①④③② (妹妹喝喜欢水)" },
        { key: "C", text: "③①④② (喜欢妹妹喝水)" }
      ],
      answer: "A",
      explanation: "A - 解析：复习了“妹妹”。正确语序是：妹妹(主)喜欢(助动词)喝(谓)水(宾)。"
    },
    {
      id: 18,
      type: "choice",
      question: "在(zài)中(zhōng)国(guó)，很(hěn)多(duō)家(jiā)庭(tíng)喜(xǐ)欢(huan)在(zài)过(guò)新(xīn)年(nián)（春(chūn)节(jié)）的(de)时(shí)候(hou)吃(chī)“饺(jiǎo)子(zi)”。",
      options: [
        { key: "A", text: "对 (duì)" },
        { key: "B", text: "不对 (bùduì)" }
      ],
      answer: "A",
      explanation: "A - 解析：对。饺子是中国北方春节的传统食物，象征着团圆和好运。"
    },
    {
      id: 19,
      type: "text",
      question: "你(nǐ)喜(xǐ)欢(huan)吃(chī)什(shén)么(me)？(What do you like to eat? 请写一句话)",
      referenceAnswer: "我喜欢吃苹果。（或：我喜欢吃饺子。）",
      explanation: "参考答案： 我喜欢吃苹果。（或：我喜欢吃饺子。） - 解析：考察“我喜欢吃……”句型的拼写与表达。"
    },
    {
      id: 20,
      type: "text",
      question: "请(qǐng)用(yòng)中(zhōng)文(wén)写(xiě) 2-3 句(jù)话(huà)，说(shuō)说(shuō)你(nǐ)和(hé)你(nǐ)的(de)家(jiā)人(rén)喜(xǐ)欢(huan)吃(chī)什(shén)么(me)、喝(hē)什(shén)么(me)。你(nǐ)可(kě)以(yǐ)用(yòng)这(zhè)些(xiē)词(cí)：喜(xǐ)欢(huan)、吃(chī)、喝(hē)、爸(bà)爸(ba)、妈(mā)妈(ma)。",
      referenceAnswer: "我喜欢吃面包。爸爸喜欢喝牛奶。妈妈喜欢吃炒饭。",
      explanation: "参考答案： 我喜欢吃面包。爸爸喜欢喝牛奶。妈妈喜欢吃炒饭。 - 解析：综合运用本课的食物/动词词汇以及上一课的家庭成员词汇。"
    }
  ]
};
