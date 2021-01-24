import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild(IonList) ionList: IonList;
  @Input() terminada = true;

  constructor(  public deseoService: DeseosService,
                private alertCtrl: AlertController,
                private router       : Router) { }

  ngOnInit() {}


  listaSeleccionada(lista: Lista) {

    (this.terminada)  ? this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`)
                      : this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    
  }


  borrarLista(lista: Lista) {
    this.deseoService.borrarList(lista);
  }

  async editarTitulo(lista: Lista) {

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Editar titulo',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.ionList.closeSlidingItems();
          }
        },
        {
          text: 'Guardar',
          handler: (data) => {
            if(data.titulo.leght === 0) return;
            
            lista.titulo = data.titulo;
            this.deseoService.guardarStorage();

            this.ionList.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }

}
