import {Component, OnInit} from '@angular/core';
import {Home} from 'src/app/features/work/model/home.interface';
import {ServiceBodyService} from 'src/app/features/work/service/serviceBody.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  data: Home;

  constructor(private readonly _service: ServiceBodyService) { }

  ngOnInit(): void {
    this._service.getData()
      .subscribe(data => {
        this.data = data.home;
      })
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
