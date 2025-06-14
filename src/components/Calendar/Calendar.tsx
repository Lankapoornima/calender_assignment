import React from 'react';
import { useCalendar } from '../../hooks/useCalendar';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';

export const Calendar: React.FC = () => {
  const {
    currentDate,
    selectedDate,
    calendarDays,
    setSelectedDate,
    getEventsForDate,
    getConflictingEvents,
    navigateMonth,
    goToToday,
    isCurrentMonth,
    isToday,
    isSelected
  } = useCalendar();

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <CalendarHeader
        currentDate={currentDate}
        onNavigate={navigateMonth}
        onToday={goToToday}
      />
      
      <div className="flex-1 p-6">
        <CalendarGrid
          calendarDays={calendarDays}
          currentDate={currentDate}
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          isCurrentMonth={isCurrentMonth}
          isToday={isToday}
          isSelected={isSelected}
          getEventsForDate={getEventsForDate}
          getConflictingEvents={getConflictingEvents}
        />
      </div>
    </div>
  );
};