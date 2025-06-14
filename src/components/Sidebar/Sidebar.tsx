import React from 'react';
import { AccountsSection } from './AccountsSection';
import { RemindersSection } from './RemindersSection';
import { QuickActions } from './QuickActions';
import { CalendarFilters } from './CalendarFilters';

export const Sidebar: React.FC = () => {
  return (
    <div className="w-80 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">ProCal</h2>
        
        <div className="space-y-6">
          <QuickActions />
          <CalendarFilters />
          <AccountsSection />
          <RemindersSection />
        </div>
      </div>
    </div>
  );
};