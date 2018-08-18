import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../models/course';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public course: Course;
  public currentJustify = 'justified';
  constructor(private _CourseService: CourseService, private _ActivatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.loadCourse(this._ActivatedRoute.snapshot.params.id);
  }
  loadCourse(id: string) {
    this._CourseService.getCourse(id).subscribe(res => {
      this.course = res
    }, err => console.log(err))
  }
}
