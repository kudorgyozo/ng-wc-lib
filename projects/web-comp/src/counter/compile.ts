import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { CounterWCModule } from './counter-wc.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(CounterWCModule)
    .catch(err => console.error(err));
