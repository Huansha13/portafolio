import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BlogPost } from '../../models/blog.interface';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  @Input() post!: BlogPost;
  @Output() cardClick = new EventEmitter<string>();

  onCardClick() {
    this.cardClick.emit(this.post.slug);
  }
}
