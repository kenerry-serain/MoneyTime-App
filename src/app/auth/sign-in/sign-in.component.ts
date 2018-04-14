import {NgModule, OnInit, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import { Helpers } from '../../helpers';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { AuthenticationService } from '../_services/authentication.service';


declare let toastr: any;


@Component({
  selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})


export class SignInComponent implements OnInit {

  loading = false;
  loginForm: any = {};  
  
  constructor(
      private _router: Router,
      private _script: ScriptLoaderService,
      private _route: ActivatedRoute,
      private _authService: AuthenticationService) {
  }

  ngOnInit() {
    this.loginForm.remember = true;
    this._script.loadScripts('body', [
      'assets/vendors/base/vendors.bundle.js',
      'assets/demo/default/base/scripts.bundle.js'], true).then(() => {
      Helpers.setLoading(false);
    });
  }

  onSignIn() {
    this.loading = true;
    toastr.success('Login realizado com sucesso', 'Mensagem inteligente')
    this._authService.login(this.loginForm.email, this.loginForm.password).subscribe(
        data => {
          // this._router.navigate(['/index']);
        },
        error => {
          // this.showAlert('alertSignin');
          // this._alertService.error(error);
          this.loading = false;
        });
  }

  verifyFieldIntegrity(field){
    return !field.valid && field.touched;
  }
}
