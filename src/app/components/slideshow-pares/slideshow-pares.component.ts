import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

    //recibo las películas en @Input
    @Input() peliculas: Pelicula[] = [];

    slideOpts = {
      slidesPerView: 2.2, //se va a mostrar uno, y un 10% del siguiente
      freeMode: true,
      spaceBetween: -70,
    }

  constructor() { }

  ngOnInit() {}

}
