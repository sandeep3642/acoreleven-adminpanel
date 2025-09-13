import React, { useState } from 'react';
import { Plus, X, Paperclip, User, MoreHorizontal, ChevronDown, ChevronUp } from 'lucide-react';

const TasksTab = ({ onCreateTask }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const tasks = [
    { id: 1, name: 'Lorem Ipsum', assignedTo: 'Derrick Zerniak' },
    { id: 2, name: 'Lorem Ipsum', assignedTo: 'Derrick Zerniak' }
  ];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className='flex justify-end mb-3'>
        <button
          onClick={onCreateTask}
          className="mt-2 px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center gap-1.5 text-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Task
        </button>
      </div>

      <div className="rounded-lg border border-gray-200  bg-gray-100 shadow-sm">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b  border-gray-100">
          <h3 className="text-base font-medium text-gray-900">Task</h3>
          <button
            onClick={toggleCollapse}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            {isCollapsed ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Collapsible Content */}
        {!isCollapsed && (
          <>
            {/* Table Header */}
            <div className="grid grid-cols-2 gap-4 px-4 py-2 bg-gray-50 border-b border-gray-100">
              <div className="text-sm font-medium text-gray-600">Task Name</div>
              <div className="text-sm font-medium text-gray-600">Assigned to</div>
            </div>
            
            {/* Task Rows */}
            <div className="divide-y divide-gray-50">
              {tasks.map((task) => (
                <div 
                  key={task.id} 
                  className="grid grid-cols-2 gap-4 px-4 py-3 hover:bg-gray-25"
                >
                  <div className="text-sm text-gray-900">{task.name}</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                        D
                      </div>
                      <span className="text-sm text-gray-900">{task.assignedTo}</span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TasksTab;