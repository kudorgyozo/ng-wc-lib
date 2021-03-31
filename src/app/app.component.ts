import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-wc-lib';
  counter = 44;

  countChangedWC(countEvent: CustomEvent) {
    console.log(`countChanged ${countEvent.detail}`);
  }
}
