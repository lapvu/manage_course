import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private http: HttpClient) { }
  public loadTeachers(): Observable<any> {
    return this.http.get<any>('/api/teacher/list.php');
  }
  public getTeacher(id: string): Observable<any> {
    return this.http.get<any>('/api/teacher/teacher.php', { params: new HttpParams().set('id', id), observe: 'response' });
  }
}
