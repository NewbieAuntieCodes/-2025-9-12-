import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score6_0Answers: { [question: string]: AnswerContent } = {
  'Do you have a friend you have known for a long time?': {
    answer: `(Yes) Yes, of course. I have a really good friend named Li Mei, and we've known each other since we were in middle school. That means we've been friends for more than 10 years. We've shared a lot of memories together and have always been there for each other.
    <br/><br/>
    (No) To be honest, not really. My family relocated several times when I was younger, which made it challenging to keep in touch with old friends. I've made some wonderful friends where I live now, but I haven't known them for a very long time.`,
  },
  'What do you usually do with your friends?': {
    answer: "It depends on our mood, really. We often just meet up at a café to chat and catch up on things. Other times, if we feel more energetic, we might decide to go shopping together or see a new film that's just been released.",
  },
};
