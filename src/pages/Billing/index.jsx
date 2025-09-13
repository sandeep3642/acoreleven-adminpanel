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
import DataTable from '../../components/Table';

const shipmentHeaders = [
  { key: "awb", label: "AWB" },
  { key: "origin", label: "Origin" },
  { key: "destCode", label: "Dest Code" },
  { key: "shipperName", label: "Shipper Name" },
  { key: "iecCode", label: "IEC Code" },
  { key: "gstin", label: "GSTIN" },
  { key: "flightDate", label: "Flight Date" },
  { key: "flightNo", label: "Flight No." },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('AWB');
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const actionMenu = ["Edit", "Delete"];

  const [shipments, setShipments] = useState([
    {
      awb: "AE1234567",
      origin: "China",
      destCode: "DEL",
      shipperName: "Raghav Soni",
      iecCode: "ABCPE1234F",
      gstin: "01ABCPE1234F2G3",
      flightDate: "25/02/10",
      flightNo: "EK0514",
    },
    {
      awb: "AE1234567",
      origin: "China",
      destCode: "DEL",
      shipperName: "Raghav Soni",
      iecCode: "ABCPE1234F",
      gstin: "01ABCPE1234F2G3",
      flightDate: "25/02/10",
      flightNo: "EK0514",
    },
    {
      awb: "AE1234567",
      origin: "China",
      destCode: "DEL",
      shipperName: "Raghav Soni",
      iecCode: "ABCPE1234F",
      gstin: "01ABCPE1234F2G3",
      flightDate: "25/02/10",
      flightNo: "EK0514",
    },
  ]);

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
  const handleRowAction = (row, mode) => {
    if (mode === "Delete") {
      
    }
    if (mode === "Edit") {
    }
    // Handle your actions here
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
    <div className="">
      {/* DataTable - Already responsive */}
      <div className="p-4 sm:p-6">
        <DataTable
          headers={shipmentHeaders}
          data={shipments}
          searchable={true}
          sortable={true}
          actionColumn={true}
          onRowAction={handleRowAction}
          actionMenu={actionMenu}
          name="Shipment Activities"
          emptyMessage={
            shipments.length === 0 ? "No Shipment found" : "No data available"
          }
        />
      </div>

      {/* Flight and Shipment Sections - Side by Side Layout */}
      <div className="w-full px-4 sm:px-6 mb-6">
        <div className="flex justify-end">
          <div className="flex flex-row w-full">
            {/* Flight Section */}
            <div className="bg-white border border-gray-200 border-r-0 flex-1">
              <div className="bg-gray-100 px-3 sm:px-6 py-4">
                <h2 className="text-start text-lg font-medium text-gray-500">Flight</h2>
              </div>

              <div className="p-3 sm:p-6">
                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="text-start block text-xs sm:text-sm font-medium text-gray-600 mb-2">
                      Flight No.
                    </label>
                    <input
                      type="text"
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-start block text-xs sm:text-sm font-medium text-gray-600 mb-2">
                      Origin Airport
                    </label>
                    <input
                      type="text"
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-start block text-xs sm:text-sm font-medium text-gray-600 mb-2">
                      Orig Country
                    </label>
                    <input
                      type="text"
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
                  <div>
                    <label className="text-start block text-xs sm:text-sm font-medium text-gray-600 mb-2">
                      Flight Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-start block text-xs sm:text-sm font-medium text-gray-600 mb-2">
                      Dest Airport
                    </label>
                    <input
                      type="text"
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-start block text-xs sm:text-sm font-medium text-gray-600 mb-2">
                      Expt Country
                    </label>
                    <input
                      type="text"
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Shipment Section */}
            <div className="bg-white border border-gray-200 flex-1">
              <div className="bg-gray-100 px-3 sm:px-6 py-4">
                <h2 className="text-start text-lg font-medium text-gray-500">Shipment</h2>
              </div>

              <div className="p-3 sm:p-6">
                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label className="text-start block text-xs sm:text-sm font-medium text-gray-600 mb-2">
                      Ship Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-start block text-xs sm:text-sm font-medium text-gray-600 mb-2">
                      AWB
                    </label>
                    <input
                      type="text"
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-start block text-xs sm:text-sm font-medium text-gray-600 mb-2">
                      Form ID
                    </label>
                    <input
                      type="text"
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
                  <div>
                    <label className="text-start block text-xs sm:text-sm font-medium text-gray-600 mb-2">
                      Arrival Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-start block text-xs sm:text-sm font-medium text-gray-600 mb-2">
                      Dest Loc
                    </label>
                    <input
                      type="text"
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-start block text-xs sm:text-sm font-medium text-gray-600 mb-2">
                      Disp Loc
                    </label>
                    <input
                      type="text"
                      className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button - Responsive */}
      <div className="flex justify-end px-4 sm:px-6 mb-6">
        <button className="w-20 sm:w-24 h-10 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 font-medium text-sm">
          Save
        </button>
      </div>

      {/* Tab Navigation - Responsive */}
      <div className="px-4 sm:px-6">
        <div className="bg-white rounded-t-lg shadow-sm">
          <div className="flex flex-wrap border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 sm:px-6 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap relative ${activeTab === tab.id
                  ? 'text-gray-800 bg-yellow-50 border-b-4 border-yellow-400'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                style={activeTab === tab.id ? {
                  backgroundColor: '#FFFDEB',
                  borderBottomColor: '#F8E117'
                } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content - Responsive */}
      <div className="px-4 sm:px-6">
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