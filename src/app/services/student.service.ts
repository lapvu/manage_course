import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {

  }
  public createStudent(student: Student): Observable<any> {
    return this.http.post<any>("/api/student/create.php", student, { observe: 'response' })
  }
  public loadStudents(id: string): Observable<any> {
    return this.http.get("/api/student/list.php", { params: new HttpParams().set('id', id) })
  }
  public removeStudent(student_id: string, course_id: string) {
    return this.http.delete("/api/student/remove.php", { params: new HttpParams().set('course_id', course_id).set('student_id', student_id), observe: 'response' })
  }
}
