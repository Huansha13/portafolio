import {Component, Input, OnInit} from '@angular/core';
import {Home} from "../../../work/model/home.interface";
import {ServiceBodyService} from "../../../work/service/serviceBody.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  data: Home;

  constructor(private _service: ServiceBodyService) { }

  ngOnInit(): void {
    this._service.getData()
      .subscribe(data => {
        this.data = data.home;
      })
  }

  sendEmail() {
    window.open(`mailto:${this.data.correo}`, '_blank');
  }
}
