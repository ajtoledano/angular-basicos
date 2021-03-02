import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    // que componentes contiene este módulo
    declarations: [
        ContadorComponent
    ],
    // que quiero hacer visible fuera de este módulo
    exports: [
        ContadorComponent
    ]
})
export class ContadorModule {}