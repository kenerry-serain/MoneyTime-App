import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { Helpers } from '../../helpers';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})

export class SignOutComponent implements OnInit {

	constructor(private _router: Router,
	            private _authService: AuthenticationService) {
	}

	ngOnInit(): void {
		Helpers.setLoading(true);
		// reset login status
		this._authService.logout();
		this._router.navigate(['/login']);
	}
}