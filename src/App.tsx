import React from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Calendar } from './components/Calendar/Calendar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <Calendar />
    </div>
  );
}

export default App;