import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { CounterWCModule } from './counter/counter-wc.module';

//enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(CounterWCModule)
    .catch(err => console.error(err));
