import { TopicData } from '../../types';

export const topicBData: TopicData = {
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
          {
            question: 'Do you think museums are important?',
            versions: [{
              score: '5',
              answer: `Yes, I think museums are important. We can learn about history and art there. They show us old things. This helps us know about the past.
              <br/><br/>
              No, I don't think they are very important for everyone. For me, they are a bit boring. I prefer to learn about history from books or movies. It is more interesting.`
            }]
          },
          {
            question: 'Are there many museums in your hometown?',
            versions: [{
              score: '5',
              answer: `Yes, there are quite a few museums in my city. We have a big history museum, an art museum, and even a science museum. My city is a big one, so it has many places like these.
              <br/><br/>
              My hometown is small, so there are not many museums. We have one museum about our city's history. Big cities like Beijing have more museums.`
            }]
          },
          {
            question: 'Do you often visit a museum?',
            versions: [{
              score: '5',
              answer: `Yes, I do. I am very interested in art, so I go to the art museum about once a month. They often have new exhibitions, so there is always something new to see.
              <br/><br/>
              I don't go to museums often. Maybe one or two times a year. I am busy with school. But I like it. I go with my family or friends. We can talk about the things we see.`
            }]
          },
          { question: 'When was the last time you visited a museum?', versions: [{ score: '5', answer: "The last time was six months ago. I went to a history museum with my classmates. It was for school. We saw many old things and photos. It was interesting." }] }
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
          {
            question: 'Is the city where you live crowded?',
            versions: [{
              score: '5',
              answer: `Yes, my city is crowded. The center of the city is very crowded. There are many people and cars. It is always busy because it is a big city.
              <br/><br/>
              No, not really. I live in a small town. It is usually very quiet. There are not many people on the streets, even in the center. It is a very peaceful place to live.`
            }]
          },
          {
            question: 'Is there a crowded place near where you live?',
            versions: [{
              score: '5',
              answer: `Yes, there is a shopping mall near my home. It is very crowded on weekends. Many people go there. It has many shops and restaurants.
              <br/><br/>
              No, not really. My neighborhood is a quiet residential area. There are no big shopping malls or busy markets. The nearest crowded place is the city center, which is about 30 minutes by bus.`
            }]
          },
          {
            question: 'Do you like crowded places?',
            versions: [{
              score: '5',
              answer: `Yes, sometimes I do. I like the energy of crowded places like a market or a concert. It makes me feel excited. It's fun to see so many people having a good time together.
              <br/><br/>
              No, I don't like crowded places. They are too noisy for me. I don't like the subway when it is full of people. I like quiet places. I can relax in quiet places.`
            }]
          },
          {
            question: 'Do most people like crowded places?',
            versions: [{
              score: '5',
              answer: `I think many young people like them. They can go shopping or eat food in crowded places. These places are fun and not boring.
              <br/><br/>
              I don't think so. I think it depends on the person's age and personality. Many older people prefer quiet places. And some people, like me, just feel stressed in a crowd.`
            }]
          },
          { question: 'When was the last time you were in a crowded place?', versions: [{ score: '5', answer: "Last weekend, I went to a shopping mall. It was very crowded. I went there to buy a gift for my friend. It was hard to walk because there were so many people." }] }
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
          {
            question: 'Have you ever talked with someone you don\'t know in public places?',
            versions: [{
              score: '5',
              answer: `Yes, sometimes. For example, if I am waiting in a line, I might start a small conversation with the person next to me about the weather. It's a nice way to pass the time.
              <br/><br/>
              No, not often. I am a little shy. I don't talk to people I don't know. Sometimes people ask me the way. I help them. But we don't talk for a long time.`
            }]
          },
          {
            question: 'Do you wear headphones in public places?',
            versions: [{
              score: '5',
              answer: `Yes, I wear headphones on the bus. I listen to music. It is relaxing. It makes the bus ride better. I don't hear the noise outside.
              <br/><br/>
              No, I usually don't. I like to be aware of my surroundings. I like to hear the sounds of the city. Also, I think it's safer not to wear headphones when I am walking on the street.`
            }]
          },
          {
            question: 'Would you like to see more public places near where you live?',
            versions: [{
              score: '5',
              answer: `Yes, I want more parks near my home. A park is a good place to relax or walk. Now, the park is far from my house.
              <br/><br/>
              No, I think there are enough public places. We have a small park and a library nearby. My neighborhood is not very big, so I think what we have now is good enough for the residents.`
            }]
          },
          {
            question: 'Do you often go to public places with your friends?',
            versions: [{
              score: '5',
              answer: `Yes. I meet my friends in public places. We go to cafes or shopping malls. These places are easy to go to. In summer, we go to the park.
              <br/><br/>
              No, not very often. My friends and I prefer to go to each other's homes. It's more comfortable and private. We can cook together or watch a movie without being disturbed.`
            }]
          }
      ]
    },
  ]
};