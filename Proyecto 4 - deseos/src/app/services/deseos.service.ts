import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {

    const lista1 = new Lista('Recolectar piedras del inifinito');
    const lista2 = new Lista('Heores a desaparecer');

    this.listas.push(lista1, lista2);
  }

}