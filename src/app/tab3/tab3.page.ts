import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, Genre } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];

  favoritoPorGenero: any[] = [];

  constructor( private dataLocal: DataLocalService,
                private moviesService: MoviesService ) {}

  //esto se dispara cada vez que la página se abre (no solo la primera vez como "ngOnInit")
  async ionViewWillEnter() {
    this.peliculas = await this.dataLocal.cargarFavoritos();
    this.generos = await this.moviesService.cargarGeneros();

    this.pelisPorGenero( this.generos, this.peliculas );
  }

  pelisPorGenero( generos: Genre[], peliculas: PeliculaDetalle[]) {

    this.favoritoPorGenero = [];

    generos.forEach( genero => {
      this.favoritoPorGenero.push({
        genero: genero.name,
        //filter retorna un nuevo arreglo con las películas que cumplen
        pelis: peliculas.filter( peli => {
          return peli.genres.find( genre => genre.id === genero.id );
        } )
      });
    });

    console.log(this.favoritoPorGenero);

  }

}
