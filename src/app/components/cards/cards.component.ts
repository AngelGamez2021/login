import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../interfaces/user.interface';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  rowData: User[] = [];
  colData: any[] = [
    {
      text: 'User Name',
      type: 'userName',
    },
    {
      text: 'Number',
      type: 'number',
    },
    {
      text: 'Email',
      type: 'emailAddress',
    },
    {
      text: 'Star date',
      type: 'starDate',
    },
    {
      text: 'Card',
    },
    {
      text: 'Edit',
    },
    {
      text: 'Delete',
    },
   
  ];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.readUser();

  }

  readUser(){
    this._userService.getUsers().subscribe(data =>{
      console.log(data);
      this.rowData = data;
     }, error =>{
       console.log(error);
    })
  }



} 
