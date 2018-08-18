import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
export const DashboardRoutes: Routes = [
    { path: '', redirectTo: "dashboard" },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfilePageComponent },
    { path: 'course', loadChildren: './components/course/course.module#CourseModule' }
]