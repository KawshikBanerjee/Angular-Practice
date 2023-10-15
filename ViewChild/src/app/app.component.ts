import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';
import { AlertService } from './Services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [AlertService]
})

export class AppComponent {
  title = 'ViewChild';

  constructor(private alertService: AlertService) {}

  @ViewChild('dobInput') 
  dateOfBirth!: ElementRef;

  @ViewChild('ageInput') 
  age!: ElementRef;

  @ViewChild(DemoComponent, {static: true})
  demoComponent!: DemoComponent;

  calculateAge() {
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    
    this.age.nativeElement.value = currentYear - birthYear;
  }

  onClick() {
    // const alertService = new AlertService();
    this.alertService.onButtonClick(this.title);
  }
}
