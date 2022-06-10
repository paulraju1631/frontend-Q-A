import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

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
    const cardsList = [...this.fullCardsList];
    this.cardsToDisplay = cardsList.filter(
      (element) => element.category === this.selectedCategory
    );
  }
}
