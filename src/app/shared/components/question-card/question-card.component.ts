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
import {
  JavaScriptOutputQuestions,
  JavaScriptQuestions,
} from '../../constants/javascript';
import { ReactQuestions } from '../../constants/react';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit, OnChanges {
  @Input() isAccordion = true;
  @Input() isCard = false;
  @Input() subCategory = '';

  public selectedCategory = '';
  public cardsToDisplay: any[] = [];
  public accordionsToDisplay: any[] = [];
  public panelOpenState = false;
  constructor(private readonly common: CommonService) {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.common.categoryValue.subscribe((value) => {
      this.selectedCategory = value;
      this.filterQuestionsList();
    });
  }
  // public cardClicked(cardItem: any): void {
  //   cardItem.isFlipped = !cardItem.isFlipped;
  // }
  public filterQuestionsList(): void {
    switch (this.selectedCategory) {
      case Category[Category.JavaScript]: {
        this.cardsToDisplay = JavaScriptOutputQuestions;
        this.accordionsToDisplay =
          this.fetchQuestionsForSubCategory(JavaScriptQuestions);
        break;
      }
      case Category[Category.Angular]: {
        this.accordionsToDisplay =
          this.fetchQuestionsForSubCategory(AngularQuestions);
        break;
      }
      case Category[Category.HTML]: {
        this.accordionsToDisplay =
          this.fetchQuestionsForSubCategory(HTMLQuestions);
        break;
      }
      case Category[Category.CSS]: {
        this.accordionsToDisplay =
          this.fetchQuestionsForSubCategory(CSSQuestions);
        break;
      }
      case Category[Category.Ionic]: {
        this.accordionsToDisplay =
          this.fetchQuestionsForSubCategory(IonicQuestions);
        break;
      }
      case Category[Category.React]: {
        this.accordionsToDisplay =
          this.fetchQuestionsForSubCategory(ReactQuestions);
        break;
      }
    }
  }
  private fetchQuestionsForSubCategory(arrayList: any[]): any[] {
    return arrayList.filter(
      (element: any) => element.type === this.subCategory
    );
  }
  public panelOpened(): void {
    this.panelOpenState = true;
  }
  public panelClosed(): void {
    this.panelOpenState = false;
  }
  public cardClicked(cardItem: any): void {
    cardItem.isFlipped = !cardItem.isFlipped;
  }
}
