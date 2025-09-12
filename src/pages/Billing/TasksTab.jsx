import React, { useState } from 'react';
import { Plus, X, Paperclip, User, MoreHorizontal } from 'lucide-react';

const TasksTab = ({ onCreateTask }) => {
  const tasks = [
    { id: 1, name: 'Lorem Ipsum', assignedTo: 'Derrick Zerniak' },
    { id: 2, name: 'Lorem Ipsum', assignedTo: 'Derrick Zerniak' }
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-gray-700">Task</h3>
            <button 
              onClick={onCreateTask}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Task
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 py-2 border-b border-gray-200">
              <div className="text-sm font-medium text-gray-600">Task Name</div>
              <div className="text-sm font-medium text-gray-600">Assigned to</div>
            </div>
            
            {tasks.map((task) => (
              <div key={task.id} className="grid grid-cols-2 gap-4 py-3 border-b border-gray-100">
                <div className="text-sm text-gray-900">{task.name}</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      D
                    </div>
                    <span className="text-sm text-gray-900">{task.assignedTo}</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksTab;