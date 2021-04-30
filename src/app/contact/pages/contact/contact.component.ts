import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts$ = this.contactService.contacto;
  constructor( private contactService:  ContactService ) { }

  ngOnInit(): void {
  }

}
