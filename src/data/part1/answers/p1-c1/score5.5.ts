import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score5_5Answers: { [question: string]: AnswerContent } = {
  'Do you have a friend you have known for a long time?': {
    answer: `(Yes) Absolutely. My best friend is someone I've known since middle school, so we've been friends for over a decade now. Her name is Li Mei. We've gone through a lot together.
    <br/><br/>
    (No) Not really. Because my family moved a couple of times, it's been difficult to maintain long-term friendships. I have some great friends at the moment, but our relationships are relatively new.`,
  },
  'What do you usually do with your friends?': {
    answer: "Well, it varies. Most of the time, we enjoy just hanging out at a cozy coffee shop and chatting for hours. If we're looking for something more active, we might go shopping downtown or catch the latest movie.",
  },
};
