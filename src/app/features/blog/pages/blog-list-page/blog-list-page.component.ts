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
  allCategories: string[] = [];
  selectedTag: string = '';
  selectedTags: string[] = [];
  selectedCategory: string = '';
  searchQuery: string = '';
  loading = true;
  private destroy$ = new Subject<void>();

  get categoryOptions() {
    const allLabel = this.translate.instant('blog.list.allCategories');
    return [
      { label: allLabel, value: '' },
      ...this.allCategories.map(cat => ({ label: cat, value: cat }))
    ];
  }

  get tagOptions() {
    return this.allTags.map(tag => ({ label: tag, value: tag }));
  }

  constructor(
    private blogService: BlogService,
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.loadPosts();

    this.translate.onLangChange
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.selectedTags = [];
        this.selectedCategory = '';
        this.searchQuery = '';
        this.loadPosts();
      });
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
    const categoriesSet = new Set<string>();
    this.posts.forEach(post => {
      post.tags.forEach(tag => tagsSet.add(tag));
      if (post.category) categoriesSet.add(post.category);
    });
    this.allTags = Array.from(tagsSet).sort();
    this.allCategories = Array.from(categoriesSet).sort();
  }

  filterByTag(tag: string) {
    this.selectedTag = tag;
    this.applyFilters();
  }

  filterByTags() {
    this.applyFilters();
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onSearch(event: any) {
    this.searchQuery = event.target.value.toLowerCase();
    this.applyFilters();
  }

  clearSearch() {
    this.searchQuery = '';
    this.applyFilters();
  }

  applyFilters() {
    let filtered = this.posts;

    if (this.selectedCategory) {
      filtered = filtered.filter(post => post.category === this.selectedCategory);
    }

    if (this.selectedTags.length > 0) {
      filtered = filtered.filter(post => 
        this.selectedTags.some(tag => post.tags.includes(tag))
      );
    }

    if (this.searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(this.searchQuery) ||
        post.excerpt.toLowerCase().includes(this.searchQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(this.searchQuery))
      );
    }

    this.filteredPosts = filtered;
  }



  openPost(slug: string) {
    this.router.navigate(['/blog', slug]);
  }
}
