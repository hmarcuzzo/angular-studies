import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .whiteText {
      color: white;
    }
  `]
})
export class AppComponent {
  displayDetails: boolean = false;
  logs: Array<Date> = [];

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.logs.push(new Date());
  }
}
