import {Component, Input} from '@angular/core';
import {SettingsService} from "../../utils/settings.service";

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent {
  @Input() estadoEjecucion: boolean = false;
  constructor(public settings: SettingsService) {
  }
}
