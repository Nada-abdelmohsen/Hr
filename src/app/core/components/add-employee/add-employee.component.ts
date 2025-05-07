import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextFieldComponent } from "../../../shared/components/text-field/text-field.component";

@Component({
  selector: 'hr-add-employee',
  imports: [
    TextFieldComponent,
    ReactiveFormsModule
],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  addEmpForm!:FormGroup;

  constructor(){
    this.addEmpForm = new FormGroup({
      firstName:new FormControl('',[]),
      lastName:new FormControl('',[]),
      email: new FormControl('',[Validators.required,Validators.email,Validators.pattern(/^[^@]+@[^@]+\.[^@]+$/)]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    });
  }

  addEmployee(){

  }
}
