import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit {

  active: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }

  mostarOcultar() {
    this.active = !this.active;
  }
}
