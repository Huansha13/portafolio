export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  tags: string[];
  isFree: boolean;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  duration: string;
  order: number;
  videoUrl?: string;
}
