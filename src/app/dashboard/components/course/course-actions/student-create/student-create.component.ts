import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Student } from '../../../../../models/student';
import { StudentService } from '../../../../../services/student.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  public studentForm: FormGroup;
  public students: Student[] = [];
  public id = this._ActivatedRoute.snapshot.params.id;
  public isloading: boolean = false;
  constructor(private fb: FormBuilder, private _StudentService: StudentService, private _ActivatedRoute: ActivatedRoute) {
    this.studentForm = fb.group({
      student_id: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      student_name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
      score: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
    })
  }
  ngOnInit() {
    this.load(this.id);
  }
  onSubmit() {
    const student = new Student();
    student.student_name = this.studentForm.value.student_name;
    student.student_id = this.studentForm.value.student_id;
    student.score = this.studentForm.value.score;
    student.course_id = this.id;
    this._StudentService.createStudent(student).subscribe(res => {
      if (res.status === 200) {
        this.students.push(student);
        this.studentForm.reset();
      }
      if (res.status === 204) {
        alert("Sinh viên đã tồn tại")
      }
    })
  }
  load(id: string) {
    this.isloading = true;
    this._StudentService.loadStudents(id).subscribe(res => {
      if (res) {
        this.students = res.data;
      }
      this.isloading = false;
    }, err => console.log(err))
  }
  removestudent(student_id: string, course_id: string, i: number) {
    if (confirm("Bạn có muốn xóa sinh viên này không?")) {
      this._StudentService.removeStudent(course_id, student_id).subscribe(res => {
        if (res.body === 1) {
          this.students.splice(i, 1);
        }
      }, err => console.log(err))
    }
  }
}
