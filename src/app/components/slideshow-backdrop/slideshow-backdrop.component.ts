import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

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

  constructor() { }

  ngOnInit() {}

}
