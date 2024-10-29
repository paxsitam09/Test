import { ApplicationConfig, ErrorHandler, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideHttpClient(withInterceptors([loadingInterceptor])),
    importProvidersFrom([BrowserAnimationsModule]),
    {provide:ErrorHandler,useClass:GlobalErrorHandlerService}
  ]
};
