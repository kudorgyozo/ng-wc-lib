import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule, CounterComponent } from '../../../counter/src/public-api';

@NgModule({
    imports: [BrowserModule, CounterModule],
    entryComponents: [CounterComponent],
})
export class CounterWCModule {
    constructor(private injector: Injector) {
        const ngElement = createCustomElement(CounterComponent, {
            injector: this.injector,
        });

        customElements.define(`my-counter`, ngElement);
    }

    ngDoBootstrap() { }
}
