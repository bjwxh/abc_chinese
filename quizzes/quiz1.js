// Quiz 1 – 我和家人 (Me and My Family)
window.QUIZ_DATA = {
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
        { key: "A", text: "叫 (jiào)" },
        { key: "B", text: "是 (shì)" },
        { key: "C", text: "有 (yǒu)" }
      ],
      answer: "A",
      explanation: "A - 解析：问名字时用动词“叫”(called/named)。"
    },
    {
      id: 8,
      type: "choice",
      question: "我(wǒ)家(jiā) _____ 四(sì)口(kǒu)人(rén)。",
      options: [
        { key: "A", text: "在 (zài)" },
        { key: "B", text: "去 (qù)" },
        { key: "C", text: "有 (yǒu)" }
      ],
      answer: "C",
      explanation: "C - 解析：表达家里有几口人用动词“有”(have)。"
    },
    {
      id: 9,
      type: "choice",
      question: "她(tā) _____ 我(wǒ)的(de)妹(mèi)妹(mei)。",
      options: [
        { key: "A", text: "叫 (jiào)" },
        { key: "B", text: "是 (shì)" },
        { key: "C", text: "看 (kàn)" }
      ],
      answer: "B",
      explanation: "B - 解析：表达“A是B”的关系用动词“是”(is/are)。"
    },
    {
      id: 10,
      type: "choice",
      question: "你(nǐ)的(de)狗(gǒu) _____ 岁(suì)？",
      options: [
        { key: "A", text: "几 (jǐ)" },
        { key: "B", text: "谁 (shéi)" },
        { key: "C", text: "为什么 (wèishénme)" }
      ],
      answer: "A",
      explanation: "A - 解析：问年龄用疑问词“几”(how many) 岁。"
    },
    {
      id: 11,
      type: "choice",
      question: "我(wǒ)很(hěn) _____ 我(wǒ)的(de)爸(bà)爸(ba)和(hé)妈(mā)妈(ma)。(love)",
      options: [
        { key: "A", text: "叫 (jiào)" },
        { key: "B", text: "是 (shì)" },
        { key: "C", text: "爱 (ài)" }
      ],
      answer: "C",
      explanation: "C - 解析：表达喜欢 and 感情用动词“爱”(love)。"
    },
    {
      id: 12,
      type: "choice",
      question: "他(tā)们(men)是(shì) _____ ？(Who are they?)",
      options: [
        { key: "A", text: "谁 (shuí)" },
        { key: "B", text: "哪里 (nǎlǐ)" },
        { key: "C", text: "什么 (shénme)" }
      ],
      answer: "A",
      explanation: "A - 解析：问“是谁”用疑问词“谁”(who)。"
    },
    {
      id: 13,
      type: "choice",
      question: "我(wǒ)有(yǒu)一(yì)只(zhī)大(dà) _____。(dog)",
      options: [
        { key: "A", text: "猫 (māo)" },
        { key: "B", text: "狗 (gǒu)" },
        { key: "C", text: "鱼 (yú)" }
      ],
      answer: "B",
      explanation: "B - 解析：根据英文提示 dog 选“狗”。"
    },
    {
      id: 14,
      type: "choice",
      question: "找出句子中的错字：“这是我妹妹，他今年八岁。”",
      options: [
        { key: "A", text: "是 (shì)" },
        { key: "B", text: "妹 (mèi)" },
        { key: "C", text: "他 (tā)" }
      ],
      answer: "C",
      explanation: "C - 解析：妹妹是女孩，应该用女字旁的“她”(she) 而不是“他”。"
    },
    {
      id: 15,
      type: "choice",
      question: "找出句子中的错字：“她有一只小猫，两只小兔孑。”",
      options: [
        { key: "A", text: "有 (yǒu)" },
        { key: "B", text: "只 (zhī)" },
        { key: "C", text: "孑 (jié)" }
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
        { key: "A", text: "对 (duì)" },
        { key: "B", text: "不对 (bùduì)" }
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
      question: "请(qǐng)用(yòng)中(zh文)写(xiě) 3 句(jù)话(huà)介(jiè)绍(shào)你(nǐ)的(de)家(jiā)人(rén)。你可以用这些词：家 (family), 有 (have), 爱 (love)。",
      referenceAnswer: "我家有四个人。他们是爸爸、妈妈、哥哥和我。我爱我的家。",
      explanation: "参考答案： 我家有四个人。他们是爸爸、妈妈、哥哥和我。我爱我的家。- 解析：综合运用关于人称、家庭和基础动词的能力。"
    }
  ]
};
