import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'lib-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

    @Input() counter = 0;

    @Output() countChanged = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void { }

    inc() {
        this.counter++;
        this.countChanged.next(this.counter);
    }

    dec() {
        this.counter--;
        this.countChanged.next(this.counter);
    }

}