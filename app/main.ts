import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './components/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
