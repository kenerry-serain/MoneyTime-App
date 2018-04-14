import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare let toastr: any;

@Component({
  selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements AfterViewInit {

  loading = false;
  signUpForm: any = {};

  constructor(  
    private _userService: UserService,
    private _script: ScriptLoaderService) {
    }

    ngOnInit(){
      console.log('init ')
        
    this._script.loadScripts('body', 
    ['assets/vendors/base/vendors.bundle.js','assets/demo/default/base/scripts.bundle.js'], false);
    }
  ngAfterViewInit()  {
    // console.log('init')
    
    // this._script.loadScripts('body', 
    // ['assets/vendors/base/vendors.bundle.js','assets/demo/default/base/scripts.bundle.js'], true);
    }

  signup() {
    this.loading = true;
    this._userService.create(this.signUpForm).subscribe(
        data => {
          // this.showAlert('alertSignin');
          // this._alertService.success(
          //     'Thank you. To complete your registration please check your email.',
          //     true);
          this.loading = false;
          // LoginCustom.displaySignInForm();
          this.signUpForm = {};
        },
        error => {
          // this.showAlert('alertSignup');
          // this._alertService.error(error);
          this.loading = false;
        });
  }

  onSignUp(){
    toastr.success('Registro realizado com sucesso', 'Mensagem inteligente');
  }

  verifyFieldIntegrity(field){
    return !field.valid && field.touched;
  }
}
