import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Course } from '../../../../models/course';
import { CourseService } from '../../../../services/course.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
  courseForm: FormGroup;
  constructor(private fb: FormBuilder, private _CourseService: CourseService,private _Router:Router) {
    this.courseForm = fb.group({
      courseName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
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
    course.teacher_id = JSON.parse(localStorage.getItem("curentUser")).id;
    this._CourseService.addCourse(course).subscribe((res) => {
      if (res.status === 200) {
        this._Router.navigate(["/admin/course/list"])
      }
    })
  }
}
