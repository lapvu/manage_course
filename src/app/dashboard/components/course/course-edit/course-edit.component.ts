import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CourseService } from '../../../../services/course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../../../../models/course';
@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  courseForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _CourseService: CourseService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {
    _ActivatedRoute.queryParams.subscribe(data => {
      this.courseForm = fb.group({
        courseName: [data.course_name, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
        description: [data.course_description, [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
        startDate: [data.date_start, [Validators.required]],
        endDate: [data.date_end, [Validators.required]]
      })
    })
  }
  ngOnInit() {
  }
  onSubmit() {
    let course = new Course();
    course.course_name = this.courseForm.value.courseName;
    course.course_description = this.courseForm.value.description;
    course.date_start = this.courseForm.value.startDate;
    course.date_end = this.courseForm.value.endDate;
    this._ActivatedRoute.queryParams.subscribe(data => {
      course.course_id = data.course_id;
    })
    this._CourseService.editCourse(course).subscribe((res) => {
      if (res.status === 200) {
        this._Router.navigate(["/admin/course/list"])
      }
    })
  }
}
