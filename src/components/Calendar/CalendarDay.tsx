import React from 'react';
import { format } from 'date-fns';
import { CalendarEvent } from '../../types/calendar';
import { EventBadge } from './EventBadge';

interface CalendarDayProps {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  events: CalendarEvent[];
  conflictingEvents: CalendarEvent[][];
  onClick: () => void;
}

export const CalendarDay: React.FC<CalendarDayProps> = ({
  date,
  isCurrentMonth,
  isToday,
  isSelected,
  events,
  conflictingEvents,
  onClick
}) => {
  const hasConflicts = conflictingEvents.length > 0;
  
  return (
    <div
      className={`
        min-h-32 p-2 border-r border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors duration-200
        ${!isCurrentMonth ? 'bg-gray-25 text-gray-400' : 'bg-white'}
        ${isSelected ? 'bg-blue-50 border-blue-200' : ''}
      `}
      onClick={onClick}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-1">
          <span
            className={`
              text-sm font-medium w-6 h-6 flex items-center justify-center rounded-full
              ${isToday ? 'bg-blue-600 text-white' : ''}
              ${isSelected && !isToday ? 'bg-blue-100 text-blue-600' : ''}
            `}
          >
            {format(date, 'd')}
          </span>
          
          {hasConflicts && (
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          )}
        </div>
        
        <div className="flex-1 space-y-1">
          {events.slice(0, 3).map(event => (
            <EventBadge 
              key={event.id} 
              event={event} 
              isConflicted={hasConflicts}
            />
          ))}
          
          {events.length > 3 && (
            <div className="text-xs text-gray-500 font-medium px-1">
              +{events.length - 3} more
            </div>
          )}
        </div>
      </div>
    </div>
  );
};