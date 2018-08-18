import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCreateComponent } from "./course-create/course-create.component";
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseComponent } from './course.component';
export const CourseRoutes: Routes = [
    { path: '', redirectTo: 'list' },
    { path: 'list', component: CourseListComponent },
    { path: 'create', component: CourseCreateComponent },
    { path: 'edit', component: CourseEditComponent },
    { path: ':id', component: CourseComponent }
]