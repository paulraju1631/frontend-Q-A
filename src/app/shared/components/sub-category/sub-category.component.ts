import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../constants/category';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent implements OnInit {
  @Input() subCategoryList: string[] = [];
  // @Input() selectedCategory = '';
  constructor() {}

  ngOnInit(): void {
    
  }
}
