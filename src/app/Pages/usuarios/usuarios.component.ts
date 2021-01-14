import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioDto } from 'src/app/Models/UsuarioDto.model';
import { CatalogoService } from 'src/app/Services/catalogo.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  public Model: UsuarioDto;
  public Roles:any[];
  public form: FormGroup;
  
  constructor( 
      private _Builder:FormBuilder, 
      private _Catalgo: CatalogoService,
      private _Service: UsuarioService) {

    this.Model = new UsuarioDto();
    
    this.form = this._Builder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      contrasenia: ['', Validators.required],
      idRol: ['', Validators.required]
    });

    this._Catalgo.GetRoles().subscribe(resp =>{
      this.Roles = resp['data'];
      console.log(this.Roles);
    });
  }

  public AddUser(){

    this.Model.Nombre = this.form.value.nombre
    this.Model.Apellidos = this.form.value.apellidos
    this.Model.Correo = this.form.value.correo
    this.Model.Contrasenia = this.form.value.contrasenia
    this.Model.IdRol = parseInt(this.form.value.idRol)
    
    this._Service.PostUsuario(this.Model).subscribe((resp: boolean)=>{
      if (resp['data']) {
        alert('Usuario registrado correctamente');
      }
    })
  }

}
