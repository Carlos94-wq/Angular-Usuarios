import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SideBarComponent,
    HeaderComponent,
    AlertComponent
  ]
})
export class SharedModule { }
