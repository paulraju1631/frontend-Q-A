import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  public selectedCategory = 'JavaScript';
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
