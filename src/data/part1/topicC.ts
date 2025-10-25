import { TopicData } from '../../types';

export const topicCData: TopicData = {
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
          {
            question: 'Did your parents teach you to share when you were a child?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes. My parents told me to share. When I was a child, I shared my toys and food with my friends. It is a good thing to do.
              <br/><br/>
              (No) Not really. I was the only child. I had no brothers or sisters. I learned to share at school.`
            }]
          },
          { question: 'What kind of things do you like to share with others?', versions: [{ score: '5', answer: "I like to share food with my friends. I also share fun videos with them. Sharing is a good way to be close to friends." }] },
          { question: 'What kind of things are not suitable for sharing?', versions: [{ score: '5', answer: "I think we should not share personal things, like a toothbrush. It is not clean. We also should not share secrets. It is not right." }] },
          {
            question: 'Do you have anything to share with others recently?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes. I read a good book last week. I told my best friend about it. She liked the story.
              <br/><br/>
              (No) No. I am very busy with my work these days. I have no new things to share.`
            }]
          },
          { question: 'Who is the first person you would like to share good news with?', versions: [{ score: '5', answer: "I tell my best friend first. She is always happy for me. I call her when I have good news." }] },
          { question: 'Do you prefer to share news with your friends or your parents?', versions: [{ score: '5', answer: "It depends. For small news, I tell my friends. For big news, like finding a job, I tell my parents. They can give me good advice." }] }
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
          {
            question: 'Have you borrowed books from others?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes, I have. I often borrow books from the library. Sometimes I borrow books from my friends. It saves money.
              <br/><br/>
              (No) No, I like to buy my own books. I can write notes in them. I sometimes read e-books online.`
            }]
          },
          {
            question: 'Have you ever borrowed money from others?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes, a few times. Sometimes I forget my wallet, so I borrow a little money from my friend for lunch. I always pay back on the same day.
              <br/><br/>
              (No) No, I have never borrowed money. I am careful with my money. I always have enough money with me.`
            }]
          },
          {
            question: 'Do you like to lend things to others?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes, I like to lend things to my close friends. I trust them. For example, I can lend them a book or my charger. It is okay.
              <br/><br/>
              (No) No, not really. I worry people will not be careful with my things. They might lose them or break them. So I don't like to lend my things.`
            }]
          },
          { question: 'How do you feel when people don\'t return things they borrowed from you?', versions: [{ score: '5', answer: "I feel a bit angry. I think people should return things. It is about being responsible. I will ask them one time to give it back." }] },
          {
            question: 'Do you mind if others borrow money from you?',
            versions: [{
              score: '5',
              answer: `(No, I don't mind) If it is a small amount of money, I don't mind lending it to my close friends. I am happy to help them.
              <br/><br/>
              (Yes, I do mind) Yes. I think lending money can make friendship difficult. I don't like to mix money and friends.`
            }]
          }
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
          {
            question: 'Do you like chatting with friends?',
            versions: [{
              score: '5',
              answer: `(Yes) Yes, I like chatting with my friends very much. It is relaxing. Talking to them makes me happy.
              <br/><br/>
              (No) Not so much. I am a quiet person. I like to do things with my friends, like watch a movie. I don't like to just sit and talk for a long time.`
            }]
          },
          { question: 'What do you usually chat about with friends?', versions: [{ score: '5', answer: "We talk about many things. We talk about our life, our work, and our school. We also talk about movies and music." }] },
          { question: 'Do you prefer to chat with a group of people or with only one friend?', versions: [{ score: '5', answer: "Both are okay. With one friend, we can talk about serious things. With a group of friends, it is more fun and we laugh a lot." }] },
          {
            question: 'Do you prefer to communicate face-to-face or via social media?',
            versions: [{
              score: '5',
              answer: `(Face-to-face) I like to talk face-to-face. I can see their face. It feels more real. But social media is good for quick chats.
              <br/><br/>
              (Social Media) I prefer social media. It is easy. I can think before I write. I am a bit shy, so online chat is easier for me.`
            }]
          },
          {
            question: 'Do you argue with friends?',
            versions: [{
              score: '5',
              answer: `(No) No, we don't argue. Sometimes we don't agree, but we talk about it. We respect each other.
              <br/><br/>
              (Yes) Yes, but not often. We argue about small things, like where to eat. It is not serious. We are still good friends.`
            }]
          }
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
              score: '5',
              answer: "When I study, I take a short break every hour. On weekends, I take a long rest. Breaks are very important.",
          }]
        },
        {
          question: 'What do you usually do when you are resting?',
          versions: [{
              score: '5',
              answer: 'During my short breaks, I walk or listen to music. On long breaks, I watch a movie or read a book. It helps me relax.',
          }]
        },
        {
          question: 'Do you take a nap when you are taking your rest?',
          versions: [{
              score: '5',
              answer: `(Yes) Yes, I like to take a nap. After lunch, I sleep for about 20 minutes. It gives me energy for the afternoon.
              <br/><br/>
              (No) No, I don't. If I sleep in the day, I feel more tired when I wake up. I just sit quietly to rest.`,
          }]
        },
        {
          question: 'How do you feel after taking a nap?',
          versions: [{
              score: '5',
              answer: 'After a short nap, I feel refreshed and can focus better. But if I sleep too long, I feel a little dizzy.',
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
          versions: [{
            score: '5',
            answer: `(Yes) Yes, I am. I think it is nice to eat food you grow yourself. I live in an apartment, but I grow some small plants on my balcony.
            <br/><br/>
            (No) No, not really. It is hard work. I am busy. I like to buy vegetables from the market. It is easier.`
          }]
        },
        {
          question: 'Is growing vegetables popular in your country?',
          versions: [{
            score: '5',
            answer: `(Yes) Yes, for old people. Many old people in the countryside have gardens. Some young people also like it as a hobby.
            <br/><br/>
            (No) No, not very popular. Most people live in cities. They have no space for gardens. They are too busy.`
          }]
        },
        {
          question: 'Do many people grow vegetables in your city?',
          versions: [{
              score: '5',
              answer: `(Yes) Yes, some people do. They use their balconies to grow vegetables in pots. There are also some community gardens in my city.
              <br/><br/>
              (No) No, not many. Most people live in tall buildings. There is not enough space. So it is not common.`,
          }]
        },
        {
          question: 'Do you think it\'s easy to grow vegetables?',
          versions: [{
            score: '5',
            answer: `(Yes) I think some vegetables are easy, like tomatoes. They just need sun and water. You don't need to be an expert.
            <br/><br/>
            (No) No, I think it is difficult. You need to know how much water and sun they need. You must be patient.`
          }]
        },
        {
          question: 'Should schools teach students how to grow vegetables?',
          versions: [{
              score: '5',
              answer: `(Yes) Yes, I think it is a good idea. It is a good lesson. Children can learn where food comes from. It also teaches them to be responsible.
              <br/><br/>
              (No) No, I don't think so. Schools have other important subjects, like math. Students can learn to grow vegetables from their parents if they want.`,
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
          versions: [{
            score: '5',
            answer: `(Yes) Yes, I do. I usually put a small snack, like an apple, in my bag. I get hungry easily, so it's good to have food with me.
            <br/><br/>
            (No) No. If I go out for a short time, I don't bring food. It is easy to buy food outside.`
          }]
        },
        {
          question: 'Do you always take your mobile phone with you when going out?',
          versions: [{
              score: '5',
              answer: `(Yes) Yes, always. I never leave home without my phone. I use it to call people, pay for things, and find my way. It is very important.
              <br/><br/>
              (No) Almost always. But if I just go for a short walk nearby, I sometimes leave it at home. It is nice to be without a phone for a short time.`,
          }]
        },
        {
          question: 'Do you often bring cash with you?',
          versions: [{
            score: '5',
            answer: `(Yes) Yes, I always have some cash. Many places use mobile pay, but some small shops only take cash. It is good to be ready.
            <br/><br/>
            (No) No, not often. I use my phone to pay for everything. It is very easy. I only keep a little cash for an emergency.`
          }]
        },
        {
          question: 'How often do you use cash?',
          versions: [{ score: '5', answer: "Not often. Maybe once a month. I only use cash at some very small street food places. For all other things, I use my phone." }]
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
              score: '5',
              answer: `(Yes) Yes. In university, I gave a presentation. I was nervous, but I prepared a lot. It went well and I got a good grade. I felt very happy and proud.
              <br/><br/>
              (No) It is hard to say. I try to do my best, but I always feel I can do better. So I don't have a special memory.`,
          }]
        },
        {
          question: 'Do you have an experience when your teacher thought you did a good job?',
          versions: [{
            score: '5',
            answer: `(Yes) Yes. In my high school English class, I wrote a story. My teacher liked it very much. She read it to the class. I felt very proud.
            <br/><br/>
            (No) I can't remember. My teachers were good, but they did not often praise one student. They usually gave feedback to the whole class.`
          }]
        },
        {
          question: 'Do you often tell your friends when they do something well?',
          versions: [{
              score: '5',
              answer: `(Yes) Yes, I do. I think it is important to encourage friends. If my friend does something well, I will tell them. It makes them happy.
              <br/><br/>
              (No) No, not often. I am a bit shy to say nice things. But I show my support by helping them.`,
          }]
        }
      ]
    },
  ]
};