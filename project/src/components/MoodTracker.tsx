import React, { useState } from 'react';
import { Smile, Meh, Frown, Plus, X } from 'lucide-react';
import type { MoodEntry } from '../types';

export function MoodTracker() {
  const [moodHistory, setMoodHistory] = useState<MoodEntry[]>([]);
  const [showNotes, setShowNotes] = useState(false);
  const [currentNote, setCurrentNote] = useState('');
  const [triggers, setTriggers] = useState<string[]>([]);
  const [currentTrigger, setCurrentTrigger] = useState('');

  const addMoodEntry = (mood: MoodEntry['mood']) => {
    const newEntry: MoodEntry = {
      mood,
      timestamp: new Date(),
      notes: currentNote,
      triggers: triggers,
    };
    setMoodHistory([newEntry, ...moodHistory]);
    setShowNotes(false);
    setCurrentNote('');
    setTriggers([]);
  };

  const addTrigger = () => {
    if (currentTrigger.trim()) {
      setTriggers([...triggers, currentTrigger.trim()]);
      setCurrentTrigger('');
    }
  };

  const removeTrigger = (index: number) => {
    setTriggers(triggers.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">How are you feeling today?</h2>
      <div className="flex justify-center space-x-8 mb-6">
        <button
          onClick={() => {
            setShowNotes(true);
            setTimeout(() => addMoodEntry('great'), showNotes ? 0 : 500);
          }}
          className="flex flex-col items-center p-3 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Smile className="h-8 w-8 text-green-500" />
          <span>Great</span>
        </button>
        <button
          onClick={() => {
            setShowNotes(true);
            setTimeout(() => addMoodEntry('okay'), showNotes ? 0 : 500);
          }}
          className="flex flex-col items-center p-3 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Meh className="h-8 w-8 text-yellow-500" />
          <span>Okay</span>
        </button>
        <button
          onClick={() => {
            setShowNotes(true);
            setTimeout(() => addMoodEntry('bad'), showNotes ? 0 : 500);
          }}
          className="flex flex-col items-center p-3 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Frown className="h-8 w-8 text-red-500" />
          <span>Bad</span>
        </button>
      </div>

      {showNotes && (
        <div className="space-y-4">
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
              Add notes about your mood (optional)
            </label>
            <textarea
              id="notes"
              value={currentNote}
              onChange={(e) => setCurrentNote(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={3}
              placeholder="How are you feeling? What's on your mind?"
            />
          </div>

          <div>
            <label htmlFor="triggers" className="block text-sm font-medium text-gray-700 mb-1">
              Add triggers or contributing factors
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                id="triggers"
                value={currentTrigger}
                onChange={(e) => setCurrentTrigger(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTrigger()}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="E.g., work stress, lack of sleep"
              />
              <button
                onClick={addTrigger}
                className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {triggers.map((trigger, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800"
                >
                  {trigger}
                  <button
                    onClick={() => removeTrigger(index)}
                    className="ml-2 text-indigo-600 hover:text-indigo-800"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {moodHistory.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Recent Mood History</h3>
          <div className="space-y-4">
            {moodHistory.slice(0, 5).map((entry, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {entry.mood === 'great' && <Smile className="h-5 w-5 text-green-500 mr-2" />}
                    {entry.mood === 'okay' && <Meh className="h-5 w-5 text-yellow-500 mr-2" />}
                    {entry.mood === 'bad' && <Frown className="h-5 w-5 text-red-500 mr-2" />}
                    <span className="capitalize">{entry.mood}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {entry.timestamp.toLocaleString()}
                  </span>
                </div>
                {entry.notes && <p className="text-gray-600 text-sm">{entry.notes}</p>}
                {entry.triggers && entry.triggers.length > 0 && (
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-2">
                      {entry.triggers.map((trigger, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded-full"
                        >
                          {trigger}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}