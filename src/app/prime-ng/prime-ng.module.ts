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
import {ChipModule} from "primeng/chip";
import {FieldsetModule} from "primeng/fieldset";
import {AvatarModule} from "primeng/avatar";
import {AvatarGroupModule} from "primeng/avatargroup";
import {CardModule} from "primeng/card";

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
  SidebarModule,
  ChipModule,
  FieldsetModule,
  AvatarModule,
  AvatarGroupModule,
  CardModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [myModulo]
})
export class PrimeNgModule { }
