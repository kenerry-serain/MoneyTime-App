import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm: any= {};  
  constructor() { }

  ngOnInit() {
  }

  forgotPass() {
    // this.loading = true;
    // this._userService.forgotPassword(this.model.email).subscribe(
    //     data => {
    //       this.showAlert('alertSignin');
    //       this._alertService.success(
    //           'Cool! Password recovery instruction has been sent to your email.',
    //           true);
    //       this.loading = false;
    //       LoginCustom.displaySignInForm();
    //       this.model = {};
    //     },
    //     error => {
    //       this.showAlert('alertForgotPass');
    //       this._alertService.error(error);
    //       this.loading = false;
    //     });
  }

  verifyFieldIntegrity(field){
    return !field.valid && field.touched;
  }
}
