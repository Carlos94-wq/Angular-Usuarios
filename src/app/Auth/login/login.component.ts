import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserCredentials } from 'src/app/Models/UserCrendentials.model';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public LoginForm: FormGroup;
  public Model: UserCredentials;

  constructor(
      private _AuthService: AuthService,
      private _Bulder: FormBuilder) { 

        this.Model = new UserCredentials();
        this.LoginForm = this._Bulder.group({
          correo: ['', Validators.required],
          contrasenia: ['', Validators.required]
        })
      }

  ngOnInit(): void {
  }

  public Login(){

    console.log('dasdsa')

    this.Model.Correo = this.LoginForm.value.correo;
    this.Model.Contrasenia = this.LoginForm.value.contrasenia;
    
    this._AuthService.Auth(this.Model).subscribe();
  }

}
