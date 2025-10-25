import { TopicData } from '../../types';

export const topicA_people: TopicData = {
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
                  score: '6.5',
                  answer: "Yes, absolutely. I have a very close friend named Li Mei who I've known for what feels like a lifetime. We actually met back in middle school, so we've been friends for well over a decade now. It's quite amazing when you think about it.",
                  analysis: [
                    { type: 'phrase', text: 'close friend', explanation: '比 "good friend" 更地道，表示关系亲密。' },
                    { type: 'phrase', text: 'for what feels like a lifetime', explanation: '一种夸张的说法，意思是“感觉像一辈子那么久了”，使语言更生动。' },
                    { type: 'phrase', text: 'well over a decade', explanation: '意思是“远超十年”，比 "more than ten years" 表达更精确、更流利。' }
                  ],
              }
            ]
          },
          {
            question: 'What do you usually do with your friends?',
            versions: [
                {
                    score: '6.5',
                    answer: "Well, our activities vary quite a bit. A typical get-together might involve grabbing a coffee and just catching up for a few hours. Other times, if we're feeling more active, we might go shopping downtown or catch the latest blockbuster at the cinema. It really depends on our mood.",
                    analysis: [
                      { type: 'phrase', text: 'vary quite a bit', explanation: '意思是“很不一样”，用来表示活动的多样性。' },
                      { type: 'phrase', text: 'catching up', explanation: '地道表达，意思是“聊聊近况”。' },
                      { type: 'phrase', text: 'latest blockbuster', explanation: '指“最新大片”，是更具体的词汇。' },
                    ],
                }
            ]
          },
          {
            question: 'Where do you often meet each other?',
            versions: [{
              score: '6.5',
              answer: "We don't have one specific spot, but we often end up at a cozy coffee shop near my place. It's got a really relaxed atmosphere, which is perfect for a good chat. Alternatively, if we're planning a full day out, we'll meet at the main shopping mall downtown. It's super convenient because everything is under one roof.",
              analysis: [
                  { type: 'vocab', text: 'cozy', explanation: '意为“舒适的，温馨的”，比 comfortable 更具画面感。'},
                  { type: 'vocab', text: 'Alternatively', explanation: '连接词，意思是“或者”，用于引出另一个选择，使回答更有条理。'},
                  { type: 'phrase', text: 'under one roof', explanation: '一个习语，意思是“在同一个地方”，形容商场的便利性。'}
              ]
            }]
          },
          { 
            question: 'How often do you go out with your friends?', 
            versions: [{ 
                score: '6.5', 
                answer: "I try to hang out with my friends at least once a week, usually on the weekend. However, life can get pretty hectic with work and studies, so realistically it's more like two or three times a month. We make sure to keep in touch via text messages when we're too busy to meet in person.",
                analysis: [
                  { type: 'phrase', text: 'hang out with', explanation: '非常口语化的表达，意思是“和...一起玩”。' },
                  { type: 'vocab', text: 'hectic', explanation: '意为“非常忙碌的”，比 busy 语气更强。' },
                  { type: 'vocab', text: 'realistically', explanation: '副词，意思是“实事求是地说”，使回答听起来更真诚。' },
                ]
            }] 
          },
          { 
            question: 'How important are friends to you?', 
            versions: [{ 
                score: '6.5', 
                answer: "Oh, they're incredibly important to me. I'd go as far as to say they're like my second family. They're the people I turn to for advice when I'm facing a problem, and they're also the first people I want to share good news with. Honestly, I can't imagine what my life would be like without them; it would be significantly less fun.",
                analysis: [
                  { type: 'vocab', text: 'incredibly', explanation: '副词，意为“难以置信地”，用来加强语气，比 very 更生动。' },
                  { type: 'phrase', text: 'go as far as to say', explanation: '意思是“我甚至可以说”，用于引出比较强烈的观点。' },
                  { type: 'phrase', text: 'turn to for advice', explanation: '意思是“向...寻求建议”。' },
                  { type: 'vocab', text: 'significantly', explanation: '副词，意为“显著地”，使表达更精确。' },
                ]
            }] 
          },
          { 
            question: 'Do you prefer to spend time with one friend or with a group of friends?', 
            versions: [{ 
                score: '6.5', 
                answer: "It really depends on the occasion. For a deep, meaningful conversation, I definitely prefer a one-on-one setting. But for celebrations like a birthday or just a fun night out, being in a larger group is much more lively and energetic. So I enjoy both for different reasons.",
                // FIX: Corrected a typo in the `type` property from `type:-` to `type:`.
                analysis: [
                  { type: 'phrase', text: 'depends on the occasion', explanation: '意思是“看情况”，比 "it depends" 更具体。' },
                  { type: 'phrase', text: 'one-on-one setting', explanation: '指“一对一的环境”。' },
                  { type: 'vocab', text: 'lively', explanation: '意为“活泼的，热闹的”，比 fun 更有描述性。' },
                ]
            }] 
          },
          { 
            question: 'Would you invite friends to your home?', 
            versions: [{ 
                score: '6.5', 
                answer: "Yes, definitely. I love having my close friends over. It's much more relaxed and private than going out. We can cook a meal together, watch a movie, or just lounge around and chat. It creates a different kind of bond when you share your personal space with someone.",
                analysis: [
                  { type: 'phrase', text: 'having my close friends over', explanation: '地道的说法，意思是“邀请好朋友来家里”。' },
                  { type: 'phrase', text: 'lounge around', explanation: '意思是“懒洋洋地待着，放松”，非常口语化。' },
                  { type: 'phrase', text: 'creates a different kind of bond', explanation: '“建立一种不同的联系”，表达了在家聚会的深层意义。' },
                ]
            }] 
          },
          { 
            question: 'Is there a difference between where you meet friends now and where you used to meet them in the past?', 
            versions: [{ 
                score: '6.5', 
                answer: "Yes, there's quite a noticeable difference. Back in our school days, our meeting spots were usually limited to places like the school playground or a local park, mainly because we didn't have much pocket money. Nowadays, since we are working professionals, we have more disposable income, so we tend to meet up in nicer cafes or try out new restaurants.",
                analysis: [
                  { type: 'phrase', text: 'noticeable difference', explanation: '意思是“明显的区别”。' },
                  { type: 'vocab', text: 'disposable income', explanation: '指“可支配收入”，是更专业和准确的词汇。' },
                  { type: 'phrase', text: 'tend to', explanation: '意思是“倾向于”，使表达更委婉和自然。' },
                ]
            }] 
          },
          { 
            question: 'Why are some places suitable for meeting while others are not?', 
            versions: [{ 
                score: '6.5', 
                answer: "Well, I think the suitability of a place depends on its atmosphere and purpose. Places like cafes are ideal for conversations because they offer a comfortable setting and are generally not too noisy. On the other hand, a place like a library is completely unsuitable for a chat because of the strict rules about silence. Similarly, a crowded train station isn't great either, as the constant noise and rush of people make it hard to focus on a conversation.",
                analysis: [
                  { type: 'vocab', text: 'suitability', explanation: '名词，意为“合适性”，使回答更具学术性。' },
                  { type: 'vocab', text: 'ideal', explanation: '意为“理想的”，比 good 更好。' },
                  { type: 'vocab', text: 'unsuitable', explanation: '“不合适的”，是 suitable 的反义词。' },
                ]
            }] 
          }
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
          { 
            question: 'Have you ever worked with old people?', 
            versions: [{ 
                score: '6.5', 
                answer: "Not in a professional capacity, no, as I'm still a student. My formal work experience is quite limited. However, I do spend a considerable amount of time with my grandparents, helping them with various household chores or navigating technology like their smartphones. So, in an informal sense, I suppose I have.",
                analysis: [
                  { type: 'phrase', text: 'professional capacity', explanation: '意思是“以职业身份”，使回答更精确。' },
                  { type: 'phrase', text: 'considerable amount of time', explanation: '意思是“相当多的时间”，比 "a lot of time" 更正式。' },
                  { type: 'phrase', text: 'navigating technology', explanation: '“操作科技产品”，一个现代且生动的表达。' },
                ]
            }] 
          },
          { 
            question: 'Are you happy to work with people who are older than you?', 
            versions: [{ 
                score: '6.5', 
                answer: "Yes, I'd be more than happy to. I believe working with older colleagues would be a valuable experience. They possess a wealth of knowledge from both their professional and personal lives that you simply can't learn from a textbook. Plus, they often have a calmer, more patient approach to things, which I think would make them excellent mentors.",
                analysis: [
                  { type: 'phrase', text: 'more than happy to', explanation: '意思是“非常乐意”，表达了强烈的积极态度。' },
                  { type: 'phrase', text: 'a wealth of knowledge', explanation: '意思是“丰富的知识”。' },
                  { type: 'vocab', text: 'mentors', explanation: '意为“导师”，一个很好的词来形容年长同事的角色。' },
                ]
            }] 
          },
          { 
            question: 'What are the benefits of being friends with or working with old people?', 
            versions: [{ 
                score: '6.5', 
                answer: "I think there are numerous advantages. Firstly, older individuals can offer incredible wisdom and practical advice based on their life experiences. Secondly, they're often fantastic storytellers; listening to their stories about the past is like getting a personal history lesson. On top of that, I find that their perspective on life can be very grounding.",
                analysis: [
                  { type: 'vocab', text: 'numerous', explanation: '意为“许多的”，比 many 更正式。' },
                  { type: 'phrase', text: 'offer incredible wisdom', explanation: '“提供不可思议的智慧”。' },
                  { type: 'vocab', text: 'grounding', explanation: '形容词，意思是“让人感觉踏实的，让人不浮躁的”，描述了老年人视角带来的好处。' },
                ]
            }] 
          },
          { 
            question: 'Do you enjoy spending time with old people?', 
            versions: [{ 
                score: '6.5', 
                answer: "I do, very much so. I particularly cherish the time I spend with my grandparents. It's usually very low-key; we might just chat over a cup of tea or watch some television together. It's a very peaceful and comforting experience, and it makes me feel very connected to my family roots.",
                analysis: [
                  { type: 'vocab', text: 'cherish', explanation: '动词，意为“珍惜”，比 enjoy 感情更深。' },
                  { type: 'vocab', text: 'low-key', explanation: '形容词，意为“低调的，不张扬的”，用来形容和祖父母在一起的平静时光。' },
                  { type: 'phrase', text: 'connected to my family roots', explanation: '“与我的家族根源相连”，一个富有诗意的表达，说明了与长辈相处的深层感受。' },
                ]
            }] 
          }
        ]
      },
    ]
};