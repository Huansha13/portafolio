import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog.interface';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrl: './blog-detail-page.component.scss'
})
export class BlogDetailPageComponent implements OnInit, OnDestroy {
  post: BlogPost | null = null;
  markdownContent = '';
  loading = true;
  private destroy$ = new Subject<void>();
  private currentSlug = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private blogService: BlogService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.currentSlug = slug;
      this.loadPost(slug);
    }

    this.translate.onLangChange
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.loadPost(this.currentSlug));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadPost(slug: string) {
    this.loading = true;
    this.blogService.getPosts().subscribe({
      next: (posts) => {
        this.post = posts.find(p => p.slug === slug) || null;
        if (this.post) {
          this.loadMarkdown(slug);
        } else {
          this.loading = false;
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  loadMarkdown(slug: string) {
    const lang = this.translate.currentLang || 'es';
    const mdFile = lang === 'es' ? `${slug}.md` : `${slug}-${lang}.md`;
    
    this.http.get(`/assets/blog/posts/${mdFile}`, { responseType: 'text' })
      .subscribe({
        next: (content) => {
          this.markdownContent = content;
          this.loading = false;
        },
        error: () => {
          this.http.get(`/assets/blog/posts/${slug}.md`, { responseType: 'text' })
            .subscribe({
              next: (content) => {
                this.markdownContent = content;
                this.loading = false;
              },
              error: () => {
                this.loading = false;
              }
            });
        }
      });
  }
}
