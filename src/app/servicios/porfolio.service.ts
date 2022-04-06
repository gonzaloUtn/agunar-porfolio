import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor() { }

  obtenerDator (){
    console.log("el servicio porfolio esta corriendo");
  }
}
