import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor( private storage: Storage,
                private toastCtrl: ToastController) {
    this.initDB();
    this.cargarFavoritos();
  }

  async presentToast( message:string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }
  
  private _storage: Storage | null = null;
  peliculas: PeliculaDetalle[] = [];
  
  async initDB(){
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }


  //cuando hago click en una película quiero guardar todo el detalle
  guardarPelicula( pelicula: PeliculaDetalle ){

    let existe = false;
    let mensaje = '';

    //primero busco la película (también podría usar un find como en la app de noticias)
    for ( const peli of this.peliculas ) {
      if ( peli.id === pelicula.id ) {
        existe = true;
        break;
      }
    }

    //si existe, debo excluir la película por el ID - si no existe, la debo agregar
    if ( existe ) {
      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id ); //devuelve un nuevo arreglo con todas excepto la buscada
      mensaje = 'Removido de favoritos';
    } else {
      this.peliculas.push(pelicula);
      mensaje = 'Agregada a favoritos';
    }

    //mostramos que se agregó o se quitó
    this.presentToast( mensaje );
    //guardamos el arreglo en el storage con la llave 'peliculas'
    this.storage.set('peliculas', this.peliculas);

    return !existe; //retorno la inversa
  }


  //cargamos las películas que tengo guardadas en el Storage
  async cargarFavoritos() { //esto regresa una promesa
    const peliculas = await this.storage.get('peliculas'); //esto puede dar null
    this.peliculas = peliculas || []; //si "peliculas" es "null" manda un arreglo vacío
    return this.peliculas;
  }


  //regresa una promesa que resuelve un true o un false, según si existe o no la película en el Storage
  async existePelicula( id ) {

    await this.cargarFavoritos();
    const existe = this.peliculas.find( peli => peli.id === id ); //o tiene todo el objeto, o tiene "undefined"

    return (existe) ? true : false; //quiero que me devuelva un booleano
  }

}
