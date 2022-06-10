import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AngularQuestions } from '../../constants/angular';
import { Category } from '../../constants/category';
import { CSSQuestions } from '../../constants/css';
import { HTMLQuestions } from '../../constants/html';
import { IonicQuestions } from '../../constants/ionic';
import { JavaScriptQuestions } from '../../constants/javascript';
import { ReactQuestions } from '../../constants/react';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit, OnChanges {
  @Input() selectedCategory = '';
  public fullCardsList: any[] = [
    {
      question: 'This is my React Question',
      answer: 'This is my answer',
      isFlipped: false,
      category: 'React',
    },
    {
      question: 'This is my HTML Question',
      answer: 'This is my answer',
      isFlipped: false,
      category: 'HTML',
    },
    {
      question: 'This is my CSS Question',
      answer: 'This is my answer',
      isFlipped: false,
      category: 'CSS',
    },
    {
      question: 'This is my JavaScript Question',
      answer: 'This is my answer',
      isFlipped: false,
      category: 'JavaScript',
    },
    {
      question: 'This is my Ionic Question',
      answer: 'This is my answer',
      isFlipped: false,
      category: 'Ionic',
    },
    {
      question: 'This is my Angular Question',
      answer: 'This is my answer',
      isFlipped: false,
      category: 'Angular',
    },
  ];
  public cardsToDisplay: any[] = [];
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedCategory) {
      this.filterQuestionsList();
    }
  }
  ngOnInit(): void {}
  public cardClicked(cardItem: any): void {
    cardItem.isFlipped = !cardItem.isFlipped;
  }
  public filterQuestionsList(): void {
    switch (this.selectedCategory) {
      case Category[Category.JavaScript]: {
        this.cardsToDisplay = JavaScriptQuestions;
        break;
      }
      case Category[Category.Angular]: {
        this.cardsToDisplay = AngularQuestions;
        break;
      }
      case Category[Category.HTML]: {
        this.cardsToDisplay = HTMLQuestions;
        break;
      }
      case Category[Category.CSS]: {
        this.cardsToDisplay = CSSQuestions;
        break;
      }
      case Category[Category.Ionic]: {
        this.cardsToDisplay = IonicQuestions;
        break;
      }
      case Category[Category.React]: {
        this.cardsToDisplay = ReactQuestions;
        break;
      }
    }
    // const cardsList = [...this.fullCardsList];
    // this.cardsToDisplay = cardsList.filter(
    //   (element) => element.category === this.selectedCategory
    // );
  }
}
