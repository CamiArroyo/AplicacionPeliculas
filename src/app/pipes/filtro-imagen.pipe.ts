import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroImagen'
})
export class FiltroImagenPipe implements PipeTransform {

  transform( peliculas: any[] ): any[] {

    //tomo el arreglo de películas y solo regreso las que tienen el backdrop_path
    return peliculas.filter( peli => {
      return peli.backdrop_path; //si existe, regresa la peli
    })
  }

}
