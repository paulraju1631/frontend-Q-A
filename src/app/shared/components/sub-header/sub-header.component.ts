import { Component, OnInit } from '@angular/core';
import { Category, CategoryList } from '../../constants/category';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  public selectedCategory = Category[1];
  public categoryList = CategoryList;
  constructor(
    private readonly common: CommonService
  ) { }

  ngOnInit(): void {
    this.common.categoryValue.next(this.selectedCategory);
  }
  public categoryChanged(event: any): void {
    this.common.categoryValue.next(event.value);
  }
}
