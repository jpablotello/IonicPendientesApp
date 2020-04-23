import { Component } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public pedidosServices: PedidosService,
              private router: Router,
              private alertCtrl: AlertController) {}

  async agregarLista()  {

    const alert = await this.alertCtrl.create({
      header: 'Nuevo pedido',
      inputs: [
        { 
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre del pedido'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar')
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if(data.titulo.length === 0)
              return;

            const pedidoId = this.pedidosServices.crearLista(data.titulo);

            this.router.navigateByUrl(`/tabs/tab1/agregar/${ pedidoId }`)

          }
        }
      ]
    });

    alert.present();
  }
}
