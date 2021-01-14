import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioDto } from 'src/app/Models/UsuarioDto.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public Model: UsuarioDto;
  public form: FormGroup;
  
  constructor(private _Builder:FormBuilder) {

    this.Model = new UsuarioDto();
    
    this.form = this._Builder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      contrasenia: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  public AddUser(){

    this.Model.Nombre = this.form.value.nombre
    this.Model.Apellidos = this.form.value.apellidos
    this.Model.Correo = this.form.value.correo
    this.Model.Contrasenia = this.form.value.contrasenia
    
    console.log( this.Model)
  }

}
