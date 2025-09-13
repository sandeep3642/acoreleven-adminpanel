import React, { useState } from 'react';
import { X, Type, Smile, Paperclip, Calendar, UserPlus } from 'lucide-react';

const CreateTaskPopup = ({ isOpen, onClose, onSubmit }) => {
  const [taskData, setTaskData] = useState({
    assignedTo: 'Brooklyn',
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!taskData.description.trim()) return;
    onSubmit(taskData);
    setTaskData({ assignedTo: 'Brooklyn', description: '' });
  };

  const removeAssignee = () => {
    setTaskData({ ...taskData, assignedTo: '' });
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900">Create New Task</h3>
          <button 
            onClick={onClose} 
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          {/* Assigned To Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Assigned to
            </label>
            {taskData.assignedTo && (
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-full">
                <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">
                    {taskData.assignedTo.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-gray-700 font-medium">{taskData.assignedTo}</span>
                <button 
                  type="button"
                  onClick={removeAssignee}
                  className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
                >
                  <X className="w-3 h-3 text-gray-400" />
                </button>
              </div>
            )}
          </div>

          {/* Description Section */}
          <div className="mb-6">
            <textarea
              value={taskData.description}
              onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
              className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none text-gray-700 placeholder-gray-400"
              placeholder="Description..."
              rows={6}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button 
                type="button" 
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
                title="Text formatting"
              >
                <Type className="w-5 h-5 text-gray-400" />
              </button>
              <button 
                type="button" 
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
                title="Add emoji"
              >
                <Smile className="w-5 h-5 text-gray-400" />
              </button>
              <button 
                type="button" 
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
                title="Attach file"
              >
                <Paperclip className="w-5 h-5 text-gray-400" />
              </button>
              <button 
                type="button" 
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
                title="Set due date"
              >
                <Calendar className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            <button 
              type="button" 
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
              title="Add assignee"
            >
              <UserPlus className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!taskData.description.trim()}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl transition-all duration-200 font-semibold text-lg"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskPopup;