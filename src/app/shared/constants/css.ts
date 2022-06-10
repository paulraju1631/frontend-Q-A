import { Category } from './category';

export const CSSQuestions = [
  {
    question: 'This is my CSS Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my CSS Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my CSS Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my CSS Question',
    answer: 'This is my answer',
  },
].map((element) => ({
  ...element,
  isFlipped: false,
  category: Category[Category.CSS],
}));