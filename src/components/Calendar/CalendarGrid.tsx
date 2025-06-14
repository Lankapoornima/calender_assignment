import React from 'react';
import { format } from 'date-fns';
import { CalendarDay } from './CalendarDay';

interface CalendarGridProps {
  calendarDays: Date[];
  currentDate: Date;
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  isCurrentMonth: (date: Date) => boolean;
  isToday: (date: Date) => boolean;
  isSelected: (date: Date) => boolean;
  getEventsForDate: (date: Date) => any[];
  getConflictingEvents: (date: Date) => any[][];
}

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  calendarDays,
  onDateSelect,
  isCurrentMonth,
  isToday,
  isSelected,
  getEventsForDate,
  getConflictingEvents
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Week day headers */}
      <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
        {weekDays.map(day => (
          <div key={day} className="p-4 text-center">
            <span className="text-sm font-semibold text-gray-700">
              {day}
            </span>
          </div>
        ))}
      </div>
      
      {/* Calendar days */}
      <div className="grid grid-cols-7">
        {calendarDays.map((date, index) => (
          <CalendarDay
            key={index}
            date={date}
            isCurrentMonth={isCurrentMonth(date)}
            isToday={isToday(date)}
            isSelected={isSelected(date)}
            events={getEventsForDate(date)}
            conflictingEvents={getConflictingEvents(date)}
            onClick={() => onDateSelect(date)}
          />
        ))}
      </div>
    </div>
  );
};