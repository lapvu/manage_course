import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private http: HttpClient) {
  }
  public createNotification(notification: Notification): Observable<any> {
    return this.http.post<any>("/api/notification/create.php", notification, { observe: 'response' })
  }
  public loadNotifications(id: string): Observable<any> {
    return this.http.get("/api/notification/list.php", { params: new HttpParams().set('id', id) })
  }
  public removeNotification(notification_id: string) {
    return this.http.delete("/api/notification/remove.php", { params: new HttpParams().set('notification_id', notification_id), observe: 'response' })
  }
}
