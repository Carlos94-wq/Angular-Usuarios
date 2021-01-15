import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _AuthService: AuthService, private _activated: Router){ }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if (!this._AuthService.VerificarUsuario()) {
      this._activated.navigate(['/Login'])
    }

    return this._AuthService.VerificarUsuario();
  }
  
  
}
