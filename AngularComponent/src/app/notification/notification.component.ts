import { Component } from '@angular/core';
 
@Component({
  selector: 'app-notification',
  // templateUrl: './notification.component.html',
  template: `
  <div class="alert alert-info alert-dismissible fade show text-center" role="alert" [hidden]="displayNotification">
    This website uses cookies to improve user experience
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  `,
  // styleUrls: ['./notification.component.css']
  styles: [".noti-div{margin: 10px 0px; padding: 10px 20px; background-color: #fad7a0; text-align: center}", "p{font-size: 12px}"]
})
export class NotificationComponent {
  displayNotification: boolean = false; // hidden property
}
