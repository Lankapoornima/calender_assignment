import React from 'react';
import { Plus, Video, Users, FileText } from 'lucide-react';

const quickActions = [
  {
    id: 1,
    label: 'New Event',
    icon: Plus,
    color: 'bg-blue-600 hover:bg-blue-700',
    action: () => console.log('New Event')
  },
  {
    id: 2,
    label: 'Join Meeting',
    icon: Video,
    color: 'bg-green-600 hover:bg-green-700',
    action: () => console.log('Join Meeting')
  },
  {
    id: 3,
    label: 'Team Chat',
    icon: Users,
    color: 'bg-purple-600 hover:bg-purple-700',
    action: () => console.log('Team Chat')
  },
  {
    id: 4,
    label: 'Notes',
    icon: FileText,
    color: 'bg-orange-600 hover:bg-orange-700',
    action: () => console.log('Notes')
  }
];

export const QuickActions: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map(action => {
          const IconComponent = action.icon;
          
          return (
            <button
              key={action.id}
              onClick={action.action}
              className={`
                p-4 rounded-lg text-white transition-colors duration-200
                flex flex-col items-center space-y-2
                ${action.color}
              `}
            >
              <IconComponent size={24} />
              <span className="text-sm font-medium">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};