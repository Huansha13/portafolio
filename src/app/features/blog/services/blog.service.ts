import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogPost, BlogPostRaw } from '../models/blog.interface';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private postsUrl = '/assets/blog/posts.json';

  constructor(
    private http: HttpClient,
    private translate: TranslateService
  ) {}

  getPosts(lang?: string): Observable<BlogPost[]> {
    const currentLang = lang || this.translate.currentLang || 'es';
    
    return this.http.get<{ posts: BlogPostRaw[] }>(this.postsUrl).pipe(
      map(response => response.posts
        .filter(post => post.published && post.active && post.translations[currentLang])
        .map(post => this.mapToLocalizedPost(post, currentLang))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      )
    );
  }

  getRecentPosts(limit: number = 3, lang?: string): Observable<BlogPost[]> {
    return this.getPosts(lang).pipe(
      map(posts => posts.slice(0, limit))
    );
  }

  private mapToLocalizedPost(post: BlogPostRaw, lang: string): BlogPost {
    const translation = post.translations[lang];
    return {
      id: post.id,
      slug: post.slug,
      author: post.author,
      date: post.date,
      coverImage: post.coverImage,
      published: post.published,
      active: post.active,
      title: translation.title,
      excerpt: translation.excerpt,
      readTime: translation.readTime,
      tags: translation.tags,
      category: translation.category
    };
  }
}
