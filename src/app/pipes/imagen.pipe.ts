import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment'; //debe ser el "environment" normal (no el de producción)

const URL = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string, size: string = 'w500' ): string {

    if (!img) { //si no existe imagen, manejaremos una imagen por defecto
      return './assets/no-image-banner.jpg';
    }

    const imgUrl = `${ URL }/${ size }${ img }`;

    console.log('URL', imgUrl)

    return imgUrl;
  }

}
