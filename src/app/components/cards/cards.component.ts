import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user.service';
import { readUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
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

  constructor(private _userService: UserService,
    private store: Store<AppState>) { }

  ngOnInit(): void {

    this.readUser();




    // this.store.select('users').subscribe(({usuario}) =>{
    //   this.rowData = usuario;
    // })

    // this.store.dispatch(readUser());

  }


  readUser() {
    this._userService.getUsers().subscribe(data => {
      this.rowData = data;
      console.log('lista de usuarios',data);
      
    }, error => {
      console.log(error);
    })
  }


  //  readUser(){
  //   this.store.select('users').subscribe(({user}) =>{
  //    this.rowData = user;
  //    console.log(user);
  //     // const data = infoData.user
  //     // if(data){
  //     //   this.rowData = data;
  //     // }
  //   })
  // }



} 
