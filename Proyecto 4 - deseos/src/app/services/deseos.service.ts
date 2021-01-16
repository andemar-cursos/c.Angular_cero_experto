import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
  
    this.cargarStorage();
  }
  
  
  crearList(titulo: string) {
    
    const lista3 = new Lista(titulo);
    this.listas.push(lista3);
    this.guardarStorage();
  }


  guardarStorage() {
    
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    
    let data = localStorage.getItem('data');
    
    if(data != null)
      this.listas = JSON.parse(data);
  }

}
