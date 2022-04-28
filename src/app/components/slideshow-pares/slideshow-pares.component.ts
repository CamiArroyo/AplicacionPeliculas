import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

    //recibo las películas en @Input
    @Input() peliculas: Pelicula[] = [];
    @Output() cargarMas = new EventEmitter();

    slideOpts = {
      slidesPerView: 2.2, //se va a mostrar uno, y un 10% del siguiente
      freeMode: true,
      spaceBetween: -70,
    }

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

  onClick() {
    //de esta manera el "slideshow-pares" va a emitirle al padre "hay que cargar más películas" (ver "tab1.page")
    this.cargarMas.emit();
  }

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
