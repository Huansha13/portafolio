import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from "primeng/dropdown";
import { InputSwitchModule } from "primeng/inputswitch";
import { ButtonModule } from "primeng/button";
import { SelectButtonModule } from 'primeng/selectbutton';
import { SkeletonModule } from "primeng/skeleton";
import { TooltipModule } from "primeng/tooltip";
import { DividerModule } from "primeng/divider";
import { TerminalModule } from "primeng/terminal";
import { SpeedDialModule } from "primeng/speeddial";
import { MenuModule } from "primeng/menu";
import { SidebarModule } from "primeng/sidebar";
import { ChipModule } from "primeng/chip";
import { FieldsetModule } from "primeng/fieldset";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { CardModule } from "primeng/card";
import { PanelModule } from "primeng/panel";
import { TableModule } from "primeng/table";
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { BadgeModule } from 'primeng/badge';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';

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
  CardModule,
  PanelModule,
  TableModule,
  InputTextModule,
  InputTextModule,
  InputTextareaModule,
  ToastModule,
  RippleModule,
  ImageModule,
  GalleriaModule,
  BadgeModule,
  InputGroupModule,
  InputGroupAddonModule,
  TabViewModule,
  TabMenuModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [myModulo]
})
export class PrimeNgModule { }
