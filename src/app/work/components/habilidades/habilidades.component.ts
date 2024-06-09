import {Component, OnInit} from '@angular/core';
import {Habilidad} from "../../model/habilities.interface";
import {PrimeIcons} from "primeng/api";
import {IconsPick} from "../../../../assets/icons/Icons.pick";
import {SettingsService} from "../../../core/utils/settings.service";

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent implements OnInit {
  dataHabilidades: Habilidad[] = [];

  constructor(public settings: SettingsService) {
  }

  ngOnInit() {
    this.dataHabilidades = [
      {
        nombre: "Front-End",
        tecnologia: [
          {icon: IconsPick.HTML5, label: "HTML 5"},
          {icon: IconsPick.CSS3, label: "CSS 3"},
          {icon: IconsPick.JS, label: "JavaScript"},
          {icon: IconsPick.TYPESCRIPT, label: "TypeScript"},
          {icon: IconsPick.VUEJS, label: "Vue.js"},
          {icon: IconsPick.ANGULAR17, label: "Angular Cli"},
          {icon: PrimeIcons.PRIME, label: "PrimeNG"},
          {icon: IconsPick.ANGULAR_MATERIAL, label: "Angular Material"},
          {icon: IconsPick.SASS, label: "SCSS"},
          {icon: IconsPick.BOOTSTRAP5, label: "Bootstrap"}
        ]
      },
      {
        nombre: "Back-End",
        tecnologia: [
          {icon: IconsPick.SPRING, label: "Spring Boot"},
          {icon: IconsPick.JAVA, label: "Java"},
          {icon: IconsPick.NODEJS, label: "Node JS"},
          {icon: IconsPick.HP, label: "Php"},
          {icon: IconsPick.PYTHON, label: "Python"},
          {icon: IconsPick.REDIS, label: "Redis"},
        ]
      },
      {
        nombre: "Desarrollo Móvil",
        tecnologia: [
          {icon: IconsPick.JAVA, label: "Java"},
          {icon: IconsPick.ANDROID, label: "SDK Android"},
          {icon: PrimeIcons.TIMES_CIRCLE, label: "Capacitor"},
          {icon: PrimeIcons.BOX, label: "Cordova"}
        ]
      },
      {
        nombre: "Bases de datos",
        tecnologia: [
          {icon: PrimeIcons.DATABASE, label: "SQL"},
          {icon: IconsPick.ORACLE, label: "Oracle"},
          {icon: IconsPick.MYSQL, label: "MySQL"},
          {icon: PrimeIcons.DATABASE, label: "Maria DB"},
          {icon: IconsPick.POSTGRESQL, label: "PostgreSQL"},
          {icon: IconsPick.MONGODB, label: "MongoDB"},
          {icon: IconsPick.FIREBASE, label: "Firebase"}
        ]
      },
      {
        nombre: "DevOps",
        tecnologia: [
          {icon: IconsPick.GIT, label: "Git"},
          {icon: IconsPick.DOCKER, label: "Docker"},
          {icon: IconsPick.AWS, label: "AWS"},
          {icon: IconsPick.CODECATALYST, label: "CodeCatalyst"}
        ]
      },
      {
        nombre: "UI/UX & Tools",
        tecnologia: [
          {icon: IconsPick.FIGMA, label: "Figma"},
          {icon: PrimeIcons.PEN_TO_SQUARE, label: "Adobe XD"},
          {icon: PrimeIcons.PALETTE, label: "Lunacy"},
          {icon: IconsPick.GITHUB, label: "GitHub"},
          {icon: IconsPick.GITLAB, label: "GitLab"},
          {icon: IconsPick.BITBUCKET, label: "Bitbucket"},
          {icon: PrimeIcons.CODE, label: "SVN"}
        ]
      },
      /*{
        nombre: "Idiomas",
        tecnologia: [
          {icon: undefined, label: "Español"},
          {icon: undefined, label: "Inglés"},
          {icon: undefined, label: "Quechua"}
        ]
      }*/
    ];

  }
}
