import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  pelicula: PeliculaDetalle = {}; //lo asignamos a un objeto vacío y en "interfaces" ponemos todas las propiedades como opcionales
  actores: Cast[] = [];
  oculto = 150;

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  };

  constructor( private moviesServices: MoviesService,
                private modalCtrl: ModalController) { }

  ngOnInit() {
    //console.log('ID:', this.id);

    this.moviesServices.getPeliculaDetalle( this.id )
      .subscribe( resp => {
        console.log(resp);
        this.pelicula = resp;
      } )

    this.moviesServices.getActoresPelicula( this.id )
    .subscribe( resp => {
      console.log(resp);
      this.actores = resp.cast; //debo hacer esto para poder trabajar con los datos
    } )
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

}
