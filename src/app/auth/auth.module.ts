import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import {AuthRoutingModule} from './auth-routing.routing';
import {AuthComponent} from './auth.component';
import {AlertComponent} from './_directives/alert.component';
import {AuthGuard} from './_guards/auth.guard';
import {AlertService} from './_services/alert.service';
import {AuthenticationService} from './_services/authentication.service';
import {UserService} from './_services/user.service';
import {fakeBackendProvider} from './_helpers/index';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SharedModule } from 'primeng/primeng';
import { ErrorFeedbackComponent } from '../shared/components/error-feedback/error-feedback.component';

@NgModule({
  declarations: [
    AuthComponent,
    AlertComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    SignOutComponent,
    ErrorFeedbackComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AuthRoutingModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    // api backend simulation
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
  ],
  entryComponents: [AlertComponent],
})

export class AuthModule {
}