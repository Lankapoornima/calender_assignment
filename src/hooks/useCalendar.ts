import { useState, useMemo } from 'react';
import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval,
  format,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths
} from 'date-fns';
import { CalendarEvent } from '../types/calendar';
import { staticEvents } from '../data/events';

export const useCalendar = (initialDate: Date = new Date()) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events] = useState<CalendarEvent[]>(staticEvents);

  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

    return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  }, [currentDate]);

  const getEventsForDate = (date: Date): CalendarEvent[] => {
    const dateString = format(date, 'yyyy-MM-dd');
    return events.filter(event => event.date === dateString);
  };

  const getConflictingEvents = (date: Date): CalendarEvent[][] => {
    const dayEvents = getEventsForDate(date);
    const conflicts: CalendarEvent[][] = [];
    
    dayEvents.forEach(event => {
      const eventStart = new Date(`${event.date}T${event.startTime}`);
      const eventEnd = new Date(`${event.date}T${event.endTime}`);
      
      const conflictGroup = dayEvents.filter(otherEvent => {
        if (event.id === otherEvent.id) return true;
        
        const otherStart = new Date(`${otherEvent.date}T${otherEvent.startTime}`);
        const otherEnd = new Date(`${otherEvent.date}T${otherEvent.endTime}`);
        
        return (
          (eventStart < otherEnd && eventEnd > otherStart) ||
          (otherStart < eventEnd && otherEnd > eventStart)
        );
      });
      
      if (conflictGroup.length > 1) {
        const existingGroup = conflicts.find(group => 
          group.some(e => conflictGroup.some(ce => ce.id === e.id))
        );
        
        if (!existingGroup) {
          conflicts.push(conflictGroup);
        }
      }
    });
    
    return conflicts;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => 
      direction === 'next' ? addMonths(prev, 1) : subMonths(prev, 1)
    );
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  const isCurrentMonth = (date: Date) => isSameMonth(date, currentDate);
  const isToday = (date: Date) => isSameDay(date, new Date());
  const isSelected = (date: Date) => selectedDate ? isSameDay(date, selectedDate) : false;

  return {
    currentDate,
    selectedDate,
    events,
    calendarDays,
    setSelectedDate,
    getEventsForDate,
    getConflictingEvents,
    navigateMonth,
    goToToday,
    isCurrentMonth,
    isToday,
    isSelected
  };
};