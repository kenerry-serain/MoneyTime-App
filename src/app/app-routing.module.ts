import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignOutComponent } from './auth/sign-out/sign-out.component';

const routes: Routes = [
{path: 'usuario', loadChildren: './auth/auth.module#AuthModule'},
{path: '', redirectTo: 'usuario/login', pathMatch: 'full'},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: true})],
	exports: [RouterModule]
})
export class AppRoutingModule { }