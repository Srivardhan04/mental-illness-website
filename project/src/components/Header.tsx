import React from 'react';
import { BookOpen, Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">MindfulLearn</span>
          </div>
          <nav className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-indigo-500">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full hover:bg-indigo-500">
              <User className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}