import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog.interface';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-blog-list-page',
  templateUrl: './blog-list-page.component.html',
  styleUrl: './blog-list-page.component.scss'
})
export class BlogListPageComponent implements OnInit, OnDestroy {
  posts: BlogPost[] = [];
  loading = true;
  private destroy$ = new Subject<void>();

  constructor(
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
    this.blogService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  openPost(slug: string) {
    this.router.navigate(['/blog', slug]);
  }
}
