import { Category } from './category';

export const JavaScriptQuestions = [
  {
    question: 'This is my JavaScript Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my JavaScript Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my JavaScript Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my JavaScript Question',
    answer: 'This is my answer',
  },
].map((element) => ({
  ...element,
  isFlipped: false,
  category: Category[Category.JavaScript],
}));
