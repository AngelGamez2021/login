import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  // colData: titleData[] = [
  //   {
  //     type: 'name',
  //     text: 'Nombre',
  //     tam: '15%',
  //   },
  //   {
  //     type: 'dni',
  //     text: 'Documento',
  //     tam: '10%',
  //   },
  //   {
  //     type: 'email',
  //     text: 'Correo',
  //     tam: '15%',
  //   },
  //   {
  //     type: 'description',
  //     text: 'Descripción',
  //     tam: '20%',
  //   },
  //   {
  //     type: 'enabled',
  //     text: 'Estado',
  //     tam: '5%',
  //   },
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
