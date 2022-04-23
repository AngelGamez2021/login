import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signForm! : FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {


    this.signForm = this.fb.group({
      
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      secondName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      id: ['',Validators.required],
      createPass: ['',Validators.required]
    });


   }

  ngOnInit(): void {
  }

  signUser(){
    this.submitted = true;

    if(this.signForm.invalid){
      return;
    }

    const registro: any = {
      name: this.signForm.value.email,
      lastName: this.signForm.value.lastName,
      secondName: this.signForm.value.secondName,
      phoneNumer: this.signForm.value.phoneNumer,
      id: this.signForm.value.id,
      createPass: this.signForm.value.createPass,
    }
  }
  

}
