import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { RouterModule } from '@angular/router';
import { CourseRoutes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './course.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentCreateComponent } from './course-actions/student-create/student-create.component';
import { NotificationCreateComponent } from './course-actions/notification-create/notification-create.component';
import { ResourcesCreateComponent } from './course-actions/resources-create/resources-create.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CourseRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [CourseListComponent, CourseCreateComponent, CourseEditComponent, CourseComponent, StudentCreateComponent, NotificationCreateComponent, ResourcesCreateComponent]
})
export class CourseModule { }
