import { Component, OnInit } from '@angular/core';
import { Category, CategoryList } from '../../constants/category';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public selectedCategory = Category[Category.JavaScript];
  public categoryList = CategoryList;
  constructor(private readonly common: CommonService) {}

  ngOnInit(): void {
    this.common.categoryValue.next(this.selectedCategory);
  }
  public categoryChanged(event: any): void {
    this.common.categoryValue.next(event.value);
  }
}
