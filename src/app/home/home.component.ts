import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { Teacher } from '../models/teacher';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isloading: boolean = false;
  public teachers: Teacher[];
  constructor(private _TeacherService: TeacherService) { }

  ngOnInit() {
    this.load()
  }
  load() {
    this.isloading = true;
    this._TeacherService.loadTeachers().subscribe(res => {
      this.teachers = res.data
      this.isloading = false;
    }, err => console.log(err))
  }
}
