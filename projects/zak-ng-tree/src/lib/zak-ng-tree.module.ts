import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZakNgTreeComponent } from './zak-ng-tree.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ZakNgTreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    ZakNgTreeComponent
  ]
})
export class ZakNgTreeModule { }
