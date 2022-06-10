import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../constants/category';
import {
  AdditionalCategory,
  CommonSubCategory,
} from '../../constants/subcategory';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent implements OnInit {
  public subCategoryList: string[] = [];
  public selectedCategory = '';
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
