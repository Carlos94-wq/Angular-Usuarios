import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './Auth/Auth.routes';
import { NotPageFoundComponent } from './Pages/not-page-found/not-page-found.component';
import { PagesRoutingModule } from './Pages/pages.routes';

const App_Routing: Routes = [

  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  { path: '**', component: NotPageFoundComponent },
  
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(App_Routing),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
