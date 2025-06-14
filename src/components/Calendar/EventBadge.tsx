import React from 'react';
import { CalendarEvent } from '../../types/calendar';

interface EventBadgeProps {
  event: CalendarEvent;
  isConflicted?: boolean;
}

const categoryColors = {
  work: 'bg-blue-100 text-blue-800 border-blue-200',
  meeting: 'bg-green-100 text-green-800 border-green-200',
  personal: 'bg-purple-100 text-purple-800 border-purple-200',
  reminder: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  birthday: 'bg-pink-100 text-pink-800 border-pink-200'
};

const conflictColors = {
  work: 'bg-red-100 text-red-800 border-red-300',
  meeting: 'bg-red-100 text-red-800 border-red-300',
  personal: 'bg-red-100 text-red-800 border-red-300',
  reminder: 'bg-red-100 text-red-800 border-red-300',
  birthday: 'bg-red-100 text-red-800 border-red-300'
};

export const EventBadge: React.FC<EventBadgeProps> = ({ event, isConflicted = false }) => {
  const colorClass = isConflicted ? conflictColors[event.category] : categoryColors[event.category];
  
  return (
    <div
      className={`
        text-xs px-2 py-1 rounded border truncate cursor-pointer
        hover:shadow-sm transition-shadow duration-200
        ${colorClass}
        ${isConflicted ? 'animate-pulse' : ''}
      `}
      title={`${event.title} (${event.startTime} - ${event.endTime})`}
    >
      <div className="flex items-center space-x-1">
        <span className="truncate font-medium">{event.title}</span>
        {isConflicted && (
          <span className="text-red-600">⚠</span>
        )}
      </div>
      <div className="text-xs opacity-75">
        {event.startTime}
      </div>
    </div>
  );
};