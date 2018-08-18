import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resources } from '../models/resources';


@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  constructor(private http: HttpClient) {
  }
  public createResources(resources: Resources): Observable<any> {
    return this.http.post<any>("/api/resources/create.php", resources, { observe: 'response' })
  }
  public loadResources(id: string): Observable<any> {
    return this.http.get("/api/resources/list.php", { params: new HttpParams().set('id', id), observe: 'response' }, )
  }
  public removeResources(resources_id: string) {
    return this.http.delete("/api/resources/remove.php", { params: new HttpParams().set('resources_id', resources_id), observe: 'response' });
  }
}
