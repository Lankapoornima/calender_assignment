import React, { useState } from 'react';
import { Filter, Eye, EyeOff } from 'lucide-react';

const categories = [
  { id: 'work', label: 'Work', color: 'bg-blue-500', count: 5, visible: true },
  { id: 'meeting', label: 'Meetings', color: 'bg-green-500', count: 3, visible: true },
  { id: 'personal', label: 'Personal', color: 'bg-purple-500', count: 2, visible: true },
  { id: 'birthday', label: 'Birthdays', color: 'bg-pink-500', count: 1, visible: true },
  { id: 'reminder', label: 'Reminders', color: 'bg-yellow-500', count: 1, visible: false }
];

export const CalendarFilters: React.FC = () => {
  const [filters, setFilters] = useState(categories);

  const toggleFilter = (id: string) => {
    setFilters(prev => 
      prev.map(filter => 
        filter.id === id ? { ...filter, visible: !filter.visible } : filter
      )
    );
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
        <Filter size={20} className="mr-2" />
        Filters
      </h3>
      
      <div className="space-y-2">
        {filters.map(filter => (
          <div
            key={filter.id}
            className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
            onClick={() => toggleFilter(filter.id)}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${filter.color}`} />
              <span className="text-sm font-medium text-gray-900">
                {filter.label}
              </span>
              <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                {filter.count}
              </span>
            </div>
            
            {filter.visible ? (
              <Eye size={16} className="text-gray-600" />
            ) : (
              <EyeOff size={16} className="text-gray-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};