import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from "primeng/dropdown";
import {InputSwitchModule} from "primeng/inputswitch";
import {ButtonModule} from "primeng/button";
import { SelectButtonModule } from 'primeng/selectbutton';

const myModulo = [
  DropdownModule,
  InputSwitchModule,
  ButtonModule,
  SelectButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [myModulo]
})
export class PrimeNgModule { }
