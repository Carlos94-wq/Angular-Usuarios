import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UsuarioDto } from '../Models/UsuarioDto.model';

@Injectable()
export class UsuarioService {

  public Url = environment.BaseUrl + 'Usuario';
  public header: HttpHeaders;

  constructor(private _http:HttpClient) { 
    console.log('Servicio listo')
    this.header = new HttpHeaders();
  }

  public GetUsuarios(){
    return this._http.get(this.Url);
  }

  public PostUsuario(model: UsuarioDto){
    return this._http.post(this.Url, model, {headers: this.header.set('Content-Type', 'application/json')})
  }
}
