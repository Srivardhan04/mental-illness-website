import React, { useState } from 'react';
import type { Course } from '../types';
import { Clock, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-indigo-600 capitalize">{course.category}</span>
          <span className="text-sm text-gray-500">{course.level}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{course.duration}</span>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-indigo-600 hover:text-indigo-700 flex items-center"
          >
            {isExpanded ? (
              <>
                <span className="mr-1">Show less</span>
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                <span className="mr-1">Show more</span>
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>

        {isExpanded && (
          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">Course Modules</h4>
            <ul className="space-y-2 mb-4">
              {course.modules.map((module) => (
                <li key={module.id} className="flex items-start">
                  <div className="h-5 w-5 mr-2 mt-0.5">
                    <div className="h-full w-full border-2 border-indigo-600 rounded-full flex items-center justify-center">
                      {module.completed && (
                        <div className="h-3 w-3 bg-indigo-600 rounded-full" />
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">{module.title}</p>
                    <p className="text-sm text-gray-600">{module.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold mb-2">Support Resources</h4>
            <ul className="space-y-2 mb-4">
              {course.supportResources.map((resource) => (
                <li key={resource.id}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 flex items-center"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>{resource.title}</span>
                  </a>
                </li>
              ))}
            </ul>

            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Start Learning
            </button>
          </div>
        )}
      </div>
    </div>
  );
}