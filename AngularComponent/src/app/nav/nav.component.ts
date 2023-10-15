import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  siteName: string = "eLibrary";

  constructor(private authService: AuthService) {}

  login() {this.authService.login();}
  logout() {this.authService.logout();}
}
