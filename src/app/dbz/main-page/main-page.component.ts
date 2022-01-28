import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  personajes: Personaje[] = [
    {nombre: 'Goku', poder: 15000},
    {nombre: 'Vegeta', poder: 7500},
  ];

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  };


  constructor() { }

  ngOnInit(): void {
  }

  agregar(): void {
    if ( this.nuevo.nombre.trim().length === 0 ) {
      return;
    }

    this.personajes.push(this.nuevo);
    this.nuevo = {nombre: '', poder: 0};

    console.log(this.nuevo);
  }

  // cambiarNombre( event: any) {
  //   console.log(event);
  // }

}
