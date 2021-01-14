import { Component, OnInit } from '@angular/core';
import { UsuarioViewModel } from 'src/app/Models/UsuariViewModel.model';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public Model: UsuarioViewModel[];
  public ShowTable: boolean;

  constructor(private _Service: UsuarioService) {
    this._Service.GetUsuarios().subscribe((resp: UsuarioViewModel)=>{
      this.Model = resp['data'];

      if (this.Model.length == 0) {
        this.ShowTable = false;
        console.log('No se Encontraron resultados')
      }
      else{
        this.ShowTable = true;
        console.log('Hay ' + this.Model.length + ' resultados');
      }

    })
  }

  ngOnInit(): void {
  }

}
