import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';

@NgModule({
  declarations: [QuestionCardComponent, HeaderComponent, SubHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
    QuestionCardComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    HeaderComponent,
    SubHeaderComponent,
  ],
})
export class SharedModule {}
