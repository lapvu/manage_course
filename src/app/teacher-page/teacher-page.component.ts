import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { TeacherService } from '../services/teacher.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit {
  private teacher: Teacher;
  private courses: Course[] = [];
  public page: number = 1;
  public totalPages: number;
  public id: number = this._ActivatedRoute.snapshot.params.id;
  constructor(private _CourseService: CourseService, private _TeacherService: TeacherService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadCourse(this.page, this.id);
    this.loadTeacher(this.id.toString());
  }
  loadCourse(page: number, id: number) {
    this._CourseService.getCoursesHome(page, id).subscribe(res => {
      if (res) {
        this.courses = res.data;
        this.totalPages = res.totalPages * 10;
      }
    })
  }
  loadTeacher(id: string) {
    this._TeacherService.getTeacher(id).subscribe(res => {
      if (res.body) {
        this.teacher = res.body[0];
      }
    })
  }
  nextPage() {
    this._CourseService.getCoursesHome(this.page, this.id).subscribe(res => {
      if (res) {
        this.courses = res.data;
        this.totalPages = res.totalPages * 10;
      }
    })
  }
}
