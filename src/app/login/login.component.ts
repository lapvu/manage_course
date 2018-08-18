import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Router } from '@angular/router';
import { LOGINGED } from '../reducers/login';
import { SocialUser } from 'angularx-social-login';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: SocialUser;
  private islogin: Observable<boolean>;
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<Login>,
    private _LoginService: LoginService
  ) {
    this.islogin = this.store.select('islogin');
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      this._LoginService.checkUser(this.user).subscribe();
    })
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(() => {
      this._LoginService.checkUser(this.user).subscribe();
    });
  }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.user = user
        localStorage.setItem("curentUser", JSON.stringify(user));
        if (this.user) {
          this.store.dispatch({ type: LOGINGED });
          this.router.navigateByUrl("/admin");
        }
      }
    });
    localStorage.getItem("curentUser") ? this.router.navigateByUrl("/admin") : null;
  }
}
