import { ApplicationConfig, provideZoneChangeDetection,importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { pendingRequestsInterceptor$ } from 'ng-http-loader';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi
} from '@angular/common/http';
import Lara from '@primeng/themes/lara';
import { HrTranslateLoader } from '@core/configs/hr-translate-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Lara,
        options:{
          darkModeSelector:'my-app-dark'
        }

      }
    }),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([pendingRequestsInterceptor$])),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: localStorage.getItem('hr-user-lang') ?? "'ar'",
        loader: {
          provide: TranslateLoader,
          useClass: HrTranslateLoader,
          deps: [HttpClient]
        }
      })
    ),
    provideAnimations(),

  ]
};
