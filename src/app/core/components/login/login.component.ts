import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TextFieldComponent } from "../../../shared/components/text-field/text-field.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'hr-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    TextFieldComponent,
    ButtonModule,
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!:FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email,Validators.pattern(/^[^@]+@[^@]+\.[^@]+$/)]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    });
  }
  submit(){
    const enteredEmail=this.loginForm.value.email;
    const enteredPassword=this.loginForm.value.password;

  }
}
