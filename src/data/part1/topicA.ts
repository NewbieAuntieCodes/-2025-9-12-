import { TopicData } from '../../types';
import { p1c1SampleAnswers } from './answers/p1-c1';

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
      sampleAnswers: p1c1SampleAnswers
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
            score: '5.0',
            answer: `Yes, I have. Last summer, I volunteered at a community center for old people. I helped them with activities and just talked with them. It was a good experience.
            <br/><br/>
            No, I have not worked with old people in a job. I am a student. But I often help my grandparents at their home. I help them clean or use the computer. So, I have some experience.`
          }]
        },
        {
          question: 'Are you happy to work with people who are older than you?',
          versions: [{
            score: '5.0',
            answer: `Yes, I would be happy. Old people have a lot of experience. I can learn many things from them. They are often patient. They can be good teachers for young people.
            <br/><br/>
            I have never thought about it. I think it depends on the person, not their age. If they are nice and easy to work with, I would be happy. Their age is not important to me.`
          }]
        },
        { question: 'What are the benefits of being friends with or working with old people?', versions: [{ score: '5.0', answer: "There are good things. They can give good ideas for problems. They also tell interesting stories about the past. This is like a history lesson. When I am with them, I feel calm." }] },
        {
          question: 'Do you enjoy spending time with old people?',
          versions: [{
            score: '5.0',
            answer: `Yes, I like it. I like spending time with my grandparents. It is very relaxing. We usually talk, drink tea and watch TV. When I am with them, I feel very calm and happy.
            <br/><br/>
            Sometimes. I like listening to my grandparents' stories. But sometimes we have nothing to talk about because our interests are very different. So it depends on the situation.`
          }]
        }
      ]
    },
  ]
};