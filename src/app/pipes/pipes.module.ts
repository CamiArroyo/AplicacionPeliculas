import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { ParesPipe } from './pares.pipe';
import { FiltroImagenPipe } from './filtro-imagen.pipe';



@NgModule({
  declarations: [
    ImagenPipe, //esto se agregó solo
    ParesPipe, //esto se agregó solo
    FiltroImagenPipe, //esto se agregó solo
  ],
  exports: [
    ImagenPipe, //a esto lo agrego yo: como tengo que usarlo afuera de este módulo, lo exporto
    ParesPipe, //a esto lo agrego yo: como tengo que usarlo afuera de este módulo, lo exporto
    FiltroImagenPipe //a esto lo agrego yo: como tengo que usarlo afuera de este módulo, lo exporto
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
