import { Component, OnInit } from '@angular/core';
import {DestinoViaje} from '../models/destino-viaje.model.ts'

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  destinos: DestinoViaje[];
  constructor() {
    this.destinos = [];
  }

  guardar(nombre: string, url: string):boolean{
    this.destinos.push(new DestinoViaje(nombre, url));
    return false; //para que al hacer click no se recarge la pagina
  }

  ngOnInit() {
  }

}
