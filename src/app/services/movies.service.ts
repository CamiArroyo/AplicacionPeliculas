import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB, PeliculaDetalle, RespuestaCredits } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({ //no hace falta inyectar nada para trabajar con este servicio porque está provisto en el root
  providedIn: 'root'
})

export class MoviesService {

  private popularesPage = 0;

  //para hacer peticiones HTTP necesito importar "HttpClientModule" en el "app.module.ts"
  constructor( private http: HttpClient ) { }

  private ejecutarQuery<T>( query: string ) { //voy a recibir el query y el tipo de dato que quiere que emita
    query = URL + query;
    query += `&api_key=${ apiKey }&language=es&include_image_language=es`;

    return this.http.get<T>( query );
  }


  //para el tercer slide
  getPopulares() {

    //voy a incrementar en 1 el número de página -> la primera vez es 0+1=1
    this.popularesPage++;

    //para indicar qué página quiero solo debo mandar un argumento "page" al servicio
    const query = `/discover/movie?sort_by=popularity.desc&page=${ this.popularesPage }`;

    //definimos acá que el tipo de respuesta es "<RespuestaMDB>"
    return this.ejecutarQuery<RespuestaMDB>(query);

  }


  //para el primer y el segundo slide
  getFeature() {

    const hoy = new Date();
    const ultimoDia = new Date( hoy.getFullYear(), hoy.getMonth() + 1, 0 ).getDate();
    const mes = hoy.getMonth() + 1;

    let mesString;

    if ( mes < 10 ) {
      mesString = '0' + mes; //se concatena un 0 antes
    } else {
      mesString = mes;
    }

    const inicio = `${ hoy.getFullYear() }-${ mesString }-01`
    const fin    = `${ hoy.getFullYear() }-${ mesString }-${ ultimoDia }`

    //definimos acá que el tipo de respuesta es "<RespuestaMDB>" -> ver "interfaces"
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${ inicio }&primary_release_date.lte=${ fin }`);
  }


  //para obtener el detalle de la película
  getPeliculaDetalle( id: string ) {
    //definimos acá que el tipo de respuesta es "<PeliculaDetalle>" -> ver "interfaces"
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${ id }?a=1`); //le agregamos "?a=1"
  }


  //para obtener el detalle de los actores
  getActoresPelicula( id: string ) {
    //definimos acá que el tipo de respuesta es "<PeliculaDetalle>" -> ver "interfaces"
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${ id }/credits?a=1`); //le agregamos "?a=1" para que funcione bien el query
  }
}
