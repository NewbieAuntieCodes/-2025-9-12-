import { TopicData } from '../types';

export const initialPart2Data: TopicData[] = [
    {
        id: 'box-topic-people',
        title: '话题: 人物题',
        cards: [
            { 
              id: 'p2-c1', 
              title: '重要的好朋友',
              category: '人物题', 
              categoryClass: 'person-card', 
              status: 'New',
              part2Title: 'Describe a good friend who is important to you',
              part2Description: 'You should say:',
              part2Prompts: [
                  'Who he/she is',
                  'How/where you got to know him/her',
                  'How long you have known each other',
                  'And explain why he/she is important to you',
              ],
              part3Questions: [
                  'How do children make friends at school?',
                  'How do children make friends when they are not at school?',
                  'Do you think it is better for children to have a few close friends or many casual friends?',
                  "Do you think a child's relationship with friends can be replaced by that with other people, like parents or other family members?",
                  'What are the differences between friends made inside and outside the workplace?',
                  "Do you think it's possible for bosses and their employees to become friends?",
              ],
              sampleAnswers: [
                {
                  question: "Part 2: Describe a good friend who is important to you",
                  versions: [{
                    score: '5.5',
                    answer: [
                      "I’d like to talk about a good friend who is very important to me. She is my roommate in school. She is older than me by one year, and she is very tall and beautiful. She is also the first good friend I made when I came to this new school.",
                      "We first got to know each other because we live in the same dormitory. At the beginning, I felt a bit lonely in the new school, but she always talked with me and made me feel comfortable. We later found out that we have the same hobbies. For example, we both like playing the same games, so our conversations are always fun and interesting.",
                      "I have known her for about one year. During this time, she has taken good care of me. She often shares snacks with me in the dormitory. When I feel unhappy, she will comfort me and tell some jokes to make me laugh. She also helps me with my studies. For example, if I don’t understand a math problem, she will explain it to me patiently.",
                      "On weekends or holidays, we usually go shopping together. Sometimes we buy some delicious food like milk tea, cake, or ice cream. Sometimes we buy clothes and take photos together. I always feel happy when I spend time with her.",
                      "She is important to me because she is not only a good friend but also like a sister. She supports me when I face difficulties and makes my school life more colorful. I really hope our friendship can last forever."
                    ],
                    analysis: [
                      { type: 'phrase', text: 'got to know each other', explanation: '一个非常自然的动词短语，意思是“开始认识对方”，比 "we met" 更具描述性。' },
                      { type: 'phrase', text: 'made me feel comfortable', explanation: '表达“让我感到自在”，生动地描述了朋友带来的积极影响。' },
                      { type: 'vocab', text: 'hobbies', explanation: '意为“爱好”，是谈论个人兴趣时的高频词汇。' },
                      { type: 'phrase', text: 'taken good care of me', explanation: '一个温暖的表达，意思是“把我照顾得很好”，体现了朋友的关心。' },
                      { type: 'vocab', text: 'comfort', explanation: '动词，意为“安慰”，准确地描述了朋友在自己不开心时所做的事情。' },
                      { type: 'phrase', text: 'makes my school life more colorful', explanation: '一个生动的比喻，意思是“让我的校园生活更加丰富多彩”，是加分表达。' },
                      { type: 'phrase', text: 'last forever', explanation: '意思是“永远持续下去”，常用来表达对友谊或感情的美好祝愿。' },
                    ],
                  }]
                },
                {
                  question: "How do children make friends at school?",
                  versions: [{
                    score: '5.5',
                    answer: "In my view, children primarily make friends at school through shared activities and being in the same class. The main reason is that school provides a structured environment where they spend a lot of time together, which naturally leads to interaction. For instance, they might become friends with the person sitting next to them, or with teammates in a sports club like basketball, because they have to cooperate and communicate regularly.",
                    analysis: [
                      { type: 'phrase', text: 'In my view', explanation: ' (Point) - 这是表明个人观点的常用短语，是 PRE 结构的一个很好的开始。' },
                      { type: 'phrase', text: 'The main reason is that', explanation: ' (Reason) - 清晰地引出解释，让你的论述更有条理。' },
                      { type: 'phrase', text: 'For instance', explanation: ' (Example) - 引出具体例子来支撑你的理由，使回答更有说服力。' },
                    ],
                  }]
                },
                {
                    question: "How do children make friends when they are not at school?",
                    versions: [{
                        score: '5.5',
                        answer: "I believe that outside of school, children often make friends through neighborhood connections or organized extracurricular activities. This is because these settings offer chances to meet peers who share similar interests or live in the same area. For example, a child might befriend others who live on the same street and play together in a local park. Also, joining a weekend piano class can lead to new friendships.",
                        analysis: [
                            { type: 'phrase', text: 'I believe that', explanation: '(Point) - 用来引出你的主要观点。' },
                            { type: 'sentence', text: 'This is because these settings offer chances to meet peers who share similar interests.', explanation: '(Reason) - 解释为什么这些地方是交朋友的好机会，逻辑清晰。' },
                            { type: 'phrase', text: 'For example', explanation: '(Example) - 提供具体的例子，如在公园玩或上钢琴课，让回答更具体。' }
                        ]
                    }]
                },
                {
                    question: "Do you think it is better for children to have a few close friends or many casual friends?",
                    versions: [{
                        score: '5.5',
                        answer: "I think it's more beneficial for children to have a few close friends. The primary reason is that close friendships provide deeper emotional support and help children develop important social skills like trust and empathy. For example, a child with one or two best friends has someone they can confide in when they are sad. This is more valuable for their emotional development than having many acquaintances.",
                        analysis: [
                            { type: 'sentence', text: "I think it's more beneficial for children to have a few close friends.", explanation: '(Point) - 直接明了地回答问题，表明你的立场。' },
                            { type: 'vocab', text: 'emotional support', explanation: '(Reason) - “情感支持”，一个很好的词组，解释了亲密友谊的核心价值。' },
                            { type: 'phrase', text: 'confide in', explanation: '(Example) - “向……倾诉”，动词短语，用在例子中非常贴切，展示了词汇量。' }
                        ]
                    }]
                },
                {
                    question: "Do you think a child's relationship with friends can be replaced by that with other people, like parents or other family members?",
                    versions: [{
                        score: '5.5',
                        answer: "In my opinion, relationships with family members cannot completely replace friendships. This is because friends offer a different type of relationship based on peer equality, which is crucial for developing a social identity. For instance, a child learns how to negotiate and resolve conflicts with friends in a way they wouldn't with their parents. These peer interactions are an essential part of growing up.",
                        analysis: [
                            { type: 'phrase', text: 'In my opinion', explanation: '(Point) - 开始回答，清晰地表达你的观点。' },
                            { type: 'vocab', text: 'peer equality', explanation: '(Reason) - “同伴间的平等”，一个非常准确的术语，点出了友谊和亲子关系的关键区别。' },
                            { type: 'phrase', text: 'resolve conflicts', explanation: '(Example) - “解决冲突”，用具体的例子说明孩子们能从朋友那里学到什么。' }
                        ]
                    }]
                },
                {
                    question: "What are the differences between friends made inside and outside the workplace?",
                    versions: [{
                        score: '5.5',
                        answer: "I'd say there are several key differences, mainly about the context of the relationship. Workplace friendships are often formed based on shared professional experiences, while friendships outside of work are typically based on personal interests. For example, you might be friendly with a colleague because you work on the same projects. In contrast, a friend you made in a hiking group shares a personal passion, and the bond is often less formal.",
                        analysis: [
                            { type: 'sentence', text: "I'd say there are several key differences...", explanation: '(Point) - 直接回答问题，并预告你将要讨论的内容。' },
                            { type: 'phrase', text: 'based on', explanation: '(Reason) - 一个非常有用的短语，用来解释两种友谊的基础有何不同。' },
                            { type: 'vocab', text: 'colleague', explanation: '(Example) - “同事”，工作场景下的高频词汇。' }
                        ]
                    }]
                },
                {
                    question: "Do you think it's possible for bosses and their employees to become friends?",
                    versions: [{
                        score: '5.5',
                        answer: "Yes, I think it's possible, but it can be complicated. The reason is the inherent power imbalance in the boss-employee relationship can make a genuine friendship difficult. For example, if a manager is close friends with one employee, other team members might feel it's unfair when it comes to promotions. To make it work, they must maintain clear boundaries.",
                        analysis: [
                            { type: 'vocab', text: 'complicated', explanation: '(Point) - “复杂的”，一个很好的词来概括这种情况，展示了你思考的深度。' },
                            { type: 'phrase', text: 'power imbalance', explanation: '(Reason) - “权力不平衡”，一个高级词组，准确地指出了问题的核心。' },
                            { type: 'phrase', text: 'maintain clear boundaries', explanation: '(Example) - “保持清晰的界限”，一个地道的表达，说明了如何处理这种复杂关系。' }
                        ]
                    }]
                }
              ],
            },
            {
              id: 'p2-c1-popular',
              title: '受欢迎的人',
              category: '人物题',
              categoryClass: 'person-card',
              status: 'New',
              part2Title: 'Describe a popular person',
              part2Description: 'You should say:',
              part2Prompts: [
                  'Who this person is',
                  'What kind of person he or she is',
                  'When you see him/her normally',
                  'And explain why you think this person is popular',
              ],
              part3Questions: [
                  'Why are some students popular in school?',
                  'Is it important for a teacher to be popular?',
                  'Do you think good teachers are always popular among students?',
                  'What are the qualities of being a good teacher?',
                  'Is it easier to become popular nowadays?',
                  'Why do people want to be popular?',
              ],
            },
            { 
              id: 'p2-c1-music', 
              title: '擅长音乐的朋友', 
              category: '人物题', 
              categoryClass: 'person-card', 
              status: 'New',
              part2Title: 'Describe a friend of yours who is a good musician',
              part2Description: 'You should say:',
              part2Prompts: [
                  'Who this friend is',
                  'What kind of music they play',
                  'How often you see them play',
                  'And explain why you think they are a good musician',
              ],
              part3Questions: [
                  'What kind of music is popular in your country?',
                  'Do you think it\'s important for schools to have music classes?',
                  'Do you think technology has changed the way we listen to music?',
                  'Is it better to learn music at a young age or as an adult?',
                  'What are the benefits of being able to play a musical instrument?',
                  'Do you think famous musicians have a responsibility to be good role models?',
              ],
              sampleAnswers: [
                {
                  question: "Part 2: Describe a friend of yours who is a good musician",
                  versions: [{
                    score: '5.5',
                    answer: [
                      "I'd like to talk about my good friend, Wang Lei, who is a very talented musician. We met in a university club and we've been friends for about three years.",
                      "Wang Lei plays the acoustic guitar. He doesn't just play songs by other people; he also writes his own music, which I think is really cool. His style is mostly folk and a little bit of pop. His songs are often about his daily life and feelings, so they are very relatable.",
                      "I see him play quite often. Our university sometimes holds small concerts or events on campus, and he usually performs at them. Also, when our group of friends hangs out, he sometimes brings his guitar and plays for us. It creates a very relaxed and happy atmosphere.",
                      "I think he is a good musician for a couple of reasons. First, he is technically skilled. His fingers move so fast on the guitar, and he never makes a mistake. But more importantly, he plays with a lot of emotion. When you listen to his music, you can really feel what he is trying to express, whether it's happiness or sadness. He practices for at least an hour every day, so his skill comes from a lot of hard work. That dedication is really admirable."
                    ],
                    analysis: [
                      { type: 'vocab', text: 'talented', explanation: '意为“有天赋的”，是形容某人有才华的常用词。' },
                      { type: 'phrase', text: 'writes his own music', explanation: '“写他自己的音乐”，说明他不仅仅是演奏家，还是创作者。' },
                      { type: 'vocab', text: 'relatable', explanation: '意为“能引起共鸣的”，说明他的音乐容易让人理解和产生联系。' },
                      { type: 'phrase', text: 'creates a very relaxed and happy atmosphere', explanation: '“营造了一种非常放松和快乐的氛围”，生动地描述了他音乐的影响力。' },
                      { type: 'phrase', text: 'technically skilled', explanation: '“技术娴熟”，说明他在演奏技巧上很出色。' },
                      { type: 'phrase', text: 'plays with a lot of emotion', explanation: '“演奏时充满感情”，指出了他音乐的感染力，这比单纯的技术更重要。' },
                      { type: 'vocab', text: 'dedication', explanation: '名词，意为“奉献，投入”，用来赞扬他的努力。' },
                    ],
                  }]
                },
                {
                  question: "What kind of music is popular in your country?",
                  versions: [{
                    score: '5.5',
                    answer: "In my country, pop music, or 'C-pop', is definitely the most popular genre, especially among young people. The main reason is that these songs have catchy melodies and are heavily promoted on social media and TV. For example, you can hear the latest pop hits everywhere, from shopping malls to cafes. They are very easy to listen to.",
                    analysis: [
                      { type: 'vocab', text: 'genre', explanation: '(Point) - “类型，流派”，是讨论音乐、电影等艺术形式时的常用词。' },
                      { type: 'phrase', text: 'catchy melodies', explanation: '(Reason) - “上口的旋律”，准确地描述了流行音乐的特点。' },
                      { type: 'phrase', text: 'heavily promoted', explanation: '(Reason) - “被大力推广”，说明了流行音乐普及的原因。' }
                    ]
                  }]
                },
                {
                  question: "Do you think it's important for schools to have music classes?",
                  versions: [{
                    score: '5.5',
                    answer: "Yes, I believe it's very important for schools to offer music classes. This is because learning music can help students develop their creativity and it's also a great way to relieve stress from their academic studies. For instance, my high school had a school band, and my friends who joined it said it was their favorite part of the week because it allowed them to be creative and work as a team.",
                    analysis: [
                      { type: 'phrase', text: 'develop their creativity', explanation: '(Reason) - “发展他们的创造力”，是教育类话题中常见的加分点。' },
                      { type: 'phrase', text: 'relieve stress', explanation: '(Reason) - “缓解压力”，说明了音乐教育的另一个好处。' },
                      { type: 'phrase', text: 'work as a team', explanation: '(Example) - “团队合作”，通过例子具体说明了音乐课的益处。' }
                    ]
                  }]
                },
                {
                  question: "Do you think technology has changed the way we listen to music?",
                  versions: [{
                    score: '5.5',
                    answer: "Absolutely, technology has completely transformed how we consume music. The biggest reason is the rise of streaming services, which give us instant access to millions of songs. For example, I use an app on my phone to listen to music from all over the world anytime I want. This is very different from the past when we had to buy physical CDs or tapes.",
                    analysis: [
                      { type: 'vocab', text: 'transformed', explanation: '(Point) - “彻底改变”，比 changed 语气更强。' },
                      { type: 'phrase', text: 'streaming services', explanation: '(Reason) - “流媒体服务”，是讨论现代音乐时必须知道的术语。' },
                      { type: 'phrase', text: 'instant access', explanation: '(Reason) - “即时访问”，准确描述了流媒体的便利性。' }
                    ]
                  }]
                },
                {
                  question: "Is it better to learn music at a young age or as an adult?",
                  versions: [{
                    score: '5.5',
                    answer: "In my opinion, it is generally better to start learning music at a young age. This is because children often have more free time to dedicate to practice, and their brains are considered to be more adaptable for learning new skills. For instance, many world-famous pianists and violinists began their training when they were just four or five years old. It's harder for adults to find that much time.",
                    analysis: [
                      { type: 'phrase', text: 'In my opinion', explanation: '(Point) - 清晰地表达个人观点。' },
                      { type: 'vocab', text: 'adaptable', explanation: '(Reason) - “适应性强的”，用来解释为什么孩子学东西更快。' },
                      { type: 'phrase', text: 'world-famous', explanation: '(Example) - “世界闻名的”，用来举例更有说服力。' }
                    ]
                  }]
                },
                {
                  question: "What are the benefits of being able to play a musical instrument?",
                  versions: [{
                    score: '5.5',
                    answer: "I think there are numerous benefits. One major benefit is that it improves discipline and patience, as you have to practice regularly to get better. It's also a wonderful way to express your emotions. For example, my friend who plays the guitar told me that when he feels stressed, playing a sad song helps him release his negative feelings.",
                    analysis: [
                      { type: 'vocab', text: 'numerous', explanation: '(Point) - “许多的”，比 many 更正式。' },
                      { type: 'vocab', text: 'discipline', explanation: '(Reason) - “纪律性”，指出了学乐器对性格的积极影响。' },
                      { type: 'phrase', text: 'express your emotions', explanation: '(Reason) - “表达你的情感”，是音乐的一个核心功能。' }
                    ]
                  }]
                },
                {
                  question: "Do you think famous musicians have a responsibility to be good role models?",
                  versions: [{
                    score: '5.5',
                    answer: "Yes, I do. I believe they have a significant responsibility because they have a huge influence, especially on their younger fans. These fans often look up to them and copy their behavior. For example, if a popular singer gets involved in charity work, it can encourage thousands of young people to also do good things for society. The opposite is also true if they set a bad example.",
                    analysis: [
                      { type: 'vocab', text: 'significant', explanation: '(Point) - “重大的”，强调责任之大。' },
                      { type: 'phrase', text: 'huge influence', explanation: '(Reason) - “巨大的影响”，是讨论名人效应时的常用词组。' },
                      { type: 'phrase', text: 'look up to them', explanation: '(Reason) - “仰慕他们”，是 admire 的一个常用同义词组。' }
                    ]
                  }]
                }
              ],
            },
            {
              id: 'p2-c-creative-person',
              title: '钦佩的有创造力的人',
              category: '人物题',
              categoryClass: 'person-card',
              status: 'New',
              part2Title: 'Describe a creative person (e.g. an artist, a musician, an architect, etc.) you admire',
              part2Description: 'You should say:',
              part2Prompts: [
                  'Who he/she is',
                  'How you knew him/her',
                  'What his/her greatest achievement is',
                  'And explain why you think he/she is creative',
              ],
              part3Questions: [
                  'Do you think children should learn to play musical instruments?',
                  'How do artists acquire inspiration?',
                  'Do you think pictures and videos in news reports are important?',
                  'What can we do to help children keep creative?',
                  'How does drawing help to enhance children\'s creativity?',
                  'What kind of jobs require creativity?',
              ],
            },
            {
              id: 'p2-c1-family-business',
              title: '在家族企业工作的人',
              category: '人物题',
              categoryClass: 'person-card',
              status: 'New',
              part2Title: 'Describe a person you know who enjoys working for a family business (e.g. a shop, etc.)',
              part2Description: 'You should say:',
              part2Prompts: [
                  'Who he/she is',
                  'What the business is',
                  'What his/her job is',
                  'And explain why he/she enjoys working there',
              ],
              part3Questions: [
                  'Would you like to start a family business?',
                  'Would you like to work for a family business?',
                  'Why do some people choose to start their own company?',
                  'What are the advantages and disadvantages of family businesses?',
                  'What family businesses do you know in your local area?',
                  'What makes a successful family business?',
              ],
            },
            {
              id: 'p2-c-sportsperson',
              title: '钦佩的运动员',
              category: '人物题',
              categoryClass: 'person-card',
              status: 'New',
              part2Title: 'Describe a successful sportsperson you admire',
              part2Description: 'You should say:',
              part2Prompts: [
                  'Who he/she is',
                  'What you know about him/her',
                  'What he/she is like in real life',
                  'What achievement he/she has made',
                  'And explain why you admire him/her',
              ],
              part3Questions: [
                  'Should students have physical education and do sports at school?',
                  'What qualities should an athlete have?',
                  'Is talent important in sports?',
                  'Is it easy to identify children\'s talents?',
                  'What is the most popular sport in your country?',
                  'Why are there so few top athletes?',
              ],
            },
        ]
    },
    {
        id: 'box-topic-places',
        title: '话题: 地点题',
        cards: [
            {
              id: 'p2-c-natural-place',
              title: '自然之地',
              category: '地点题',
              categoryClass: 'place-card',
              status: 'New',
              part2Title: 'Describe a natural place (e.g. parks, mountains, etc.)',
              part2Description: 'You should say:',
              part2Prompts: [
                  'Where this place is',
                  'How you knew this place',
                  'What it is like',
                  'And explain why you like to visit it',
              ],
              part3Questions: [
                  'What kind of people like to visit natural places?',
                  'What are the differences between a natural place and a city?',
                  'Do you think going to the park is the only way to get close to nature?',
                  'What can people gain from going to natural places?',
                  'Are there any wild animals in the city?',
                  'Do you think it is a good idea to let animals stay in local parks for people to see?',
              ],
            },
        ]
    },
    {
        id: 'box-topic-events',
        title: '话题: 事件题',
        cards: [
            {
              id: 'p2-c-exciting-activity',
              title: '第一次尝试的兴奋活动',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe an exciting activity you have tried for the first time',
              part2Description: 'You should say:',
              part2Prompts: [
                  'What it is',
                  'When/where you did it',
                  'Why you thought it was exciting',
                  'And explain how you felt about it',
              ],
              part3Questions: [
                  'Why are some people unwilling to try new things?',
                  'Do you think fear stops people from trying new things?',
                  'Why are some people keen on doing dangerous activities?',
                  'Do you think that children adapt to new things more easily than adults?',
                  'What can people learn from doing dangerous activities?',
                  'What are the benefits of trying new things?',
              ],
            },
            {
              id: 'p2-c-daily-routine',
              title: '近期日常改变',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe a positive change that you have made recently in your daily routine',
              part2Description: 'You should say:',
              part2Prompts: [
                  'What the change is',
                  'How you have changed the routine',
                  'Why you think it is a positive change',
                  'And explain how you feel about the change',
              ],
              part3Questions: [
                  'What do people normally plan in their daily lives?',
                  'Is time management very important in our daily lives?',
                  'What changes would people often make?',
                  'Do you think it is good to change jobs frequently?',
                  'Who do you think would make changes more often, young people or old people?',
                  'Who should get more promotion opportunities in the workplace, young people or older people?',
              ],
            },
            {
              id: 'p2-c-unusual-meal',
              title: '不寻常的一餐',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe an unusual meal you had',
              part2Description: 'You should say:',
              part2Prompts: [
                  'When you had it',
                  'Where you had it',
                  'Whom you had it with',
                  'And explain why it was unusual',
              ],
              part3Questions: [
                  'What are the advantages and disadvantages of eating in restaurants?',
                  'What fast food restaurants are there in your country?',
                  'Do people eat fast food at home?',
                  'Why do some people choose to eat out instead of ordering takeout?',
                  'Do people in your country socialize in restaurants? Why?',
                  'Do people in your country value food culture?',
              ],
            },
            {
              id: 'p2-c-decision-help',
              title: '别人帮忙做的决定',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe an important decision made with the help of other people',
              part2Description: 'You should say:',
              part2Prompts: [
                  'What the decision was',
                  'Why you made the decision',
                  'Who helped you make the decision',
                  'And how you felt about it',
              ],
              part3Questions: [
                  'What kind of decisions do you think are meaningful?',
                  'What important decisions should be made by teenagers themselves?',
                  'Why are some people unwilling to make quick decisions?',
                  'Do people like to ask for advice more for their personal life or their work?',
                  'Why do some people like to ask others for advice?',
              ],
            },
            {
              id: 'p2-c-wait-special',
              title: '等待特别事情',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe a time when you waited for something special that would happen',
              part2Description: 'You should say:',
              part2Prompts: [
                  'What you waited for',
                  'Where you waited',
                  'Why it was special',
                  'And explain how you felt while you were waiting',
              ],
              part3Questions: [
                  'On what occasions do people usually need to wait?',
                  'Who behave better when waiting, children or adults?',
                  'Compared to the past, are people less patient now? Why?',
                  'What are the positive and negative effects of waiting on society?',
                  'Why are some people unwilling to wait?',
                  'Where do children learn to be patient, at home or at school?',
              ],
            },
            {
              id: 'p2-c-good-service',
              title: '购物服务',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe a time when you received good service in a shop/store',
              part2Description: 'You should say:',
              part2Prompts: [
                  'Where the shop is',
                  'When you went to the shop',
                  'What service you received from the staff',
                  'And explain how you felt about the service',
              ],
              part3Questions: [
                  'Why are shopping malls so popular in China?',
                  'What are the advantages and disadvantages of shopping in small shops?',
                  'Why do some people not like shopping in small shops?',
                  'What are the differences between online shopping and in-store shopping?',
                  'What are the advantages and disadvantages of shopping online?',
                  'Can consumption drive economic growth?',
              ],
            },
            {
              id: 'p2-c-foreign-language',
              title: '第一次用外语',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe the time when you first talked in a foreign language',
              part2Description: 'You should say:',
              part2Prompts: [
                  'Where you were',
                  'Who you were with',
                  'What you talked about',
                  'And explain how you felt about it',
              ],
              part3Questions: [
                  'At what age should children start learning a foreign language?',
                  'Which skill is more important, speaking or writing?',
                  'Does a person still need to learn other languages, if he or she is good at English?',
                  'Do you think minority languages will disappear?',
                  'Does learning a foreign language help in finding a job?',
                  'Which stage of life do you think is the best for learning a foreign language?',
              ],
            },
            {
              id: 'p2-c-social-media',
              title: '社交媒体趣事',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe a time you saw something interesting on social media',
              part2Description: 'You should say:',
              part2Prompts: [
                  'When it was',
                  'Where you saw it',
                  'What you saw',
                  'And explain why you think it was interesting',
              ],
              part3Questions: [
                  'Why do people like to use social media?',
                  'What kinds of things are popular on social media?',
                  'What are the advantages and disadvantages of using social media?',
                  'What do you think of making friends on social network?',
                  'Are there any people who shouldn\'t use social media?',
                  'Do you think people spend too much time on social media?',
              ],
            },
            {
              id: 'p2-c-broke-something',
              title: '弄坏东西',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe a time when you broke something',
              part2Description: 'You should say:',
              part2Prompts: [
                  'What it was',
                  'When/where that happened',
                  'How you broke it',
                  'And explain what you did after that',
              ],
              part3Questions: [
                  'What kind of things are more likely to be broken by people at home?',
                  'What kind of people like to fix things by themselves?',
                  'Do you think clothes produced in the factory are of better quality than those made by hand?',
                  'Do you think handmade clothes are more valuable?',
                  'Is the older generation better at fixing things?',
                  'Do you think elderly people should teach young people how to fix things?',
              ],
            },
            {
              id: 'p2-c-apology',
              title: '别人向你道歉',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe a time when someone apologized to you',
              part2Description: 'You should say:',
              part2Prompts: [
                  'When it was',
                  'Who this person is',
                  'Why he or she apologized to you',
                  'And how you felt about it',
              ],
              part3Questions: [
                  'Do you think people should apologize for anything wrong they do?',
                  'Do people in your country like to say "sorry"?',
                  'On what occasion do people usually apologize to others?',
                  'Why do some people refuse to say "sorry" to others?',
                  'Do you think every "sorry" is from the bottom of the heart?',
                  'Are women better than men at recognizing emotions?',
              ],
            },
            {
              id: 'p2-c-good-habit',
              title: '学习朋友好习惯',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe a good habit your friend has and you want to develop',
              part2Description: 'You should say:',
              part2Prompts: [
                  'Who your friend is',
                  'What habit he/she has',
                  'When you noticed this habit',
                  'And explain why you want to develop this habit',
              ],
              part3Questions: [
                  'What habits should children have?',
                  'What should parents do to teach their children good habits?',
                  'What influences do children with bad habits have on other children?',
                  'Why do some habits change when people get older?',
                  'How do we develop bad habits?',
                  'What can we do to get rid of bad habits?',
              ],
            },
            {
              id: 'p2-c-power-off',
              title: '突然停电',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe a time when the electricity suddenly went off',
              part2Description: 'You should say:',
              part2Prompts: [
                  'When/where it happened',
                  'How long it lasted',
                  'What you did during that time',
                  'And explain how you felt about it',
              ],
              part3Questions: [
                  'Which is better, electric bicycles or ordinary bicycles?',
                  'Do you think electric bicycles will replace ordinary bicycles in the future?',
                  'Which is better, electric cars or petrol cars?',
                  'How did people manage to live without electricity in the ancient world?',
                  'Is it difficult for the government to replace all the petrol cars with electric cars?',
                  'Do people use more electricity now than before?',
              ],
            },
            {
              id: 'p2-c-lost-way',
              title: '迷路',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe an occasion when you lost your way',
              part2Description: 'You should say:',
              part2Prompts: [
                  'Where you were',
                  'What happened',
                  'How you felt',
                  'And explain how you found your way',
              ],
              part3Questions: [
                  'Why do some people get lost more easily than others?',
                  'Do you think it is important to be able to read a map?',
                  'Do you think it is important to do some preparation before you travel to new places?',
                  'How can people find their way when they are lost?',
                  'Is a paper map still necessary?',
                  'How do people react when they get lost?',
              ],
            },
            {
              id: 'p2-c-dinner',
              title: '和亲友享受的晚餐',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe a great dinner you and your friends or family members enjoyed',
              part2Description: 'You should say:',
              part2Prompts: [
                  'What you had',
                  'Who you had the dinner with',
                  'What you talked about during the dinner',
                  'And explain why you enjoyed it',
              ],
              part3Questions: [
                  'Do people prefer to eat out at restaurants or eat at home during the Spring Festival?',
                  'What food do you eat on special occasions, like during the Spring Festival or the Mid-autumn Festival?',
                  'Why do people like to have meals together during important festivals?',
                  'Is it a hassle to prepare a meal at home?',
                  'What do people often talk about during meals?',
                  'People are spending less and less time having meals with their families these days. Is this good or bad?',
              ],
            },
            {
              id: 'p2-c-long-journey',
              title: '想再去一次的远行',
              category: '事件题',
              categoryClass: 'event-card',
              status: 'New',
              part2Title: 'Describe a long journey you had and would like to take again',
              part2Description: 'You should say:',
              part2Prompts: [
                  'When/where you went',
                  'Who you had the journey with',
                  'Why you had the journey',
                  'And explain why you would like to have it again',
              ],
              part3Questions: [
                  'Do you think it is a good choice to travel by plane?',
                  'What are the differences between group travelling and travelling alone?',
                  'What do we need to prepare for a long journey?',
                  'Why do some people prefer to travel in their own country?',
                  'Why do some people prefer to travel abroad?',
              ],
            },
        ]
    },
    {
        id: 'box-topic-objects',
        title: '话题: 事物题',
        cards: [
            {
              id: 'p2-c-science',
              title: '感兴趣的科学学科/领域',
              category: '事物题',
              categoryClass: 'object-card',
              status: 'New',
              part2Title: 'Describe an area/subject of science (biology, robotics, etc.) that you are interested in and would like to learn more about',
              part2Description: 'You should say:',
              part2Prompts: [
                  'Which area/subject it is',
                  'When and where you came to know this area/subject',
                  'How you get information about this area/subject',
                  'And explain why you are interested in this area/subject',
              ],
              part3Questions: [
                  'Why do some children not like learning science at school?',
                  'Is it important to study science at school?',
                  'Which science subject is the most important for children to learn?',
                  'Should people continue to study science after graduating from school?',
                  'How do you get to know about scientific news?',
                  'Should scientists explain the research process to the public?',
              ],
            },
            {
              id: 'p2-c-book',
              title: '有用的书',
              category: '事物题',
              categoryClass: 'object-card',
              status: 'New',
              part2Title: 'Describe a book you read that you found useful',
              part2Description: 'You should say:',
              part2Prompts: [
                  'What it is',
                  'When you read it',
                  'Why you think it is useful',
                  'And explain how you felt about it',
              ],
              part3Questions: [
                  'What are the types of books that young people like to read?',
                  'What should the government do to make libraries better?',
                  'Do you think old people spend more time reading than young people?',
                  'Which one is better, paper books or e-books?',
                  'Have libraries changed a lot with the development of the internet?',
                  'What should we do to prevent modern libraries from closing down?',
              ],
            },
            {
              id: 'p2-c-toy',
              title: '童年喜欢的玩具',
              category: '事物题',
              categoryClass: 'object-card',
              status: 'New',
              part2Title: 'Describe a toy you liked in your childhood',
              part2Description: 'You should say:',
              part2Prompts: [
                  'What kind of toy it is',
                  'When you received it',
                  'How you played it',
                  'And how you felt about it',
              ],
              part3Questions: [
                  'How do advertisements influence children?',
                  'Should advertising aimed at kids be prohibited?',
                  'What\'s the difference between the toys kids play now and those they played in the past?',
                  'Do you think parents should buy more toys for their kids or spend more time with them?',
                  'What\'s the difference between the toys boys play with and girls play with?',
                  'What are the advantages and disadvantages of modern toys?',
              ],
            },
            {
              id: 'p2-c-old-thing',
              title: '家中老物件',
              category: '事物题',
              categoryClass: 'object-card',
              status: 'New',
              part2Title: 'Describe an important old thing that your family has kept for a long time',
              part2Description: 'You should say:',
              part2Prompts: [
                  'What it is',
                  'How/when your family first got this thing',
                  'How long your family has kept it',
                  'And explain why this thing is important to your family',
              ],
              part3Questions: [
                  'What kind of old things do people in your country like to keep?',
                  'Why do people keep old things?',
                  'What are the differences between the things old people keep and those young people keep?',
                  'What are the differences between the things that people keep today and the things that people kept in the past?',
                  'What can we see in a museum?',
                  'What can we learn from a museum?',
              ],
            },
            {
              id: 'p2-c-wild-animal',
              title: '想多了解的野生动物',
              category: '事物题',
              categoryClass: 'object-card',
              status: 'New',
              part2Title: 'Describe a wild animal that you want to learn more about',
              part2Description: 'You should say:',
              part2Prompts: [
                  'What it is',
                  'When/where you saw it',
                  'Why you want to learn more about it',
                  'And explain what you want to learn more about it',
              ],
              part3Questions: [
                  'Why should we protect wild animals?',
                  'Why are some people more willing to protect wild animals than others?',
                  'Do you think it\'s important to take children to the zoo to see animals?',
                  'Why do some people attach more importance to protecting rare animals?',
                  'Should people educate children to protect wild animals?',
                  'Is it more important to protect wild animals or the environment?',
              ],
            },
            {
              id: 'p2-c-talent',
              title: '想提升的天赋',
              category: '事物题',
              categoryClass: 'object-card',
              status: 'New',
              part2Title: 'Describe a natural talent (sports, music, etc.) you want to improve',
              part2Description: 'You should say:',
              part2Prompts: [
                  'What it is',
                  'When you discovered it',
                  'How you want to improve it',
                  'And how you feel about it',
              ],
              part3Questions: [
                  'Do you think artists with talents should focus on their talents?',
                  'Is it possible for us to know whether children who are 3 or 4 years old will become musicians and painters when they grow up?',
                  'Why do people like to watch talent shows?',
                  'Do you think it is more interesting to watch famous people\'s or ordinary people\'s shows?',
                  'Do you think it\'s important to develop children\'s talents?',
                  'Why do some people like to show their talents online?',
              ],
            },
            {
              id: 'p2-c-traditional-story',
              title: '传统故事',
              category: '事物题',
              categoryClass: 'object-card',
              status: 'New',
              part2Title: 'Describe an interesting traditional story',
              part2Description: 'You should say:',
              part2Prompts: [
                  'What the story is about',
                  'When/how you knew it',
                  'Who told you the story',
                  'And explain how you felt when you first heard it',
              ],
              part3Questions: [
                  'What kind of stories do children like?',
                  'What are the benefits of bedtime stories for children?',
                  'Why do most children like listening to stories before bedtime?',
                  'What can children learn from stories?',
                  'Do all stories for children have happy endings?',
                  'Is a good storyline important for a movie?',
              ],
            },
        ]
    }
];
