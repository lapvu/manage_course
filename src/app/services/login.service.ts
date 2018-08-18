import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocialUser } from 'angularx-social-login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  public checkUser(user: SocialUser) {
    return this.http.post("/api/check-user.php", user, {responseType: 'text' })
  }
}
