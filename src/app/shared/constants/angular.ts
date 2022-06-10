import { Category } from './category';

export const AngularQuestions = [
  {
    question: 'This is my Angular Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my Angular Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my Angular Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my Angular Question',
    answer: 'This is my answer',
  },
].map((element) => ({
  ...element,
  isFlipped: false,
  category: Category[Category.Angular],
}));
