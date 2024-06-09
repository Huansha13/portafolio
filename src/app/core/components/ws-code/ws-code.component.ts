import {AfterViewInit, Component, OnInit} from '@angular/core';
import {WsCode} from "../../model/ws-code";
import {PrimeIcons} from "primeng/api";
import {SettingsService} from "../../utils/settings.service";
import {COLORS_WRITER} from "../../utils/constantes";
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-ws-code',
  templateUrl: './ws-code.component.html',
  styleUrl: './ws-code.component.scss'
})
export class WsCodeComponent implements OnInit, AfterViewInit {
  editor: WsCode;
  ejecutandoMetodo: boolean;
  constructor(public settings: SettingsService) {
  }

  ngOnInit() {
    this.editor = {
      titleEng: 'My Portfolio',
      titleEsp: 'Mi Portafolio',
      heder: {
        tolbarEng: ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'],
        tolbarEsp: ['Archivo', 'Editar', 'Ver', 'Ir', 'Ejecutar', 'Terminal', 'Ayuda'],
        options: [PrimeIcons.MINUS, PrimeIcons.EXPAND, PrimeIcons.TIMES],
      },
      body: {
        sidebar: [PrimeIcons.FOLDER_OPEN, PrimeIcons.SEARCH, PrimeIcons.OBJECTS_COLUMN]
      }
    }
  }

  ngAfterViewInit() {
    this.writerName();
  }

  writerName(): void {
    const target = document.querySelector('.comentario-code');
    const target3 = document.querySelector('.metodo-code');

    const writer = new Typewriter(target, COLORS_WRITER.textDefault);
    const writer3 = new Typewriter(target3, COLORS_WRITER.text);
    const writer3b = new Typewriter(target3, COLORS_WRITER.green400);
    const writer3c = new Typewriter(target3, COLORS_WRITER.text);

    writer.type('// 👋 ¡Hola mundo!').removeCursor().then(writer3.start.bind(writer3)).start();
    writer3.type('Quien.').removeCursor().then(writer3b.start.bind(writer3b));
    writer3b.type('Soy()').removeCursor().then(writer3c.start.bind(writer3c));
    writer3c.type(';').then(() => {
      this.ejecutandoMetodo = true;
      setTimeout(() => {
        this.ejecutandoMetodo = false;
        this.settings.isTeminalRunning = true;
      }, 500)
    });
  }
}
