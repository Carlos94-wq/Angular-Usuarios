import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class CatalogoService {

  public Url = environment.BaseUrl;

  constructor(private _http: HttpClient) { }

  public GetRoles(){
    return this._http.get(this.Url + 'Catalogo/GetRoles');
  }
}
