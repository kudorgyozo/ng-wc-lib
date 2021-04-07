import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void { }

  title = 'ng-wc-lib';

  countChanged(count: number) {
    console.log(`countChanged lib ${count}`);
  }


  countChangedWC(countEvent: CustomEvent) {
    console.log(`countChanged wc ${countEvent.detail}`);
  }
}
