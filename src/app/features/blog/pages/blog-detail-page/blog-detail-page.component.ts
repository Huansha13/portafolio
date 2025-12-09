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
  headings: { id: string; text: string; level: number }[] = [];
  activeHeadingId = '';
  sidebarVisible = false;
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
          setTimeout(() => this.extractHeadings(), 100);
        },
        error: () => {
          this.http.get(`/assets/blog/posts/${slug}.md`, { responseType: 'text' })
            .subscribe({
              next: (content) => {
                this.markdownContent = content;
                this.loading = false;
                setTimeout(() => this.extractHeadings(), 100);
              },
              error: () => {
                this.loading = false;
              }
            });
        }
      });
  }

  private extractHeadings() {
    const content = document.querySelector('.post-content');
    if (!content) return;

    const headingElements = content.querySelectorAll('h2, h3');
    this.headings = Array.from(headingElements).map((el, index) => {
      const id = `heading-${index}`;
      el.id = id;
      return {
        id,
        text: el.textContent || '',
        level: parseInt(el.tagName.substring(1))
      };
    });

    this.setupScrollSpy();
  }

  private setupScrollSpy() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeHeadingId = entry.target.id;
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    this.headings.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });
  }

  onHeadingClick(event: Event, id: string) {
    this.sidebarVisible = false;
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  scrollToHeading(event: Event, id: string) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
