import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // que componentes contiene este módulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // que quiero hacer visible fuera de este módulo
    exports: [
        ListadoComponent
    ],
    // suelen ir sólo módulos
    // para poder usar el ngif y el ngfor necesitamos el CommonModule
    imports: [
        CommonModule
    ]
})
export class HeroesModule {}