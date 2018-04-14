import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorFeedbackComponent } from './components/error-feedback/error-feedback.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ErrorFeedbackComponent
  ],
  declarations: [ErrorFeedbackComponent]
})
export class SharedModule { }
