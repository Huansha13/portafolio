import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from "primeng/dropdown";
import {InputSwitchModule} from "primeng/inputswitch";
import {ButtonModule} from "primeng/button";
import { SelectButtonModule } from 'primeng/selectbutton';
import {SkeletonModule} from "primeng/skeleton";
import {TooltipModule} from "primeng/tooltip";
import {DividerModule} from "primeng/divider";
import {TerminalModule} from "primeng/terminal";
import {SpeedDialModule} from "primeng/speeddial";
import {MenuModule} from "primeng/menu";
import {SidebarModule} from "primeng/sidebar";

const myModulo = [
  DropdownModule,
  InputSwitchModule,
  ButtonModule,
  SelectButtonModule,
  SkeletonModule,
  TooltipModule,
  DividerModule,
  TerminalModule,
  SpeedDialModule,
  MenuModule,
  SidebarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [myModulo]
})
export class PrimeNgModule { }
