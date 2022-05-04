import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  infoData: any[] = [];

  constructor(
    private router: Router,
    private _userService: UserService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    this.gridData = this.rowData;
    this.titleData = this.colData;
    
  }



  removeUser(id: string){
    this._userService.deleteUser(id).subscribe(data =>{
      console.log(id);
      this.router.navigate(['/cardList']);
     }, error =>{
       console.log(error);
    })
   }

   editUser(id: string){
     this._userService.updateUser(id).subscribe(data => {
      console.log('Informacion',data);
      this.router.navigate(['/editUser/', id]);

     }, error => {
       console.log(error);
       
       
      })
      
    }
 
}
