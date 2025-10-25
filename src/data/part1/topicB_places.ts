import { TopicData } from '../../types';

export const topicB_places: TopicData = {
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
            { question: 'Do you like crowded places?', versions: [{ score: '5.5', answer: "To be honest, I don't really like crowded places. I find them a bit overwhelming and noisy. For example, being in a crowded subway during rush hour can be very stressful. I much prefer quiet and calm places where I can relax." }] },
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
};
