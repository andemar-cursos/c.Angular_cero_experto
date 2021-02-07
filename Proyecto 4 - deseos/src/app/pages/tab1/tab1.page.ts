import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(  public deseoService: DeseosService,
                private router: Router,
                private alertCtrl: AlertController) {
    
  }


  async agregarList() {

    // this.router.navigateByUrl('/tabs/tab1/agregar');

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar')
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            if(data.titulo.leght === 0) return;
            
            const id = this.deseoService.crearList(data.titulo);

            this.router.navigateByUrl(`/tabs/tab1/agregar/${id}`)
          }
        }
      ]
    });

    alert.present();
  }
  
}
