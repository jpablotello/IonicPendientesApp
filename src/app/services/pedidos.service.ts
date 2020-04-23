import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  lista: Lista[] = [];

  constructor() {
// //    const lista1 = new Lista("Pedidos de Carla");
//     const lista2 = new Lista("Pedidos de Nicole");

//     this.lista.push(lista1, lista2);

    this.cargarStorage();
    console.log(this.lista)
   }

   crearLista( titulo: string) {
     const nuevaLista = new Lista(titulo);
     this.lista.push(nuevaLista);
     this.guardarStorage();

     return nuevaLista.id;
   }

   obtenerLista(id: string | number) {
     id = Number(id);

     return this.lista.find( listaData => listaData.id === id )

   }

   guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.lista));
   }

   cargarStorage() {
     if( localStorage.getItem('data'))
      this.lista = JSON.parse(localStorage.getItem('data'));
   }

   borrarLista(lista: Lista){
     this.lista = this.lista.filter( listaData => listaData.id !== lista.id )

     this.guardarStorage();
   }
}

