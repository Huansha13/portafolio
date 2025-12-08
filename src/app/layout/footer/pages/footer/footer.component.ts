import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/core/utils/settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date = new Date();

  constructor(public settings: SettingsService) { }

  ngOnInit(): void {
  }

}
