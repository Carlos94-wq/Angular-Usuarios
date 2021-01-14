import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _AuthService: AuthService){ }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this._AuthService.VerificarUsuario();
  }
  
}
