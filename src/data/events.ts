export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number; // in minutes
  category: 'work' | 'personal' | 'meeting' | 'reminder' | 'birthday';
  description?: string;
  location?: string;
}

export const staticEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Team Stand-up',
    date: '2025-01-15',
    startTime: '09:00',
    endTime: '09:30',
    duration: 30,
    category: 'meeting',
    description: 'Daily team synchronization',
    location: 'Conference Room A'
  },
  {
    id: '2',
    title: 'Product Review',
    date: '2025-01-15',
    startTime: '14:00',
    endTime: '15:30',
    duration: 90,
    category: 'work',
    description: 'Quarterly product review with stakeholders',
    location: 'Main Hall'
  },
  {
    id: '3',
    title: 'Gym Session',
    date: '2025-01-16',
    startTime: '18:00',
    endTime: '19:30',
    duration: 90,
    category: 'personal',
    description: 'Evening workout routine'
  },
  {
    id: '4',
    title: 'Client Call',
    date: '2025-01-17',
    startTime: '10:00',
    endTime: '11:00',
    duration: 60,
    category: 'meeting',
    description: 'Monthly check-in with key client',
    location: 'Online'
  },
  {
    id: '5',
    title: 'Project Deadline',
    date: '2025-01-20',
    startTime: '23:59',
    endTime: '23:59',
    duration: 0,
    category: 'reminder',
    description: 'Final submission for Q1 project'
  },
  {
    id: '6',
    title: 'Birthday Party',
    date: '2025-01-22',
    startTime: '19:00',
    endTime: '22:00',
    duration: 180,
    category: 'birthday',
    description: "Sarah's birthday celebration",
    location: 'The Garden Restaurant'
  },
  {
    id: '7',
    title: 'Code Review',
    date: '2025-01-23',
    startTime: '11:00',
    endTime: '12:00',
    duration: 60,
    category: 'work',
    description: 'Review pull requests and merge conflicts'
  },
  {
    id: '8',
    title: 'Doctor Appointment',
    date: '2025-01-24',
    startTime: '15:30',
    endTime: '16:30',
    duration: 60,
    category: 'personal',
    description: 'Annual health checkup',
    location: 'City Medical Center'
  },
  {
    id: '9',
    title: 'Lunch Meeting',
    date: '2025-01-17',
    startTime: '12:00',
    endTime: '13:30',
    duration: 90,
    category: 'meeting',
    description: 'Business lunch with potential partners',
    location: 'Downtown Bistro'
  },
  {
    id: '10',
    title: 'Conference Call',
    date: '2025-01-15',
    startTime: '16:00',
    endTime: '17:00',
    duration: 60,
    category: 'work',
    description: 'International team coordination',
    location: 'Online'
  }
];