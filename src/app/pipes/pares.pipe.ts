import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pares'
})
export class ParesPipe implements PipeTransform {

  //creo este pipe para transformar el arreglo de películas de 2 en 2
  transform( arr: any[] ): any[] {

    const pares = arr.reduce( (result, value, index, array) => {

      if ( index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []);

    console.log(pares);
    return pares; //tengo mi pipe de pares
  }

}
