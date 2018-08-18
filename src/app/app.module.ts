import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
//router
import { AppRoutes } from './routes';
import { RouterModule } from '@angular/router';
//bootstrap 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
//social login 
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
//store
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './reducers/login';

//form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// http 
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { NotificationPageComponent } from './course-page/components/notification-page/notification-page.component';
import { ResourcesPageComponent } from './course-page/components/resources-page/resources-page.component';
import { CheckScoreComponent } from './course-page/components/check-score/check-score.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("286015728868194")
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NotFoundComponent,
    FooterComponent,
    HomeComponent,
    TeacherPageComponent,
    CoursePageComponent,
    NotificationPageComponent,
    ResourcesPageComponent,
    CheckScoreComponent,
    AboutPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    SocialLoginModule,
    StoreModule.forRoot({ islogin: loginReducer }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
