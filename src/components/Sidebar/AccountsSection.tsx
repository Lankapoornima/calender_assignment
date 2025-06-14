import React from 'react';
import { User, Mail, Calendar, CheckCircle } from 'lucide-react';

const accounts = [
  {
    id: 1,
    name: 'Personal',
    email: 'john.doe@personal.com',
    color: 'bg-blue-500',
    isActive: true,
    eventCount: 8
  },
  {
    id: 2,
    name: 'Work',
    email: 'john.doe@company.com',
    color: 'bg-green-500',
    isActive: true,
    eventCount: 12
  },
  {
    id: 3,
    name: 'Family',
    email: 'john.doe@family.com',
    color: 'bg-purple-500',
    isActive: false,
    eventCount: 3
  }
];

export const AccountsSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
        <User size={20} className="mr-2" />
        Accounts
      </h3>
      
      <div className="space-y-3">
        {accounts.map(account => (
          <div
            key={account.id}
            className={`
              p-3 rounded-lg border transition-all duration-200 cursor-pointer
              ${account.isActive 
                ? 'border-gray-200 bg-gray-50 hover:bg-gray-100' 
                : 'border-gray-100 hover:border-gray-200'
              }
            `}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${account.color}`} />
                <span className="font-medium text-gray-900">{account.name}</span>
                {account.isActive && (
                  <CheckCircle size={16} className="text-green-500" />
                )}
              </div>
              
              <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                {account.eventCount}
              </span>
            </div>
            
            <div className="flex items-center text-sm text-gray-600">
              <Mail size={14} className="mr-2" />
              <span className="truncate">{account.email}</span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
        <div className="flex items-center justify-center">
          <User size={20} className="mr-2" />
          <span>Add Account</span>
        </div>
      </button>
    </div>
  );
};