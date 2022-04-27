import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces'; //importante haber creado esto

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];

  constructor( private moviesService: MoviesService ) {} //acá llamo al servicio creado

  ngOnInit(): void { //cuando se inicializa el componente
    this.moviesService.getFeature()
      .subscribe( resp => {
        this.peliculasRecientes = resp.results;
      } );

      this.moviesService.getPopulares()
        .subscribe( resp => {
          console.log('Populares:', resp)
          this.populares = resp.results;
        } );
  }

}
