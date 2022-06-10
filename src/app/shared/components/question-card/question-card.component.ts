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

  public cardsToDisplay: any[] = [];
  public panelOpenState = false;
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
  }
  public panelOpened(): void {
    this.panelOpenState = true;
  }
  public panelClosed(): void {
    this.panelOpenState = false;
  }
}
