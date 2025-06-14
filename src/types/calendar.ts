export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  category: 'work' | 'personal' | 'meeting' | 'reminder' | 'birthday';
  description?: string;
  location?: string;
}

export interface CalendarState {
  currentDate: Date;
  selectedDate: Date | null;
  events: CalendarEvent[];
  viewMode: 'month' | 'week' | 'day';
}