// EDI Tab Component
import React, { useState } from 'react';
import { Plus, X, Paperclip, User, MoreHorizontal, Smile, MessageCircle } from 'lucide-react';

const EDITab = () => {
  const [comment, setComment] = useState('');

  return (
    <>
      {/* Leave Comment Box - Top Right */}
      <div className="flex justify-end mb-3 mt-2 ">
        <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 text-sm">
          Leave a Comment
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-4">
          {/* Main Post */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
              D
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900 text-sm">Derrick Zerniak</h4>
                <button className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 text-xs">
                  Post
                </button>
              </div>
              
              {/* Description Input */}
              <div className="mt-2 mb-3">
                <textarea 
                  placeholder="Description..."
                  className="w-full p-2 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-md resize-none h-16 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 text-gray-400 hover:text-gray-600 text-sm">
                  <span className="text-base">Aa</span>
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <Smile className="w-4 h-4" />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <Paperclip className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-4"></div>

          {/* Brooklyn's Comment */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
              B
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-gray-900 text-sm">Brooklyn</h5>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                we are 1 week away from launch! Thank you for every team member for their hard work.
              </p>
              
              <div className="flex items-center gap-4 mt-2">
                <span className="text-xs text-gray-400">2 hours ago</span>
                <button className="flex items-center gap-1 text-gray-400 hover:text-gray-600">
                  <MessageCircle className="w-3 h-3" />
                  <span className="text-xs">2</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EDITab;