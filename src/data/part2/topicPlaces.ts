import { TopicData } from '../../types';

export const topicPlacesData: TopicData = {
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
};
