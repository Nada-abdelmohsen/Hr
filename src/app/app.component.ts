import { Component } from '@angular/core';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from "./core/components/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    LoginComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hr-system-app';

  protected readonly LoaderComponent = LoaderComponent;

  toggleDarkMode(){
    const element =document.querySelector('html');
    if(element !== null){
      element.classList.toggle('my-app-dark')
    }
  }
}
