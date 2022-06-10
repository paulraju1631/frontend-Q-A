import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public selectedCategory = '';
  constructor(private readonly common: CommonService) {}

  ngOnInit(): void {
    this.common.categoryValue.subscribe((value) => {
      this.selectedCategory = value;
    });
  }
}
