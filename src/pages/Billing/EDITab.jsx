// EDI Tab Component
import React, { useState } from 'react';
import { Plus, X, Paperclip, User, MoreHorizontal } from 'lucide-react';
const EDITab = () => {
  return (
    <div className="p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-medium">
                D
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Derrick Zerniak</h4>
                <p className="text-sm text-gray-500">Description...</p>
                <div className="flex items-center gap-4 mt-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <Paperclip className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <User className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-gray-400">2 hours ago</span>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm">
              Post
            </button>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                B
              </div>
              <div>
                <h5 className="font-medium text-gray-900">Brooklyn</h5>
                <p className="text-sm text-gray-600">we are 1 week away from launch! Thank you for every team member for their hard work.</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-400">2 hours ago</span>
                  <button className="text-gray-400 hover:text-gray-600 text-xs">👍 2</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
              Leave a Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EDITab;