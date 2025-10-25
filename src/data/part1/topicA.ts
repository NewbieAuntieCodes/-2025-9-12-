import { TopicData } from '../../types';

export const topicAData: TopicData = {
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
                score: '5',
                answer: `(Yes) Yes, I have a good friend. Her name is Li Mei. We met in middle school. We have known each other for a long time, more than ten years.
                <br/><br/>
                (No) No, not really. I have moved to different cities a few times. So, it is hard to keep old friends. I have some good friends now, but I have not known them for very long.`,
            }
          ]
        },
        {
          question: 'What do you usually do with your friends?',
          versions: [
              {
                  score: '5',
                  answer: "We do many things. We often go to a coffee shop to talk. Sometimes we go shopping or see a movie.",
              }
          ]
        },
        {
          question: 'Where do you often meet each other?',
          versions: [{
            score: '5',
            answer: "We usually meet at a coffee shop near my home. It is quiet and nice there. Sometimes we meet at a shopping mall. We can eat and shop there. It is easy. Where we meet depends on our plan.",
          }]
        },
        { question: 'How often do you go out with your friends?', versions: [{ score: '5', answer: "I try to meet my friends every week, like on a weekend. But sometimes we are all busy with work or school. So, we meet maybe two or three times a month. We talk on the phone if we cannot meet." }] },
        { question: 'How important are friends to you?', versions: [{ score: '5', answer: "Friends are very important to me. They are like my family. If I have a problem, I can talk to them. They give me good ideas. When I am happy, I tell them about it. Without friends, life is not interesting." }] },
        { question: 'Do you prefer to spend time with one friend or with a group of friends?', versions: [{ score: '5', answer: "I like both. It depends. If I want to talk about something serious, I like to meet just one friend. But for fun, like a party, I like a big group. It is more fun with more people." }] },
        {
          question: 'Would you invite friends to your home?',
          versions: [{
            score: '5',
            answer: `(Yes) Yes. I like to ask my good friends to come to my home. We can cook, watch TV, and relax. It is more comfortable at home. It is also private. My parents also like my friends.
            <br/><br/>
            (No) No, not usually. My home is quite small and far from the city center. It is not very convenient for my friends to come over. We usually prefer to meet somewhere outside, like a cafe.`
          }]
        },
        {
          question: 'Is there a difference between where you meet friends now and where you used to meet them in the past?',
          versions: [{
            score: '5',
            answer: `(Yes) Yes, it is very different. In the past, when I was a student, we met at school or in a park. We had no money. Now, I have a job, so I have money. We often meet in a restaurant or a coffee shop.
            <br/><br/>
            (No) No, not much difference. When I was young, I met my friends in parks or cafes. Now, we still meet in similar places. We like places where we can sit and talk for a long time.`
          }]
        },
        { question: 'Why are some places suitable for meeting while others are not?', versions: [{ score: '5', answer: "Some places are good for meeting friends. For example, a coffee shop is good because it is quiet and we can talk. A library is not good because you must be quiet. A crowded place is also not good, like a train station. It is hard to talk there." }] }
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
            score: '5',
            answer: `(Yes) Yes, I have. Last summer, I volunteered at a community center for old people. I helped them with activities and just talked with them. It was a good experience.
            <br/><br/>
            (No) No, I have not worked with old people in a job. I am a student. But I often help my grandparents at their home. I help them clean or use the computer. So, I have some experience.`
          }]
        },
        {
          question: 'Are you happy to work with people who are older than you?',
          versions: [{
            score: '5',
            answer: `(Yes) Yes, I would be happy. Old people have a lot of experience. I can learn many things from them. They are often patient. They can be good teachers for young people.
            <br/><br/>
            (Neutral) I have never thought about it. I think it depends on the person, not their age. If they are nice and easy to work with, I would be happy. Their age is not important to me.`
          }]
        },
        { question: 'What are the benefits of being friends with or working with old people?', versions: [{ score: '5', answer: "There are good things. They can give good ideas for problems. They also tell interesting stories about the past. This is like a history lesson. When I am with them, I feel calm." }] },
        {
          question: 'Do you enjoy spending time with old people?',
          versions: [{
            score: '5',
            answer: `(Yes) Yes, I like it. I like spending time with my grandparents. It is very relaxing. We usually talk, drink tea and watch TV. When I am with them, I feel very calm and happy.
            <br/><br/>
            (Neutral) Sometimes. I like listening to my grandparents' stories. But sometimes we have nothing to talk about because our interests are very different. So it depends on the situation.`
          }]
        }
      ]
    },
  ]
};