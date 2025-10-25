import { TopicData } from '../../types';

export const topicDData: TopicData = {
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
              answer: `(Yes) Yes, I remember an ad for a kind of candy. It was very colorful and had a happy song. Many children in my school sang the song. Every time I saw it, I wanted to eat that candy.
              <br/><br/>
              (No) No, I can't think of one. I didn't pay much attention to advertisements when I was a child. I was more interested in playing outside. I don't have any strong memories of ads from my childhood.`,
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
            answer: `(Yes) Yes, a lot. On the subway, the walls are covered with ads. There are also small TVs that show video ads. You see them everywhere, for phones, for food, for movies. It is impossible not to see them.
            <br/><br/>
            (No) No, not in my town. I live in a small town and we don't have trains or a subway. On the buses, there are some ads, but not a lot. It's quite different from big cities.`,
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
            score: '5.t5',
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
            answer: `(Yes) Yes, all the time. When I watch videos online, there are always ads before the video starts. Also, when I use social media apps, I see many ads between the posts. Sometimes they are for things I searched for before, which is a bit strange.
            <br/><br/>
            (No) No, not really. I use an ad-blocker on my computer, so I don't see most ads on websites. On my phone, I pay for some apps so that I don't have to see ads. It makes the experience much better.`,
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
      sampleAnswers: [
          {
            question: 'Are there any rules for students at your school?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes, of course. We have many rules. For example, we must wear a uniform every day, and we cannot be late for class. We also have rules about homework. I think most schools have rules like these.
              <br/><br/>
              (Fewer Rules) Well, my university has fewer rules than my high school. They trust us to be responsible. We don't have to wear a uniform, and the class schedule is more flexible. There are still rules about exams and plagiarism, of course.`
            }]
          },
          {
            question: 'Do you think students would benefit more from more rules?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes, I think so. Clear rules can help students to be more disciplined. They create a safe and orderly learning environment. When students know what is expected of them, they can focus better on their studies.
              <br/><br/>
              (No) No, I don't think so. Too many rules can make students feel stressed and less creative. I think it's better to give students some freedom and trust them to make good choices. This helps them become more independent.`
            }]
          },
          {
            question: 'Have you ever had a really dedicated teacher?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes, my high school history teacher was very dedicated. He loved the subject and always made his classes interesting with stories. He stayed late to help students and really cared about our success. He was a great teacher.
              <br/><br/>
              (No) No, I can't say that I have. Most of my teachers were good at their jobs, but I wouldn't call them exceptionally dedicated. They taught the class and did what was required, but they didn't go above and beyond.`
            }]
          },
          {
            question: 'Do you prefer to have more or fewer rules at school?',
            versions: [{
              score: '5',
              answer: `(More) I prefer to have more rules. I think rules make everything clear and fair for everyone. It prevents confusion and makes the school environment more organized. I feel more comfortable when I know exactly what the rules are.
              <br/><br/>
              (Fewer) I prefer to have fewer rules. I like having more freedom. When there are too many rules, I feel like I can't be myself. I believe students learn better when they are given more trust and responsibility.`
            }]
          },
          {
            question: 'Have you ever had a really strict teacher?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes, my math teacher in middle school was very strict. We had to be silent in her class and our homework had to be perfect. At the time, I didn't like it, but now I know she helped me learn a lot.
              <br/><br/>
              (No) No, I've been lucky. All of my teachers have been quite relaxed and friendly. They were serious about teaching, but they weren't overly strict. They treated us with respect.`
            }]
          },
          {
            question: 'Would you like to work as a teacher in a rule-free school?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes, that sounds interesting. I think it would be a very creative environment. The students could learn based on their interests. As a teacher, it would be a challenge, but also very rewarding to see students learn in a free way.
              <br/><br/>
              (No) No, I don't think so. I believe some rules are necessary for a school to function. Without rules, the classroom could be very chaotic. It would be very difficult for the teacher to teach and for the students to learn.`
            }]
          }
      ]
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
       sampleAnswers: [
          {
            question: 'Do you like buying shoes? How often?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes, I love buying shoes. I think a nice pair of shoes can complete an outfit. I probably buy new shoes every two or three months, especially if I see a style I really like or if there is a sale.
              <br/><br/>
              (No) No, not really. I don't care much about fashion. I only buy new shoes when my old ones are worn out. For me, shoes are just for function, not for style. So I don't buy them very often, maybe once a year.`
            }]
          },
          {
            question: 'Have you ever bought shoes online?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes, many times. It's very convenient, and there are more choices online. I know my size, so it's usually not a problem. Also, the prices are often cheaper online.
              <br/><br/>
              (No) No, never. I need to try shoes on before I buy them. Different brands have different sizes, and I want to make sure they are comfortable. I don't trust buying shoes without trying them first.`
            }]
          },
          {
            question: 'How much money do you usually spend on shoes?',
            versions: [{ score: '5', answer: "I usually don't spend too much. Maybe around 300 to 500 RMB for a pair of sneakers. For more formal shoes, it might be a bit more expensive. I always look for a good balance between price and quality." }]
          },
          {
            question: 'Which do you prefer, fashionable shoes or comfortable shoes?',
            versions: [{
              score: '5',
              answer: `(Fashionable) I definitely prefer fashionable shoes. I believe style is very important. Even if they are not super comfortable, I don't mind for a special occasion. Looking good makes me feel confident.
              <br/><br/>
              (Comfortable) I always choose comfortable shoes. I walk a lot every day, so comfort is my top priority. I don't care if they are the latest fashion. If my feet hurt, I can't do anything.`
            }]
          }
      ]
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
       sampleAnswers: [
          {
            question: 'Do you keep plants at home?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes, I do. I have a few small plants on my desk and on the windowsill. They make my room look nicer and feel fresher. I enjoy taking care of them.
              <br/><br/>
              (No) No, I don't. I'm not very good at taking care of plants. I always forget to water them, so they usually die. Also, I don't have much space for plants in my small apartment.`
            }]
          },
          {
            question: 'What plant did you grow when you were young?',
            versions: [{ score: '5', answer: "When I was in primary school, my science teacher gave every student a bean to grow. I put it in a small pot with some soil. I watered it every day. I was so excited to see it sprout and grow leaves. It was a fun experience." }]
          },
          {
            question: 'Do you know anything about growing a plant?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes, I know some basic things. I know that plants need sunlight, water, and good soil. I also know that different plants need different amounts of sun and water. I learned this from my grandmother and from the internet.
              <br/><br/>
              (No) No, not much at all. I know they need water and sunlight, but that's about it. I have no idea what kind of soil to use or how often to water them. I'm a complete beginner.`
            }]
          },
          {
            question: 'Do Chinese people send plants as gifts?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes, it is quite common. People often send plants, especially flowers like orchids, as gifts for special occasions like a housewarming or the opening of a new business. It's a symbol of good luck and growth.
              <br/><br/>
              (No) It's not very common, I think. People usually prefer to give other gifts, like fruit, tea, or something more practical. Sending a plant is a nice idea, but not everyone has the time or space to take care of it.`
            }]
          }
      ]
    },
  ]
};