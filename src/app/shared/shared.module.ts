import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from "./navbar/navbar.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule, 
    MatButtonModule
  ],
  exports:[
    CommonModule,
    NavbarComponent,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [NavbarComponent]
})
export class SharedModule { }
