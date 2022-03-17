import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZakNgTreeComponent } from './zak-ng-tree.component';

@NgModule({
  declarations: [
    ZakNgTreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ZakNgTreeComponent
  ]
})
export class ZakNgTreeModule { }
