import { TopicData } from '../../types';

export const topicD_objects: TopicData = {
    id: 'box-part1-topic-d',
    title: '话题: 事物',
    cards: [
      { 
        id: 'p1-c5', 
        title: 'Advertisement', 
        category: '事物题', 
        categoryClass: 'object-card', 
        status: 'New',
        part1Questions: [
          'Is there an advertisement that made an impression on you when you were a child?',
          'Do you see a lot of advertising on trains or other transport?',
          'Do you like advertisements?',
          'What kind of advertising do you like?',
          'Do you often see advertisements when you are on your phone or computer?',
        ],
        sampleAnswers: [
          {
            question: 'Is there an advertisement that made an impression on you when you were a child?',
            versions: [
              {
                score: '5.5',
                answer: "Yes, I remember an ad for a kind of candy. It was very colorful and had a happy song. Many children in my school sang the song. Every time I saw it, I wanted to eat that candy.",
                analysis: [
                  { type: 'phrase', text: 'made an impression on you', explanation: '直接使用问题中的短语，是开始回答的一个好方法。' },
                  { type: 'vocab', text: 'colorful', explanation: '“色彩鲜艳的”，一个简单但有效的形容词，用来描述广告的视觉效果。' },
                ],
              }
            ]
          },
          {
            question: 'Do you see a lot of advertising on trains or other transport?',
            versions: [{
              score: '5.5',
              answer: "Yes, a lot. On the subway, the walls are covered with ads. There are also small TVs that show video ads. You see them everywhere, for phones, for food, for movies. It is impossible not to see them.",
              analysis: [
                { type: 'phrase', text: 'covered with ads', explanation: '“贴满了广告”，生动地描述了广告的数量之多。' },
                { type: 'vocab', text: 'impossible', explanation: '“不可能的”，用来强调广告的无处不在，语气强烈。' },
              ],
            }]
          },
          {
            question: 'Do you like advertisements?',
            versions: [{
              score: '5.5',
              answer: "It depends. Some ads are interesting and funny, I like those. But some ads are very boring and they appear again and again. I don't like those. Also, some ads on the internet are very annoying.",
              analysis: [
                { type: 'phrase', text: 'It depends', explanation: '一个非常实用的口语开场白，表示情况不一，让回答更具弹性，而不是简单的“是”或“否”。' },
                { type: 'phrase', text: 'again and again', explanation: '“一次又一次”，简单地表达了“重复”的意思。' },
                { type: 'vocab', text: 'annoying', explanation: '“烦人的”，准确地描述了对某些广告的负面感受。' },
              ],
            }]
          },
          {
            question: 'What kind of advertising do you like?',
            versions: [{
              score: '5.G5',
              answer: "I like advertisements that tell a short story. Some ads are like a mini-movie, they are very creative. They don't just sell a product, they make you feel something. I think these are the best kinds of ads.",
              analysis: [
                { type: 'phrase', text: 'tell a short story', explanation: '描述了叙事性广告的特点，使回答更具体。' },
                { type: 'vocab', text: 'creative', explanation: '“有创意的”，是评价广告时非常常用的正面词汇。' },
                { type: 'phrase', text: 'make you feel something', explanation: '简单而有效地表达了广告能引发情感共鸣。' },
              ],
            }]
          },
          {
            question: 'Do you often see advertisements when you are on your phone or computer?',
            versions: [{
              score: '5.5',
              answer: "Yes, all the time. When I watch videos online, there are always ads before the video starts. Also, when I use social media apps, I see many ads between the posts. Sometimes they are for things I searched for before, which is a bit strange.",
              analysis: [
                { type: 'phrase', text: 'all the time', explanation: '“一直，总是”，非常口语化的表达，强调频率之高。' },
                { type: 'phrase', text: 'social media apps', explanation: '“社交媒体应用”，准确的现代术语。' },
                { type: 'sentence', text: 'Sometimes they are for things I searched for before, which is a bit strange.', explanation: '用简单的语言描述了“定向广告”(targeted ads) 的现象，并表达了Lipstick感受，使回答更具个人色彩。' },
              ],
            }]
          },
        ],
      },
      { 
        id: 'p1-c14', 
        title: 'Rules', 
        category: '事物题', 
        categoryClass: 'object-card', 
        status: 'New',
        part1Questions: [
          'Are there any rules for students at your school?',
          'Do you think students would benefit more from more rules?',
          'Have you ever had a really dedicated teacher?',
          'Do you prefer to have more or fewer rules at school?',
          'Have you ever had a really strict teacher?',
          'Would you like to work as a teacher in a rule-free school?',
        ],
      },
      { 
        id: 'p1-c13', 
        title: 'Shoes', 
        category: '事物题', 
        categoryClass: 'object-card', 
        status: 'New',
        part1Questions: [
          'Do you like buying shoes? How often?',
          'Have you ever bought shoes online?',
          'How much money do you usually spend on shoes?',
          'Which do you prefer, fashionable shoes or comfortable shoes?',
        ],
      },
      { 
        id: 'p1-c16', 
        title: 'Plants', 
        category: '事物题', 
        categoryClass: 'object-card', 
        status: 'New',
        part1Questions: [
          'Do you keep plants at home?',
          'What plant did you grow when you were young?',
          'Do you know anything about growing a plant?',
          'Do Chinese people send plants as gifts?',
        ],
      },
    ]
};
