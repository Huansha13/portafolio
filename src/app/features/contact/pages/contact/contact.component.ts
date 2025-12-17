import {Component, OnInit} from '@angular/core';
import {Home} from 'src/app/features/work/model/home.interface';
import {ServiceBodyService} from 'src/app/features/work/service/serviceBody.service';
import { DialogService } from 'primeng/dynamicdialog';
import { FormContactameComponent } from '../../modal/form-contactame/form-contactame.component';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from 'src/app/core/utils/settings.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [DialogService]
})
export class ContactComponent implements OnInit {
  data: Home;

  constructor(
    private readonly _service: ServiceBodyService,
    private readonly dialogService: DialogService,
    private readonly translate: TranslateService,
    public settings: SettingsService
  ) { }

  ngOnInit(): void {
    this._service.getData()
      .subscribe(data => {
        this.data = data.home;
      })
  }

  openContactDialog() {
    this.dialogService.open(FormContactameComponent, {
      header: this.translate.instant('contact.subtitle'),
      width: this.settings.view.sm ? '100%' : '40%',
      styleClass: 'contact-dialog'
    });
  }

  sendEmail() {
    if (this.data?.correo) {
      window.open(`mailto:${this.data.correo}`, '_blank');
    }
  }

  openLinkedIn() {
    if (this.data?.linkedin) {
      window.open(this.data.linkedin, '_blank');
    }
  }
}
