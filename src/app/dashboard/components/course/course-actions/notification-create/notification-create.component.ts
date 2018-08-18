import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Notification } from '../../../../../models/notification';
import { NotificationService } from '../../../../../services/notification.service';
@Component({
  selector: 'app-notification-create',
  templateUrl: './notification-create.component.html',
  styleUrls: ['./notification-create.component.css']
})
export class NotificationCreateComponent implements OnInit {
  notificationForm: FormGroup;
  public id: string;
  public notifications: Notification[] = [];
  public isloading: boolean = false;
  constructor(private fb: FormBuilder, private _ActivatedRoute: ActivatedRoute, private _NotificationService: NotificationService) {
    this.notificationForm = fb.group({
      notification_body: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(300)]],
    })
  }

  ngOnInit() {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this.load(this.id)
  }
  onSubmit() {
    const notification = new Notification();
    notification.course_id = this.id;
    notification.notification_body = this.notificationForm.value.notification_body;
    this._NotificationService.createNotification(notification).subscribe(res => {
      if (res.body) {
        notification.notification_id = res.body;
        this.notifications.push(notification);
        this.notificationForm.reset();
      }
    }, err => console.log(err))
  }
  load(id: string) {
    this.isloading = true;
    this._NotificationService.loadNotifications(id).subscribe(res => {
      if (res) {
        this.notifications = res.data;
      }
      this.isloading =false
    })

  }
  remove(id: string, index: number) {
    if (confirm("Bạn có muốn xóa thông báo này không?")) {
      this._NotificationService.removeNotification(id).subscribe(res => {
        if (res.body) {
          this.notifications.splice(index, 1)
        }
      })
    }
  }
}