export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'anxiety' | 'depression' | 'adhd';
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  image: string;
  modules: CourseModule[];
  supportResources: SupportResource[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed?: boolean;
}

export interface SupportResource {
  id: string;
  title: string;
  type: 'article' | 'video' | 'exercise' | 'meditation';
  url: string;
}

export interface MoodEntry {
  mood: 'great' | 'okay' | 'bad';
  timestamp: Date;
  notes?: string;
  triggers?: string[];
  activities?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: {
    learningPace: 'slow' | 'medium' | 'fast';
    notifications: boolean;
    themes: string[];
    primaryCondition?: 'anxiety' | 'depression' | 'adhd';
  };
  moodHistory: MoodEntry[];
  enrolledCourses: string[];
  progress: {
    [courseId: string]: {
      lastAccessed: Date;
      completedModules: string[];
      notes: string[];
    };
  };
}