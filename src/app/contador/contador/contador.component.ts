import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1> {{ titulo }} </h1> <!-- HACEMOS REFERENCIA A UNA PROPIEDAD DE LA CLASE -->
        <!--<h1> {{ 1+1 }} </h1>  O FUNCIONES JAVASCRIPT -->

        <!-- los paréntesis son para indicar evento 
        <button (click)="sumar()"> + 1 </button>

        <span> {{ numero }} </span>

        <button (click)="restar()"> - 1 </button>

        -->
        <!-- si le pasara un string concateneria -->
        <h3>la base es: <strong> {{ base }} </strong></h3>

        <button (click)="acumular( base )"> + {{ base }}  </button>

        <span> {{ numero }} </span>

        <button (click)="acumular( -  base )"> - {{ base }}  </button>
    `
})

// export para usarla en toda la plica
export class ContadorComponent {
      // title = 'bases';
  public titulo : string = 'Contador App';
  public numero : number = 10;
  public base : number = 5;
  /*
  sumar ()  {
    this.numero += 1
  }
  restar() {
    this.numero -= -1
  }*/
  acumular (valor: number) {
    this.numero += valor
  }
}