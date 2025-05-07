import { computed, inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageKeys } from '../models/local-storage-key-type.model';
import { BehaviorSubject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private localStorageService=inject(LocalStorageService);
  private translateService=inject(TranslateService);
  private defaultLanguage=this.localStorageService.getItem(LocalStorageKeys.UserLang)||'ar';
  private languageChangeSubject=new BehaviorSubject<string>(this.defaultLanguage);
  public languageChange=this.languageChangeSubject.asObservable();

  currentLanguage=signal(this.defaultLanguage);

  position = computed(()=>{
    return this.isArabicLang() ? 'right':'left';
  })

  direction = computed(()=>{
    return this.isArabicLang()? 'rtl':'ltr';
  })

  constructor() {
    this.translateService.use(this.defaultLanguage);
    this.translateService.onLangChange.pipe(takeUntilDestroyed()).subscribe((event)=>{
      this.currentLanguage.set(event.lang);
      this.languageChangeSubject.next(event.lang);
    })
  }

  changeLanguage(language:string):void{
    this.localStorageService.setItem(LocalStorageKeys.UserLang,language);
    this.translateService.use(language);
    document.documentElement.setAttribute('dir',this.translateService.instant('DIRECTION'));
    document.documentElement.setAttribute('lang',language);
  }

  isArabicLang(){
    return this.currentLanguage() === 'ar'
  }
}
