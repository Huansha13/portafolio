import { Component, OnInit } from '@angular/core';
import {ResumeService} from '../../service/resume.service';
import {element} from 'protractor';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  educacion:any[] = [];
  pp:any[] = [];
  experiencia:any[] = [];

  constructor(private _resumeService:ResumeService) { }

  ngOnInit(): void {
    this.getEducacon();
    this.getPp();
    this.getExperiencia();
  }

  getEducacon() {
    this._resumeService.getEducacion().subscribe(data => {
      data.forEach((element:any)=> {
        this.educacion.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }

  getPp() {
    this._resumeService.getPp().subscribe(data => {
      data.forEach((element:any) =>{
       this.pp.push({
         id:element.payload.doc.id,
         ...element.payload.doc.data()
       })
      });
    });
  }
  getExperiencia() {
    this._resumeService.getExperciencia().subscribe(data => {
      data.forEach((element:any)=> {
        this.experiencia.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
    })
  }
}
