import React from 'react';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface CalendarHeaderProps {
  currentDate: Date;
  onNavigate: (direction: 'prev' | 'next') => void;
  onToday: () => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  onNavigate,
  onToday
}) => {
  return (
    <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <button
          onClick={onToday}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Calendar size={18} />
          <span className="font-medium">Today</span>
        </button>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onNavigate('prev')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          
          <button
            onClick={() => onNavigate('next')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
      
      <h1 className="text-2xl font-bold text-gray-900">
        {format(currentDate, 'MMMM yyyy')}
      </h1>
      
      <div className="w-32" /> {/* Spacer for balance */}
    </div>
  );
};