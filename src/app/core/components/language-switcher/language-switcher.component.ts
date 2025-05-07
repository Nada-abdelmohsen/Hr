import { FormsModule } from '@angular/forms';
import { LocalStorageKeys } from '../../models/local-storage-key-type.model';
import { LanguageService } from '../../services/language.service';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, inject } from '@angular/core';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'hr-language-switcher',
  standalone:true,
  imports: [DropdownModule,FormsModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
private localStorageService=inject(LocalStorageService);
private languageService=inject(LanguageService);

currentLanguage=this.localStorageService.getItem(LocalStorageKeys.UserLang);
supportedLanguages=[
  {key:'ar',name:'العربية'},
  {key:'en',name:'English'}
]

changLanguage(event:DropdownChangeEvent){
  this.languageService.changeLanguage(event.value);
}
}
