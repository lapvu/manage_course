import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public url: string = "/api/course/list.php"
  constructor(private http: HttpClient) { }
  public addCourse(course: Course): Observable<any> {
    return this.http.post<any>("/api/course/create.php", course, { observe: 'response' });
  }
  public getCourses(page: number): Observable<any> {
    return this.http.get<any>(this.url, {
      params: new HttpParams().set('id', JSON.parse(localStorage.getItem("curentUser")).id).set('page', page.toString())
    });
  }
  public getCoursesHome(page: number, id: number): Observable<any> {
    return this.http.get<any>(this.url, {
      params: new HttpParams().set('id', id.toString()).set('page', page.toString())
    });
  }
  public removeCourse(id: string, index: number): Observable<any> {
    return this.http.delete('/api/course/remove.php', { params: new HttpParams().set('id', id), observe: 'response' });
  }
  public editCourse(course: Course): Observable<any> {
    return this.http.put<any>("/api/course/edit.php", course, { observe: 'response' });
  }
  public getCourse(id: string): Observable<any> {
    return this.http.get("/api/course/course.php", { params: new HttpParams().set('id', id) });
  }
}
