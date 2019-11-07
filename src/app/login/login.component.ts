import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMsg: boolean = false;

  constructor(public authService: AuthService, public router: Router) { }

  login(email: HTMLInputElement, password: HTMLInputElement) {
    this.authService.login(email.value, password.value).then(ref => {
      let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/chatpage';
      this.router.navigateByUrl(redirect);
      this.authService.setLoggedIn();
      this.errorMsg = false;
    }).catch((error) => {
      this.errorMsg = true;
    });
  }


}
