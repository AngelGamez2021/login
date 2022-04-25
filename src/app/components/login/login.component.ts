import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;
  submitted = false;

  messageError = {

    email: {
      required: 'Requerid Email',
      pattern: 'Email invalid',
    },
    password: {
      required: 'Password requerid',
      minLength: 'Password Invalid',
    },

  };

  constructor(
    // public activeModal: NgbActiveModal,
    // private modalService: NgbModal,
    // private store: Store,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[A-z]+[a-zA-Z0-9._]+@[a-z]+\.[a-z.]{2,6}$/),],],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.loginUser();
  }

  loginUser() {

    if( this.submitted = true){
      // this.loginUser.controls.password.diable();
      const form = {
        email: this.formLogin.value.email,
        password: this.formLogin.value.password,
      };

      this.formLogin.patchValue(form);
      console.log(form);
      
    }
  }


  // onSubmit() {
  //   if (!this.formLogin.invalid) {
  //     if (this.submitted === true) {
  //       console.log('Registrado con exito');
        
  //     } else {

  //       console.log('Registrado con exito');
        

  //     }
  //   }
  // }

 getError(nameError: string): string {
    // if (!this.formLogin.get(nameError).touched) {
       return '';
    // }
    // const errors = this.formLogin.get(nameError).errors || {};
    // const error = Object.keys(errors)[0];

    // return this.messageError[nameError][error];
   }
}


