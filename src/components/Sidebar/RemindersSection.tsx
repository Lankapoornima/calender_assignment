import React from 'react';
import { Bell, Clock, AlertCircle, Calendar } from 'lucide-react';

const reminders = [
  {
    id: 1,
    title: 'Team Stand-up in 15 min',
    time: '8:45 AM',
    type: 'upcoming',
    icon: Clock,
    color: 'text-blue-600'
  },
  {
    id: 2,
    title: 'Project Deadline Tomorrow',
    time: 'Due Jan 20',
    type: 'urgent',
    icon: AlertCircle,
    color: 'text-red-600'
  },
  {
    id: 3,
    title: 'Birthday Party This Weekend',
    time: 'Jan 22, 7:00 PM',
    type: 'event',
    icon: Calendar,
    color: 'text-pink-600'
  }
];

export const RemindersSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
        <Bell size={20} className="mr-2" />
        Reminders
      </h3>
      
      <div className="space-y-3">
        {reminders.map(reminder => {
          const IconComponent = reminder.icon;
          
          return (
            <div
              key={reminder.id}
              className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-start space-x-3">
                <IconComponent size={18} className={reminder.color} />
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {reminder.title}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {reminder.time}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
        <div className="flex items-center justify-center">
          <Bell size={20} className="mr-2" />
          <span>Add Reminder</span>
        </div>
      </button>
    </div>
  );
};