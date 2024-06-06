import {Component, Input, OnInit} from '@angular/core';
import {About} from "../../model/about.interface";

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss'
})
export class SobreMiComponent implements OnInit {
  @Input() data: About;

  ngOnInit() {
  }
}
