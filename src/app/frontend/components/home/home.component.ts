import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/constants/category';
import {
  AdditionalCategory,
  CommonSubCategory,
} from 'src/app/shared/constants/subcategory';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public selectedCategory = '';
  public subCategoryList: string[] = [];
  constructor(private readonly common: CommonService) {}

  ngOnInit(): void {
    this.common.categoryValue.subscribe((value) => {
      this.selectedCategory = value;
      this.checkForSubCategory();
    });
  }
  private checkForSubCategory(): void {
    if (this.selectedCategory === Category[Category.JavaScript]) {
      this.subCategoryList = [
        ...CommonSubCategory,
        ...AdditionalCategory.JavaScript,
      ];
    } else {
      this.subCategoryList = [...CommonSubCategory];
    }
  }
}
