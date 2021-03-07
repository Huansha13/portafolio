import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  constructor( private spinnerServices: NgxSpinnerService) { }

  ngOnInit(): void {

    this.spinner();

  }


  spinner():void {
    this.spinnerServices.show();
    setTimeout(() => {
      this.spinnerServices.hide()
    }, 3500 )

  }

}
