import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent
  ],
  exports: [
    SlideshowBackdropComponent, //lo exporto para usarlo fuera de este modulo
    SlideshowPosterComponent, //lo exporto para usarlo fuera de este modulo
    SlideshowParesComponent, //lo exporto para usarlo fuera de este modulo
    DetalleComponent, //lo exporto para usarlo fuera de este modulo
  ],
  imports: [
    CommonModule,
    IonicModule, //agrego esto para poder trabajar con componentes de Ionic
    PipesModule //agrego esto para trabajar con los pipes que tenga
  ]
})
export class ComponentsModule { }
