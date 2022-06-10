import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {
  public cardsList = [
    {
      question: 'This is my Question',
      answer: 'This is my answer',
      isFlipped: false
    },
    {
      question: 'This is my Question',
      answer: 'This is my answer',
      isFlipped: false
    },
    {
      question: 'This is my Question',
      answer: 'This is my answer',
      isFlipped: false
    },
    {
      question: 'This is my Question',
      answer: 'This is my answer',
      isFlipped: false
    },
    {
      question: 'This is my Question',
      answer: 'This is my answer',
      isFlipped: false
    },
    {
      question: 'This is my Question',
      answer: 'This is my answer',
      isFlipped: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public cardClicked(cardItem: any): void {
    cardItem.isFlipped = !cardItem.isFlipped;
  }
}
