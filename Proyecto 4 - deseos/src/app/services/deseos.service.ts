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
    
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }


  getListById(id: string | number) {

    id = Number(id);

    return this.listas.find(listaData => listaData.id === id);
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
