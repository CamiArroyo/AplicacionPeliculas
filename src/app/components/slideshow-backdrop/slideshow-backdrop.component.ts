import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  //recibo las películas en @Input
  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 1.2, //se va a mostrar uno, y un 10% del siguiente
    freeMode: true,
  }

  constructor( private modalCtrl: ModalController ) { } //inyecamos acá el modal

  ngOnInit() {}

  //ver documentación de los modal
  async verDetalle( id: string ) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      } //es lo mismo hacer "id: id"
    })

    modal.present();
  }
}
