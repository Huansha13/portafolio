import {AfterViewInit, Component, OnInit} from '@angular/core';
import {WsCode} from "../../model/ws-code";
import {PrimeIcons} from "primeng/api";
import {SettingsService} from "../../utils/settings.service";
import {COLORS_WRITER} from "../../utils/constantes";
import Typewriter from 't-writer.js';
import {ExcelService} from "../../utils/excel.service";
import {WsCodeExcel} from "../../model/excel.model";

@Component({
  selector: 'app-ws-code',
  templateUrl: './ws-code.component.html',
  styleUrl: './ws-code.component.scss'
})
export class WsCodeComponent implements OnInit, AfterViewInit {
  editor: WsCode;
  spinnerLoading = false;
  dataWriters: WsCodeExcel[] = [];

  constructor(public settings: SettingsService,
              private readonly excelService: ExcelService) {
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
    };
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.spinnerLoading = true;
      this.excelService.obtenerMssWsCode().then(wsCode => {
        this.spinnerLoading = false;
        this.dataWriters = wsCode;
        this.writerName();
      });
    });
  }

  writerName(): void {
    this.settings.isTeminalRunning = true;
    const target = document.querySelector('.comentario-code');
    const target2 = document.querySelector('.comentario-code-2');
    const target3 = document.querySelector('.comentario-code-3');

    const writer = new Typewriter(target, COLORS_WRITER.textDefault);
    const writer2 = new Typewriter(target2, COLORS_WRITER.text);
    const writer3 = new Typewriter(target3, COLORS_WRITER.text);

    writer.type(this.dataWriters[0].mss).removeCursor()
      .then(writer2.start.bind(writer2))
      .start();

    writer2
      .type(this.dataWriters[1].mss)
      .removeCursor()
      .then(writer3.start.bind(writer3));

    writer3
      .type(this.dataWriters[2].mss)
      .removeCursor()
      .then(writer3.start.bind(writer3));
  }
}
