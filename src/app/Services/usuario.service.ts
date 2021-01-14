import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsuarioService {

  public Url = environment.BaseUrl;

  constructor(private _http:HttpClient) { 
    console.log('Servicio listo')
  }

  public GetUsuarios(){
    return this._http.get(this.Url + 'Usuario');
  }
}
