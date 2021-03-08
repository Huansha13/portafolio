import {AfterViewInit, Component, OnInit} from '@angular/core';

//external
import Typewriter from 't-writer.js';
import {$} from 'protractor';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, AfterViewInit{

  detail: string = "Implementación en proyectos";

  public phone = '[ +51944519328 ]'
  public msm = "Hola! Quieres contactarte conmigo!";



  constructor() { }

  ngOnInit(): void {
    this.writerName();
  }
  ngAfterViewInit() {

  }



  writerName():void {
    const target = document.querySelector('.tw');
    const target2 = document.querySelector('.tw2');

    const writer1 = new Typewriter(target, {
      typeSpeed: 60,
      typeColor: '#fff',
      cursorColor: '#fff'
    });

    const writer2 = new Typewriter(target2, {
      typeSpeed: 60,
      typeColor: '#fff',
      cursorColor: '#fff'
    });

    writer1
      .type('Hola soy,')
      .removeCursor()
      .then(writer2.start.bind(writer2))
      .start();

    writer2
      .type('Yefer')
      .rest(900)
      .clear()
      .type('Frank Huansha')
      .rest(50000)
      .clear()
      .removeCursor()
      .then(writer1.start.bind(writer1));
  }


}
