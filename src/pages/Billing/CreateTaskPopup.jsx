import React, { useState } from 'react';
import { Plus, X, Paperclip, User, MoreHorizontal } from 'lucide-react';

const CreateTaskPopup = ({ isOpen, onClose, onSubmit }) => {
  const [taskData, setTaskData] = useState({
    assignedTo: 'Brooklyn',
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(taskData);
    setTaskData({ assignedTo: 'Brooklyn', description: '' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium text-gray-900">Create New Task</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Assigned to
            </label>
            <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg bg-gray-50">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                B
              </div>
              <span className="text-sm text-gray-900">{taskData.assignedTo}</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={taskData.description}
              onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              placeholder="Enter task description..."
            />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <button type="button" className="text-gray-400 hover:text-gray-600">
              <Paperclip className="w-5 h-5" />
            </button>
            <button type="button" className="text-gray-400 hover:text-gray-600">
              <User className="w-5 h-5" />
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskPopup;