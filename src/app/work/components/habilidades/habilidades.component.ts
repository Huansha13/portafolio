import {Component, OnInit} from '@angular/core';
import {PrimeIcons} from "primeng/api";
import {IconsPick} from "../../../../assets/icons/Icons.pick";
import {SettingsService} from "../../../core/utils/settings.service";
import {TranslateService} from "@ngx-translate/core";

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  technologies: { name: string; icon: string }[];
}

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent implements OnInit {
  skillCategories: SkillCategory[] = [];

  constructor(
    public settings: SettingsService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.loadSkillCategories();
    this.translate.onLangChange.subscribe(() => {
      this.loadSkillCategories();
    });
  }

  loadSkillCategories() {
    this.skillCategories = [
      {
        title: this.translate.instant('skills.categories.frontend.title'),
        subtitle: this.translate.instant('skills.categories.frontend.subtitle'),
        icon: 'pi pi-desktop',
        technologies: [
          {name: 'HTML 5', icon: IconsPick.HTML5},
          {name: 'CSS 3', icon: IconsPick.CSS3},
          {name: 'JavaScript', icon: IconsPick.JS},
          {name: 'TypeScript', icon: IconsPick.TYPESCRIPT},
          {name: 'Vue.js', icon: IconsPick.VUEJS},
          {name: 'Angular', icon: IconsPick.ANGULAR17},
          {name: 'PrimeNG', icon: PrimeIcons.PRIME},
          {name: 'Angular Material', icon: IconsPick.ANGULAR_MATERIAL},
          {name: 'SCSS', icon: IconsPick.SASS},
          {name: 'Bootstrap', icon: IconsPick.BOOTSTRAP5}
        ]
      },
      {
        title: this.translate.instant('skills.categories.backend.title'),
        subtitle: this.translate.instant('skills.categories.backend.subtitle'),
        icon: 'pi pi-database',
        technologies: [
          {name: 'Spring Boot', icon: IconsPick.SPRING},
          {name: 'Java', icon: IconsPick.JAVA},
          {name: 'Node.js', icon: IconsPick.NODEJS},
          {name: 'PHP', icon: IconsPick.HP},
          {name: 'Python', icon: IconsPick.PYTHON},
          {name: 'Redis', icon: IconsPick.REDIS}
        ]
      },
      {
        title: this.translate.instant('skills.categories.mobile.title'),
        subtitle: this.translate.instant('skills.categories.mobile.subtitle'),
        icon: 'pi pi-mobile',
        technologies: [
          {name: 'Java', icon: IconsPick.JAVA},
          {name: 'SDK Android', icon: IconsPick.ANDROID},
          {name: 'Capacitor', icon: PrimeIcons.TIMES_CIRCLE},
          {name: 'Cordova', icon: PrimeIcons.BOX}
        ]
      },
      {
        title: this.translate.instant('skills.categories.database.title'),
        subtitle: this.translate.instant('skills.categories.database.subtitle'),
        icon: 'pi pi-database',
        technologies: [
          {name: 'SQL', icon: PrimeIcons.DATABASE},
          {name: 'Oracle', icon: IconsPick.ORACLE},
          {name: 'MySQL', icon: IconsPick.MYSQL},
          {name: 'Maria DB', icon: PrimeIcons.DATABASE},
          {name: 'PostgreSQL', icon: IconsPick.POSTGRESQL},
          {name: 'MongoDB', icon: IconsPick.MONGODB},
          {name: 'Firebase', icon: IconsPick.FIREBASE}
        ]
      },
      {
        title: this.translate.instant('skills.categories.devops.title'),
        subtitle: this.translate.instant('skills.categories.devops.subtitle'),
        icon: 'pi pi-cloud',
        technologies: [
          {name: 'Git', icon: IconsPick.GIT},
          {name: 'Docker', icon: IconsPick.DOCKER},
          {name: 'AWS', icon: IconsPick.AWS},
          {name: 'CodeCatalyst', icon: IconsPick.CODECATALYST}
        ]
      },
      {
        title: this.translate.instant('skills.categories.tools.title'),
        subtitle: this.translate.instant('skills.categories.tools.subtitle'),
        icon: 'pi pi-palette',
        technologies: [
          {name: 'Figma', icon: IconsPick.FIGMA},
          {name: 'Adobe XD', icon: PrimeIcons.PEN_TO_SQUARE},
          {name: 'Lunacy', icon: PrimeIcons.PALETTE},
          {name: 'GitHub', icon: IconsPick.GITHUB},
          {name: 'GitLab', icon: IconsPick.GITLAB},
          {name: 'Bitbucket', icon: IconsPick.BITBUCKET},
          {name: 'SVN', icon: PrimeIcons.CODE}
        ]
      }
    ];
  }
}
