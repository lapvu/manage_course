import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuardService] },
    { path: 'teacher/:id', component: TeacherPageComponent },
    { path: 'course/:id', component: CoursePageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: '**', component: NotFoundComponent }
]