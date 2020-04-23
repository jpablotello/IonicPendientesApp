import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList, {static: true} ) listaIonList: IonList;
  @Input() terminada = true;

  constructor(public pedidosServices: PedidosService,
              private router: Router,
              private alertCtrl: AlertController) { 

  }

  ngOnInit() {}

  listaSeleccionada(lista: Lista) {
    //console.log(lista)
    if(this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`)
    }
    else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`)
    }
  }

  borrarLista(lista: Lista) {
    this.pedidosServices.borrarLista(lista);
  }


  async editarTitulo(lista: Lista) {

    const alert = await this.alertCtrl.create({
      header: 'Nuevo pedido',
      inputs: [
        { 
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre del pedido'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.listaIonList.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            console.log(data);
            if(data.titulo.length === 0)
              return;

            lista.titulo = data.titulo;

            this.pedidosServices.guardarStorage();
            this.listaIonList.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }

}
