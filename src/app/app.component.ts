import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // en el index.html tenemos el  <app-root></app-root>
  templateUrl: 'app.component.html' //path del archivo html
  //template: '<span>Fernando</span>' //permite definir el string de salida
  // con este simbolo se pueden poner multilínea `
  //template: `                         
  //  <h1>Hola de nuevo </h1>
  //`
})
export class AppComponent {

}
