import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../Guards/auth.guard';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
    { path: 'Dashboard', component: DashboardComponent,
    canActivate: [AuthGuard],
        children:[
            { path: 'Usuarios', component: UsuariosComponent },
            { path: 'ListaUsuarios', component: UserListComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
