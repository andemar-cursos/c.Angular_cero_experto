import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista = null;
  nombreItem: string = '';



  constructor(private deseosService: DeseosService,
              private router: ActivatedRoute) { 
    
    const listaId = this.router.snapshot.paramMap.get('listaId');
    
    this.lista = this.deseosService.getListById(listaId);

    console.log(this.lista);
  }


  ngOnInit() {
  }




  agregarItem() {
    
    if(this.nombreItem.length === 0) return;

    let item = new ListaItem(this.nombreItem);
    this.lista.items.push(item);

    this.nombreItem = '';

    this.guardar(item);
  }


  guardar(item: ListaItem) {

    const pendientes = this.lista.items
                            .filter( item => !item.completado)
                            .length;

    if( pendientes === 0 ){
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    }else{
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.deseosService.guardarStorage();
  }
}
