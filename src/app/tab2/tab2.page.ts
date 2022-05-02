import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  buscando = false;
  peliculas: Pelicula[] = [];
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos', 'Animales fantásticos']

  constructor( private moviesService: MoviesService,
                private modalCtrl: ModalController ) {}

  buscar( event ) {
    const valor:string = event.detail.value;

    if ( valor.length === 0 ) {
      this.buscando = false; //para que desaparezca el spinner
      this.peliculas = []; //para que muestre las sugerencias nuevamente
      return;
    }

    this.buscando = true;
    this.moviesService.buscarPeliculas( valor )
      .subscribe( resp => {
        console.log( resp );
        this.peliculas = resp['results']; //de esta manera puedo traer las películas
        this.buscando = false;
      } )
  }


  //para ver el detalle de la pelicula
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
