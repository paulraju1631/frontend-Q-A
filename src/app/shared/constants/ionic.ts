import { Category } from './category';

export const IonicQuestions = [
  {
    question: 'This is my Ionic Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my Ionic Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my Ionic Question',
    answer: 'This is my answer',
  },
  {
    question: 'This is my Ionic Question',
    answer: 'This is my answer',
  },
].map((element) => ({
  ...element,
//   isFlipped: false,
  category: Category[Category.Ionic],
}));