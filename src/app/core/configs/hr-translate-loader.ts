import { inject } from "@angular/core";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { LocalStorageService } from "../services/local-storage.service";
import { LocalStorageKeys } from "../models/local-storage-key-type.model";
import * as en from '@assets/i18n/en.json';
import * as ar from '@assets/i18n/ar.json';

export class HrTranslateLoader implements TranslateLoader {
  private localStorageService = inject(LocalStorageService);

  public getTranslation(): Observable<any> {
    return new Observable((observer) => {
      const lang = this.localStorageService.getItem(LocalStorageKeys.UserLang);
      switch (lang) {
        case 'ar':
          document.documentElement.setAttribute('dir', 'rtl');
          document.documentElement.setAttribute('lang', 'ar');
          this.localStorageService.setItem(LocalStorageKeys.UserLang, 'ar');
          observer.next(ar);
          break;
        case 'en':
          document.documentElement.setAttribute('dir', 'ltr');
          document.documentElement.setAttribute('lang', 'en');
          this.localStorageService.setItem(LocalStorageKeys.UserLang, 'en');
          observer.next(en);
          break;
        default:
          document.documentElement.setAttribute('dir', 'rtl');
          document.documentElement.setAttribute('lang', 'ar');
          this.localStorageService.setItem(LocalStorageKeys.UserLang, 'ar');
          observer.next(ar);
          break;
      }
      observer.complete();
    });
  }

}
