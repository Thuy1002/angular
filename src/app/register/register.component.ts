import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      //tên trường : giá trị thể hiên của FormControl(gt mặc định)
      username: new FormControl('', [Validators.required, Validators.minLength(6),this.checkUsername]),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  ngOnInit(): void {
  }
  checkUsername(control: AbstractControl) :ValidationErrors|null {
    const username = control.value;
    if(!username.includes('thuy')){
      return {hasName: true}; // obj này sẽ được trả về trong errors
    }
    return null;
  }

}
