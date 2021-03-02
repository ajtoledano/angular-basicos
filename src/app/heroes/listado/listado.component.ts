import { Component/*, OnInit*/ } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent /*implements OnInit */{
/*
  constructor() { 
    console.log('constructor');
  }

  // se utiliza para inicializar cosas, si tienes que hacer petición a algun servicio pa recuperar información
  ngOnInit(): void {
    console.log('ngOnInit');
  }
*/

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];

  //heroeBorrado: string|undefined ='';
  heroeBorrado: string =''; // || false || null || undefined si luego pongo *ngIf="heroeBorrado" es todo como si fuera false

  borrarHeroe(): void{
    //this.heroes = []; borrar entero
    //this.heroeBorrado = this.heroes.shift(); // borro un elemento
    this.heroeBorrado = this.heroes.shift()||''; // borro un elemento

    // console.log(this.heroeBorrado);
  }

}
