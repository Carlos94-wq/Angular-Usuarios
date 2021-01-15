import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { UserCredentials } from '../Models/UserCrendentials.model';

@Injectable()
export class AuthService {

  public url = environment.BaseUrl + 'Auth';
  public header: HttpHeaders;
  
  constructor(private _http: HttpClient, private _activated: Router) { 
    this.header = new HttpHeaders();
  }

  public VerificarUsuario(): boolean{
    const usuario =  sessionStorage.getItem('Usuario') || '';
    return usuario.length > 2
  }

  public Auth(Credentials: UserCredentials ){
    return this._http.post(this.url, Credentials, {
       headers: this.header.set('Content-Type', 'application/json')
    })
    .pipe(
      tap( (resp:any) =>{
        sessionStorage.setItem('Usuario', JSON.stringify(resp['data']))
        this._activated.navigate(['/Dashboard'])
      }),
    );
  }
}
