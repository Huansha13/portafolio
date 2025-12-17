import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog.interface';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import {SettingsService} from "../../../../core/utils/settings.service";

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.scss'
})
export class BlogSectionComponent implements OnInit, OnDestroy {
  blogPosts: BlogPost[] = [];
  loading = true;
  private destroy$ = new Subject<void>();

  constructor(
    public settings: SettingsService,
    private blogService: BlogService,
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.loadPosts();

    this.translate.onLangChange
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.loadPosts());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadPosts() {
    this.loading = true;
    this.blogService.getRecentPosts(3).subscribe({
      next: (posts) => {
        this.blogPosts = posts;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  navigateToPost(slug: string) {
    this.router.navigate(['/blog', slug]);
  }

  viewAllPosts() {
    this.router.navigate(['/blog']);
  }
}
