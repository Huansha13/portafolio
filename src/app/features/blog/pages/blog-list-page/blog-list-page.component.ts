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
  filteredPosts: BlogPost[] = [];
  allTags: string[] = [];
  selectedTag: string = '';
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
        this.filteredPosts = posts;
        this.extractTags();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  private extractTags() {
    const tagsSet = new Set<string>();
    this.posts.forEach(post => {
      post.tags.forEach(tag => tagsSet.add(tag));
    });
    this.allTags = Array.from(tagsSet).sort();
  }

  filterByTag(tag: string) {
    this.selectedTag = tag;
    if (tag === '') {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(post => post.tags.includes(tag));
    }
  }

  openPost(slug: string) {
    this.router.navigate(['/blog', slug]);
  }
}
