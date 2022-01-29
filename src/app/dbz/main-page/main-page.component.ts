import { Component, OnInit } from '@angular/core';
import {DbzService} from '../services/dbz.service';

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


  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  };

  constructor( ) { }

  ngOnInit(): void {
  }

  // cambiarNombre( event: any) {
  //   console.log(event);
  // }



}
