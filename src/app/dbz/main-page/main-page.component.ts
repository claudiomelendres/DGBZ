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

  // cambiarNombre( event: any) {
  //   console.log(event);
  // }

  agregarNuevoPersonaje( argumento: Personaje): void  {
    this.personajes.push(argumento);
  }

}
