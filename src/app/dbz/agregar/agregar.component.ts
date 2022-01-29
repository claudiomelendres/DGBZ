import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personaje} from '../interfaces/dbz.interface';
import {DbzService} from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {


  @Input()
  nuevo: Personaje = { nombre: 'claudio', poder: 100};

  // @Output()
  // NuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  agregar(): void {
    if ( this.nuevo.nombre.trim().length === 0 ) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);

    // console.log(this.nuevo);

    // this.NuevoPersonaje.emit( this.nuevo );

    this.nuevo = {nombre: '', poder: 0};
  }

}
