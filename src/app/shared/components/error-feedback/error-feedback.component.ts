import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error-feedback',
  templateUrl: './error-feedback.component.html',
  styleUrls: ['./error-feedback.component.scss']
})
export class ErrorFeedbackComponent {

  @Input() showError: boolean;
  @Input() messageError: string;
  
  constructor() { }

}
