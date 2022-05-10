import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  labels = {
    userName: '',
    firstName: '',
    lastName: '',
    phoneNumber: 0,
    emailAddress: '',
    id: '',
  }
  id: string | null;

  constructor(private aRoute: ActivatedRoute,
    private _userService: UserService) {

    this.id = this.aRoute.snapshot.paramMap.get('id')
    console.log('Este es el id seleccionado', this.id);
    

  }


  ngOnInit(): void {
    this.user();
  }

  user(){
    if(this.id != null){

       this._userService.updateUser(this.id).subscribe(data =>{
         this.labels = data;
         console.log('seeData', this.labels);
        
       })
      
    }
  }



}
