import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../service/contact.service';
import {ServiceBodyService} from '../../../work/service/serviceBody.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts$ = this.contactService.contacto;
  home$ = this.homeSer.homes;
  constructor( private contactService:  ContactService, private homeSer: ServiceBodyService) { }

  ngOnInit(): void {
  }

}
