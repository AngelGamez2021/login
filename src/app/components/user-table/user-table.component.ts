import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  @Input() rowData!: any[];
  @Input() colData!: any[];


  gridData: any[] = [];
  titleData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.readUser();
  }

  ngOnChanges() {
    this.gridData = this.rowData;
    this.titleData = this.colData;
  }

  // readUser(){
  //   this._userService.getUsers().subscribe(data =>{
  //     console.log(data);
  //     this.listUser = data;
  //    }, error =>{
  //      console.log(error);
  //   })
  // }

}
