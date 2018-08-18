import { Component, OnInit } from '@angular/core';
import { Notification } from '../../../models/notification';
import { NotificationService } from '../../../services/notification.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.css']
})
export class NotificationPageComponent implements OnInit {
  public id: string = this._ActivatedRoute.snapshot.params.id;
  public notifications: Notification[] = [];
  constructor(private _NotificationService: NotificationService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.load(this.id);
  }
  load(id: string) {
    this._NotificationService.loadNotifications(id).subscribe(res => {
      if(res){
        this.notifications = res.data;
      }
    })
  }
}
