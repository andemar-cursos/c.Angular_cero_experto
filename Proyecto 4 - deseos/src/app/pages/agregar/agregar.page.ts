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

    this.guardar();
  }


  guardar() {
    console.log(this.lista.items);
    this.deseosService.guardarStorage();
  }
}
