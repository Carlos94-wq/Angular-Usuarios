import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../Shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsuarioService } from '../Services/usuario.service';


@NgModule({
  declarations: [
    UsuariosComponent,
    DashboardComponent,
    NotPageFoundComponent,
    UserListComponent
  ],
  exports:[
    UsuariosComponent,
    DashboardComponent,
    NotPageFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    UsuarioService
  ]
})
export class PagesModule { }
