import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { QuestionCardComponent } from './components/question-card/question-card.component';
import { HeaderComponent } from './components/header/header.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';

@NgModule({
  declarations: [
    QuestionCardComponent,
    HeaderComponent,
    SubHeaderComponent,
    SubCategoryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    QuestionCardComponent,
    HeaderComponent,
    SubHeaderComponent,
    SubCategoryComponent,
  ],
})
export class SharedModule {}
