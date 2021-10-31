import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ZakNgTreeComponent } from './zak-ng-tree.component';

@NgModule({
  declarations: [
    ZakNgTreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [
    ZakNgTreeComponent
  ]
})
export class ZakNgTreeModule { }
