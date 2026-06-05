import os
import re

replacements = {
    "píngguǒ": "píng guǒ",
    "xiāngjiāo": "xiāng jiāo",
    "jīdàn": "jī dàn",
    "niúnǎi": "niú nǎi",
    "guǒzhī": "guǒ zhī",
    "chǎofàn": "chǎo fàn",
    "jiǎozi": "jiǎo zi",
    "miànbāo": "miàn bāo",
    "xǐhuan": "xǐ huan",
    "Mèimei": "Mèi mei",
    "Bàba": "Bà ba",
    "Māma": "Mā ma",
    "gēge": "gē ge",
    "yéye": "yé ye",
    "nǎinai": "nǎi nai",
    "jiějie": "jiě jie",
    "dìdi": "dì di",
    "mèimei": "mèi mei",
    "bàba": "bà ba",
    "māma": "mā ma",
    "tāmen": "tā men",
    "wǒmen": "wǒ men",
    "shuìjiào": "shuì jiào",
    "tùzi": "tù zi",
    "zǎocān": "zǎo cān",
    "wǔcān": "wǔ cān",
    "wǎncān": "wǎn cān",
    "hǎochī": "hǎo chī",
    "wèishénme": "wèi shén me",
    "nǎlǐ": "nǎ lǐ",
    "shénme": "shén me",
    "Tāmen": "Tā men",
    "Wǒmen": "Wǒ men"
}

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(filepath, 'w') as f:
        f.write(content)

process_file('quizzes/quiz1.js')
process_file('quizzes/quiz2.js')
