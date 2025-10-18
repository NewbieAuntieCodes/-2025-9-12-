import { TopicData } from '../types';

export const initialPart1Data: TopicData[] = [
  {
    id: 'box-part1-topic-a',
    title: '话题: 人物与社交',
    cards: [
      {
        id: 'p1-c1',
        title: 'Friends',
        category: '人物题',
        categoryClass: 'person-card',
        status: 'New',
        part1Questions: [
          'Do you have a friend you have known for a long time?',
          'What do you usually do with your friends?',
          'Where do you often meet each other?',
          'How often do you go out with your friends?',
          'How important are friends to you?',
          'Do you prefer to spend time with one friend or with a group of friends?',
          'Would you invite friends to your home?',
          'Is there a difference between where you meet friends now and where you used to meet them in the past?',
          'Why are some places suitable for meeting while others are not?',
        ],
        sampleAnswers: [
          {
            question: 'Do you have a friend you have known for a long time?',
            versions: [
              {
                  score: '5.5',
                  answer: "Yes, I have a very good friend. Her name is Li Mei. We met in middle school, so we have known each other for more than ten years.",
                  analysis: [
                    { type: 'phrase', text: 'have known each other for', explanation: '使用现在完成时，准确表达“认识(并持续)了多久”。' },
                    { type: 'vocab', text: 'middle school', explanation: '“中学”，是描述学习阶段的常用词。' },
                  ],
              }
            ]
          },
          {
            question: 'What do you usually do with your friends?',
            versions: [
                {
                    score: '5.5',
                    answer: "We do many things together. We often go to a cafe to chat for a few hours. Sometimes we go shopping or watch a new movie.",
                    analysis: [
                      { type: 'phrase', text: 'chat for a few hours', explanation: '表达“聊上几个小时”，生动地描述了与朋友相聚的愉快时光。' },
                    ],
                }
            ]
          },
          {
            question: 'Where do you often meet each other?',
            versions: [{
              score: '5.5',
              answer: "We usually meet at a coffee shop near my house because it is quiet and comfortable. Sometimes we also meet at a big shopping mall in the city center. It is convenient because we can eat and shop in the same place. It depends on what we want to do that day.",
              analysis: [
                  { type: 'vocab', text: 'convenient', explanation: '意为“方便的”，是描述地点、服务或时间安排时非常有用的高频词。'},
                  { type: 'phrase', text: 'in the city center', explanation: '表示“在市中心”，是描述地点时常用的固定搭配。'},
                  { type: 'sentence', text: 'It depends on what we want to do that day', explanation: '一个非常实用的口语表达，意思是“这取决于我们那天想做什么”，可以用来回答很多不确定的问题，展示语言的灵活性。'}
              ]
            }]
          },
          { question: 'How often do you go out with your friends?', versions: [{ score: '5.5', answer: "I try to meet my friends every week, maybe on Saturday or Sunday. But sometimes we are all very busy with our work or study. So, maybe we meet two or three times a month. We use phone to chat when we cannot meet." }] },
          { question: 'How important are friends to you?', versions: [{ score: '5.5', answer: "For me, friends are very, very important. They are like my second family. When I have problems, I can talk to them and they always give me good advice. When I am happy, I share my happiness with them. Life would be very boring without friends." }] },
          { question: 'Do you prefer to spend time with one friend or with a group of friends?', versions: [{ score: '5.5', answer: "I think both are good, but for different situations. If I want to have a deep conversation, I prefer to meet with only one friend. But if I want to have fun, like for a birthday party, I like to be with a big group of friends. It is more lively with more people." }] },
          { question: 'Would you invite friends to your home?', versions: [{ score: '5.5', answer: "Yes, of course. I like inviting my close friends to my home. We can cook dinner together, watch TV, and just relax. It feels more comfortable and private than meeting outside. My parents also like to meet my friends." }] },
          { question: 'Is there a difference between where you meet friends now and where you used to meet them in the past?', versions: [{ score: '5.5', answer: "Yes, there is a big difference. When we were students, we usually met at school or near our homes, like in a park. We didn't have much money. Now, we are working, so we have more money. We often meet in nice restaurants or cafes in the city." }] },
          { question: 'Why are some places suitable for meeting while others are not?', versions: [{ score: '5.5', answer: "I think some places like cafes or parks are good for meeting because they are not too loud, so we can talk easily. A library is not suitable because we must be very quiet. Also, a very crowded place like a train station is not good because it is hard to find each other and have a good conversation." }] }
        ]
      },
      { 
        id: 'p1-c11', 
        title: 'Staying with old people', 
        category: '事件题', 
        categoryClass: 'event-card', 
        status: 'New',
        part1Questions: [
          'Have you ever worked with old people?',
          'Are you happy to work with people who are older than you?',
          'What are the benefits of being friends with or working with old people?',
          'Do you enjoy spending time with old people?',
        ],
        sampleAnswers: [
          { question: 'Have you ever worked with old people?', versions: [{ score: '5.5', answer: "No, I have never had a job where I worked with old people. I am a student now. But I often help my grandparents with things at their home, like cleaning or using the computer. So in a way, I have some experience with them." }] },
          { question: 'Are you happy to work with people who are older than you?', versions: [{ score: '5.5', answer: "Yes, I think I would be happy. Older people have a lot of experience in work and life. I believe I can learn many useful things from them. They are usually more patient and can be good teachers for young people like me." }] },
          { question: 'What are the benefits of being friends with or working with old people?', versions: [{ score: '5.5', answer: "There are many benefits. First, they can share their wisdom and give very good advice for problems. Second, they often tell interesting stories about the past, which is like a history lesson. Also, being friends with them can make you feel more calm and patient." }] },
          { question: 'Do you enjoy spending time with old people?', versions: [{ score: '5.5', answer: "Yes, I really enjoy it, especially with my own grandparents. It is very relaxing to spend time with them. We usually just talk, drink tea, and watch TV. I feel very peaceful and loved when I am with them." }] }
        ]
      },
    ]
  },
  {
    id: 'box-part1-topic-b',
    title: '话题: 地点',
    cards: [
      { 
        id: 'p1-c4', 
        title: 'Museum', 
        category: '地点题', 
        categoryClass: 'place-card', 
        status: 'New',
        part1Questions: [
            'Do you think museums are important?',
            'Are there many museums in your hometown?',
            'Do you often visit a museum?',
            'When was the last time you visited a museum?',
        ],
        sampleAnswers: [
            { question: 'Do you think museums are important?', versions: [{ score: '5.5', answer: "Yes, I think museums are very important. They are like history books, but with real things. We can learn a lot about the past, about art, and about science from museums. They help us understand where we come from and protect important things for the future." }] },
            { question: 'Are there many museums in your hometown?', versions: [{ score: '5.5', answer: "In my hometown, there are not many museums. It is a small city. We have one main museum about the history of our city. But if you go to a big city like Beijing or Shanghai, there are many different kinds of museums." }] },
            { question: 'Do you often visit a museum?', versions: [{ score: '5.5', answer: "To be honest, I don't visit museums very often. Maybe once or twice a year. I am usually busy with my studies. But I do enjoy it when I go. I like to go with friends or family, so we can talk about the things we see." }] },
            { question: 'When was the last time you visited a museum?', versions: [{ score: '5.5', answer: "The last time I visited a museum was about six months ago. I went to the city's history museum with my classmates for a school project. We saw many old photos and objects from our city's past. It was quite interesting." }] }
        ]
      },
      { 
        id: 'p1-c9', 
        title: 'Crowded place', 
        category: '地点题', 
        categoryClass: 'place-card', 
        status: 'New',
        part1Questions: [
            'Is the city where you live crowded?',
            'Is there a crowded place near where you live?',
            'Do you like crowded places?',
            'Do most people like crowded places?',
            'When was the last time you were in a crowded place?',
        ],
        sampleAnswers: [
            { question: 'Is the city where you live crowded?', versions: [{ score: '5.5', answer: "Yes, the city where I live is quite crowded, especially in the city center. There are many people, cars, and buses everywhere during the day. It is a big city with a large population, so it's always busy." }] },
            { question: 'Is there a crowded place near my home?', versions: [{ score: '5.5', answer: "Yes, there is a very crowded place near my home. It's a big shopping mall. On weekends, it is full of people. There are many shops, restaurants, and a cinema inside, so it attracts a lot of visitors." }] },
            { question: 'Do you like crowded places?', versions: [{ score: '5.5', answer: "It depends. Sometimes I like the energy of a crowded place, like at a concert. But most of the time, I prefer quiet places. I don't like being in a crowded subway. It can be a bit stressful." }] },
            { question: 'Do most people like crowded places?', versions: [{ score: '5.5', answer: "I think many young people do. Crowded places are often popular for a reason - they have good shopping, food, or entertainment. They enjoy the lively atmosphere of busy places." }] },
            { question: 'When was the last time you were in a crowded place?', versions: [{ score: '5.5', answer: "The last time was just last weekend. I went to a shopping mall to buy a birthday present for my friend. It was Saturday afternoon, so it was extremely crowded. It was difficult to walk around." }] }
        ]
      },
      { 
        id: 'p1-c15', 
        title: 'Public places', 
        category: '地点题', 
        categoryClass: 'place-card', 
        status: 'New',
        part1Questions: [
            'Have you ever talked with someone you don\'t know in public places?',
            'Do you wear headphones in public places?',
            'Would you like to see more public places near where you live?',
            'Do you often go to public places with your friends?',
        ],
        sampleAnswers: [
            { question: 'Have you ever talked with someone you don\'t know in public places?', versions: [{ score: '5.5', answer: "Not really. I'm a bit shy, so I usually don't start conversations with strangers. Sometimes an older person might ask for directions, and I'm happy to help, but I don't usually have long talks with people I don't know." }] },
            { question: 'Do you wear headphones in public places?', versions: [{ score: '5.5', answer: "Yes, I almost always wear headphones when I'm on the bus or subway. I like to listen to music or podcasts. It makes the travel time more enjoyable and helps me relax. It also blocks out the noise of the city." }] },
            { question: 'Would you like to see more public places near where you live?', versions: [{ score: '5.5', answer: "Yes, definitely. I would love to have more parks or green spaces near my home. A nice park is a great place to relax, exercise, or just enjoy nature. Right now, the nearest park is a bit far from my apartment." }] },
            { question: 'Do you often go to public places with your friends?', versions: [{ score: '5.5', answer: "Yes, I do. My friends and I often meet in public places like cafes, shopping malls, or cinemas. These places are convenient for everyone to get to. In the summer, we sometimes go to a park to have a picnic or play sports." }] }
        ]
      },
    ]
  },
  {
    id: 'box-part1-topic-c',
    title: '话题: 活动与爱好',
    cards: [
      { 
        id: 'p1-c2', 
        title: 'Sharing', 
        category: '事件题', 
        categoryClass: 'event-card', 
        status: 'New',
        part1Questions: [
            'Did your parents teach you to share when you were a child?',
            'What kind of things do you like to share with others?',
            'What kind of things are not suitable for sharing?',
            'Do you have anything to share with others recently?',
            'Who is the first person you would like to share good news with?',
            'Do you prefer to share news with your friends or your parents?',
        ],
        sampleAnswers: [
            { question: 'Did your parents teach you to share when you were a child?', versions: [{ score: '5.5', answer: "Yes, they did. When I was a child, my parents always taught me that sharing is a good thing. They encouraged me to share my toys and snacks with my brother and my friends. I think it was a very important lesson." }] },
            { question: 'What kind of things do you like to share with others?', versions: [{ score: '5.5', answer: "I like to share many things. For example, I enjoy sharing food with my colleagues at work. I also like to share interesting articles or funny videos I find online with my friends. It's a good way to connect with people." }] },
            { question: 'What kind of things are not suitable for sharing?', versions: [{ score: '5.5', answer: "I think very personal items are not suitable for sharing, like a toothbrush or a towel, for hygiene reasons. Also, I believe we shouldn't share secrets that other people have told us. It's a matter of trust." }] },
            { question: 'Do you have anything to share with others recently?', versions: [{ score: '5.5', answer: "Yes, I recently read a very interesting book. I shared the story and my thoughts about it with my best friend yesterday. She seemed to enjoy it and said she might read the book too." }] },
            { question: 'Who is the first person you would like to share good news with?', versions: [{ score: '5.5', answer: "The first person I share good news with is usually my best friend. We are very close, and I know she will be genuinely happy for me. I always call her as soon as something exciting happens." }] },
            { question: 'Do you prefer to share news with your friends or your parents?', versions: [{ score: '5.5', answer: "It depends on the news. For small, daily things, I usually share them with my friends. But for very important news, like getting a new job, I would tell my parents first. They have more life experience and can give me good advice." }] }
        ]
      },
      { 
        id: 'p1-c6', 
        title: 'Borrowing/lending', 
        category: '事件题', 
        categoryClass: 'event-card', 
        status: 'New',
        part1Questions: [
            'Have you borrowed books from others?',
            'Have you ever borrowed money from others?',
            'Do you like to lend things to others?',
            'How do you feel when people don\'t return things they borrowed from you?',
            'Do you mind if others borrow money from you?',
        ],
        sampleAnswers: [
            { question: 'Have you borrowed books from others?', versions: [{ score: '5.5', answer: "Yes, many times. When I was a student, I often borrowed textbooks from the library or from older students to save money. I also like to borrow novels from my friends if they recommend a good one." }] },
            { question: 'Have you ever borrowed money from others?', versions: [{ score: '5.5', answer: "Yes, I have, but only for small amounts. For example, if I forget my wallet, I might borrow some money from a friend for lunch. I always make sure to pay them back as soon as possible, usually the same day." }] },
            { question: 'Do you like to lend things to others?', versions: [{ score: '5.5', answer: "I'm happy to lend things to my close friends and family because I trust them. If they need a book or my charger, it's no problem. But I am more careful about lending things to people I don't know very well." }] },
            { question: 'How do you feel when people don\'t return things they borrowed from you?', versions: [{ score: '5.5', answer: "I feel a little annoyed and disappointed. It's not usually about the object itself, but more about the principle. I think it's important to be responsible and return things. I might politely remind them once." }] },
            { question: 'Do you mind if others borrow money from you?', versions: [{ score: '5.5', answer: "For my close friends, if it's a small amount of money, I don't mind at all. I'm happy to help. However, I would feel uncomfortable lending a large sum of money. I think money can sometimes complicate friendships." }] }
        ]
      },
      { 
        id: 'p1-c7', 
        title: 'Chatting', 
        category: '事件题', 
        categoryClass: 'event-card', 
        status: 'New',
        part1Questions: [
            'Do you like chatting with friends?',
            'What do you usually chat about with friends?',
            'Do you prefer to chat with a group of people or with only one friend?',
            'Do you prefer to communicate face-to-face or via social media?',
            'Do you argue with friends?',
        ],
        sampleAnswers: [
            { question: 'Do you like chatting with friends?', versions: [{ score: '5.5', answer: "Yes, I love chatting with my friends. It's one of my favorite things to do. It helps me to relax and forget about any stress from work or study. Talking with them always makes me feel happy." }] },
            { question: 'What do you usually chat about with friends?', versions: [{ score: '5.5', answer: "We chat about all sorts of things. We talk about our daily lives, what happened at work or school, and our plans for the weekend. We also share opinions about movies, music, and sometimes we talk about our dreams for the future." }] },
            { question: 'Do you prefer to chat with a group of people or with only one friend?', versions: [{ score: '5.5', answer: "I like both, but they are different. When I am with only one friend, we can have a more serious and deep conversation. But chatting with a group of friends is more fun and lively. There's a lot of laughing and joking." }] },
            { question: 'Do you prefer to communicate face-to-face or via social media?', versions: [{ score: '5.5', answer: "I prefer face-to-face communication because you can see the person's expressions and body language. It feels more personal and real. However, social media is very convenient for quick chats and for staying in touch with friends who live far away." }] },
            { question: 'Do you argue with friends?', versions: [{ score: '5.5', answer: "Not really. We have disagreements sometimes, but we don't really argue. My friends and I respect each other's opinions. If we think differently about something, we just discuss it calmly. I believe good communication is key to a strong friendship." }] }
        ]
      },
      {
        id: 'p1-c3',
        title: 'Having a break',
        category: '事件题',
        categoryClass: 'event-card',
        status: 'New',
        part1Questions: [
          'How often do you take a rest or a break?',
          'What do you usually do when you are resting?',
          'Do you take a nap when you are taking your rest?',
          'How do you feel after taking a nap?',
        ],
        sampleAnswers: [
          {
            question: 'How often do you take a rest or a break?',
            versions: [{
                score: '5.5',
                answer: "I try to take a short break every hour when I'm studying or working. Besides that, I make sure to take a longer rest during the weekends. Life can be quite busy, so these breaks are really important for me to recharge my batteries.",
                analysis: [
                  { type: 'phrase', text: 'recharge my batteries', explanation: '一个地道的习语，意思是“恢复精力”，非常适合用在讨论休息的话题中。' }
                ]
            }]
          },
          {
            question: 'What do you usually do when you are resting?',
            versions: [{
                score: '5.5',
                answer: 'During my short breaks, I usually stand up and walk around a bit, or just listen to a piece of music. For longer rests, like on weekends, I enjoy watching a movie or reading a book. It helps me to take my mind off work.',
                analysis: [
                  { type: 'phrase', text: 'take my mind off work', explanation: '意思是“把思绪从工作中移开”，表达通过做某事来忘记烦恼或压力。' }
                ]
            }]
          },
          {
            question: 'Do you take a nap when you are taking your rest?',
            versions: [{
                score: '5.5',
                answer: "Yes, I'm a big fan of napping. I usually take a short nap for about 20 minutes after lunch if I have time. I find it's a very effective way to boost my energy for the afternoon.",
                analysis: [
                  { type: 'vocab', text: 'effective', explanation: '意为“有效的”，用来描述午睡带来的好效果，是高频实用词汇。' },
                  { type: 'phrase', text: 'boost my energy', explanation: '意思是“提升我的精力”，生动地表达了午睡的好处。' }
                ]
            }]
          },
          {
            question: 'How do you feel after taking a nap?',
            versions: [{
                score: '5.5',
                answer: 'Most of the time, I feel very refreshed and much more focused after a short nap. It’s like my brain has been reset. However, if I sleep for too long, I sometimes feel a bit groggy.',
                analysis: [
                  { type: 'vocab', text: 'refreshed', explanation: '意为“精神焕发的”，非常准确地描述了小睡后的良好感觉。' },
                  { type: 'vocab', text: 'groggy', explanation: '意为“昏昏沉沉的，头脑不清醒的”，用来描述睡太久后可能出现的不适感，是加分词汇。' }
                ]
            }]
          }
        ]
      },
      {
        id: 'p1-c8',
        title: 'Growing vegetables/fruits',
        category: '事件题',
        categoryClass: 'event-card',
        status: 'New',
        part1Questions: [
          'Are you interested in growing vegetables and fruits?',
          'Is growing vegetables popular in your country?',
          'Do many people grow vegetables in your city?',
          'Do you think it\'s easy to grow vegetables?',
          'Should schools teach students how to grow vegetables?',
        ],
        sampleAnswers: [
          {
            question: 'Are you interested in growing vegetables and fruits?',
            versions: [{ score: '5.5', answer: "Yes, I am quite interested. I think it would be very satisfying to eat something you grew yourself. I live in an apartment, so I don't have a garden, but I've tried growing some herbs like mint and basil on my balcony." }]
          },
          {
            question: 'Is growing vegetables popular in your country?',
            versions: [{ score: '5.5', answer: 'I would say it is more popular among the older generation, especially in the countryside where people have big yards. However, in recent years, it seems more young people are getting interested in it too, as a hobby.' }]
          },
          {
            question: 'Do many people grow vegetables in your city?',
            versions: [{
                score: '5.5',
                answer: 'Not many, because most people live in high-rise buildings and space is limited. Some people do grow small plants on their balconies, and I know a few community gardens are available, but it is not a common practice.',
                 analysis: [
                  { type: 'phrase', text: 'high-rise buildings', explanation: '指“高楼大厦”，准确描述了城市居民的居住环境。' },
                  { type: 'phrase', text: 'space is limited', explanation: '意思是“空间有限”，是解释为什么城市里种菜不普遍的常见原因。' }
                ]
            }]
          },
          {
            question: 'Do you think it\'s easy to grow vegetables?',
            versions: [{ score: '5.5', answer: "I don't think it's very easy. It requires knowledge about the right amount of sunlight and water. Also, you have to be patient and deal with pests. I think it takes some effort to be successful." }]
          },
          {
            question: 'Should schools teach students how to grow vegetables?',
            versions: [{
                score: '5.5',
                answer: "Yes, I think that's a great idea. It can be a very practical lesson. It teaches children where their food comes from, and it also helps them to develop a sense of responsibility as they need to take care of the plants every day.",
                analysis: [
                  { type: 'phrase', text: 'a sense of responsibility', explanation: '意思是“责任感”，是讨论教育类话题时非常有用的词组。' }
                ]
            }]
          }
        ]
      },
      {
        id: 'p1-c10',
        title: 'Going out',
        category: '事件题',
        categoryClass: 'event-card',
        status: 'New',
        part1Questions: [
          'Do you bring food or snacks with you when going out?',
          'Do you always take your mobile phone with you when going out?',
          'Do you often bring cash with you?',
          'How often do you use cash?',
        ],
        sampleAnswers: [
          {
            question: 'Do you bring food or snacks with you when going out?',
            versions: [{ score: '5.5', answer: "Not usually, unless I am going on a long trip, like hiking. If I'm just going out for a few hours in the city, it's very convenient to buy something to eat or drink, so I don't feel the need to carry snacks with me." }]
          },
          {
            question: 'Do you always take your mobile phone with you when going out?',
            versions: [{
                score: '5.5',
                answer: "Absolutely, I never leave home without it. It's essential for me. I use it for communication, for paying for things, and for navigation. I would feel quite lost and disconnected without my phone.",
                 analysis: [
                  { type: 'vocab', text: 'essential', explanation: '意为“必不可少的，极其重要的”，比 important 语气更强。' },
                  { type: 'vocab', text: 'disconnected', explanation: '意为“与外界失去联系的”，生动地描述了没有手机的感受。' }
                ]
            }]
          },
          {
            question: 'Do you often bring cash with you?',
            versions: [{ score: '5.5', answer: "Not really. Mobile payment is so common in my country that I rarely need cash. I might keep a small amount of cash in my wallet for emergencies, but I almost never use it." }]
          },
          {
            question: 'How often do you use cash?',
            versions: [{ score: '5.5', answer: 'Very rarely. Maybe once a month, if at all. The only time I might use cash is at some very small, traditional street food stalls that don\'t accept mobile payments. For everything else, from shopping to taking a taxi, I use my phone.' }]
          }
        ]
      },
      {
        id: 'p1-c12',
        title: 'Doing something well',
        category: '事件题',
        categoryClass: 'event-card',
        status: 'New',
        part1Questions: [
          'Do you have an experience when you did something well?',
          'Do you have an experience when your teacher thought you did a good job?',
          'Do you often tell your friends when they do something well?',
        ],
        sampleAnswers: [
          {
            question: 'Do you have an experience when you did something well?',
            versions: [{
                score: '5.5',
                answer: "Yes, I remember a time in university when I had to give a presentation for a project. I was very nervous, but I prepared a lot for it. In the end, the presentation went very smoothly and I got a high score. I felt a great sense of accomplishment.",
                analysis: [
                  { type: 'phrase', text: 'a great sense of accomplishment', explanation: '意思是“巨大的成就感”，是描述成功完成某事后心情的绝佳表达。' }
                ]
            }]
          },
          {
            question: 'Do you have an experience when your teacher thought you did a good job?',
            versions: [{ score: '5.5', answer: "Yes. In my high school English class, we had to write a short story. I spent a lot of time on it and tried to be creative. My teacher really liked it and she even read it out to the whole class as an example. I felt very proud of myself that day." }]
          },
          {
            question: 'Do you often tell your friends when they do something well?',
            versions: [{
                score: '5.5',
                answer: "Yes, I do. I believe it's important to give encouragement and compliments. When I see my friend achieve something, whether it's big or small, I always tell them they did a good job. It makes them happy and it strengthens our friendship.",
                analysis: [
                  { type: 'vocab', text: 'compliments', explanation: '意为“赞美，称赞”，是比 praise 更日常的用词。' },
                  { type: 'phrase', text: 'strengthens our friendship', explanation: '意思是“增进我们的友谊”，说明了赞美朋友的积极作用。' }
                ]
            }]
          }
        ]
      },
    ]
  },
  {
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
              score: '5.5',
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
  }
];