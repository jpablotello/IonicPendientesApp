import { ListaItem } from './lista-item.model';

export class Lista {
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    entregada: boolean;
    precio: number;
    ingreso: number;
    items: ListaItem[];

    constructor(titulo: string ){

        this.titulo = titulo;

        this.creadaEn = new Date();
        this.terminada = false;
        this.entregada = false;
        this. items = [];
        this.precio = 0;
        this.ingreso = 0;
        this.id = new Date().getTime();
    }
}