import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formSign!: FormGroup;
  submitted = false;

  messageError = {

    userName: {
      required: 'Name requerid',
      pattern: 'Name invalid',
    },
    lastName: {
      required: 'last Name requerid',
      minLength: 'Invalid last Name ',
    },
    secondName: {
      required: 'second Name requerid',
      minLength: 'Invalid second Name ',
    },
    phoneNumber: {
      required: 'Phone Number requerid',
      minLength: 'Invalid Phone Number',
    },
    id: {
      required: 'ID requerid',
      minLength: 'Invalid ID',
    },
    emailAddress: {
      required: 'Email requerid',
      minLength: 'Invalid Email',
    },
    password: {
      required: 'Password requerid',
      minLength: 'Invalid Password',
    },

  };

  constructor(private fb: FormBuilder,
    private router: Router,
    private _userService: UserService) {
  }

  ngOnInit(): void {
    this.formSign = this.fb.group({
      userName: ['', [Validators.required,]],
      lastName: ['', [Validators.required,]],
      secondName: ['', [Validators.required,]],
      phoneNumber: ['', [Validators.required,]],
      id: ['', [Validators.required,]],
      emailAddress: ['', [Validators.required, Validators.pattern(/^[A-z]+[a-zA-Z0-9._]+@[a-z]+\.[a-z.]{2,6}$/),],],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.signUser();
  }

  signUser() {
    if (this.submitted = true) {

      const form = {
        userName: this.formSign.value.userName,
        lastName: this.formSign.value.lastName,
        secondName: this.formSign.value.secondName,
        phoneNumber: this.formSign.value.phoneNumber,
        id: this.formSign.value.id,
        emailAddress: this.formSign.value.emailAddress,
        password: this.formSign.value.password,
      };

      this.formSign.patchValue(form);
      console.log(form);
    }
  }

  onSubmit() {


    const USER: User = {

      userName: this.formSign.get('userName')?.value,
      lastName: this.formSign.get('lastName')?.value,
      phoneNumber: this.formSign.get('phoneNumber')?.value,
      emailAddress: this.formSign.get('emailAddress')?.value,
      password: this.formSign.get('password')?.value,


    }


    this._userService.createUser(USER).subscribe(data => {
      // this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado');
      this.router.navigate(['/cardList']);
    }, error => {
      console.log(error);

    })


  }

}
