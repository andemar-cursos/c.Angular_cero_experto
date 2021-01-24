import { Component, Input, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor(  public deseoService: DeseosService,
                private router       : Router) { }

  ngOnInit() {}


  listaSeleccionada(lista: Lista) {

    (this.terminada)  ? this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`)
                      : this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    
  }


  borrarLista(lista: Lista) {
    this.deseoService.borrarList(lista);
  }

}