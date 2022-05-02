import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  //recibo las películas en @Input
  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 2.7, //se van a mostrar tres, y un 20% del siguiente
    freeMode: true,
  }

  constructor( private modalCtrl: ModalController ) { }

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
