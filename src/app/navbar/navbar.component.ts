import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { LOGINGED, LOGOUT } from '../reducers/login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private user: SocialUser;
  private islogin: Observable<boolean>;
  constructor(private authService: AuthService, private store: Store<Login>, private router: Router) {
    this.islogin = store.select('islogin')
  }
  signOut(): void {
    this.authService.signOut().then(() => {
      localStorage.removeItem("curentUser");
      this.store.dispatch({ type: LOGOUT });
      this.router.navigate(["/login"])
    });
  }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        this.store.dispatch({ type: LOGINGED });
      } else {
        if (localStorage.getItem("curentUser")) {
          this.user = JSON.parse(localStorage.getItem("curentUser"));
          this.store.dispatch({ type: LOGINGED });
        }
      }
    });
  }
}
