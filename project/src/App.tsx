import React from 'react';
import { Header } from './components/Header';
import { MoodTracker } from './components/MoodTracker';
import { CourseCard } from './components/CourseCard';
import type { Course } from './types';

const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Managing Anxiety Through Mindful Learning',
    description: 'Learn effective strategies to manage anxiety while studying and working on personal projects.',
    category: 'anxiety',
    duration: '4 weeks',
    level: 'beginner',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80',
    modules: [
      {
        id: 'm1',
        title: 'Understanding Anxiety and Learning',
        description: 'Learn about the relationship between anxiety and cognitive function',
        duration: '1 week',
        completed: true
      },
      {
        id: 'm2',
        title: 'Mindfulness Techniques',
        description: 'Practice mindfulness exercises for better focus and reduced anxiety',
        duration: '1 week',
        completed: true
      },
      {
        id: 'm3',
        title: 'Study Strategies for Anxious Minds',
        description: 'Discover effective study methods that work with anxiety, not against it',
        duration: '1 week'
      },
      {
        id: 'm4',
        title: 'Building Resilience',
        description: 'Develop long-term strategies for managing anxiety in academic settings',
        duration: '1 week'
      }
    ],
    supportResources: [
      {
        id: 'r1',
        title: 'Guided Meditation for Study Sessions',
        type: 'meditation',
        url: '#'
      },
      {
        id: 'r2',
        title: 'Anxiety Management Workbook',
        type: 'exercise',
        url: '#'
      }
    ]
  },
  {
    id: '2',
    title: 'ADHD-Friendly Study Techniques',
    description: 'Discover learning methods specifically designed for individuals with ADHD.',
    category: 'adhd',
    duration: '3 weeks',
    level: 'intermediate',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
    modules: [
      {
        id: 'm1',
        title: 'ADHD and Learning Styles',
        description: 'Understanding how ADHD affects learning and attention',
        duration: '1 week',
        completed: true
      },
      {
        id: 'm2',
        title: 'Time Management Strategies',
        description: 'Effective techniques for managing time and maintaining focus',
        duration: '1 week'
      },
      {
        id: 'm3',
        title: 'Organization and Study Skills',
        description: 'Creating systems that work for the ADHD brain',
        duration: '1 week'
      }
    ],
    supportResources: [
      {
        id: 'r1',
        title: 'Focus Timer App Guide',
        type: 'article',
        url: '#'
      },
      {
        id: 'r2',
        title: 'ADHD-Friendly Study Environment Setup',
        type: 'video',
        url: '#'
      }
    ]
  },
  {
    id: '3',
    title: 'Depression Management & Learning',
    description: 'Build resilience and maintain motivation while managing depression symptoms.',
    category: 'depression',
    duration: '6 weeks',
    level: 'beginner',
    image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1000&q=80',
    modules: [
      {
        id: 'm1',
        title: 'Understanding Depression and Learning',
        description: 'Learn how depression affects motivation and concentration',
        duration: '1 week',
        completed: true
      },
      {
        id: 'm2',
        title: 'Building Momentum',
        description: 'Small steps to build consistent study habits',
        duration: '2 weeks'
      },
      {
        id: 'm3',
        title: 'Maintaining Motivation',
        description: 'Strategies for staying engaged when depression hits',
        duration: '2 weeks'
      },
      {
        id: 'm4',
        title: 'Creating Support Systems',
        description: 'Building a network for academic and emotional support',
        duration: '1 week'
      }
    ],
    supportResources: [
      {
        id: 'r1',
        title: 'Mood-Tracking Journal Template',
        type: 'exercise',
        url: '#'
      },
      {
        id: 'r2',
        title: 'Depression-Aware Study Techniques',
        type: 'video',
        url: '#'
      }
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <MoodTracker />
        </div>
        
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        <section className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Learning Journey</h2>
          <p className="text-gray-600">
            Welcome to MindfulLearn, your personalized learning companion. We understand that everyone's
            learning journey is unique, especially when managing mental health challenges. Our platform
            adapts to your needs, providing you with the support and resources you need to succeed.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-900">Personalized Path</h3>
              <p className="text-sm text-indigo-700">Learning adapted to your unique needs and pace</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-900">Track Progress</h3>
              <p className="text-sm text-indigo-700">Monitor your growth and celebrate achievements</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-900">Community Support</h3>
              <p className="text-sm text-indigo-700">Connect with others on similar journeys</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;