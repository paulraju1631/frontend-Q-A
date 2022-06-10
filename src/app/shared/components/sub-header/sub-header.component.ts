import { Component, Input, OnInit } from '@angular/core';
import { Category, CategoryList } from '../../constants/category';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  @Input() subCategoryList: string[] = [];
  // @Input() selectedCategory = '';
  
  
  constructor(
    private readonly common: CommonService
  ) { }

  ngOnInit(): void {
    
  }
  
}
