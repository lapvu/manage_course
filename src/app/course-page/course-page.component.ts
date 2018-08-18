import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course';
@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  public currentJustify = 'justified';
  public id: string = this._ActivatedRoute.snapshot.params.id;
  public course: Course;
  constructor(private _CourseService: CourseService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.load_course(this.id);
  }
  load_course(id: string) {
    this._CourseService.getCourse(id).subscribe(res => {
      if (res) {
        this.course = res;
      }
    })
  }
}
