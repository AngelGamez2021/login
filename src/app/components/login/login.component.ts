import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });


  }
  ngOnInit(): void {
  }

  loginUser() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
      // me retorna al estado inicial que viene siendo invalido. mientras no se llenen todos los datos
    }

    const empleado: any = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }

  }

}
