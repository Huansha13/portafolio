export interface BlogPostTranslation {
  title: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  category: string;
}

export interface BlogPostRaw {
  id: string;
  slug: string;
  author: string;
  date: string;
  coverImage: string;
  published: boolean;
  active: boolean;
  translations: {
    [lang: string]: BlogPostTranslation;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  author: string;
  date: string;
  coverImage: string;
  published: boolean;
  active: boolean;
  title: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  category: string;
}
