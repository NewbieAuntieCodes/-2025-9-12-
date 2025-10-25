import { AnswerVersion } from '../../../../types';

type AnswerContent = Omit<AnswerVersion, 'score'>;

export const score6_5Answers: { [question: string]: AnswerContent } = {
  'Do you have a friend you have known for a long time?': {
    answer: `(Yes) Definitely. I'm lucky enough to have a very close friend, Li Mei, whom I've known for what feels like a lifetime—over ten years, in fact. We first met back in middle school and we've been inseparable ever since. It's quite special to have a friendship that has lasted that long.
    <br/><br/>
    (No) Unfortunately, I don't. Due to moving cities several times throughout my life, I haven't been able to maintain those kinds of long-lasting friendships. While I cherish the friends I have now, I do sometimes wish I had a friend who has known me since I was a child.`,
  },
  'What do you usually do with your friends?': {
    answer: "Our activities are quite diverse, actually. A typical get-together might involve grabbing a coffee at our favorite local spot to catch up on each other's lives. However, we also enjoy more recreational activities, like going shopping for the latest trends or catching a blockbuster movie at the cinema. It really just depends on our mood.",
  },
};
