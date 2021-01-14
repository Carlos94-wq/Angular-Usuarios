import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../Shared/shared.module';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { UserListComponent } from './user-list/user-list.component';


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
    SharedModule
  ]
})
export class PagesModule { }
