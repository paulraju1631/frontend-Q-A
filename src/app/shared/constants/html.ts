import { Category } from './category';

export const HTMLQuestions = [
  {
    question: 'This is my HTML Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my HTML Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my HTML Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my HTML Question',
    answer: 'This is my answer',
  },
].map((element) => ({
  ...element,
  isFlipped: false,
  category: Category[Category.HTML],
}));
