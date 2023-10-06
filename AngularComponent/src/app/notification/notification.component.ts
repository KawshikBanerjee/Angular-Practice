import { Component } from '@angular/core';
 
@Component({
  selector: 'app-notification',
  // templateUrl: './notification.component.html',
  template: `
  <div class="container alert alert-info alert-dismissible fade in">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
  </div>
  `,
  // styleUrls: ['./notification.component.css']
  styles: [".noti-div{margin: 10px 0px; padding: 10px 20px; background-color: #fad7a0; text-align: center}", "p{font-size: 12px}"]
})
export class NotificationComponent {

}
