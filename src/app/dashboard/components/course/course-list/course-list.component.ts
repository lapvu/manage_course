import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../../../../models/course';
import { CourseService } from '../../../../services/course.service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public courses: Course[] = [];
  public isloading: boolean = false;
  public page: number = 1;
  public totalPages: number;
  constructor(private _CourseService: CourseService) {
  }
  ngOnInit() {
    this.load(this.page);
  }
  load(page: number) {
    this.isloading = true;
    this.subscription = this._CourseService.getCourses(page).pipe(tap((res) => {
      if (res) {
        this.courses = res.data;
        this.totalPages = res.totalPages * 10;
      }
      this.isloading = false;
    })).subscribe();
  }
  loadData() {
    this.isloading = true;
    this.subscription = this._CourseService.getCourses(this.page).pipe(tap((res) => {
      if (res) {
        this.courses = res.data;
        this.totalPages = res.totalPages * 10;
      }
      this.isloading = false;
    })).subscribe();
  }
  RemoveCourse(id: string, index: number) {
    if (confirm("Bạn có muốn xóa khóa học nay ko?")) {
      this._CourseService.removeCourse(id, index).subscribe(res => {
        if (res.body === 1) {
          this.courses.splice(index, 1);
        }
      }, error => {
        console.log(error)
      })
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
} 
