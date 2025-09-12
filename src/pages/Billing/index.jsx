import React, { useState } from 'react';
import { Plus, X, Paperclip, User, MoreHorizontal } from 'lucide-react';

// Import all tab components
import AWBTab from './AWBTab';
import CRNTab from './CRNTab';
import BillingTab from './BillingTab';
import DocumentTab from './DocumentTab';
import CreateTaskPopup from './CreateTaskPopup';
import TasksTab from './TasksTab';
import EDITab from './EDITab';

// Tasks Tab Component (missing from your files)




const Index = () => {
  const [activeTab, setActiveTab] = useState('AWB');
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);

  const tabs = [
    { id: 'AWB', label: 'AWB' },
    { id: 'CRN', label: 'CRN' },
    { id: 'Billing', label: 'Billing' },
    { id: 'Document', label: 'Document' },
    { id: 'Tasks', label: 'Tasks' },
    { id: 'EDI', label: 'EDI' }
  ];

  const handleCreateTask = () => {
    setIsCreateTaskOpen(true);
  };

  const handleTaskSubmit = (taskData) => {
    console.log('New task created:', taskData);
    setIsCreateTaskOpen(false);
    // Here you would typically save the task to your state or send to API
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'AWB':
        return <AWBTab />;
      case 'CRN':
        return <CRNTab />;
      case 'Billing':
        return <BillingTab />;
      case 'Document':
        return <DocumentTab />;
      case 'Tasks':
        return <TasksTab onCreateTask={handleCreateTask} />;
      case 'EDI':
        return <EDITab />;
      default:
        return <AWBTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Section with Flight and Shipment */}
      <div className="w-full flex justify-end p-6">
        {/* Flight Section */}
        <div className="bg-white border-b-1 border-l-1 border-gray-200">
          <div className="bg-gray-100 px-6 py-4">
            <h2 className="text-start text-lg font-medium text-gray-500">Flight</h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="text-start block text-sm font-medium text-gray-600 mb-2">
                  Flight No.
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-start block text-sm font-medium text-gray-600 mb-2">
                  Origin Airport
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-start block text-sm font-medium text-gray-600 mb-2">
                  Orig Country
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="text-start block text-sm font-medium text-gray-600 mb-2">
                  Flight Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-start block text-sm font-medium text-gray-600 mb-2">
                  Dest Airport
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-start block text-sm font-medium text-gray-600 mb-2">
                  Expt Country
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shipment Section */}
        <div className="bg-white border-b-1 border-l-1 border-r-1 border-gray-200">
          <div className="bg-gray-100 px-6 py-4">
            <h2 className="text-start text-lg font-medium text-gray-500">Shipment</h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="text-start block text-sm font-medium text-gray-600 mb-2">
                  Ship Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-start block text-sm font-medium text-gray-600 mb-2">
                  AWB
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-start block text-sm font-medium text-gray-600 mb-2">
                  Form ID
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="text-start block text-sm font-medium text-gray-600 mb-2">
                  Arrival Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-start block text-sm font-medium text-gray-600 mb-2">
                  Dest Loc
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-start block text-sm font-medium text-gray-600 mb-2">
                  Disp Loc
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end px-6 mb-6">
        <button className="w-24 h-10 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 font-medium text-sm">
          Save
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="px-6">
        <div className="bg-white rounded-t-lg shadow-sm">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-red-600 border-b-2 border-red-600 bg-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6">
        {renderTabContent()}
      </div>

      {/* Create Task Popup */}
      <CreateTaskPopup 
        isOpen={isCreateTaskOpen} 
        onClose={() => setIsCreateTaskOpen(false)}
        onSubmit={handleTaskSubmit}
      />
    </div>
  );
};

export default Index;